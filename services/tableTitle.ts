
export default function getTitle(tableSchema:any,filter:string[]):any {
    let title:any[]=[]
    Object.entries(tableSchema).map((data,index:number)=>{
        if (data[1] === "id"){
            title.push({id:index,name:"No"})
        }else if(!filter.find(item=>item===data[1])){
            title.push({id:index,name:data[1]})
        }
    })
    return title
}