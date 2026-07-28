# Indian Polity — Curriculum Map

## Canonical Sequence

| # | Module | Source PDF | Status |
|---|--------|-----------|--------|
| 01 | Making of the Constitution | 78468843_Making_of_the_Constitution.pdf | Mapped |
| 02 | Preamble | 74365836_Preamble_-_Class_Notes.pdf | Mapped |
| 03 | Salient Features of the Constitution | 74365837_Salient_Features_of_the_Constitution_-_Class_Notes.pdf | Mapped |
| 04 | Sources of the Indian Constitution | 74365838_Sources_of_the_Indian_Constitution_-_Class_Notes (2).pdf | **Pilot** |
| 05 | Schedules of the Constitution | 74365839_Schedules_of_the_Constitution_-_Class_Notes.pdf | Mapped |
| 06 | Union and its Territory | 78224814_Union_and_its_Territory.pdf | Mapped |
| 07 | Citizenship | 78375526_Citizenship.pdf | Mapped |
| 08 | Fundamental Rights | 74365840_Fundamental_Rights_-_Class_Notes.pdf | Mapped |
| 09 | Directive Principles of State Policy | 74365842_Directive_Principles_of_State_Policy_-_Class_Notes.pdf | Mapped |
| 10 | Fundamental Duties | 74365844_Fundamental_Duties_-_Class_Notes.pdf | Mapped |
| 11 | Amendment of the Indian Constitution | 74365845_Amendment_of_the_Indian_Constitution_-_Class_Notes.pdf | Mapped |
| 12 | Basic Structure of the Constitution | 84026710_Basic_Structure_of_the_Constitution_-_Class_Notes.pdf | Mapped |
| 13 | System of Government | 78195258_System_of_Government.pdf | Mapped |
| 14 | Union Executive | 78187369_Union_Executive.pdf | Mapped |
| 15 | Parliament | 78187368_Parliament_-_Class_Notes.pdf | Mapped |
| 16 | State Executive | 78123179_State_Executive_-_Class_Notes.pdf | Mapped |
| 17 | State Legislature | 77676093_State_Legislature_-_Class_Notes.pdf | Mapped |
| 18 | Judiciary | 82603690_Judiciary.pdf | Mapped |
| 19 | Local Self Government | 76664800_Local_Self_Government_-_Class_Notes.pdf | Mapped |
| 20 | Union Territories, Scheduled and Tribal Areas | 78224813_Union_Territories_Scheduled_and_Tribal_Areas.pdf | Mapped |
| 21 | Elections & Associated Topics | 78195257_Elections_Associated_Topics.pdf | Mapped |
| 22 | Constitutional Bodies | 78375527_Constitutional_Bodies.pdf | Mapped |
| 23 | Non-Constitutional Bodies | 78375528_Non-Constitutional_Bodies.pdf | Mapped |
| 24 | Special Provisions for Some States | 78468840_Special_Provisions_for_some_States.pdf | Mapped |
| 25 | Official Languages | 78468841_Official_Languages.pdf | Mapped |
| 26 | Cooperative Sector in India | 78468842_Cooperative_Sector_in_India.pdf | Mapped |
| 27 | Governance | 78468844_Governance.pdf | Mapped |
| 28 | National Human Rights Commission | 80774431_NHRC.pdf | Mapped |
| 29 | National Commission for Minorities | 80774432_NCM.pdf | Mapped |
| 30 | National Commission for Protection of Child Rights | 80774433_NCPCR.pdf | Mapped |
| 31 | National Commission for Women | 80774434_NCW.pdf | Mapped |
| 32 | Key Judgements | 80888096_Key_Judgements_-_Class_Notes.pdf | Mapped |

## Supplementary Sources

These PDFs provide additional material for existing modules:

- `76664799_Local_Self_Government_Suppl._Notes_.pdf` → Module 19
- `77540971_Judiciary_Suppl._Notes_.pdf` → Module 18
- `77676092__Suppl._Notes_Parliament_-_Class_Notes.pdf` → Module 15
- `74365840_Fundamental_Rights_-_Class_Notes (1).pdf` → Module 08 (duplicate)

## Adding New Modules

1. Add the module entry to `src/data/polity-curriculum.ts` with appropriate `order`, `id`, `title`, and `sourcePattern`
2. Place the source PDF in `resources/polity/`
3. Run the discovery script to verify matching
4. Run the extraction pipeline when ready
5. Generate lesson and question content
6. Review and approve before publishing

## Ordering Rationale

The curriculum follows a logical pedagogical sequence:
1. **Foundational** (1–5): Constitution's creation, principles, structure
2. **Rights & Duties** (6–12): Citizenship, fundamental rights, DPSPs, amendments
3. **Government Structure** (13–17): Executive, legislature at centre and state
4. **Institutions** (18–23): Judiciary, local government, elections, bodies
5. **Special Topics** (24–32): Languages, cooperative sector, commissions, judgments
