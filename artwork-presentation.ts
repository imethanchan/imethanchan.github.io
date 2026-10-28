export const photographyCategories = ["Architecture", "Humanities", "Creativity", "Landscape", "Portraiture", "Culture"] as const;
export function artworkTitle(value: unknown): string {
 const title=typeof value==="string"?value.trim():"";
 return title==="-"?"":title;
}
export function artworkCategory(value: unknown): string {
 const medium=typeof value==="string"?value.trim():"";
 const subcategory=photographySubcategory(medium);
 if(subcategory)return "Photography / "+subcategory;
 return medium.toLowerCase()==="photography"?"Photography":medium;
}
export function photographySubcategory(value:unknown):string {
 const medium=typeof value==="string"?value.trim():"";
 const leaf=medium.replace(/^photography\s*[/·:]\s*/i,"");
 return photographyCategories.find(category=>category.toLowerCase()===leaf.toLowerCase())||"";
}
export function artworkMedium(value:unknown):string {
 const medium=artworkCategory(value);
 return photographySubcategory(medium)?"Photography":medium;
}
export function storedArtworkMedium(value:unknown,subcategory:unknown):string {
 const medium=artworkMedium(value);
 if(medium!=="Photography")return medium;
 const child=typeof subcategory==="string"?subcategory.trim():"";
 if(child&&!photographyCategories.some(category=>category.toLowerCase()===child.toLowerCase()))throw new Error("Choose a photography subcategory from the list.");
 return child?"Photography / "+photographySubcategory(child):artworkCategory(value);
}
export function artworkMetadata(work:{medium?:string;year?:string}):string {
 return [artworkCategory(work.medium),work.year?.trim()].filter(Boolean).join(" · ");
}
export function artworkLabel(work:{title?:string;medium?:string;year?:string}):string {
 return artworkTitle(work.title)||[artworkMetadata(work),"Untitled work"].filter(Boolean).join(" — ");
}
