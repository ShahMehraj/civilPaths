import { Lesson, Question } from "@/types";

// ─── Chapter 12: Basic Structure ───────────────────────────────────
export const lesson12: Lesson = {
  id: "basic-structure-01", moduleId: "basic-structure", title: "Basic Structure of the Constitution", order: 12,
  estimatedMinutes: 25, mastery: "not-started", completed: false,
  sourceFiles: ["84026710_Basic_Structure_of_the_Constitution_-_Class_Notes.pdf"], sourcePages: [1,2,3,4,5],
  blocks: [
    { id: "hook-12", type: "hook", content: "What if Parliament decided to make India a dictatorship? Could it amend the Constitution to remove elections? The Basic Structure doctrine — born from a 7-6 split verdict — says NO. It's the invisible shield protecting democracy." },
    { id: "summary-12", type: "one-line-summary", content: "The Basic Structure doctrine, established in Kesavananda Bharati (1973), holds that while Parliament can amend any part of the Constitution, it cannot destroy or alter its fundamental identity and character." },
    { id: "remember-12", type: "remember", points: [
      "Shankari Prasad (1951): Parliament can amend FRs — 'law' in Art 13 doesn't include amendment",
      "Golaknath (1967): FRs cannot be amended (overruled 1973)",
      "24th Amendment (1971): Explicitly stated Parliament can amend any provision",
      "Kesavananda Bharati (1973): Parliament CAN amend but cannot destroy BASIC STRUCTURE",
      "Verdict: 7-6 majority; Sikri CJ's opinion became the majority view",
      "42nd Amendment (1976): Tried to remove judicial review of amendments (Section 55)",
      "Minerva Mills (1980): Struck down Section 55 of 42nd Amendment; reaffirmed basic structure",
      "Waman Rao (1981): Laws in 9th Schedule before 24-Apr-1973 immune; after that, subject to basic structure",
      "I.R. Coelho (2007): Laws in 9th Schedule can be reviewed if they violate basic structure",
      "Elements of Basic Structure: Supremacy of Constitution, Rule of law, Separation of powers, Judicial review, Federalism, Secularism, Democracy, Republican form, Sovereignty, Unity & integrity, Free and fair elections, Harmony between FRs and DPSPs",
    ]},
    { id: "source-ref-12", type: "source-reference", sourceFile: "84026710_Basic_Structure_of_the_Constitution_-_Class_Notes.pdf", sourcePages: [1,2,3,4,5] },
  ],
};

