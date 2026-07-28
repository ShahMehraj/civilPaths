import { Lesson, Question } from "@/types";

// ─── Chapter 21: Elections ─────────────────────────────────────────
export const lesson21: Lesson = {
  id: "elections-01", moduleId: "elections", title: "Elections & Associated Topics", order: 21,
  estimatedMinutes: 25, mastery: "not-started", completed: false,
  sourceFiles: ["78195257_Elections_Associated_Topics.pdf"], sourcePages: [1,2,3,4,5],
  blocks: [
    { id: "hook-21", type: "hook", content: "India conducts the world's largest elections — over 900 million voters. The Election Commission, a constitutional body, ensures free and fair polls. But can the EC disqualify candidates? Can courts interfere in election disputes?" },
    { id: "summary-21", type: "one-line-summary", content: "Part XV (Art 324-329) provides for the Election Commission — an independent constitutional body responsible for superintendence, direction and control of elections to Parliament, state legislatures, and offices of President and VP." },
    { id: "remember-21", type: "remember", points: [
      "Art 324: Election Commission — superintendence, direction and control of all elections",
      "EC composition: CEC + other ECs (currently CEC + 2 ECs = 3 members)",
      "Appointed by President; CEC can only be removed like SC judge (impeachment process)",
      "Other ECs can be removed on CEC's recommendation",
      "Art 325: No person ineligible for electoral roll on grounds of religion, race, caste, sex",
      "Art 326: Universal adult suffrage (18+ years; reduced from 21 by 61st Amendment, 1988)",
      "FPTP (First Past The Post) system for Lok Sabha and state assemblies",
      "Proportional representation with single transferable vote for President, VP, Rajya Sabha, state councils",
      "Anti-Defection Law: 10th Schedule, 52nd Amendment (1985), modified by 91st Amendment (2003)",
      "Disqualification decided by Speaker/Chairman (10th Schedule); challenged only in courts",
      "91st Amendment: Removed exception for 1/3rd split; now only merger (2/3rds) is exempt",
    ]},
    { id: "source-ref-21", type: "source-reference", sourceFile: "78195257_Elections_Associated_Topics.pdf", sourcePages: [1,2,3,4,5] },
  ],
};

