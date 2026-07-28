#!/usr/bin/env npx ts-node
/**
 * PDF Discovery Script
 *
 * Discovers PDFs in the /resources/polity/ directory and matches them
 * against the canonical curriculum sequence. Reports:
 * - Matched files (curriculum entry ↔ PDF file)
 * - Unmatched curriculum entries (missing PDFs)
 * - Unmatched PDFs (extra files not in curriculum)
 */

import * as fs from "fs";
import * as path from "path";

interface CurriculumEntry {
  order: number;
  id: string;
  title: string;
  sourcePattern: RegExp;
  sourceFile?: string;
}

// Canonical curriculum (matches polity-curriculum.ts)
const curriculum: CurriculumEntry[] = [
  { order: 1, id: "making-of-constitution", title: "Making of the Constitution", sourcePattern: /Making_of_the_Constitution/i },
  { order: 2, id: "preamble", title: "Preamble", sourcePattern: /Preamble/i },
  { order: 3, id: "salient-features", title: "Salient Features of the Constitution", sourcePattern: /Salient_Features/i },
  { order: 4, id: "sources-of-constitution", title: "Sources of the Indian Constitution", sourcePattern: /Sources_of_the_Indian_Constitution/i },
  { order: 5, id: "schedules", title: "Schedules of the Constitution", sourcePattern: /Schedules_of_the_Constitution/i },
  { order: 6, id: "union-and-territory", title: "Union and its Territory", sourcePattern: /Union_and_its_Territory/i },
  { order: 7, id: "citizenship", title: "Citizenship", sourcePattern: /Citizenship/i },
  { order: 8, id: "fundamental-rights", title: "Fundamental Rights", sourcePattern: /Fundamental_Rights/i },
  { order: 9, id: "directive-principles", title: "Directive Principles of State Policy", sourcePattern: /Directive_Principles/i },
  { order: 10, id: "fundamental-duties", title: "Fundamental Duties", sourcePattern: /Fundamental_Duties/i },
  { order: 11, id: "amendment", title: "Amendment of the Indian Constitution", sourcePattern: /Amendment_of_the_Indian_Constitution/i },
  { order: 12, id: "basic-structure", title: "Basic Structure of the Constitution", sourcePattern: /Basic_Structure/i },
  { order: 13, id: "system-of-government", title: "System of Government", sourcePattern: /System_of_Government/i },
  { order: 14, id: "union-executive", title: "Union Executive", sourcePattern: /Union_Executive/i },
  { order: 15, id: "parliament", title: "Parliament", sourcePattern: /Parliament/i },
  { order: 16, id: "state-executive", title: "State Executive", sourcePattern: /State_Executive/i },
  { order: 17, id: "state-legislature", title: "State Legislature", sourcePattern: /State_Legislature/i },
  { order: 18, id: "judiciary", title: "Judiciary", sourcePattern: /Judiciary/i },
  { order: 19, id: "local-self-government", title: "Local Self Government", sourcePattern: /Local_Self_Government/i },
  { order: 20, id: "union-territories", title: "Union Territories, Scheduled and Tribal Areas", sourcePattern: /Union_Territories_Scheduled/i },
  { order: 21, id: "elections", title: "Elections & Associated Topics", sourcePattern: /Elections_Associated/i },
  { order: 22, id: "constitutional-bodies", title: "Constitutional Bodies", sourcePattern: /Constitutional_Bodies/i },
  { order: 23, id: "non-constitutional-bodies", title: "Non-Constitutional Bodies", sourcePattern: /Non-Constitutional_Bodies/i },
  { order: 24, id: "special-provisions", title: "Special Provisions for Some States", sourcePattern: /Special_Provisions/i },
  { order: 25, id: "official-languages", title: "Official Languages", sourcePattern: /Official_Languages/i },
  { order: 26, id: "cooperative-sector", title: "Cooperative Sector in India", sourcePattern: /Cooperative_Sector/i },
  { order: 27, id: "governance", title: "Governance", sourcePattern: /^78468844.*Governance/i },
  { order: 28, id: "nhrc", title: "National Human Rights Commission", sourcePattern: /NHRC/i },
  { order: 29, id: "ncm", title: "National Commission for Minorities", sourcePattern: /NCM/i },
  { order: 30, id: "ncpcr", title: "National Commission for Protection of Child Rights", sourcePattern: /NCPCR/i },
  { order: 31, id: "ncw", title: "National Commission for Women", sourcePattern: /NCW/i },
  { order: 32, id: "key-judgements", title: "Key Judgements", sourcePattern: /Key_Judgements/i },
];

function discoverPDFs(resourceDir: string): string[] {
  const polityDir = path.join(resourceDir, "polity");

  if (!fs.existsSync(polityDir)) {
    console.error(`ERROR: Directory not found: ${polityDir}`);
    process.exit(1);
  }

  return fs
    .readdirSync(polityDir)
    .filter((f) => f.endsWith(".pdf") && !f.startsWith("._"));
}

function matchCurriculum(pdfFiles: string[]) {
  const matched: { entry: CurriculumEntry; files: string[] }[] = [];
  const unmatchedEntries: CurriculumEntry[] = [];
  const matchedFiles = new Set<string>();

  for (const entry of curriculum) {
    const matches = pdfFiles.filter((f) => entry.sourcePattern.test(f));
    if (matches.length > 0) {
      matched.push({ entry, files: matches });
      matches.forEach((f) => matchedFiles.add(f));
    } else {
      unmatchedEntries.push(entry);
    }
  }

  const unmatchedFiles = pdfFiles.filter((f) => !matchedFiles.has(f));

  return { matched, unmatchedEntries, unmatchedFiles };
}

// Main
const resourceDir = path.resolve(__dirname, "../../resources");
const pdfFiles = discoverPDFs(resourceDir);

console.log(`\n📂 Found ${pdfFiles.length} PDFs in resources/polity/\n`);

const { matched, unmatchedEntries, unmatchedFiles } = matchCurriculum(pdfFiles);

console.log("═══════════════════════════════════════════════════════");
console.log("  ✅ MATCHED CURRICULUM ENTRIES");
console.log("═══════════════════════════════════════════════════════\n");

for (const { entry, files } of matched) {
  console.log(`  ${String(entry.order).padStart(2, "0")}. ${entry.title}`);
  for (const f of files) {
    console.log(`      → ${f}`);
  }
}

if (unmatchedEntries.length > 0) {
  console.log("\n═══════════════════════════════════════════════════════");
  console.log("  ⚠️  MISSING PDFs (curriculum entries without source)");
  console.log("═══════════════════════════════════════════════════════\n");

  for (const entry of unmatchedEntries) {
    console.log(`  ${String(entry.order).padStart(2, "0")}. ${entry.title}`);
  }
}

if (unmatchedFiles.length > 0) {
  console.log("\n═══════════════════════════════════════════════════════");
  console.log("  📄 EXTRA PDFs (not matched to curriculum)");
  console.log("═══════════════════════════════════════════════════════\n");

  for (const f of unmatchedFiles) {
    console.log(`  • ${f}`);
  }
}

console.log("\n───────────────────────────────────────────────────────");
console.log(`  Summary: ${matched.length} matched | ${unmatchedEntries.length} missing | ${unmatchedFiles.length} extra`);
console.log("───────────────────────────────────────────────────────\n");
