export const defaultCopy: Record<string,string> = {
 headerAbout:"CV & experience", headerPortfolio:"Art portfolio", headerContact:"Contact", studioLink:"My studio", signIn:"Sign in with GitHub", footerLine:"Engineering a thoughtful life.",
 heroEyebrow:"Building Sciences & Engineering", heroNote:"Engineering · Design · Creative practice",
 download:"Download CV", backgroundAction:"View experience", portfolioAction:"Explore art portfolio", contactAction:"Contact me",
 summaryEyebrow:"For recruiters", summaryHeading:"Qualifications at a glance",
 statementLabel:"Two ways of seeing", statementText:"Precision in the details.\nCuriosity in everything else.",
 backgroundLabel:"01 — CV & experience",backgroundHeading:"Education.\nExperience. Skills.",backgroundIntro:"A focused overview of my qualifications, projects, and experience.",
 creativeLabel:"02 — Creative practice",creativeHeading:"A different\nkind of expression.",creativeIntro:"Art, imagery, and ideas beyond the technical drawing.",creativeAction:"View my art portfolio",
 contactLabel:"03 — Get in touch",contactHeading:"Let’s make\na connection.",
 portfolioLabel:"Art portfolio / Selected work",portfolioHeading:"Beyond\nthe blueprint.",portfolioEmptyLabel:"A collection in the making",portfolioEmptyHeading:"Room for what comes next.",portfolioEmptyText:"New work will appear here as the collection grows.",uploadAction:"Upload your first work",
 portfolioBottom:"From a first sketch to a finished piece.\nAn ongoing exploration.",backLink:"Back to my CV",allFilter:"All",workSingular:"work",workPlural:"works",openOriginal:"Open original file",fileHint:"Open the attached file to view this work.",closeLabel:"Close artwork"
};
export const copyGroups:Record<string,string[]> = {
 "Navigation & footer":["headerAbout","headerPortfolio","headerContact","studioLink","signIn","footerLine"],
 "Homepage introduction & recruiter summary":["heroEyebrow","heroNote","download","backgroundAction","portfolioAction","contactAction","summaryEyebrow","summaryHeading"],
 "CV section":["backgroundLabel","backgroundHeading","backgroundIntro"],
 "Creative banner":["creativeLabel","creativeHeading","creativeIntro","creativeAction"],
 "Contact & statement":["contactLabel","contactHeading","statementLabel","statementText"],
 "Portfolio page":["portfolioLabel","portfolioHeading","portfolioEmptyLabel","portfolioEmptyHeading","portfolioEmptyText","uploadAction","portfolioBottom","backLink","allFilter","workSingular","workPlural","openOriginal","fileHint","closeLabel"]
};
export const blockNames:Record<string,string>={hero:"Introduction & recruiter summary",background:"CV & experience",creative:"Creative portfolio banner",contact:"Contact",statement:"Personal statement"};
export const defaultDesign = {sectionOrder:["hero","background","creative","contact","statement"],hiddenSections:["statement"],heroLayout:"split",resumeLayout:"timeline",contentWidth:"standard",typeScale:"standard",spacing:"standard",textAlign:"left",galleryColumns:2,galleryOrder:"newest",imageFit:"contain",creativeBackground:"",backgroundPosition:"center",backgroundOverlay:60};
export const defaultHighlights=[
 {label:"Degree",value:"BEng · Building Sciences and Engineering",detail:"The Hong Kong Polytechnic University"},
 {label:"Graduation",value:"July 2028",detail:"Expected graduation"},
 {label:"Academic standing",value:"GPA 3.07",detail:"Cumulative GPA"},
 {label:"Engineering tools",value:"AutoCAD · MS Office",detail:"Intermediate proficiency"},
 {label:"Languages",value:"Cantonese · Mandarin · English",detail:"Native · Fluent · Conversational"},
 {label:"Leadership",value:"50% increase in club funding",detail:"Internal Secretary · Iai Kenjutsu Club"}
];

