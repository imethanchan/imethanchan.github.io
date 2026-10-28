import {defaultCopy,defaultDesign,defaultHighlights} from "./presentation";
export const initial = {
  name: "Ethan Chan", fullName: "Ethan, pok-man CHAN", location: "Hong Kong",
  headline: "Building Sciences\n& Engineering.",
  intro: "BEng student at The Hong Kong Polytechnic University, graduating in July 2028. Experience in energy-efficient building design research, accounts administration, and student leadership.",
  email: "pokmanchan726@gmail.com", phone: "+852 6506 5998",
  portfolioIntro: "A space for my art, visual experiments, and creative work.",
  copy:defaultCopy, design:defaultDesign, highlights:defaultHighlights,
  sections: [
    { title: "Education", entries: [{ title: "The Hong Kong Polytechnic University", subtitle: "BEng in Building Sciences and Engineering", date: "September 2025 — Present", text: "Expected graduation: July 2028\nCumulative GPA: 3.07" }] },
    { title: "Academic projects", entries: [{ title: "Building Services Engineering Research", subtitle: "Energy efficiency & daylighting", date: "February 2026", text: "Proposed energy-efficient external shading devices and daylighting reflectors for institutional buildings, referencing design concepts from CITAC and applying them to Hong Kong Palace Museum." }] },
    { title: "Experience", entries: [{ title: "Accounts Payable Clerk", subtitle: "POWERTAKE Sporting Goods and Drink Wholesale Company", date: "September 2025 — October 2026", text: "Prepared invoices with high accuracy.\nReceived customer orders and coordinated communication to ensure timely delivery." }] },
    { title: "Beyond the classroom", entries: [{ title: "Internal Secretary", subtitle: "Iai Kenjutsu Club · The Hong Kong Polytechnic University", date: "September 2026 — Present", text: "Managed club finances, administrative paperwork, and event promotion.\nSecured a 50% increase in university funding through structured budget proposals and negotiations." }] },
    { title: "Skills & languages", entries: [{ title: "Engineering & productivity", subtitle: "Tools", date: "", text: "MS Office · Intermediate\nAutoCAD · Intermediate" }, { title: "Art & design", subtitle: "Creative tools", date: "", text: "Photoshop · Intermediate\nClip Studio Paint · Proficient\nLightroom · Proficient" }, { title: "Practical skills", subtitle: "Operations", date: "", text: "Electric pallet · Proficient\nTail lift · Proficient" }, { title: "Languages", subtitle: "Communication", date: "", text: "Cantonese · Native\nEnglish · Conversational\nMandarin · Fluent" }] }
  ]
};
export type Content = typeof initial;


