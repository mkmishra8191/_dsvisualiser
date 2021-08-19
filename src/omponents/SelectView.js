import { useState,useEffect} from "react"



const SelectView = ({style,onClick,tree}) => {

const [state, setState] = useState("")

 const onChange= (event)=>{

    setState(event.target.value)

    onClick(event.target.value)

 }

 useEffect(()=>{

setState("select")

 },[tree])

    return (
        <div style={style}>
             <select value= {state} style={{fontSize:20}} onChange={onChange}>
             <option value="select" >Select</option>
             <option value="left_view" >Left view</option>
             <option value="bottom_view" >Bottom view</option>
             <option value="right_view" >Right view</option>
             <option value="top_view" >Top view</option>
             <option value="right_diagonal_view" >Right Diagonal</option>
             <option value="left_diagonal_view" >Left Diagonal</option>





  
</select>
        </div>
    )
}

export default SelectView


