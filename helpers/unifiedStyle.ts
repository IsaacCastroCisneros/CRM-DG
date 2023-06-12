

export default function unifiedStyle(arrCell:Array<any>) 
{
   return arrCell.map(cell=>
    {
        return {...cell,center:true}
    })
}