export const questions21: Question[] = [
  { id: "q-elec-01", subject: "polity", lessonIds: ["elections-01"], type: "single-correct",
    prompt: "The Election Commission of India is constituted under:", options: ["Article 280", "Article 315", "Article 324", "Article 352"],
    correctOptionIds: [2], explanation: "Article 324 provides for the Election Commission vested with superintendence, direction and control of all elections.", optionExplanations: {"0":"Art 280 = Finance Commission.","1":"Art 315 = UPSC.","2":"Correct. Art 324 = Election Commission.","3":"Art 352 = National Emergency."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78195257_Elections_Associated_Topics.pdf"], sourcePages: [1], tags: ["elections","article-324","ec"] },
  { id: "q-elec-02", subject: "polity", lessonIds: ["elections-01"], type: "single-correct",
    prompt: "The voting age was reduced from 21 to 18 years by:", options: ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
    correctOptionIds: [2], explanation: "The 61st Constitutional Amendment (1988) reduced the voting age from 21 to 18 years by amending Article 326.", optionExplanations: {"0":"42nd dealt with many emergency-era changes.","1":"44th restored several provisions.","2":"Correct. 61st Amendment (1988).","3":"73rd dealt with Panchayats."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78195257_Elections_Associated_Topics.pdf"], sourcePages: [2], tags: ["elections","voting-age","61st-amendment"] },
  { id: "q-elec-03", subject: "polity", lessonIds: ["elections-01"], type: "single-correct",
    prompt: "The Anti-Defection Law is contained in:", options: ["Part III of the Constitution", "9th Schedule", "10th Schedule", "11th Schedule"],
    correctOptionIds: [2], explanation: "The Anti-Defection Law is contained in the 10th Schedule, added by the 52nd Amendment Act, 1985.", optionExplanations: {"0":"Part III = Fundamental Rights.","1":"9th Schedule = judicial review protection.","2":"Correct. 10th Schedule.","3":"11th Schedule = Panchayat subjects."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78195257_Elections_Associated_Topics.pdf"], sourcePages: [4], tags: ["elections","anti-defection","10th-schedule"] },
  { id: "q-elec-04", subject: "polity", lessonIds: ["elections-01"], type: "single-correct",
    prompt: "Under the Anti-Defection Law (after 91st Amendment), a merger is valid if:", options: ["1/3rd of members agree", "1/2 of members agree", "2/3rds of members merge with another party", "Unanimous decision of the party"],
    correctOptionIds: [2], explanation: "After the 91st Amendment (2003), the exception for a 'split' (1/3rd) was removed. Only a 'merger' is exempt from disqualification — where 2/3rds of the members of a legislative party agree to merge.", optionExplanations: {"0":"1/3rd split exception was removed by 91st Amendment.","1":"Not 1/2.","2":"Correct. 2/3rds for merger.","3":"Unanimity not required."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["78195257_Elections_Associated_Topics.pdf"], sourcePages: [5], tags: ["elections","anti-defection","merger"] },
  { id: "q-elec-05", subject: "polity", lessonIds: ["elections-01"], type: "single-correct",
    prompt: "The CEC can be removed from office:", options: ["By the President at any time", "Like a Supreme Court judge through impeachment", "By the Prime Minister", "Cannot be removed before completing term"],
    correctOptionIds: [1], explanation: "The CEC can only be removed in the same manner and on the same grounds as a judge of the Supreme Court (by President on Parliamentary address with special majority). This ensures independence.", optionExplanations: {"0":"President cannot remove at will.","1":"Correct. Same as SC judge removal.","2":"PM cannot remove.","3":"Can be removed through proper process."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["78195257_Elections_Associated_Topics.pdf"], sourcePages: [1], tags: ["elections","cec","removal"] },
];

// ─── Chapter 22: Constitutional Bodies ─────────────────────────────
export const lesson22: Lesson = {
  id: "constitutional-bodies-01", moduleId: "constitutional-bodies", title: "Constitutional Bodies", order: 22,
  estimatedMinutes: 25, mastery: "not-started", completed: false,
  sourceFiles: ["78375527_Constitutional_Bodies.pdf"], sourcePages: [1,2,3,4,5,6],
  blocks: [
    { id: "hook-22", type: "hook", content: "Beyond the three branches of government, the Constitution created independent bodies — the Election Commission, CAG, Finance Commission, UPSC — with special protections. Why are they constitutional rather than merely statutory?" },
    { id: "summary-22", type: "one-line-summary", content: "Constitutional bodies are established directly by the Constitution and include the Election Commission (Art 324), CAG (Art 148), Finance Commission (Art 280), UPSC (Art 315), and others, enjoying independence and security of tenure." },
    { id: "remember-22", type: "remember", points: [
      "Election Commission: Art 324 — conducts elections",
      "CAG (Comptroller and Auditor General): Art 148 — audits all government expenditure",
      "CAG appointed by President, removed like SC judge, reports to President (Union) / Governor (State)",
      "Finance Commission: Art 280 — recommends distribution of taxes between Centre and States",
      "FC appointed by President every 5 years; currently on 16th FC",
      "UPSC: Art 315-323 — conducts Civil Services exams, advises on disciplinary matters",
      "UPSC Chairman/members appointed by President, removed like SC judge",
      "State PSC: Art 315 — same at state level",
      "National Commission for SCs: Art 338",
      "National Commission for STs: Art 338A",
      "National Commission for BCs: Art 338B (added by 102nd Amendment)",
      "Special Officer for Linguistic Minorities: Art 350B",
      "Inter-State Council: Art 263",
      "GST Council: Art 279A (added by 101st Amendment)",
    ]},
    { id: "source-ref-22", type: "source-reference", sourceFile: "78375527_Constitutional_Bodies.pdf", sourcePages: [1,2,3,4,5,6] },
  ],
};

export const questions22: Question[] = [
  { id: "q-cb-01", subject: "polity", lessonIds: ["constitutional-bodies-01"], type: "single-correct",
    prompt: "The CAG is appointed by:", options: ["Chief Justice of India", "Parliament", "President of India", "Prime Minister"],
    correctOptionIds: [2], explanation: "The Comptroller and Auditor General of India is appointed by the President. The CAG can only be removed in the same manner as a SC judge.", optionExplanations: {"0":"CJI doesn't appoint CAG.","1":"Parliament doesn't appoint CAG.","2":"Correct. Appointed by the President.","3":"PM doesn't directly appoint."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78375527_Constitutional_Bodies.pdf"], sourcePages: [2], tags: ["constitutional-bodies","cag","appointment"] },
  { id: "q-cb-02", subject: "polity", lessonIds: ["constitutional-bodies-01"], type: "single-correct",
    prompt: "The Finance Commission is constituted under:", options: ["Article 324", "Article 148", "Article 280", "Article 315"],
    correctOptionIds: [2], explanation: "Article 280 provides for the Finance Commission which recommends the distribution of tax revenues between the Centre and States.", optionExplanations: {"0":"Art 324 = Election Commission.","1":"Art 148 = CAG.","2":"Correct. Art 280 = Finance Commission.","3":"Art 315 = UPSC."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78375527_Constitutional_Bodies.pdf"], sourcePages: [3], tags: ["constitutional-bodies","finance-commission","article-280"] },
  { id: "q-cb-03", subject: "polity", lessonIds: ["constitutional-bodies-01"], type: "single-correct",
    prompt: "Which Article establishes UPSC?", options: ["Article 280", "Article 312", "Article 315", "Article 324"],
    correctOptionIds: [2], explanation: "Articles 315-323 deal with UPSC. Article 315 provides for the establishment of Public Service Commissions for the Union and States.", optionExplanations: {"0":"Art 280 = Finance Commission.","1":"Art 312 = All India Services.","2":"Correct. Art 315 = UPSC.","3":"Art 324 = Election Commission."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78375527_Constitutional_Bodies.pdf"], sourcePages: [4], tags: ["constitutional-bodies","upsc","article-315"] },
  { id: "q-cb-04", subject: "polity", lessonIds: ["constitutional-bodies-01"], type: "single-correct",
    prompt: "The National Commission for Backward Classes was given constitutional status by:", options: ["101st Amendment", "102nd Amendment", "103rd Amendment", "104th Amendment"],
    correctOptionIds: [1], explanation: "The 102nd Amendment (2018) inserted Article 338B giving constitutional status to the National Commission for Backward Classes.", optionExplanations: {"0":"101st = GST.","1":"Correct. 102nd Amendment.","2":"103rd = EWS reservation.","3":"104th = extending SC/ST reservation."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["78375527_Constitutional_Bodies.pdf"], sourcePages: [5], tags: ["constitutional-bodies","ncbc","102nd-amendment"] },
];

// ─── Chapter 23: Non-Constitutional Bodies ─────────────────────────
export const lesson23: Lesson = {
  id: "non-constitutional-bodies-01", moduleId: "non-constitutional-bodies", title: "Non-Constitutional Bodies", order: 23,
  estimatedMinutes: 20, mastery: "not-started", completed: false,
  sourceFiles: ["78375528_Non-Constitutional_Bodies.pdf"], sourcePages: [1,2,3,4],
  blocks: [
    { id: "hook-23", type: "hook", content: "NITI Aayog, National Human Rights Commission, CBI, Lokpal — these powerful institutions shape governance daily, yet none appear in the Constitution. They exist through statutes or executive resolutions. Does that make them less important?" },
    { id: "summary-23", type: "one-line-summary", content: "Non-constitutional bodies are established by statute (like NHRC, CBI, Lokpal) or executive resolution (like NITI Aayog, NDC) rather than by the Constitution, but play crucial roles in governance." },
    { id: "remember-23", type: "remember", points: [
      "NITI Aayog: Replaced Planning Commission (2015), think tank, no powers to allocate funds",
      "National Development Council (NDC): Established by executive resolution (1952)",
      "NHRC: Protection of Human Rights Act, 1993; headed by retired CJI",
      "CBI: Established under Delhi Special Police Establishment Act, 1946",
      "Lokpal: Lokpal and Lokayuktas Act, 2013; investigates corruption against public functionaries",
      "National Investigation Agency (NIA): NIA Act, 2008; terror-related cases",
      "Central Information Commission: RTI Act, 2005",
      "National Green Tribunal (NGT): NGT Act, 2010; environmental disputes",
    ]},
    { id: "source-ref-23", type: "source-reference", sourceFile: "78375528_Non-Constitutional_Bodies.pdf", sourcePages: [1,2,3,4] },
  ],
};

export const questions23: Question[] = [
  { id: "q-ncb-01", subject: "polity", lessonIds: ["non-constitutional-bodies-01"], type: "single-correct",
    prompt: "NITI Aayog replaced:", options: ["Finance Commission", "Planning Commission", "National Development Council", "Inter-State Council"],
    correctOptionIds: [1], explanation: "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission in 2015. Unlike the Planning Commission, it doesn't allocate funds to states.", optionExplanations: {"0":"FC is constitutional and continues.","1":"Correct. Replaced Planning Commission.","2":"NDC technically still exists.","3":"ISC is constitutional under Art 263."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78375528_Non-Constitutional_Bodies.pdf"], sourcePages: [1], tags: ["non-constitutional","niti-aayog"] },
  { id: "q-ncb-02", subject: "polity", lessonIds: ["non-constitutional-bodies-01"], type: "single-correct",
    prompt: "The NHRC is headed by:", options: ["A retired Supreme Court judge", "A retired Chief Justice of India", "A sitting High Court judge", "The Vice President"],
    correctOptionIds: [1], explanation: "The Chairperson of NHRC must be a retired Chief Justice of India (as per the Protection of Human Rights Act, 1993, amended in 2019).", optionExplanations: {"0":"Not just any retired SC judge — specifically retired CJI.","1":"Correct. Retired CJI.","2":"Not an HC judge.","3":"VP has no role in NHRC."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["78375528_Non-Constitutional_Bodies.pdf"], sourcePages: [2], tags: ["non-constitutional","nhrc","chairperson"] },
  { id: "q-ncb-03", subject: "polity", lessonIds: ["non-constitutional-bodies-01"], type: "single-correct",
    prompt: "The Lokpal was established under:", options: ["Constitutional provision", "Lokpal and Lokayuktas Act, 2013", "Executive order of the President", "RTI Act, 2005"],
    correctOptionIds: [1], explanation: "The Lokpal was established under the Lokpal and Lokayuktas Act, 2013 to investigate corruption allegations against public functionaries including the PM.", optionExplanations: {"0":"Not in the Constitution.","1":"Correct. Lokpal Act, 2013.","2":"Not an executive order.","3":"RTI Act established CIC, not Lokpal."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78375528_Non-Constitutional_Bodies.pdf"], sourcePages: [3], tags: ["non-constitutional","lokpal"] },
];

// ─── Chapter 24: Special Provisions ────────────────────────────────
export const lesson24: Lesson = {
  id: "special-provisions-01", moduleId: "special-provisions", title: "Special Provisions for Some States", order: 24,
  estimatedMinutes: 20, mastery: "not-started", completed: false,
  sourceFiles: ["78468840_Special_Provisions_for_some_States.pdf"], sourcePages: [1,2,3,4],
  blocks: [
    { id: "hook-24", type: "hook", content: "India's diversity required special constitutional provisions for certain states. Article 370 (now abrogated), Article 371, and specific protections for North-Eastern states reflect this asymmetric federalism." },
    { id: "summary-24", type: "one-line-summary", content: "Part XXI (Art 369-392) and Art 371-371J provide special provisions for states like Maharashtra, Gujarat, Nagaland, Assam, Manipur, Sikkim, Mizoram, Arunachal Pradesh, Goa, and Karnataka." },
    { id: "remember-24", type: "remember", points: [
      "Art 370: Special status to J&K — ABROGATED in August 2019 by Presidential Order",
      "Art 371: Special provisions for Maharashtra and Gujarat (development boards for certain regions)",
      "Art 371A: Nagaland — Acts of Parliament on religious/social practices, customary law, land don't apply unless state assembly decides",
      "Art 371B: Assam — committee of tribal members",
      "Art 371C: Manipur — committee for hill areas",
      "Art 371D & E: Andhra Pradesh/Telangana — equitable opportunities, administrative tribunal",
      "Art 371F: Sikkim — special provisions after merger (1975)",
      "Art 371G: Mizoram — similar to Nagaland",
      "Art 371H: Arunachal Pradesh — Governor's special responsibility",
      "Art 371I: Goa — legislative assembly of 30 members minimum",
      "Art 371J: Karnataka — Hyderabad-Karnataka development board (added by 98th Amendment, 2012)",
    ]},
    { id: "source-ref-24", type: "source-reference", sourceFile: "78468840_Special_Provisions_for_some_States.pdf", sourcePages: [1,2,3,4] },
  ],
};

export const questions24: Question[] = [
  { id: "q-sp-01", subject: "polity", lessonIds: ["special-provisions-01"], type: "single-correct",
    prompt: "Article 370 of the Indian Constitution:", options: ["Still provides special status to J&K", "Was abrogated in 2019", "Relates to Nagaland", "Relates to North-Eastern states generally"],
    correctOptionIds: [1], explanation: "Article 370, which granted special status to Jammu & Kashmir, was effectively abrogated in August 2019 through a Presidential Order and the J&K Reorganisation Act.", optionExplanations: {"0":"No longer operative.","1":"Correct. Abrogated in 2019.","2":"Nagaland is Art 371A.","3":"NE states have Art 371A-371H."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78468840_Special_Provisions_for_some_States.pdf"], sourcePages: [1], tags: ["special-provisions","article-370"] },
  { id: "q-sp-02", subject: "polity", lessonIds: ["special-provisions-01"], type: "single-correct",
    prompt: "Article 371A provides special provisions for:", options: ["Assam", "Nagaland", "Sikkim", "Manipur"],
    correctOptionIds: [1], explanation: "Article 371A provides special provisions for Nagaland — Parliament's Acts on religious/social practices, customary law, land and resources don't apply unless the state assembly resolves so.", optionExplanations: {"0":"Assam = Art 371B.","1":"Correct. Art 371A = Nagaland.","2":"Sikkim = Art 371F.","3":"Manipur = Art 371C."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["78468840_Special_Provisions_for_some_States.pdf"], sourcePages: [2], tags: ["special-provisions","article-371a","nagaland"] },
  { id: "q-sp-03", subject: "polity", lessonIds: ["special-provisions-01"], type: "single-correct",
    prompt: "Art 371J (added by 98th Amendment) relates to:", options: ["Goa", "Telangana", "Karnataka (Hyderabad-Karnataka region)", "Andhra Pradesh"],
    correctOptionIds: [2], explanation: "Article 371J was added by the 98th Amendment (2012) for establishment of a separate development board for Hyderabad-Karnataka region.", optionExplanations: {"0":"Goa = Art 371I.","1":"Telangana = Art 371D/E (shared with AP).","2":"Correct. Karnataka (HK region).","3":"AP = Art 371D."},
    difficulty: "hard", skill: "recall", upscTrack: "prelims", sourceFiles: ["78468840_Special_Provisions_for_some_States.pdf"], sourcePages: [4], tags: ["special-provisions","article-371j","karnataka"] },
];

// ─── Chapter 25: Official Languages ────────────────────────────────
export const lesson25: Lesson = {
  id: "official-languages-01", moduleId: "official-languages", title: "Official Languages", order: 25,
  estimatedMinutes: 15, mastery: "not-started", completed: false,
  sourceFiles: ["78468841_Official_Languages.pdf"], sourcePages: [1,2,3],
  blocks: [
    { id: "hook-25", type: "hook", content: "India has no 'national language'. Hindi in Devanagari script is the official language of the Union, and English continues as an associate official language. How did the Constitution handle India's linguistic diversity?" },
    { id: "summary-25", type: "one-line-summary", content: "Part XVII (Art 343-351) deals with official languages — Hindi in Devanagari is the official language of the Union, English continues for official purposes, and the 8th Schedule lists 22 recognised languages." },
    { id: "remember-25", type: "remember", points: [
      "Part XVII: Articles 343-351",
      "Art 343: Hindi in Devanagari script = official language of Union",
      "Art 343: English to continue for 15 years (till 1965) — extended by Official Languages Act, 1963",
      "Art 344: Commission and Committee on Official Languages",
      "Art 345: State legislatures can adopt any language for official purposes",
      "Art 348: Language of SC, HC and Acts = English (unless Parliament provides otherwise)",
      "Art 350: Right to submit representation in any language",
      "Art 350A: Instruction in mother tongue at primary stage for linguistic minorities",
      "Art 350B: Special Officer for Linguistic Minorities",
      "Art 351: Directive to develop Hindi",
      "No 'national language' concept in the Constitution",
      "Three-language formula (not constitutional — NEP recommendation)",
      "8th Schedule: 22 languages currently",
    ]},
    { id: "source-ref-25", type: "source-reference", sourceFile: "78468841_Official_Languages.pdf", sourcePages: [1,2,3] },
  ],
};

export const questions25: Question[] = [
  { id: "q-lang-01", subject: "polity", lessonIds: ["official-languages-01"], type: "single-correct",
    prompt: "The official language of the Union of India is:", options: ["English", "Hindi and English both equally", "Hindi in Devanagari script", "All scheduled languages"],
    correctOptionIds: [2], explanation: "Article 343(1) declares that 'the official language of the Union shall be Hindi in Devanagari script'. English continues as an associate official language.", optionExplanations: {"0":"English is associate, not primary official language.","1":"They are not equal — Hindi is official, English is associate.","2":"Correct. Hindi in Devanagari script.","3":"8th Schedule languages are recognised, not all official."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78468841_Official_Languages.pdf"], sourcePages: [1], tags: ["official-languages","hindi","article-343"] },
  { id: "q-lang-02", subject: "polity", lessonIds: ["official-languages-01"], type: "single-correct",
    prompt: "The language of the Supreme Court and High Courts is:", options: ["Hindi", "Hindi and English", "English", "Any language the judge prefers"],
    correctOptionIds: [2], explanation: "Article 348 provides that the language of the Supreme Court and High Courts shall be English, unless Parliament by law provides otherwise (which hasn't been done for SC).", optionExplanations: {"0":"Not Hindi alone.","1":"Not both — English only for courts.","2":"Correct. English (Art 348).","3":"Courts use English as per Constitution."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78468841_Official_Languages.pdf"], sourcePages: [2], tags: ["official-languages","courts","article-348"] },
  { id: "q-lang-03", subject: "polity", lessonIds: ["official-languages-01"], type: "single-correct",
    prompt: "India has:", options: ["A national language (Hindi)", "No national language — only official language", "Two national languages", "22 national languages"],
    correctOptionIds: [1], explanation: "The Indian Constitution does NOT use the term 'national language' anywhere. Hindi is the 'official language of the Union' — not the national language.", optionExplanations: {"0":"Hindi is official, not national.","1":"Correct. No national language concept exists.","2":"Incorrect.","3":"22 are scheduled/recognised, not national."},
    difficulty: "easy", skill: "understanding", upscTrack: "prelims", sourceFiles: ["78468841_Official_Languages.pdf"], sourcePages: [1], tags: ["official-languages","national-language"] },
];

// ─── Chapters 26-32: Shorter chapters ──────────────────────────────

export const lesson26: Lesson = {
  id: "cooperative-sector-01", moduleId: "cooperative-sector", title: "Cooperative Sector in India", order: 26,
  estimatedMinutes: 15, mastery: "not-started", completed: false,
  sourceFiles: ["78468842_Cooperative_Sector_in_India.pdf"], sourcePages: [1,2,3],
  blocks: [
    { id: "hook-26", type: "hook", content: "The 97th Amendment gave constitutional status to cooperative societies. Why was this necessary, and what rights do members now have?" },
    { id: "summary-26", type: "one-line-summary", content: "The 97th Amendment (2011) added Part IXB (Art 243ZH-243ZT) giving constitutional status to cooperatives, making the right to form cooperatives a fundamental right under Art 19(1)(c)." },
    { id: "remember-26", type: "remember", points: [
      "97th Amendment (2011): Constitutional status to cooperatives",
      "Part IXB added (Art 243ZH to 243ZT)",
      "Art 19(1)(c): Right to form cooperatives made a Fundamental Right",
      "Art 43B (DPSP): State shall promote voluntary formation of cooperatives",
      "Provides for democratic functioning, professional management, regular elections, auditing",
      "Maximum board term: 5 years; election within 6 months of expiry",
      "Reservation for SC/ST and women on boards",
    ]},
    { id: "source-ref-26", type: "source-reference", sourceFile: "78468842_Cooperative_Sector_in_India.pdf", sourcePages: [1,2,3] },
  ],
};

export const questions26: Question[] = [
  { id: "q-coop-01", subject: "polity", lessonIds: ["cooperative-sector-01"], type: "single-correct",
    prompt: "Constitutional status to cooperative societies was given by:", options: ["73rd Amendment", "86th Amendment", "97th Amendment", "101st Amendment"],
    correctOptionIds: [2], explanation: "The 97th Amendment Act (2011) gave constitutional status to cooperatives by adding Part IXB and making the right to form cooperatives an FR.", optionExplanations: {"0":"73rd = Panchayats.","1":"86th = Right to Education.","2":"Correct. 97th Amendment.","3":"101st = GST."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["78468842_Cooperative_Sector_in_India.pdf"], sourcePages: [1], tags: ["cooperatives","97th-amendment"] },
];

export const lesson27: Lesson = {
  id: "governance-01", moduleId: "governance", title: "Governance", order: 27,
  estimatedMinutes: 20, mastery: "not-started", completed: false,
  sourceFiles: ["78468844_Governance.pdf"], sourcePages: [1,2,3,4],
  blocks: [
    { id: "hook-27", type: "hook", content: "Good governance goes beyond constitutional structures. It encompasses transparency, accountability, citizen participation, and rule of law. RTI, e-governance, and decentralisation are modern tools — how do they enhance democratic governance?" },
    { id: "summary-27", type: "one-line-summary", content: "Governance in India involves transparency (RTI Act), accountability (CAG, Lokpal), decentralisation (73rd/74th Amendments), e-governance, citizen charters, and social audit mechanisms." },
    { id: "remember-27", type: "remember", points: [
      "RTI Act, 2005: Right to access information held by public authorities",
      "Citizen's Charter: Commitment to standards of service delivery",
      "Social Audit: Community-based monitoring of government schemes",
      "E-governance: Digital India, UMANG, DigiLocker, e-District",
      "Lokpal (Centre) and Lokayukta (State): Anti-corruption institutions",
      "Decentralisation: 73rd/74th Amendments",
      "Accountability mechanisms: CAG, Parliamentary Committees, Judiciary",
      "Art 311: Protection of civil servants — cannot be dismissed without inquiry",
      "Administrative Reforms Commission: 1st (1966, Morarji Desai) and 2nd (2005, Veerappa Moily)",
    ]},
    { id: "source-ref-27", type: "source-reference", sourceFile: "78468844_Governance.pdf", sourcePages: [1,2,3,4] },
  ],
};

export const questions27: Question[] = [
  { id: "q-gov-01", subject: "polity", lessonIds: ["governance-01"], type: "single-correct",
    prompt: "The Right to Information Act was enacted in:", options: ["2000", "2003", "2005", "2010"],
    correctOptionIds: [2], explanation: "The Right to Information Act was enacted in 2005. It replaced the Freedom of Information Act, 2002.", optionExplanations: {"0":"Incorrect.","1":"Freedom of Information Act was 2002.","2":"Correct. RTI Act, 2005.","3":"Incorrect."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["78468844_Governance.pdf"], sourcePages: [2], tags: ["governance","rti"] },
  { id: "q-gov-02", subject: "polity", lessonIds: ["governance-01"], type: "single-correct",
    prompt: "The 2nd Administrative Reforms Commission was headed by:", options: ["Morarji Desai", "Veerappa Moily", "L.K. Advani", "K. Santhanam"],
    correctOptionIds: [1], explanation: "The 2nd ARC (2005) was headed by Veerappa Moily. The 1st ARC (1966) was headed by Morarji Desai.", optionExplanations: {"0":"Morarji Desai headed the 1st ARC.","1":"Correct. Veerappa Moily headed 2nd ARC.","2":"Not related to ARC.","3":"Santhanam headed the anti-corruption committee."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["78468844_Governance.pdf"], sourcePages: [3], tags: ["governance","arc"] },
];

export const lesson28: Lesson = {
  id: "nhrc-01", moduleId: "nhrc", title: "National Human Rights Commission", order: 28,
  estimatedMinutes: 15, mastery: "not-started", completed: false,
  sourceFiles: ["80774431_NHRC.pdf"], sourcePages: [1,2,3],
  blocks: [
    { id: "hook-28", type: "hook", content: "The NHRC investigates violations of human rights by state agencies. But it has no power to punish — only recommend. Is a watchdog without teeth effective?" },
    { id: "summary-28", type: "one-line-summary", content: "NHRC is a statutory body under the Protection of Human Rights Act, 1993 (amended 2019), headed by a retired CJI, with powers to inquire into human rights violations." },
    { id: "remember-28", type: "remember", points: [
      "Established under Protection of Human Rights Act, 1993 (amended 2006, 2019)",
      "Chairperson: Retired CJI (earlier retired CJI only; after 2019 amendment, sitting/retired CJI)",
      "Members: One serving/retired SC judge, one serving/retired HC judge, 2 persons with HR knowledge, + 3 deemed members (Chairpersons of NCW, NCM, NCSC/NCST)",
      "Appointed by President on recommendation of committee (PM, Speaker, Home Minister, Leaders of Opposition, RS Deputy Chairman)",
      "Term: 3 years or 70 years age, whichever earlier (after 2019 amendment — earlier 5 years/70)",
      "Powers: Investigate, visit jails, recommend compensation, recommend prosecution",
      "Limitations: Cannot investigate if complaint is >1 year old, no binding powers, cannot investigate armed forces directly",
    ]},
    { id: "source-ref-28", type: "source-reference", sourceFile: "80774431_NHRC.pdf", sourcePages: [1,2,3] },
  ],
};

export const questions28: Question[] = [
  { id: "q-nhrc-01", subject: "polity", lessonIds: ["nhrc-01"], type: "single-correct",
    prompt: "NHRC was established under:", options: ["Constitutional provision", "Protection of Human Rights Act, 1993", "RTI Act, 2005", "Executive order"],
    correctOptionIds: [1], explanation: "NHRC is a statutory body established under the Protection of Human Rights Act, 1993.", optionExplanations: {"0":"Not constitutional.","1":"Correct. PHRA, 1993.","2":"RTI created CIC.","3":"Not an executive order."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["80774431_NHRC.pdf"], sourcePages: [1], tags: ["nhrc","statutory"] },
  { id: "q-nhrc-02", subject: "polity", lessonIds: ["nhrc-01"], type: "single-correct",
    prompt: "The Chairperson of NHRC must be:", options: ["A sitting Supreme Court judge", "A retired Chief Justice of India", "Any retired judge", "A retired High Court Chief Justice"],
    correctOptionIds: [1], explanation: "After the 2019 amendment, the chairperson can be a retired CJI or a sitting/retired SC judge. However, the conventional requirement remains a retired CJI.", optionExplanations: {"0":"Not necessarily sitting.","1":"Correct. Retired CJI (or after 2019 amendment, sitting/retired CJI).","2":"Not any judge — specific qualifications.","3":"Not HC level."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["80774431_NHRC.pdf"], sourcePages: [1], tags: ["nhrc","chairperson"] },
];

export const lesson29: Lesson = {
  id: "ncm-01", moduleId: "ncm", title: "National Commission for Minorities", order: 29,
  estimatedMinutes: 12, mastery: "not-started", completed: false,
  sourceFiles: ["80774432_NCM.pdf"], sourcePages: [1,2],
  blocks: [
    { id: "summary-29", type: "one-line-summary", content: "NCM is a statutory body under the National Commission for Minorities Act, 1992, protecting the rights of religious and linguistic minorities notified by the government." },
    { id: "remember-29", type: "remember", points: [
      "Established: National Commission for Minorities Act, 1992",
      "Composition: Chairperson + Vice-Chairperson + 5 members (from minority communities)",
      "Notified minorities: Muslims, Christians, Sikhs, Buddhists, Zoroastrians (Parsis), Jains (added 2014)",
      "Functions: Safeguard minority rights, investigate complaints, advise government, review safeguards",
      "Can summon witnesses, requisition documents (civil court powers)",
      "Recommendatory body — recommendations not binding",
    ]},
    { id: "source-ref-29", type: "source-reference", sourceFile: "80774432_NCM.pdf", sourcePages: [1,2] },
  ],
};

export const questions29: Question[] = [
  { id: "q-ncm-01", subject: "polity", lessonIds: ["ncm-01"], type: "single-correct",
    prompt: "How many religious communities are currently notified as minorities?", options: ["5", "6", "7", "8"],
    correctOptionIds: [1], explanation: "Six communities are notified as minorities: Muslims, Christians, Sikhs, Buddhists, Zoroastrians (Parsis) and Jains (added in 2014).", optionExplanations: {"0":"5 was before Jains were added.","1":"Correct. 6 communities.","2":"Incorrect.","3":"Incorrect."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["80774432_NCM.pdf"], sourcePages: [1], tags: ["ncm","minorities","count"] },
];

export const lesson30: Lesson = {
  id: "ncpcr-01", moduleId: "ncpcr", title: "National Commission for Protection of Child Rights", order: 30,
  estimatedMinutes: 12, mastery: "not-started", completed: false,
  sourceFiles: ["80774433_NCPCR.pdf"], sourcePages: [1,2],
  blocks: [
    { id: "summary-30", type: "one-line-summary", content: "NCPCR is a statutory body under the Commission for Protection of Child Rights Act, 2005, monitoring implementation of child rights under the Constitution and international conventions." },
    { id: "remember-30", type: "remember", points: [
      "Established: Commission for Protection of Child Rights Act, 2005",
      "Child = person below 18 years",
      "Functions: Examine safeguards for child rights, review laws, investigate complaints, inspect institutions",
      "Reports to Central Government",
      "Has civil court powers for investigation",
      "State-level counterpart: SCPCR in each state",
    ]},
    { id: "source-ref-30", type: "source-reference", sourceFile: "80774433_NCPCR.pdf", sourcePages: [1,2] },
  ],
};

export const questions30: Question[] = [
  { id: "q-ncpcr-01", subject: "polity", lessonIds: ["ncpcr-01"], type: "single-correct",
    prompt: "NCPCR defines 'child' as a person below:", options: ["14 years", "16 years", "18 years", "21 years"],
    correctOptionIds: [2], explanation: "Under the CPCR Act, 2005, a 'child' means a person below 18 years of age.", optionExplanations: {"0":"14 is for child labour law purposes.","1":"Incorrect.","2":"Correct. Below 18 years.","3":"Incorrect."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["80774433_NCPCR.pdf"], sourcePages: [1], tags: ["ncpcr","child-definition"] },
];

export const lesson31: Lesson = {
  id: "ncw-01", moduleId: "ncw", title: "National Commission for Women", order: 31,
  estimatedMinutes: 12, mastery: "not-started", completed: false,
  sourceFiles: ["80774434_NCW.pdf"], sourcePages: [1,2],
  blocks: [
    { id: "summary-31", type: "one-line-summary", content: "NCW is a statutory body under the National Commission for Women Act, 1990, safeguarding women's rights and advising the government on policies affecting women." },
    { id: "remember-31", type: "remember", points: [
      "Established: National Commission for Women Act, 1990; started functioning January 1992",
      "Composition: Chairperson + 5 members + Member-Secretary (all nominated by Central Govt)",
      "Functions: Review constitutional/legal safeguards for women, recommend amendments, investigate complaints",
      "Look into complaints of deprivation of women's rights",
      "Inspect institutions for women (jails, remand homes, etc.)",
      "Fund litigation involving women's rights issues",
    ]},
    { id: "source-ref-31", type: "source-reference", sourceFile: "80774434_NCW.pdf", sourcePages: [1,2] },
  ],
};

export const questions31: Question[] = [
  { id: "q-ncw-01", subject: "polity", lessonIds: ["ncw-01"], type: "single-correct",
    prompt: "NCW was established under:", options: ["Constitutional provision (Art 338)", "National Commission for Women Act, 1990", "Protection of Women from Domestic Violence Act, 2005", "Executive order"],
    correctOptionIds: [1], explanation: "NCW was established under the National Commission for Women Act, 1990 and started functioning in January 1992.", optionExplanations: {"0":"Art 338 is for SCs.","1":"Correct. NCW Act, 1990.","2":"This is a separate law.","3":"Not executive order."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["80774434_NCW.pdf"], sourcePages: [1], tags: ["ncw","statutory"] },
];

export const lesson32: Lesson = {
  id: "key-judgements-01", moduleId: "key-judgements", title: "Key Judgements", order: 32,
  estimatedMinutes: 30, mastery: "not-started", completed: false,
  sourceFiles: ["80888096_Key_Judgements_-_Class_Notes.pdf"], sourcePages: [1,2,3,4,5,6],
  blocks: [
    { id: "hook-32", type: "hook", content: "From Kesavananda Bharati to the Privacy judgment, landmark Supreme Court cases have shaped constitutional law in India. These cases are where the Constitution comes alive — where abstract principles become concrete rights." },
    { id: "summary-32", type: "one-line-summary", content: "Key constitutional judgments have established basic structure doctrine, expanded Article 21, defined secularism, and shaped Centre-State relations through landmark decisions of the Supreme Court." },
    { id: "remember-32", type: "remember", points: [
      "Shankari Prasad (1951): FRs can be amended; amendment is not 'law' under Art 13",
      "Berubari Union (1960): Preamble is NOT part of Constitution (later overruled)",
      "Golaknath (1967): FRs cannot be amended by Parliament",
      "Kesavananda Bharati (1973): Basic Structure doctrine; Parliament can amend but not destroy basic features",
      "Minerva Mills (1980): Harmony between FRs and DPSPs; limited amending power",
      "Maneka Gandhi (1978): Art 21 requires procedure to be 'fair, just and reasonable' — not merely 'procedure established by law'",
      "Vishakha v. State of Rajasthan (1997): Guidelines against sexual harassment at workplace",
      "S.R. Bommai (1994): Floor test is the only way to test majority; secularism is basic structure",
      "Indra Sawhney (1992): 50% ceiling on reservations; creamy layer concept for OBCs",
      "K.S. Puttaswamy (2017): Right to Privacy is a fundamental right under Art 21",
      "Navtej Singh Johar (2018): Section 377 struck down — right to sexual orientation under Art 21",
      "I.R. Coelho (2007): 9th Schedule laws (post-1973) subject to basic structure review",
    ]},
    { id: "source-ref-32", type: "source-reference", sourceFile: "80888096_Key_Judgements_-_Class_Notes.pdf", sourcePages: [1,2,3,4,5,6] },
  ],
};

export const questions32: Question[] = [
  { id: "q-kj-01", subject: "polity", lessonIds: ["key-judgements-01"], type: "single-correct",
    prompt: "In Maneka Gandhi v. Union of India (1978), the Supreme Court held that:", options: ["Art 21 cannot be suspended during emergency", "The procedure under Art 21 must be fair, just and reasonable", "Right to privacy is a fundamental right", "Reservations cannot exceed 50%"],
    correctOptionIds: [1], explanation: "In Maneka Gandhi case, the SC expanded Art 21 by holding that 'procedure established by law' must be fair, just and reasonable — not arbitrary. This brought in elements of 'due process'.", optionExplanations: {"0":"This is from 44th Amendment.","1":"Correct. Fair, just, reasonable procedure.","2":"That's Puttaswamy (2017).","3":"That's Indra Sawhney (1992)."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["80888096_Key_Judgements_-_Class_Notes.pdf"], sourcePages: [3], tags: ["key-judgments","maneka-gandhi","article-21"] },
  { id: "q-kj-02", subject: "polity", lessonIds: ["key-judgements-01"], type: "single-correct",
    prompt: "The 50% ceiling on reservations was established in:", options: ["Champakam Dorairajan case", "Indra Sawhney case", "M. Nagaraj case", "Ashoka Kumar Thakur case"],
    correctOptionIds: [1], explanation: "In Indra Sawhney v. Union of India (1992), the SC upheld the Mandal Commission recommendations but set a 50% ceiling on total reservations and introduced the 'creamy layer' concept for OBCs.", optionExplanations: {"0":"Champakam dealt with communal GO and Art 15.","1":"Correct. Indra Sawhney (1992) = 50% ceiling.","2":"Nagaraj dealt with quantifiable data for SC/ST promotions.","3":"Ashoka Thakur upheld 93rd Amendment (OBC in private education)."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["80888096_Key_Judgements_-_Class_Notes.pdf"], sourcePages: [4], tags: ["key-judgments","indra-sawhney","reservation"] },
  { id: "q-kj-03", subject: "polity", lessonIds: ["key-judgements-01"], type: "single-correct",
    prompt: "Right to Privacy was declared a fundamental right in:", options: ["Maneka Gandhi case (1978)", "K.S. Puttaswamy case (2017)", "Kesavananda Bharati case (1973)", "Navtej Singh Johar case (2018)"],
    correctOptionIds: [1], explanation: "In Justice K.S. Puttaswamy v. Union of India (2017), a 9-judge bench unanimously held that the right to privacy is a fundamental right under Article 21.", optionExplanations: {"0":"Maneka expanded Art 21 but not specifically privacy.","1":"Correct. Puttaswamy (2017).","2":"Kesavananda was about basic structure.","3":"Navtej struck down Section 377."},
    difficulty: "easy", skill: "recall", upscTrack: "prelims", sourceFiles: ["80888096_Key_Judgements_-_Class_Notes.pdf"], sourcePages: [5], tags: ["key-judgments","puttaswamy","privacy"] },
  { id: "q-kj-04", subject: "polity", lessonIds: ["key-judgements-01"], type: "single-correct",
    prompt: "In S.R. Bommai v. Union of India (1994), the Supreme Court held that:", options: ["President's Rule can be imposed without any reason", "Floor test is the only way to test majority; secularism is basic structure", "Governor has absolute discretion in recommending President's Rule", "Article 356 cannot be subjected to judicial review"],
    correctOptionIds: [1], explanation: "In S.R. Bommai, the SC held that: (1) the floor test is the only way to determine majority, (2) secularism is part of basic structure, and (3) President's Rule under Art 356 is subject to judicial review.", optionExplanations: {"0":"President's Rule needs valid reasons now.","1":"Correct. Floor test + secularism as basic structure.","2":"Governor's recommendation is now reviewable.","3":"Art 356 IS subject to judicial review after this case."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["80888096_Key_Judgements_-_Class_Notes.pdf"], sourcePages: [4], tags: ["key-judgments","bommai","secularism","floor-test"] },
  { id: "q-kj-05", subject: "polity", lessonIds: ["key-judgements-01"], type: "match-following",
    prompt: "Match the cases with their key holdings:\nA. Vishakha case → 1. Right to Privacy\nB. Puttaswamy case → 2. Sexual harassment guidelines\nC. Navtej Johar case → 3. Basic Structure doctrine\nD. Kesavananda case → 4. Section 377 struck down",
    statements: ["A-Vishakha","B-Puttaswamy","C-Navtej Johar","D-Kesavananda"],
    options: ["A-2, B-1, C-4, D-3", "A-1, B-2, C-3, D-4", "A-4, B-3, C-2, D-1", "A-2, B-4, C-1, D-3"],
    correctOptionIds: [0], explanation: "Vishakha = Sexual harassment guidelines (A-2), Puttaswamy = Privacy (B-1), Navtej Johar = Section 377 struck down (C-4), Kesavananda = Basic Structure (D-3).", optionExplanations: {"0":"Correct matching.","1":"Incorrect.","2":"Incorrect.","3":"Incorrect."},
    difficulty: "medium", skill: "recall", upscTrack: "prelims", sourceFiles: ["80888096_Key_Judgements_-_Class_Notes.pdf"], sourcePages: [3,4,5], tags: ["key-judgments","match"] },
];
