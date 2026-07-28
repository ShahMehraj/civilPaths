import { Lesson, Question } from "@/types";

/**
 * Pilot lesson: Sources of the Indian Constitution
 * This is a manually crafted lesson to demonstrate the full lesson structure.
 * Future lessons will be generated from the PDF ingestion pipeline.
 */
export const pilotLesson: Lesson = {
  id: "sources-of-constitution-01",
  moduleId: "sources-of-constitution",
  title: "Sources of the Indian Constitution",
  order: 1,
  estimatedMinutes: 25,
  mastery: "not-started",
  completed: false,
  sourceFiles: [
    "74365838_Sources_of_the_Indian_Constitution_-_Class_Notes (2).pdf",
  ],
  sourcePages: [1, 2, 3, 4, 5, 6],
  blocks: [
    {
      id: "hook-01",
      type: "hook",
      content:
        "India's Constitution is often called a 'bag of borrowings'. But is that fair? The framers studied constitutions from across the world — not to copy them, but to adapt the best ideas to India's unique challenges. What did they pick, and why?",
    },
    {
      id: "summary-line-01",
      type: "one-line-summary",
      content:
        "The Indian Constitution draws from multiple global sources, adapting features from the UK, US, Ireland, Canada, Australia, Germany, South Africa, Japan and the USSR to suit Indian conditions.",
    },
    {
      id: "explanation-simple-01",
      type: "explanation",
      variant: "simple",
      content:
        "When Dr. B.R. Ambedkar and the Constituent Assembly drafted India's Constitution, they looked at how other countries solved problems of governance. They didn't blindly copy — they studied what worked elsewhere and modified it for India. For example, parliamentary government came from Britain because India was already familiar with it, while fundamental rights were inspired by America's Bill of Rights because India needed strong protections against discrimination.",
    },
    {
      id: "explanation-formal-01",
      type: "explanation",
      variant: "formal",
      content:
        "The Indian Constitution is an eclectic document that synthesises provisions from various constitutions around the world. The Constituent Assembly, under the chairmanship of Dr. B.R. Ambedkar, examined the constitutional frameworks of major democracies and selectively incorporated features suitable to the Indian polity. The Government of India Act, 1935 served as the principal structural foundation, while philosophical inspiration was drawn from multiple foreign constitutions. This borrowing was neither mechanical nor wholesale — each provision was debated, contextualised and adapted to India's socio-political realities.",
    },
    {
      id: "comparison-01",
      type: "comparison",
      title: "Major Sources and Borrowed Features",
      columns: ["Source Country", "Features Borrowed"],
      rows: [
        {
          label: "Government of India Act, 1935",
          values: [
            "Federal scheme, Office of Governor, Judiciary, Public Service Commission, Emergency provisions, Administrative details",
          ],
        },
        {
          label: "United Kingdom",
          values: [
            "Parliamentary government, Rule of law, Legislative procedure, Single citizenship, Cabinet system, Writs, Bicameralism",
          ],
        },
        {
          label: "United States",
          values: [
            "Fundamental Rights, Independence of Judiciary, Judicial review, Impeachment of President, Removal of SC/HC judges, Vice-President's role",
          ],
        },
        {
          label: "Ireland",
          values: [
            "Directive Principles of State Policy, Nomination of Rajya Sabha members, Method of Presidential election",
          ],
        },
        {
          label: "Canada",
          values: [
            "Federation with strong Centre, Vesting of residuary powers in Centre, Appointment of state Governors by Centre, Advisory jurisdiction of Supreme Court",
          ],
        },
        {
          label: "Australia",
          values: [
            "Concurrent List, Freedom of trade and commerce, Joint sitting of two Houses of Parliament",
          ],
        },
        {
          label: "Germany (Weimar)",
          values: [
            "Suspension of Fundamental Rights during Emergency",
          ],
        },
        {
          label: "South Africa",
          values: [
            "Procedure for amendment of the Constitution, Election of Rajya Sabha members",
          ],
        },
        {
          label: "Japan",
          values: ["Procedure established by law (Article 21)"],
        },
        {
          label: "USSR (now Russia)",
          values: [
            "Fundamental Duties, Ideal of justice (social, economic, political) in the Preamble",
          ],
        },
        {
          label: "France",
          values: ["Republic, Ideals of Liberty, Equality, Fraternity"],
        },
      ],
    },
    {
      id: "article-01",
      type: "constitutional-article",
      articleNumber: "N/A",
      title: "Government of India Act, 1935 — The Structural Foundation",
      content:
        "Nearly 250 provisions of the Constitution are either directly derived from or are modifications of the Government of India Act, 1935. It provided the administrative framework, including the federal structure, division of powers between centre and provinces, and the machinery of government.",
    },
    {
      id: "misconception-01",
      type: "misconception",
      wrong:
        "The Indian Constitution is merely copied from other constitutions and has no originality.",
      correct:
        "While the Constitution borrows features from multiple sources, every provision was debated in the Constituent Assembly and adapted to Indian conditions. Many features like the blend of rigidity and flexibility, integrated judiciary, and single citizenship with a federal structure are unique combinations not found elsewhere.",
    },
    {
      id: "prelims-trap-01",
      type: "prelims-trap",
      trap: "Questions often confuse the source of Fundamental Duties (USSR) with Fundamental Rights (USA), or attribute Directive Principles to the USA instead of Ireland.",
      reality:
        "Remember: Rights → USA, Duties → USSR, Directives → Ireland. A common mnemonic: 'RUD' — Rights from US, USSR gave Duties.",
    },
    {
      id: "mains-01",
      type: "mains-perspective",
      topic: "Sources of the Indian Constitution",
      dimensions: [
        "Historical context: Why did framers look abroad?",
        "Adaptation vs copying: How provisions were modified for Indian needs",
        "Government of India Act, 1935 as the skeleton of the Constitution",
        "Criticism of 'bag of borrowings' — counter with examples of unique Indian innovations",
        "Relevance today: How borrowed features have evolved through amendments and judicial interpretation",
      ],
      sampleQuestion:
        "The Indian Constitution has often been criticised as a 'bag of borrowings'. Do you agree? Discuss with examples how borrowed features have been adapted to Indian conditions.",
    },
    {
      id: "remember-01",
      type: "remember",
      points: [
        "GoI Act 1935 is the single largest source (structural framework)",
        "UK: Parliamentary system, Rule of Law, Writs",
        "USA: Fundamental Rights, Judicial Review, Impeachment",
        "Ireland: DPSP, Rajya Sabha nominations, Presidential election method",
        "Canada: Strong Centre federation, Residuary powers with Centre",
        "Australia: Concurrent List, Joint sitting of Parliament",
        "France: Republic, Liberty-Equality-Fraternity",
        "USSR: Fundamental Duties, Justice ideals in Preamble",
        "South Africa: Amendment procedure",
        "Japan: Procedure established by law",
      ],
    },
    {
      id: "checkpoint-01",
      type: "checkpoint",
      questions: [
        {
          question:
            "Which country inspired the Directive Principles of State Policy?",
          answer: "Ireland (from the Irish Constitution)",
        },
        {
          question:
            "What is the single largest structural source of the Indian Constitution?",
          answer: "The Government of India Act, 1935",
        },
        {
          question: "From which country was the concept of Fundamental Duties borrowed?",
          answer: "USSR (Soviet Union)",
        },
        {
          question: "Which feature was borrowed from Australia?",
          answer:
            "Concurrent List, Freedom of trade & commerce, Joint sitting of Parliament",
        },
      ],
    },
    {
      id: "summary-block-01",
      type: "summary",
      points: [
        "The Indian Constitution draws from over 10 major sources worldwide.",
        "The GoI Act 1935 provided the structural and administrative foundation.",
        "Philosophical provisions came from various democracies — rights from USA, directives from Ireland, duties from USSR.",
        "The framers adapted, not copied — creating unique combinations suited to India.",
        "The 'bag of borrowings' criticism is simplistic; India's Constitution is an original synthesis.",
      ],
    },
    {
      id: "source-ref-01",
      type: "source-reference",
      sourceFile:
        "74365838_Sources_of_the_Indian_Constitution_-_Class_Notes (2).pdf",
      sourcePages: [1, 2, 3, 4, 5, 6],
    },
  ],
};

