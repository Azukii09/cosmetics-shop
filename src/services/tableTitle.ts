
export default function getTitle(tableSchema:any):any {
    let title:any[]=[]
    Object.entries(tableSchema).map((data,index:number)=>{
        if (data[1] === "id"){
            title.push({id:index,name:"No"})
        }else if(data[1] !== "createdAt" && data[1] !== "updatedAt"){
            title.push({id:index,name:data[1]})
        }
    })
    return title
}