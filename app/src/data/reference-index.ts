import { ArticleRange, NamedReference } from "@/types";

/**
 * Maps constitutional entities to the chapter that actually explains them.
 *
 * Every target below was verified against real chapter content — an entity is
 * listed only if the chapter genuinely covers it. Entities with no substantive
 * coverage anywhere (e.g. Art 360 financial emergency, Art 301 trade and
 * commerce) are deliberately absent: a link to a chapter that does not discuss
 * the topic is worse than no link.
 */

// ─── Articles ───────────────────────────────────────────────────────
// Ordered most-specific-first; the first matching range wins, so single-article
// overrides must precede the broad range they sit inside.
export const articleRanges: ArticleRange[] = [
  // Part I — Union and its territory
  { from: 1, to: 4, moduleId: "union-and-territory", topic: "Union and its Territory" },

  // Part II — Citizenship
  { from: 5, to: 11, moduleId: "citizenship", topic: "Citizenship" },

  // Part III — Fundamental Rights
  { from: 12, to: 35, moduleId: "fundamental-rights", topic: "Fundamental Rights" },

  // Part IV — DPSP and Fundamental Duties
  { from: 36, to: 51, moduleId: "directive-principles", topic: "Directive Principles" },
  { from: 51, to: 51, suffix: "A", moduleId: "fundamental-duties", topic: "Fundamental Duties" },

  // Part V — Union Executive, Parliament, Union Judiciary
  { from: 52, to: 78, moduleId: "union-executive", topic: "Union Executive" },
  { from: 79, to: 122, moduleId: "parliament", topic: "Parliament" },
  { from: 123, to: 123, moduleId: "union-executive", topic: "Ordinance power of the President" },
  { from: 124, to: 147, moduleId: "judiciary", topic: "Supreme Court" },
  { from: 148, to: 151, moduleId: "constitutional-bodies", topic: "Comptroller and Auditor General" },

  // Part VI — State Executive, State Legislature, High Courts
  { from: 152, to: 167, moduleId: "state-executive", topic: "State Executive" },
  { from: 168, to: 212, moduleId: "state-legislature", topic: "State Legislature" },
  { from: 213, to: 213, moduleId: "state-executive", topic: "Ordinance power of the Governor" },
  { from: 214, to: 237, moduleId: "judiciary", topic: "High Courts and subordinate courts" },

  // Part VIII–IXB — UTs, Panchayats, Municipalities, Cooperatives
  { from: 239, to: 242, moduleId: "union-territories", topic: "Union Territories" },
  { from: 243, to: 243, suffix: "ZH-ZT", moduleId: "cooperative-sector", topic: "Cooperative Societies" },
  { from: 243, to: 243, moduleId: "local-self-government", topic: "Panchayats and Municipalities" },
  { from: 244, to: 244, moduleId: "union-territories", topic: "Scheduled and Tribal Areas" },

  // Part XI — Centre–State relations
  { from: 245, to: 255, moduleId: "schedules", topic: "Legislative relations and the Seventh Schedule" },
  { from: 263, to: 263, moduleId: "constitutional-bodies", topic: "Inter-State Council" },

  // Part XII — Finance
  { from: 266, to: 267, moduleId: "parliament", topic: "Consolidated Fund, Public Account and Contingency Fund" },
  { from: 280, to: 281, moduleId: "constitutional-bodies", topic: "Finance Commission" },
  { from: 300, to: 300, suffix: "A", moduleId: "fundamental-rights", topic: "Right to Property" },

  // Part XIV — Services and Public Service Commissions
  { from: 312, to: 312, moduleId: "parliament", topic: "All India Services" },
  { from: 315, to: 323, moduleId: "constitutional-bodies", topic: "Public Service Commissions" },

  // Part XV — Elections
  { from: 324, to: 329, moduleId: "elections", topic: "Elections and the Election Commission" },

  // Part XVI — Special provisions for certain classes
  { from: 330, to: 334, moduleId: "parliament", topic: "Reservation of seats in the legislature" },
  { from: 338, to: 342, moduleId: "constitutional-bodies", topic: "NCSC, NCST and NCBC" },

  // Part XVII — Official Language
  { from: 343, to: 351, moduleId: "official-languages", topic: "Official Languages" },

  // Part XVIII — Emergency provisions (no dedicated chapter; split by topic)
  { from: 352, to: 352, moduleId: "salient-features", topic: "National Emergency" },
  { from: 356, to: 357, moduleId: "state-executive", topic: "President's Rule" },
  { from: 358, to: 359, moduleId: "fundamental-rights", topic: "Suspension of Fundamental Rights" },

  // Part XIX–XX — Miscellaneous and Amendment
  { from: 361, to: 361, moduleId: "union-executive", topic: "Immunities of the President and Governor" },
  { from: 368, to: 368, moduleId: "amendment", topic: "Amendment of the Constitution" },
  { from: 370, to: 371, moduleId: "special-provisions", topic: "Special provisions for certain States" },
];

