

export default function defaultColumns(column:any)
{
  const newColumns = column.map((c:any)=>
    {
       if(c.selector!==undefined)
       {
         const prop = `${c.selector}`.split('.')[1] 
         c.selector=(row:any)=><div className="max-w-[469px]">{row[prop]}</div>
         return c
       }
       return c
    })

  return newColumns;
}
