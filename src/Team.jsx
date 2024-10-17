import { useState } from "react"

export default function Team(){
    const [count,setCount] = useState(11);

    return(
        <div>
            <h3>Players : {count} </h3>
            <button onClick={()=>{setCount(count +1)}}>Add</button>
            <button onClick={()=>{setCount(count -1)}}>Remove</button>
        </div>
    )
}