/**
 * Pilot quiz questions for Sources of the Indian Constitution
 */
export const pilotQuestions: Question[] = [
  {
    id: "q-sources-01",
    subject: "polity",
    lessonIds: ["sources-of-constitution-01"],
    type: "single-correct",
    prompt:
      "Which of the following is the single largest source of the Indian Constitution in terms of structural provisions?",
    options: [
      "British Constitution",
      "Government of India Act, 1935",
      "US Constitution",
      "Canadian Constitution",
    ],
    correctOptionIds: [1],
    explanation:
      "The Government of India Act, 1935 is the single largest source of the Indian Constitution. Nearly 250 provisions are derived from or are modifications of this Act. It provided the federal scheme, office of governor, judiciary, public service commissions, emergency provisions, and administrative details.",
    optionExplanations: {
      "0": "The British Constitution inspired the parliamentary system and rule of law, but not the structural framework.",
      "1": "Correct. The GoI Act 1935 provided the skeletal structure of the Indian Constitution with ~250 provisions.",
      "2": "The US Constitution inspired Fundamental Rights and judicial review, not the overall structure.",
      "3": "Canada inspired federation with a strong centre but not the bulk of structural provisions.",
    },
    difficulty: "easy",
    skill: "recall",
    upscTrack: "prelims",
    sourceFiles: [
      "74365838_Sources_of_the_Indian_Constitution_-_Class_Notes (2).pdf",
    ],
    sourcePages: [2],
    tags: ["sources", "goi-act-1935", "structural-framework"],
  },
  {
    id: "q-sources-02",
    subject: "polity",
    lessonIds: ["sources-of-constitution-01"],
    type: "single-correct",
    prompt:
      "The concept of Directive Principles of State Policy in the Indian Constitution has been borrowed from the Constitution of:",
    options: ["USA", "UK", "Ireland", "Australia"],
    correctOptionIds: [2],
    explanation:
      "The Directive Principles of State Policy were inspired by the Irish Constitution (Constitution of Ireland, 1937). Ireland borrowed this concept from Spain. The Indian framers adopted it to provide socio-economic guidelines to the state.",
    optionExplanations: {
      "0": "USA inspired Fundamental Rights, not DPSPs.",
      "1": "UK inspired parliamentary government and rule of law.",
      "2": "Correct. Ireland's Constitution provided the model for DPSPs.",
      "3": "Australia inspired the Concurrent List and joint sitting.",
    },
    difficulty: "easy",
    skill: "recall",
    upscTrack: "prelims",
    sourceFiles: [
      "74365838_Sources_of_the_Indian_Constitution_-_Class_Notes (2).pdf",
    ],
    sourcePages: [3],
    tags: ["sources", "dpsp", "ireland"],
  },
  {
    id: "q-sources-03",
    subject: "polity",
    lessonIds: ["sources-of-constitution-01"],
    type: "multiple-statements",
    prompt:
      "Consider the following statements about the sources of the Indian Constitution:\n1. The concept of Fundamental Duties was borrowed from the USSR.\n2. The procedure for amendment was inspired by South Africa.\n3. The idea of Republic was borrowed from France.\n4. Advisory jurisdiction of the Supreme Court was taken from the UK.\n\nWhich of the statements given above are correct?",
    statements: [
      "The concept of Fundamental Duties was borrowed from the USSR.",
      "The procedure for amendment was inspired by South Africa.",
      "The idea of Republic was borrowed from France.",
      "Advisory jurisdiction of the Supreme Court was taken from the UK.",
    ],
    options: ["1, 2 and 3 only", "1, 3 and 4 only", "2, 3 and 4 only", "1, 2, 3 and 4"],
    correctOptionIds: [0],
    explanation:
      "Statements 1, 2 and 3 are correct. Fundamental Duties were borrowed from the USSR, amendment procedure from South Africa, and the idea of Republic from France. Statement 4 is incorrect — the advisory jurisdiction of the Supreme Court was borrowed from Canada, not the UK.",
    optionExplanations: {
      "0": "Correct. Statement 4 is wrong as advisory jurisdiction comes from Canada.",
      "1": "Statement 4 is incorrect — advisory jurisdiction is from Canada, not UK.",
      "2": "Statement 1 is correct — Fundamental Duties are from USSR.",
      "3": "Statement 4 is incorrect — advisory jurisdiction is from Canada, not UK.",
    },
    difficulty: "medium",
    skill: "elimination",
    upscTrack: "prelims",
    sourceFiles: [
      "74365838_Sources_of_the_Indian_Constitution_-_Class_Notes (2).pdf",
    ],
    sourcePages: [3, 4],
    tags: ["sources", "statements", "elimination"],
  },
  {
    id: "q-sources-04",
    subject: "polity",
    lessonIds: ["sources-of-constitution-01"],
    type: "match-following",
    prompt: "Match the following constitutional features with their sources:",
    statements: [
      "A. Concurrent List → 1. Canada",
      "B. Residuary powers with Centre → 2. Australia",
      "C. Procedure established by law → 3. Germany",
      "D. Suspension of FR during Emergency → 4. Japan",
    ],
    options: [
      "A-2, B-1, C-4, D-3",
      "A-1, B-2, C-3, D-4",
      "A-2, B-1, C-3, D-4",
      "A-4, B-3, C-1, D-2",
    ],
    correctOptionIds: [0],
    explanation:
      "Concurrent List is from Australia (A-2), Residuary powers with Centre from Canada (B-1), Procedure established by law from Japan (C-4), and Suspension of Fundamental Rights during Emergency from Germany/Weimar (D-3).",
    optionExplanations: {
      "0": "Correct matching of all features with their sources.",
      "1": "Incorrect — Concurrent List is from Australia, not Canada.",
      "2": "Incorrect — Procedure established by law is from Japan, not Germany.",
      "3": "Completely incorrect matching.",
    },
    difficulty: "medium",
    skill: "recall",
    upscTrack: "prelims",
    sourceFiles: [
      "74365838_Sources_of_the_Indian_Constitution_-_Class_Notes (2).pdf",
    ],
    sourcePages: [4, 5],
    tags: ["sources", "match", "features"],
  },
  {
    id: "q-sources-05",
    subject: "polity",
    lessonIds: ["sources-of-constitution-01"],
    type: "single-correct",
    prompt:
      "Which of the following features was NOT borrowed from the British Constitution?",
    options: [
      "Parliamentary form of government",
      "Rule of Law",
      "Judicial Review",
      "Single Citizenship",
    ],
    correctOptionIds: [2],
    explanation:
      "Judicial Review was borrowed from the United States, not from Britain. Britain follows parliamentary sovereignty where Parliament is supreme, and courts cannot strike down legislation. India borrowed the power of Judicial Review from the American system where courts can declare laws unconstitutional.",
    optionExplanations: {
      "0": "Parliamentary government was indeed borrowed from Britain.",
      "1": "Rule of Law (A.V. Dicey's concept) was borrowed from Britain.",
      "2": "Correct. Judicial Review comes from the USA, not Britain. Britain follows parliamentary sovereignty.",
      "3": "Single Citizenship was indeed borrowed from Britain.",
    },
    difficulty: "easy",
    skill: "understanding",
    upscTrack: "prelims",
    sourceFiles: [
      "74365838_Sources_of_the_Indian_Constitution_-_Class_Notes (2).pdf",
    ],
    sourcePages: [2, 3],
    tags: ["sources", "uk", "judicial-review", "negative-question"],
  },
];