// ─── Named entities ─────────────────────────────────────────────────
// `match` values are lowercased substrings tested against lowercased text.
// Order does not matter; all matches are collected and de-duplicated.
export const namedReferences: NamedReference[] = [
  // Schedules
  { label: "First Schedule", match: ["first schedule"], moduleId: "schedules", topic: "States and Union Territories" },
  { label: "Second Schedule", match: ["second schedule"], moduleId: "schedules", topic: "Salaries of constitutional office-holders" },
  { label: "Third Schedule", match: ["third schedule"], moduleId: "schedules", topic: "Forms of oath and affirmation" },
  { label: "Fourth Schedule", match: ["fourth schedule"], moduleId: "schedules", topic: "Allocation of Rajya Sabha seats" },
  { label: "Fifth Schedule", match: ["fifth schedule"], moduleId: "union-territories", topic: "Scheduled Areas" },
  { label: "Sixth Schedule", match: ["sixth schedule"], moduleId: "union-territories", topic: "Tribal Areas of the North-East" },
  { label: "Seventh Schedule", match: ["seventh schedule", "union list", "state list", "concurrent list"], moduleId: "schedules", topic: "The three legislative lists" },
  { label: "Eighth Schedule", match: ["eighth schedule"], moduleId: "official-languages", topic: "The 22 scheduled languages" },
  { label: "Ninth Schedule", match: ["ninth schedule"], moduleId: "key-judgements", topic: "Ninth Schedule and judicial review" },
  { label: "Tenth Schedule", match: ["tenth schedule", "anti-defection", "defection"], moduleId: "elections", topic: "Anti-defection law" },

  // Landmark judgements
  { label: "Kesavananda Bharati (1973)", match: ["kesavananda"], moduleId: "basic-structure", topic: "Basic structure doctrine" },
  { label: "Minerva Mills (1980)", match: ["minerva mills"], moduleId: "basic-structure", topic: "Judicial review as basic structure" },
  { label: "Golaknath (1967)", match: ["golaknath", "golak nath"], moduleId: "amendment", topic: "Amendment power and Fundamental Rights" },
  { label: "Shankari Prasad (1951)", match: ["shankari prasad"], moduleId: "amendment", topic: "First challenge to the amendment power" },
  { label: "Sajjan Singh (1965)", match: ["sajjan singh"], moduleId: "amendment", topic: "Amendment power revisited" },
  { label: "Maneka Gandhi (1978)", match: ["maneka gandhi"], moduleId: "fundamental-rights", topic: "Expansion of Article 21" },
  { label: "K.S. Puttaswamy (2017)", match: ["puttaswamy"], moduleId: "key-judgements", topic: "Right to Privacy" },
  { label: "ADM Jabalpur (1976)", match: ["adm jabalpur"], moduleId: "key-judgements", topic: "Habeas corpus during Emergency" },
  { label: "S.R. Bommai (1994)", match: ["bommai"], moduleId: "state-executive", topic: "Limits on President's Rule" },
  { label: "Kihoto Hollohan (1992)", match: ["kihoto"], moduleId: "elections", topic: "Speaker's role under the Tenth Schedule" },
  { label: "Indra Sawhney (1992)", match: ["indra sawhney"], moduleId: "fundamental-rights", topic: "Reservation and the 50% ceiling" },
  { label: "Shah Bano (1985)", match: ["shah bano"], moduleId: "key-judgements", topic: "Personal law and maintenance" },
  { label: "Vishaka (1997)", match: ["vishaka", "vishakha"], moduleId: "ncw", topic: "Workplace sexual harassment guidelines" },
  { label: "Collegium / Judges Cases", match: ["collegium", "judges case", "second judges", "third judges"], moduleId: "judiciary", topic: "Appointment of judges" },
  { label: "Lily Thomas (2013)", match: ["lily thomas"], moduleId: "elections", topic: "Disqualification on conviction" },
  { label: "Kuldip Nayar (2006)", match: ["kuldip nayar"], moduleId: "parliament", topic: "Rajya Sabha domicile and open ballot" },
  { label: "D.C. Wadhwa (1987)", match: ["wadhwa"], moduleId: "union-executive", topic: "Re-promulgation of ordinances" },
  { label: "Kehar Singh (1988)", match: ["kehar singh"], moduleId: "union-executive", topic: "Scope of the pardoning power" },

  // Constitutional bodies
  { label: "Election Commission of India", match: ["election commission", "eci", "chief election commissioner"], moduleId: "elections", topic: "The Election Commission" },
  { label: "Comptroller and Auditor General", match: ["comptroller and auditor", "cag"], moduleId: "constitutional-bodies", topic: "The CAG" },
  { label: "UPSC", match: ["union public service commission", "upsc"], moduleId: "constitutional-bodies", topic: "Public Service Commissions" },
  { label: "Finance Commission", match: ["finance commission"], moduleId: "constitutional-bodies", topic: "The Finance Commission" },
  { label: "Attorney General", match: ["attorney general"], moduleId: "constitutional-bodies", topic: "The Attorney General of India" },

  // Non-constitutional bodies
  { label: "NITI Aayog", match: ["niti aayog", "planning commission"], moduleId: "non-constitutional-bodies", topic: "NITI Aayog" },
  { label: "Lokpal and Lokayukta", match: ["lokpal", "lokayukta"], moduleId: "non-constitutional-bodies", topic: "Lokpal and Lokayuktas" },
  { label: "CBI", match: ["central bureau of investigation", "cbi"], moduleId: "non-constitutional-bodies", topic: "The CBI" },
  { label: "Central Vigilance Commission", match: ["central vigilance", "cvc"], moduleId: "non-constitutional-bodies", topic: "The CVC" },
  { label: "Central Information Commission", match: ["central information commission", "right to information", "rti"], moduleId: "governance", topic: "Right to Information" },

  // Statutory commissions
  { label: "National Human Rights Commission", match: ["national human rights", "nhrc", "protection of human rights act"], moduleId: "nhrc", topic: "The NHRC" },
  { label: "National Commission for Minorities", match: ["national commission for minorities", "ncm", "minorities act"], moduleId: "ncm", topic: "The NCM" },
  { label: "NCPCR", match: ["ncpcr", "protection of child rights", "commission for protection of child"], moduleId: "ncpcr", topic: "The NCPCR" },
  { label: "National Commission for Women", match: ["national commission for women", "ncw"], moduleId: "ncw", topic: "The NCW" },

  // Institutions and offices
  { label: "President of India", match: ["president of india"], moduleId: "union-executive", topic: "The President" },
  { label: "Vice-President", match: ["vice-president", "vice president"], moduleId: "union-executive", topic: "The Vice-President" },
  { label: "Prime Minister and Council of Ministers", match: ["prime minister", "council of ministers", "cabinet secretary"], moduleId: "union-executive", topic: "The PM and the Council of Ministers" },
  { label: "Governor", match: ["governor"], moduleId: "state-executive", topic: "The Governor" },
  { label: "Speaker of the Lok Sabha", match: ["speaker"], moduleId: "parliament", topic: "The Speaker" },
  { label: "Rajya Sabha", match: ["rajya sabha"], moduleId: "parliament", topic: "The Rajya Sabha" },
  { label: "Lok Sabha", match: ["lok sabha"], moduleId: "parliament", topic: "The Lok Sabha" },
  { label: "Money Bill", match: ["money bill"], moduleId: "parliament", topic: "Money Bills and Financial Bills" },
  { label: "Parliamentary Committees", match: ["public accounts committee", "estimates committee", "departmentally related standing committee", "parliamentary committee"], moduleId: "parliament", topic: "Parliamentary Committees" },
  { label: "Supreme Court", match: ["supreme court"], moduleId: "judiciary", topic: "The Supreme Court" },
  { label: "High Court", match: ["high court"], moduleId: "judiciary", topic: "The High Courts" },
  { label: "Panchayati Raj", match: ["panchayat", "municipalit", "73rd amendment", "74th amendment", "nagar palika", "gram sabha"], moduleId: "local-self-government", topic: "Panchayats and Municipalities" },

  // Documents, statutes and doctrines
  { label: "Preamble", match: ["preamble"], moduleId: "preamble", topic: "The Preamble" },
  { label: "Constituent Assembly", match: ["constituent assembly", "cabinet mission", "objectives resolution"], moduleId: "making-of-constitution", topic: "Making of the Constitution" },
  { label: "Representation of the People Act", match: ["representation of the people"], moduleId: "elections", topic: "The RPA, 1950 and 1951" },
  { label: "Citizenship Act, 1955", match: ["citizenship act", "caa", "overseas citizen"], moduleId: "citizenship", topic: "The Citizenship Act" },
  { label: "Writs", match: ["habeas corpus", "mandamus", "certiorari", "quo warranto", "writ of prohibition"], moduleId: "fundamental-rights", topic: "The five writs" },
  { label: "Basic structure doctrine", match: ["basic structure"], moduleId: "basic-structure", topic: "Basic structure doctrine" },
  { label: "Judicial review", match: ["judicial review", "judicial activism", "public interest litigation"], moduleId: "judiciary", topic: "Judicial review" },
  { label: "Parliamentary vs Presidential system", match: ["parliamentary system", "presidential system", "westminster"], moduleId: "system-of-government", topic: "System of Government" },
  { label: "Federalism", match: ["federal", "quasi-federal", "unitary"], moduleId: "salient-features", topic: "Federal features of the Constitution" },
  { label: "Borrowed features", match: ["borrowed", "government of india act, 1935", "government of india act 1935"], moduleId: "sources-of-constitution", topic: "Sources of the Constitution" },
  { label: "Cooperative societies", match: ["cooperative societ", "co-operative societ", "97th amendment"], moduleId: "cooperative-sector", topic: "The Cooperative Sector" },
  { label: "Article 370 and J&K", match: ["article 370", "jammu and kashmir", "j&k"], moduleId: "special-provisions", topic: "Special provisions for certain States" },
  { label: "Good governance", match: ["good governance", "e-governance", "citizen's charter", "second arc", "administrative reforms commission"], moduleId: "governance", topic: "Governance" },

  // Procedural machinery. These are what prelims questions actually turn on,
  // and a learner who misses one needs the mechanism explained, not the
  // chapter. Every moduleId below is the chapter that explains the term at
  // length, not merely the one that mentions it most.
  { label: "Veto powers of the President", match: ["pocket veto", "suspensive veto", "absolute veto", "veto power"], moduleId: "union-executive", topic: "The President's veto powers" },
  { label: "Ordinance-making power", match: ["ordinance"], moduleId: "union-executive", topic: "Ordinances under Article 123" },
  { label: "Pardoning power", match: ["pardoning power", "pardon", "reprieve", "respite", "remission", "commutation", "clemency", "mercy petition"], moduleId: "union-executive", topic: "The pardoning power under Article 72" },
  { label: "Impeachment of the President", match: ["impeachment of the president", "impeach the president"], moduleId: "union-executive", topic: "Impeachment under Article 61" },
  { label: "President's Rule", match: ["president's rule", "presidents rule", "state emergency"], moduleId: "state-executive", topic: "President's Rule under Article 356" },
  { label: "Advocate General", match: ["advocate general"], moduleId: "state-executive", topic: "The Advocate General of the State" },
  { label: "Collective responsibility", match: ["collective responsibility", "collectively responsible"], moduleId: "system-of-government", topic: "Collective responsibility" },
  { label: "No-confidence motion", match: ["no-confidence", "no confidence motion", "confidence motion"], moduleId: "parliament", topic: "Motions of no-confidence" },
  { label: "Parliamentary motions", match: ["cut motion", "adjournment motion", "censure motion", "calling attention", "no-day-yet-named"], moduleId: "parliament", topic: "Devices of parliamentary control" },
  { label: "Question Hour and Zero Hour", match: ["question hour", "zero hour", "starred question", "unstarred question"], moduleId: "parliament", topic: "Devices of parliamentary control" },
  { label: "Joint sitting", match: ["joint sitting"], moduleId: "parliament", topic: "Joint sitting under Article 108" },
  { label: "Budget and grants", match: ["vote on account", "appropriation bill", "finance bill", "demands for grants", "annual financial statement", "guillotine"], moduleId: "parliament", topic: "The Budget in six stages" },
  { label: "Consolidated Fund", match: ["consolidated fund", "public account", "contingency fund"], moduleId: "parliament", topic: "The three public funds" },
  { label: "Model Code of Conduct", match: ["model code of conduct", "mcc"], moduleId: "elections", topic: "The Model Code of Conduct" },
  { label: "NOTA", match: ["nota", "none of the above"], moduleId: "elections", topic: "NOTA" },
];
