export function projectPhotos(project:any,works:any[]){
 const byId=new Map(works.map(work=>[work.id,work]));
 return (Array.isArray(project.photos)?project.photos:[]).flatMap((photo:any)=>{
  const original=photo.artwork_id?byId.get(photo.artwork_id):photo;
  if(!original?.file_url)return [];
  return [{...original,caption:photo.caption||"",preview_url:original.preview_url||original.file_url}];
 });
}
export function visibleProjects(projects:any[],works:any[]){
 return projects.filter(project=>project.visible!==false&&projectPhotos(project,works).length>0);
}