export const questions12: Question[] = [
  { id: "q-bs-01", subject: "polity", lessonIds: ["basic-structure-01"], type: "single-correct",
    prompt: "In which case was the Basic Structure doctrine first propounded?", options: ["Shankari Prasad case", "Golaknath case", "Kesavananda Bharati case", "Minerva Mills case"],
    correctOptionIds: [2], explanation: "The Basic Structure doctrine was first established in Kesavananda Bharati v. State of Kerala (1973).", optionExplanations: {"0":"Upheld amendment power without basic structure limitation.","1":"Held FRs can't be amended (different approach).","2":"Correct.","3":"Applied the doctrine but didn't originate it."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["84026710_Basic_Structure_of_the_Constitution_-_Class_Notes.pdf"], sourcePages: [3], tags: ["basic-structure","kesavananda"] },
  { id: "q-bs-02", subject: "polity", lessonIds: ["basic-structure-01"], type: "single-correct",
    prompt: "In the Golaknath case (1967), the Supreme Court held that:", options: ["Parliament can amend any part of the Constitution", "Fundamental Rights cannot be amended by Parliament", "Basic Structure cannot be altered", "DPSPs override Fundamental Rights"],
    correctOptionIds: [1], explanation: "In Golaknath v. State of Punjab (1967), the SC held that Parliament cannot amend Fundamental Rights as they are 'transcendental and immutable'. This was overruled by the 24th Amendment and Kesavananda Bharati case.", optionExplanations: {"0":"This was Shankari Prasad's view.","1":"Correct. FRs were held unamendable.","2":"Basic Structure came later (1973).","3":"This wasn't decided here."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["84026710_Basic_Structure_of_the_Constitution_-_Class_Notes.pdf"], sourcePages: [2], tags: ["basic-structure","golaknath"] },
  { id: "q-bs-03", subject: "polity", lessonIds: ["basic-structure-01"], type: "single-correct",
    prompt: "The I.R. Coelho case (2007) established that:", options: ["9th Schedule laws are completely immune from review", "9th Schedule laws added after 24 April 1973 can be reviewed for basic structure violation", "All amendments can be challenged", "Parliament cannot add laws to 9th Schedule"],
    correctOptionIds: [1], explanation: "In I.R. Coelho v. State of Tamil Nadu (2007), the SC held that laws placed in the 9th Schedule after 24 April 1973 (the date of Kesavananda judgment) are subject to judicial review if they violate the basic structure.", optionExplanations: {"0":"Not after Coelho.","1":"Correct.","2":"Not all — only those violating basic structure.","3":"Parliament can still add, but they're reviewable."},
    difficulty: "hard", skill: "understanding", upscTrack: "prelims", sourceFiles: ["84026710_Basic_Structure_of_the_Constitution_-_Class_Notes.pdf"], sourcePages: [5], tags: ["basic-structure","ir-coelho","9th-schedule"] },
  { id: "q-bs-04", subject: "polity", lessonIds: ["basic-structure-01"], type: "multiple-statements",
    prompt: "Which of the following are elements of the Basic Structure?\n1. Secular character of the Constitution\n2. Free and fair elections\n3. Right to Property\n4. Judicial review",
    statements: ["Secular character","Free and fair elections","Right to Property","Judicial review"],
    options: ["1, 2 and 4 only", "1 and 4 only", "All of the above", "2 and 3 only"],
    correctOptionIds: [0], explanation: "Secularism, free & fair elections, and judicial review are basic structure elements. Right to Property is NOT — it was removed as a FR and is only a legal right.", optionExplanations: {"0":"Correct.","1":"Free and fair elections is also basic structure.","2":"Right to Property is not basic structure.","3":"Incorrect."},
    difficulty: "medium", skill: "elimination", upscTrack: "prelims", sourceFiles: ["84026710_Basic_Structure_of_the_Constitution_-_Class_Notes.pdf"], sourcePages: [4,5], tags: ["basic-structure","elements"] },
];

// ─── Chapter 13: System of Government ──────────────────────────────
export const lesson13: Lesson = {
  id: "system-of-government-01", moduleId: "system-of-government", title: "System of Government", order: 13,
  estimatedMinutes: 20, mastery: "not-started", completed: false,
  sourceFiles: ["78195258_System_of_Government.pdf"], sourcePages: [1,2,3,4],
  blocks: [
    { id: "hook-13", type: "hook", content: "India chose the Parliamentary system over Presidential. Why? Because the framers wanted a government that is responsible to the people through their elected representatives — not one centered around a single powerful leader." },
    { id: "summary-13", type: "one-line-summary", content: "India follows a parliamentary system of government (Westminster model) where the executive is drawn from and responsible to the legislature, with the President as a nominal head." },
    { id: "remember-13", type: "remember", points: [
      "Parliamentary system (Westminster model) at both Centre and States",
      "Features: Nominal and real executives, Majority party rule, Collective responsibility, Double membership (executive members are also legislators), Dissolution of lower house, Leadership of PM",
      "President is nominal head; PM and Council of Ministers are real executive",
      "Council of Ministers is collectively responsible to Lok Sabha (Art 75)",
      "PM is the leader of the majority party in Lok Sabha",
      "Distinction from Presidential system: No separation of powers, executive responsible to legislature, PM can be removed by no-confidence motion",
      "Why India chose Parliamentary: Familiarity (British rule), Accountability, Prevents authoritarianism, Represents diverse society",
      "India is NOT purely parliamentary — has some presidential features (elected President, judicial review, written constitution)",
    ]},
    { id: "source-ref-13", type: "source-reference", sourceFile: "78195258_System_of_Government.pdf", sourcePages: [1,2,3,4] },
  ],
};

export const questions13: Question[] = [
  { id: "q-sog-01", subject: "polity", lessonIds: ["system-of-government-01"], type: "single-correct",
    prompt: "The Council of Ministers is collectively responsible to:", options: ["President", "Rajya Sabha", "Lok Sabha", "Both Houses of Parliament"],
    correctOptionIds: [2], explanation: "Article 75 states that the Council of Ministers shall be collectively responsible to the House of the People (Lok Sabha).", optionExplanations: {"0":"President is nominal head.","1":"Rajya Sabha doesn't hold confidence power.","2":"Correct. Collective responsibility to Lok Sabha.","3":"Only to Lok Sabha, not both houses."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78195258_System_of_Government.pdf"], sourcePages: [2], tags: ["parliamentary","collective-responsibility"] },
  { id: "q-sog-02", subject: "polity", lessonIds: ["system-of-government-01"], type: "single-correct",
    prompt: "Which is NOT a feature of the Parliamentary system?", options: ["Collective responsibility", "Double membership", "Separation of powers between executive and legislature", "Leadership of Prime Minister"],
    correctOptionIds: [2], explanation: "Separation of powers between executive and legislature is a feature of the Presidential system, NOT parliamentary. In parliamentary system, executive is part of and responsible to the legislature.", optionExplanations: {"0":"Collective responsibility is a parliamentary feature.","1":"Double membership (MPs as ministers) is parliamentary.","2":"Correct. Separation of powers is Presidential, not Parliamentary.","3":"PM's leadership is parliamentary."},
    difficulty: "easy", skill: "understanding", upscTrack: "prelims", sourceFiles: ["78195258_System_of_Government.pdf"], sourcePages: [1], tags: ["parliamentary","features"] },
  { id: "q-sog-03", subject: "polity", lessonIds: ["system-of-government-01"], type: "single-correct",
    prompt: "In a Parliamentary system, the real executive authority rests with:", options: ["The President/Monarch", "The Prime Minister and Council of Ministers", "The Parliament", "The Judiciary"],
    correctOptionIds: [1], explanation: "In a parliamentary system, the head of state (President/Monarch) is nominal. Real executive power rests with the Prime Minister and Council of Ministers.", optionExplanations: {"0":"Head of state is nominal, not real executive.","1":"Correct. PM & CoM = real executive.","2":"Parliament is the legislature, not executive.","3":"Judiciary is independent of the executive."},
    difficulty: "easy", skill: "understanding", upscTrack: "prelims", sourceFiles: ["78195258_System_of_Government.pdf"], sourcePages: [2], tags: ["parliamentary","executive"] },
  { id: "q-sog-04", subject: "polity", lessonIds: ["system-of-government-01"], type: "single-correct",
    prompt: "Which Article provides for collective responsibility of the Council of Ministers?", options: ["Article 74", "Article 75", "Article 76", "Article 78"],
    correctOptionIds: [1], explanation: "Article 75(3) states: 'The Council of Ministers shall be collectively responsible to the House of the People.'", optionExplanations: {"0":"Art 74 deals with President acting on ministerial advice.","1":"Correct. Art 75 deals with ministers including collective responsibility.","2":"Art 76 deals with Attorney General.","3":"Art 78 deals with PM's duties towards President."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["78195258_System_of_Government.pdf"], sourcePages: [2], tags: ["parliamentary","article-75"] },
];

// ─── Chapter 14: Union Executive ───────────────────────────────────
export const lesson14: Lesson = {
  id: "union-executive-01", moduleId: "union-executive", title: "Union Executive", order: 14,
  estimatedMinutes: 30, mastery: "not-started", completed: false,
  sourceFiles: ["78187369_Union_Executive.pdf"], sourcePages: [1,2,3,4,5,6,7],
  blocks: [
    { id: "hook-14", type: "hook", content: "The President of India is the 'first citizen' but cannot make a single decision independently. The PM runs the government but holds no constitutional power of their own. How does this fascinating power dynamic work?" },
    { id: "summary-14", type: "one-line-summary", content: "The Union Executive comprises the President (nominal head, Art 52-62), Vice President (Art 63-71), Prime Minister (Art 74-75), Council of Ministers, and Attorney General (Art 76), with executive power vested in the President but exercised on PM's advice." },
    { id: "remember-14", type: "remember", points: [
      "President: Nominal head, executive power vested in (Art 53), elected by electoral college",
      "Electoral college: Elected MPs + elected MLAs (not nominated members, not MLCs)",
      "President's term: 5 years, re-eligible, can resign to VP",
      "Impeachment: Art 61, for 'violation of Constitution', by either House, 2/3 majority of total membership",
      "42nd Amendment: President MUST act on Council of Ministers' advice",
      "44th Amendment: President can ask CoM to reconsider — but must accept reconsidered advice",
      "Vice President: Ex-officio Chairman of Rajya Sabha, elected by electoral college of both Houses (MPs only)",
      "PM: Appointed by President, leader of majority party, Art 75",
      "Council of Ministers: Cabinet Ministers, Ministers of State, Deputy Ministers",
      "Total CoM cannot exceed 15% of total strength of Lok Sabha (91st Amendment)",
      "Attorney General: Art 76, appointed by President, must be qualified to be SC judge, no fixed tenure",
    ]},
    { id: "source-ref-14", type: "source-reference", sourceFile: "78187369_Union_Executive.pdf", sourcePages: [1,2,3,4,5,6,7] },
  ],
};

export const questions14: Question[] = [
  { id: "q-ue-01", subject: "polity", lessonIds: ["union-executive-01"], type: "single-correct",
    prompt: "The President of India is elected by:", options: ["Direct election by citizens", "Members of both Houses of Parliament", "Electoral college of elected MPs and elected MLAs", "Electoral college of all MPs and all MLAs"],
    correctOptionIds: [2], explanation: "The President is elected by an electoral college consisting of elected members of both Houses of Parliament AND elected members of state legislative assemblies. Nominated members and MLCs are NOT included.", optionExplanations: {"0":"Not directly elected.","1":"Not just Parliament — state MLAs too.","2":"Correct. Elected MPs + elected MLAs.","3":"Only ELECTED members, not nominated."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["78187369_Union_Executive.pdf"], sourcePages: [1], tags: ["president","election","electoral-college"] },
  { id: "q-ue-02", subject: "polity", lessonIds: ["union-executive-01"], type: "single-correct",
    prompt: "The President can be impeached for:", options: ["Incompetence", "Violation of the Constitution", "Loss of majority in Parliament", "Any criminal offence"],
    correctOptionIds: [1], explanation: "Article 61 provides that the President can be impeached for 'violation of the Constitution'. The process requires a resolution passed by 2/3rds of total membership of each House.", optionExplanations: {"0":"Incompetence is not a ground for impeachment.","1":"Correct. 'Violation of the Constitution' is the only ground.","2":"Loss of majority is not relevant to President.","3":"Criminal offence alone is not the ground."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78187369_Union_Executive.pdf"], sourcePages: [2], tags: ["president","impeachment","article-61"] },
  { id: "q-ue-03", subject: "polity", lessonIds: ["union-executive-01"], type: "single-correct",
    prompt: "The maximum strength of the Council of Ministers (including PM) cannot exceed:", options: ["10% of Lok Sabha strength", "15% of Lok Sabha strength", "20% of Lok Sabha strength", "No limit specified"],
    correctOptionIds: [1], explanation: "The 91st Amendment Act (2003) provides that the total number of ministers, including the PM, cannot exceed 15% of the total strength of Lok Sabha.", optionExplanations: {"0":"Not 10%.","1":"Correct. 15% as per 91st Amendment.","2":"Not 20%.","3":"There is a limit after 91st Amendment."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["78187369_Union_Executive.pdf"], sourcePages: [4], tags: ["council-of-ministers","91st-amendment"] },
  { id: "q-ue-04", subject: "polity", lessonIds: ["union-executive-01"], type: "single-correct",
    prompt: "The Vice President of India is elected by:", options: ["Electoral college of elected MPs and MLAs", "Members of both Houses of Parliament (elected + nominated)", "Only members of Rajya Sabha", "Direct election by citizens"],
    correctOptionIds: [1], explanation: "The Vice President is elected by an electoral college consisting of members of BOTH Houses of Parliament (including nominated members). This differs from the President's election which excludes nominated members.", optionExplanations: {"0":"That's for President, not VP.","1":"Correct. All MPs (elected + nominated) of both Houses.","2":"Not just Rajya Sabha.","3":"Not directly elected."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["78187369_Union_Executive.pdf"], sourcePages: [3], tags: ["vice-president","election"] },
  { id: "q-ue-05", subject: "polity", lessonIds: ["union-executive-01"], type: "single-correct",
    prompt: "Under which Article is the President bound to act on the advice of the Council of Ministers?", options: ["Article 53", "Article 74", "Article 75", "Article 78"],
    correctOptionIds: [1], explanation: "Article 74(1) states that there shall be a Council of Ministers with the PM at its head to aid and advise the President, who shall act in accordance with such advice. The 42nd Amendment made this binding.", optionExplanations: {"0":"Art 53 vests executive power in President.","1":"Correct. Art 74 = President acts on advice of CoM.","2":"Art 75 deals with appointment of ministers.","3":"Art 78 deals with PM's duties."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["78187369_Union_Executive.pdf"], sourcePages: [2], tags: ["president","article-74","advice"] },
  { id: "q-ue-06", subject: "polity", lessonIds: ["union-executive-01"], type: "single-correct",
    prompt: "The Attorney General of India is appointed by:", options: ["Chief Justice of India", "Prime Minister", "President", "Law Minister"],
    correctOptionIds: [2], explanation: "The Attorney General is appointed by the President under Article 76. They must be qualified to be appointed as a judge of the Supreme Court.", optionExplanations: {"0":"CJI doesn't appoint AG.","1":"PM advises but doesn't appoint.","2":"Correct. President appoints the AG.","3":"Law Minister doesn't have this power."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78187369_Union_Executive.pdf"], sourcePages: [6], tags: ["attorney-general","article-76"] },
];

// ─── Chapter 15: Parliament ────────────────────────────────────────
export const lesson15: Lesson = {
  id: "parliament-01", moduleId: "parliament", title: "Parliament", order: 15,
  estimatedMinutes: 35, mastery: "not-started", completed: false,
  sourceFiles: ["78187368_Parliament_-_Class_Notes.pdf"], sourcePages: [1,2,3,4,5,6,7,8],
  blocks: [
    { id: "hook-15", type: "hook", content: "The Indian Parliament is the sovereign legislative body — it can make laws on any subject, discuss any matter, and hold the government accountable. But is it truly sovereign? Can the judiciary strike down its laws?" },
    { id: "summary-15", type: "one-line-summary", content: "Parliament consists of the President, Rajya Sabha (250 members, not subject to dissolution) and Lok Sabha (545→543 members, 5-year term), with legislative, financial, and oversight functions." },
    { id: "remember-15", type: "remember", points: [
      "Parliament = President + Rajya Sabha + Lok Sabha (Art 79)",
      "Rajya Sabha: Max 250 (238 elected + 12 nominated by President for literature, science, art, social service)",
      "RS is permanent — not subject to dissolution; 1/3 retire every 2 years; member term = 6 years",
      "Lok Sabha: Max 550 (now 543 after delimitation); directly elected; 5-year term (can be dissolved earlier)",
      "Speaker presides over Lok Sabha; VP is ex-officio Chairman of RS",
      "Money Bills can ONLY be introduced in Lok Sabha (Art 109, 110)",
      "Rajya Sabha has only 14 days to act on Money Bills; cannot reject/amend",
      "Joint sitting (Art 108): Only for ordinary bills in case of deadlock; presided by Speaker",
      "No joint sitting for Money Bills or Constitutional Amendment Bills",
      "Sessions: Budget, Monsoon, Winter; gap between sessions < 6 months (Art 85)",
      "Quorum: 1/10th of total membership (Art 100)",
      "Parliamentary privileges: Art 105 (Union) and Art 194 (States)",
      "No-confidence motion: Only in Lok Sabha against CoM; requires simple majority",
    ]},
    { id: "source-ref-15", type: "source-reference", sourceFile: "78187368_Parliament_-_Class_Notes.pdf", sourcePages: [1,2,3,4,5,6,7,8] },
  ],
};

export const questions15: Question[] = [
  { id: "q-parl-01", subject: "polity", lessonIds: ["parliament-01"], type: "single-correct",
    prompt: "A Money Bill can be introduced in:", options: ["Either House", "Only Rajya Sabha", "Only Lok Sabha", "Only with President's recommendation in either House"],
    correctOptionIds: [2], explanation: "Article 109 clearly states that a Money Bill can only be introduced in the Lok Sabha, and only with the prior recommendation of the President.", optionExplanations: {"0":"Not in either house — only Lok Sabha.","1":"Never in RS.","2":"Correct. Only in Lok Sabha.","3":"Only in Lok Sabha, not either house."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78187368_Parliament_-_Class_Notes.pdf"], sourcePages: [5], tags: ["parliament","money-bill","lok-sabha"] },
  { id: "q-parl-02", subject: "polity", lessonIds: ["parliament-01"], type: "single-correct",
    prompt: "Joint sitting of Parliament is NOT applicable in case of:", options: ["Ordinary Bills", "Money Bills", "Constitutional Amendment Bills", "Both Money Bills and Constitutional Amendment Bills"],
    correctOptionIds: [3], explanation: "Joint sitting under Article 108 is only for ordinary bills where there is a deadlock. It does NOT apply to Money Bills (Lok Sabha's will prevails) or Constitutional Amendment Bills (each House must pass separately).", optionExplanations: {"0":"Joint sitting IS available for ordinary bills.","1":"Correct partially — but D is more complete.","2":"Correct partially.","3":"Correct. Joint sitting doesn't apply to either."},
    difficulty: "medium", skill: "understanding", upscTrack: "prelims", sourceFiles: ["78187368_Parliament_-_Class_Notes.pdf"], sourcePages: [6], tags: ["parliament","joint-sitting"] },
  { id: "q-parl-03", subject: "polity", lessonIds: ["parliament-01"], type: "single-correct",
    prompt: "The maximum gap between two sessions of Parliament cannot exceed:", options: ["3 months", "6 months", "1 year", "No limit specified"],
    correctOptionIds: [1], explanation: "Article 85 requires that there should not be a gap of more than 6 months between two sessions of Parliament.", optionExplanations: {"0":"The gap can be up to 6 months.","1":"Correct. Maximum 6 months.","2":"Much too long.","3":"There is a limit — 6 months."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78187368_Parliament_-_Class_Notes.pdf"], sourcePages: [3], tags: ["parliament","sessions","article-85"] },
  { id: "q-parl-04", subject: "polity", lessonIds: ["parliament-01"], type: "single-correct",
    prompt: "How many members can the President nominate to the Rajya Sabha?", options: ["2", "10", "12", "14"],
    correctOptionIds: [2], explanation: "The President can nominate 12 members to the Rajya Sabha from persons having special knowledge/experience in literature, science, art and social service.", optionExplanations: {"0":"Incorrect.","1":"Incorrect.","2":"Correct. 12 nominated members.","3":"Incorrect."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78187368_Parliament_-_Class_Notes.pdf"], sourcePages: [2], tags: ["parliament","rajya-sabha","nominated"] },
  { id: "q-parl-05", subject: "polity", lessonIds: ["parliament-01"], type: "single-correct",
    prompt: "The quorum for a sitting of either House of Parliament is:", options: ["1/4th of total members", "1/3rd of total members", "1/10th of total members", "Majority of total members"],
    correctOptionIds: [2], explanation: "Article 100(3) provides that the quorum for either House is 1/10th of the total number of members of that House.", optionExplanations: {"0":"Incorrect.","1":"Incorrect.","2":"Correct. 1/10th is the quorum.","3":"Majority is not required for quorum."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78187368_Parliament_-_Class_Notes.pdf"], sourcePages: [3], tags: ["parliament","quorum"] },
  { id: "q-parl-06", subject: "polity", lessonIds: ["parliament-01"], type: "single-correct",
    prompt: "The term of a Rajya Sabha member is:", options: ["5 years", "6 years", "4 years", "Permanent until resignation"],
    correctOptionIds: [1], explanation: "A Rajya Sabha member serves for 6 years. One-third of the members retire every 2 years, ensuring the house is never fully dissolved.", optionExplanations: {"0":"5 years is Lok Sabha's term.","1":"Correct. 6-year term for RS members.","2":"Incorrect.","3":"There is a fixed term of 6 years."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78187368_Parliament_-_Class_Notes.pdf"], sourcePages: [2], tags: ["parliament","rajya-sabha","term"] },
];

// ─── Chapter 16: State Executive ───────────────────────────────────
export const lesson16: Lesson = {
  id: "state-executive-01", moduleId: "state-executive", title: "State Executive", order: 16,
  estimatedMinutes: 20, mastery: "not-started", completed: false,
  sourceFiles: ["78123179_State_Executive_-_Class_Notes.pdf"], sourcePages: [1,2,3,4],
  blocks: [
    { id: "hook-16", type: "hook", content: "The Governor is appointed by the Centre but acts as the head of state. The CM runs the government. But during President's Rule, the Governor becomes the real executive. This dual role makes the office deeply controversial." },
    { id: "summary-16", type: "one-line-summary", content: "The State Executive consists of the Governor (nominal head, appointed by President), Chief Minister, Council of Ministers, and Advocate General, mirroring the Union executive at the state level." },
    { id: "remember-16", type: "remember", points: [
      "Governor: Appointed by President, holds office during 'pleasure of President'",
      "No fixed tenure — convention is 5 years",
      "Qualifications: Indian citizen, 35+ years age",
      "Discretionary powers: Recommending President's Rule, Reserving bills for President, Appointing CM when no clear majority",
      "CM: Appointed by Governor, leader of majority party in state legislature",
      "Council of Ministers: Collectively responsible to state legislative assembly",
      "CoM cannot exceed 15% of assembly strength (91st Amendment)",
      "Advocate General: Art 165, appointed by Governor, equivalent of AG at state level",
    ]},
    { id: "source-ref-16", type: "source-reference", sourceFile: "78123179_State_Executive_-_Class_Notes.pdf", sourcePages: [1,2,3,4] },
  ],
};

export const questions16: Question[] = [
  { id: "q-se-01", subject: "polity", lessonIds: ["state-executive-01"], type: "single-correct",
    prompt: "The Governor of a State is appointed by:", options: ["Elected by the people of the state", "Elected by the state legislature", "Appointed by the President", "Appointed by the Chief Minister"],
    correctOptionIds: [2], explanation: "The Governor is appointed by the President of India and holds office during the pleasure of the President. This is a unitary feature of the Indian Constitution.", optionExplanations: {"0":"Governor is not elected.","1":"Not elected by state legislature.","2":"Correct. Appointed by the President.","3":"CM doesn't appoint Governor."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78123179_State_Executive_-_Class_Notes.pdf"], sourcePages: [1], tags: ["governor","appointment"] },
  { id: "q-se-02", subject: "polity", lessonIds: ["state-executive-01"], type: "single-correct",
    prompt: "Which is NOT a discretionary power of the Governor?", options: ["Appointing CM when no party has clear majority", "Recommending President's Rule", "Giving assent to all bills passed by state legislature", "Reserving a bill for President's consideration"],
    correctOptionIds: [2], explanation: "Giving assent to all bills is not a discretionary power — it's a normal function. The discretionary powers include appointing CM in a hung assembly, recommending President's Rule, and reserving bills for President.", optionExplanations: {"0":"This is discretionary.","1":"This is discretionary.","2":"Correct. Giving assent is not discretionary — it's routine.","3":"This is discretionary."},
    difficulty: "medium", skill: "understanding", upscTrack: "prelims", sourceFiles: ["78123179_State_Executive_-_Class_Notes.pdf"], sourcePages: [2], tags: ["governor","discretionary-powers"] },
  { id: "q-se-03", subject: "polity", lessonIds: ["state-executive-01"], type: "single-correct",
    prompt: "The minimum age for appointment as Governor is:", options: ["25 years", "30 years", "35 years", "40 years"],
    correctOptionIds: [2], explanation: "To be appointed as Governor, a person must be a citizen of India and at least 35 years of age.", optionExplanations: {"0":"25 is for Lok Sabha/Assembly membership.","1":"30 is for Rajya Sabha/Council membership.","2":"Correct. 35 years.","3":"Incorrect."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78123179_State_Executive_-_Class_Notes.pdf"], sourcePages: [1], tags: ["governor","qualification"] },
];

// ─── Chapter 17: State Legislature ─────────────────────────────────
export const lesson17: Lesson = {
  id: "state-legislature-01", moduleId: "state-legislature", title: "State Legislature", order: 17,
  estimatedMinutes: 20, mastery: "not-started", completed: false,
  sourceFiles: ["77676093_State_Legislature_-_Class_Notes.pdf"], sourcePages: [1,2,3,4],
  blocks: [
    { id: "hook-17", type: "hook", content: "Not all states have the same legislative structure. Some have two houses (bicameral), most have one (unicameral). How are state legislatures organised, and what's the role of the Legislative Council?" },
    { id: "summary-17", type: "one-line-summary", content: "State Legislature consists of the Governor and one or two Houses — Legislative Assembly (Vidhan Sabha) in all states, and Legislative Council (Vidhan Parishad) in only six states." },
    { id: "remember-17", type: "remember", points: [
      "State Legislature = Governor + Legislative Assembly (+ Legislative Council in some states)",
      "All states have Legislative Assembly (Vidhan Sabha) — directly elected, 5-year term",
      "Only 6 states have Legislative Council: UP, Maharashtra, Bihar, Karnataka, Andhra Pradesh, Telangana",
      "Legislative Council: Max 1/3rd of Assembly strength, min 40; term 6 years, 1/3 retire every 2 years",
      "Assembly: Max 500, Min 60 members (exception: small states)",
      "Money bills can ONLY be introduced in Legislative Assembly",
      "Legislative Council cannot reject Money Bills — can only delay by 14 days",
      "Governor can nominate 1/6th of LC members (literature, science, art, cooperative, social service)",
      "Parliament can create/abolish Legislative Councils by simple majority under Art 169",
    ]},
    { id: "source-ref-17", type: "source-reference", sourceFile: "77676093_State_Legislature_-_Class_Notes.pdf", sourcePages: [1,2,3,4] },
  ],
};

export const questions17: Question[] = [
  { id: "q-sl-01", subject: "polity", lessonIds: ["state-legislature-01"], type: "single-correct",
    prompt: "Which of the following states does NOT have a Legislative Council?", options: ["Uttar Pradesh", "Maharashtra", "Tamil Nadu", "Karnataka"],
    correctOptionIds: [2], explanation: "Tamil Nadu does not have a Legislative Council. The six states with LCs are: UP, Maharashtra, Bihar, Karnataka, Andhra Pradesh, and Telangana.", optionExplanations: {"0":"UP has an LC.","1":"Maharashtra has an LC.","2":"Correct. Tamil Nadu does NOT have an LC.","3":"Karnataka has an LC."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["77676093_State_Legislature_-_Class_Notes.pdf"], sourcePages: [2], tags: ["state-legislature","legislative-council"] },
  { id: "q-sl-02", subject: "polity", lessonIds: ["state-legislature-01"], type: "single-correct",
    prompt: "The maximum strength of a Legislative Council cannot exceed:", options: ["1/4th of Assembly strength", "1/3rd of Assembly strength", "1/2 of Assembly strength", "Equal to Assembly strength"],
    correctOptionIds: [1], explanation: "The total membership of a Legislative Council cannot exceed 1/3rd of the total membership of the Legislative Assembly of that state.", optionExplanations: {"0":"Not 1/4th.","1":"Correct. Max 1/3rd of Assembly.","2":"Not 1/2.","3":"Not equal."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["77676093_State_Legislature_-_Class_Notes.pdf"], sourcePages: [2], tags: ["state-legislature","legislative-council","strength"] },
  { id: "q-sl-03", subject: "polity", lessonIds: ["state-legislature-01"], type: "single-correct",
    prompt: "A Legislative Council can be created or abolished by:", options: ["State Legislature by special majority", "Parliament by simple majority on state's request", "President by executive order", "Constitutional Amendment only"],
    correctOptionIds: [1], explanation: "Under Article 169, Parliament can create or abolish a Legislative Council by a simple majority if the concerned state legislature passes a resolution by special majority.", optionExplanations: {"0":"State can pass resolution but Parliament must enact.","1":"Correct. Parliament by simple majority after state's resolution.","2":"Not by executive order.","3":"Not a constitutional amendment — simple parliamentary act."},
    difficulty: "medium", skill: "understanding", upscTrack: "prelims", sourceFiles: ["77676093_State_Legislature_-_Class_Notes.pdf"], sourcePages: [3], tags: ["state-legislature","article-169"] },
];

// ─── Chapter 18: Judiciary ─────────────────────────────────────────
export const lesson18: Lesson = {
  id: "judiciary-01", moduleId: "judiciary", title: "Judiciary", order: 18,
  estimatedMinutes: 30, mastery: "not-started", completed: false,
  sourceFiles: ["82603690_Judiciary.pdf"], sourcePages: [1,2,3,4,5,6,7],
  blocks: [
    { id: "hook-18", type: "hook", content: "India has a single integrated judicial system — unusual for a federation. The Supreme Court is not just a court of appeal; it's the guardian of the Constitution. Can it strike down laws? Can it override Parliament?" },
    { id: "summary-18", type: "one-line-summary", content: "India's judiciary is an integrated system with the Supreme Court at the apex, High Courts at the state level, and subordinate courts below — independent of the executive with powers of judicial review." },
    { id: "remember-18", type: "remember", points: [
      "Supreme Court: Art 124-147, guardian of Constitution, court of record",
      "SC Composition: CJI + other judges (currently 33, total 34)",
      "SC judges appointed by President after consultation with CJI and other judges (Collegium system)",
      "Qualifications: Indian citizen, 5 years HC judge OR 10 years HC advocate OR distinguished jurist (President's opinion)",
      "Retirement age: SC judges at 65, HC judges at 62",
      "Removal: By President on address by Parliament (special majority) — on grounds of 'proved misbehaviour or incapacity'",
      "SC Jurisdiction: Original (Art 131), Appellate (Art 132-136), Advisory (Art 143), Writ (Art 32)",
      "High Courts: Art 214-231, one for each state (or shared)",
      "HC Jurisdiction: Original, appellate, writ (Art 226 — broader than Art 32)",
      "Art 226 writs: For FRs AND 'any other purpose' (broader than SC under Art 32)",
      "Judicial Review: Power to examine constitutionality of laws (Art 13, 32, 226)",
      "Collegium: CJI + 4 senior judges recommend appointments (not in Constitution — evolved through judgments)",
      "Three Judges Cases: 1st (1982), 2nd (1993), 3rd (1998) — evolved collegium system",
    ]},
    { id: "source-ref-18", type: "source-reference", sourceFile: "82603690_Judiciary.pdf", sourcePages: [1,2,3,4,5,6,7] },
  ],
};

export const questions18: Question[] = [
  { id: "q-jud-01", subject: "polity", lessonIds: ["judiciary-01"], type: "single-correct",
    prompt: "The retirement age of Supreme Court judges is:", options: ["60 years", "62 years", "65 years", "70 years"],
    correctOptionIds: [2], explanation: "Supreme Court judges retire at 65 years. High Court judges retire at 62 years.", optionExplanations: {"0":"Incorrect.","1":"62 is for HC judges.","2":"Correct. 65 for SC judges.","3":"Incorrect."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["82603690_Judiciary.pdf"], sourcePages: [2], tags: ["judiciary","retirement","supreme-court"] },
  { id: "q-jud-02", subject: "polity", lessonIds: ["judiciary-01"], type: "single-correct",
    prompt: "Writs under Article 226 can be issued by High Courts for:", options: ["Only enforcement of Fundamental Rights", "Enforcement of FRs and any other purpose", "Only against state governments", "Only in criminal matters"],
    correctOptionIds: [1], explanation: "Article 226 gives High Courts broader writ jurisdiction than the SC under Art 32. HCs can issue writs for enforcement of FRs AND for 'any other purpose' — making their writ jurisdiction wider.", optionExplanations: {"0":"That's Art 32 (SC) — Art 226 is broader.","1":"Correct. Art 226 = FRs + any other purpose.","2":"Can be against anyone.","3":"Not limited to criminal matters."},
    difficulty: "medium", skill: "understanding", upscTrack: "prelims", sourceFiles: ["82603690_Judiciary.pdf"], sourcePages: [5], tags: ["judiciary","article-226","writs"] },
  { id: "q-jud-03", subject: "polity", lessonIds: ["judiciary-01"], type: "single-correct",
    prompt: "A Supreme Court judge can be removed by:", options: ["President alone", "Chief Justice of India", "Parliament through impeachment process", "No procedure exists"],
    correctOptionIds: [2], explanation: "SC/HC judges can only be removed by the President on an address by Parliament passed by special majority (2/3rd of present & voting + majority of total membership) in each House, on grounds of 'proved misbehaviour or incapacity'.", optionExplanations: {"0":"President acts only on Parliament's address.","1":"CJI cannot remove judges.","2":"Correct. Parliament's address to President.","3":"There is a procedure."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["82603690_Judiciary.pdf"], sourcePages: [2], tags: ["judiciary","removal","judges"] },
  { id: "q-jud-04", subject: "polity", lessonIds: ["judiciary-01"], type: "single-correct",
    prompt: "The Collegium system for judicial appointments was established through:", options: ["Constitutional provision", "Parliamentary legislation", "Supreme Court judgments (Three Judges Cases)", "Executive order"],
    correctOptionIds: [2], explanation: "The Collegium system is not in the Constitution — it evolved through the Three Judges Cases (1982, 1993, 1998). The SC interpreted 'consultation' in Art 124 to effectively mean 'concurrence'.", optionExplanations: {"0":"Not explicitly in the Constitution.","1":"No legislation established it.","2":"Correct. Supreme Court judgments created it.","3":"Not an executive order."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["82603690_Judiciary.pdf"], sourcePages: [3], tags: ["judiciary","collegium","appointments"] },
  { id: "q-jud-05", subject: "polity", lessonIds: ["judiciary-01"], type: "single-correct",
    prompt: "Advisory jurisdiction of the Supreme Court is provided under:", options: ["Article 131", "Article 136", "Article 143", "Article 226"],
    correctOptionIds: [2], explanation: "Article 143 provides for the advisory jurisdiction of the SC. The President can seek the Court's opinion on questions of law or fact. However, the SC's advice is not binding on the President.", optionExplanations: {"0":"Art 131 is original jurisdiction.","1":"Art 136 is special leave to appeal.","2":"Correct. Art 143 = Advisory jurisdiction.","3":"Art 226 is HC writ jurisdiction."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["82603690_Judiciary.pdf"], sourcePages: [4], tags: ["judiciary","advisory","article-143"] },
];

// ─── Chapter 19: Local Self Government ─────────────────────────────
export const lesson19: Lesson = {
  id: "local-self-government-01", moduleId: "local-self-government", title: "Local Self Government", order: 19,
  estimatedMinutes: 25, mastery: "not-started", completed: false,
  sourceFiles: ["76664800_Local_Self_Government_-_Class_Notes.pdf"], sourcePages: [1,2,3,4,5],
  blocks: [
    { id: "hook-19", type: "hook", content: "73rd and 74th Amendments transformed local governance in India. Panchayats and Municipalities finally got constitutional status after decades of being treated as state subjects. But did decentralisation really reach the grassroots?" },
    { id: "summary-19", type: "one-line-summary", content: "The 73rd Amendment (1992) constitutionalised Panchayati Raj (Part IX, Art 243-243O) with a three-tier system, and the 74th Amendment (1992) did the same for Municipalities (Part IXA, Art 243P-243ZG)." },
    { id: "remember-19", type: "remember", points: [
      "73rd Amendment (1992): Part IX (Panchayats), 11th Schedule (29 subjects)",
      "74th Amendment (1992): Part IXA (Municipalities), 12th Schedule (18 subjects)",
      "Three-tier Panchayati Raj: Village (Gram), Block (Intermediate), District",
      "States with population < 20 lakh need not have intermediate level",
      "Direct election to all levels; reservation for SC/ST/Women",
      "1/3rd seats reserved for women (minimum)",
      "5-year term for all Panchayat bodies",
      "State Election Commission (Art 243K) conducts local elections",
      "State Finance Commission (Art 243I) reviews financial position every 5 years",
      "Gram Sabha: Body of all registered voters in a Panchayat area",
      "Municipalities: 3 types — Nagar Panchayat (transitional), Municipal Council (smaller urban), Municipal Corporation (larger urban)",
      "Not applicable to: Nagaland, Meghalaya, Mizoram, J&K (earlier), 5th/6th Schedule areas, Manipur hill areas, Darjeeling Gorkha Hill Council",
    ]},
    { id: "source-ref-19", type: "source-reference", sourceFile: "76664800_Local_Self_Government_-_Class_Notes.pdf", sourcePages: [1,2,3,4,5] },
  ],
};

export const questions19: Question[] = [
  { id: "q-lsg-01", subject: "polity", lessonIds: ["local-self-government-01"], type: "single-correct",
    prompt: "Panchayati Raj was constitutionalised by which Amendment?", options: ["42nd Amendment", "73rd Amendment", "74th Amendment", "86th Amendment"],
    correctOptionIds: [1], explanation: "The 73rd Constitutional Amendment (1992) gave constitutional status to Panchayati Raj institutions by adding Part IX to the Constitution.", optionExplanations: {"0":"42nd dealt with emergency-era changes.","1":"Correct. 73rd Amendment.","2":"74th dealt with Municipalities.","3":"86th dealt with education."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["76664800_Local_Self_Government_-_Class_Notes.pdf"], sourcePages: [1], tags: ["local-government","73rd-amendment","panchayat"] },
  { id: "q-lsg-02", subject: "polity", lessonIds: ["local-self-government-01"], type: "single-correct",
    prompt: "The minimum reservation for women in Panchayati Raj institutions is:", options: ["25%", "33% (1/3rd)", "50%", "No minimum specified"],
    correctOptionIds: [1], explanation: "The 73rd Amendment provides that not less than 1/3rd of total seats shall be reserved for women. Many states have since increased this to 50%.", optionExplanations: {"0":"More than 25%.","1":"Correct. Minimum 1/3rd.","2":"50% is in some states but the constitutional minimum is 1/3rd.","3":"There is a minimum."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["76664800_Local_Self_Government_-_Class_Notes.pdf"], sourcePages: [2], tags: ["local-government","women-reservation"] },
  { id: "q-lsg-03", subject: "polity", lessonIds: ["local-self-government-01"], type: "single-correct",
    prompt: "The 11th Schedule of the Constitution contains:", options: ["18 subjects for Municipalities", "29 subjects for Panchayats", "Languages of India", "Anti-Defection provisions"],
    correctOptionIds: [1], explanation: "The 11th Schedule (added by 73rd Amendment) contains 29 functional items/subjects that may be devolved to Panchayats.", optionExplanations: {"0":"18 subjects for Municipalities is the 12th Schedule.","1":"Correct. 11th Schedule = 29 subjects for Panchayats.","2":"Languages are in the 8th Schedule.","3":"Anti-Defection is the 10th Schedule."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["76664800_Local_Self_Government_-_Class_Notes.pdf"], sourcePages: [3], tags: ["local-government","11th-schedule"] },
  { id: "q-lsg-04", subject: "polity", lessonIds: ["local-self-government-01"], type: "single-correct",
    prompt: "The Gram Sabha is:", options: ["A body of elected village representatives", "A body of all registered voters in the Panchayat area", "The elected head of the village Panchayat", "A committee appointed by the state government"],
    correctOptionIds: [1], explanation: "Gram Sabha is the body consisting of all persons registered as voters in the electoral roll of a Panchayat area. It is the foundation of the Panchayati Raj system — a direct democracy institution.", optionExplanations: {"0":"That's the Panchayat itself.","1":"Correct. All registered voters = Gram Sabha.","2":"That's the Sarpanch/Pradhan.","3":"It's not appointed."},
    difficulty: "easy", skill: "understanding", upscTrack: "prelims", sourceFiles: ["76664800_Local_Self_Government_-_Class_Notes.pdf"], sourcePages: [2], tags: ["local-government","gram-sabha"] },
];

// ─── Chapter 20: UTs and Scheduled Areas ───────────────────────────
export const lesson20: Lesson = {
  id: "union-territories-01", moduleId: "union-territories", title: "Union Territories, Scheduled and Tribal Areas", order: 20,
  estimatedMinutes: 20, mastery: "not-started", completed: false,
  sourceFiles: ["78224813_Union_Territories_Scheduled_and_Tribal_Areas.pdf"], sourcePages: [1,2,3,4],
  blocks: [
    { id: "hook-20", type: "hook", content: "Some areas in India are directly governed by the Centre, others have special tribal councils with their own laws. Why do these exceptions exist, and how are they governed differently from regular states?" },
    { id: "summary-20", type: "one-line-summary", content: "Union Territories are centrally administered under Article 239-241, while the 5th Schedule covers Scheduled Areas in states, and the 6th Schedule provides autonomous councils for tribal areas in four NE states." },
    { id: "remember-20", type: "remember", points: [
      "8 UTs currently: Delhi, Puducherry, Chandigarh, A&N Islands, D&N Haveli and Daman & Diu, Lakshadweep, J&K, Ladakh",
      "Delhi & Puducherry have legislatures; others don't",
      "UT Administrator appointed by President (called Lt. Governor in Delhi, Puducherry, J&K)",
      "5th Schedule: Scheduled Areas in any state except the 4 NE states",
      "Governor has special powers in 5th Schedule areas — can direct laws not to apply or apply with modifications",
      "Tribes Advisory Council in 5th Schedule states",
      "6th Schedule: Tribal areas in Assam, Meghalaya, Tripura, Mizoram",
      "6th Schedule provides Autonomous District Councils (ADCs) with legislative, judicial and executive powers",
      "ADCs can make laws on land, forests, village administration, inheritance, marriage, social customs",
    ]},
    { id: "source-ref-20", type: "source-reference", sourceFile: "78224813_Union_Territories_Scheduled_and_Tribal_Areas.pdf", sourcePages: [1,2,3,4] },
  ],
};

export const questions20: Question[] = [
  { id: "q-ut-01", subject: "polity", lessonIds: ["union-territories-01"], type: "single-correct",
    prompt: "Which Union Territories have their own legislature?", options: ["Delhi and Chandigarh", "Delhi and Puducherry", "Puducherry and Chandigarh", "All Union Territories"],
    correctOptionIds: [1], explanation: "Only Delhi (under Art 239AA) and Puducherry have their own elected legislatures among the Union Territories. J&K also has one now after its reorganisation.", optionExplanations: {"0":"Chandigarh doesn't have a legislature.","1":"Correct. Delhi and Puducherry.","2":"Chandigarh doesn't have one.","3":"Most UTs don't have legislatures."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78224813_Union_Territories_Scheduled_and_Tribal_Areas.pdf"], sourcePages: [1], tags: ["union-territories","legislature"] },
  { id: "q-ut-02", subject: "polity", lessonIds: ["union-territories-01"], type: "single-correct",
    prompt: "The 6th Schedule provides Autonomous District Councils for tribal areas in:", options: ["All North-Eastern states", "Assam, Meghalaya, Tripura and Mizoram", "Only Assam and Meghalaya", "Nagaland, Manipur and Arunachal Pradesh"],
    correctOptionIds: [1], explanation: "The 6th Schedule applies to four states: Assam, Meghalaya, Tripura and Mizoram. It provides for Autonomous District Councils and Regional Councils.", optionExplanations: {"0":"Not all NE states.","1":"Correct. Four specific states.","2":"Tripura and Mizoram are also included.","3":"These three are not covered under 6th Schedule."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["78224813_Union_Territories_Scheduled_and_Tribal_Areas.pdf"], sourcePages: [3], tags: ["6th-schedule","tribal-areas"] },
  { id: "q-ut-03", subject: "polity", lessonIds: ["union-territories-01"], type: "single-correct",
    prompt: "Under the 5th Schedule, who has special powers regarding Scheduled Areas?", options: ["President", "Governor of the state", "Chief Minister", "District Collector"],
    correctOptionIds: [1], explanation: "Under the 5th Schedule, the Governor of the state has special powers. He can direct that any Act of Parliament or state legislature shall not apply to a Scheduled Area or apply with modifications.", optionExplanations: {"0":"President's role is limited in 5th Schedule.","1":"Correct. Governor has special powers.","2":"CM doesn't have special powers here.","3":"Collector is an administrative officer."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["78224813_Union_Territories_Scheduled_and_Tribal_Areas.pdf"], sourcePages: [2], tags: ["5th-schedule","governor","scheduled-areas"] },
];
