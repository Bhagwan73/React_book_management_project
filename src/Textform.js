
import React ,{ useState } from "react"



const Form=(props)=>{

           const pickLname=(e)=>{
            setLanme(e.target.value)
            }

            const pickname=(e)=>{
                setName(e.target.value)
                
            }

            const pickValue=()=>{
               setLanme(lanme.toUpperCase(),name)
            }

    const [name,setName]=useState()
    const [lanme,setLanme]=useState()
   

    return(
        <div>
            <h1>{props.heading}</h1>
            <label>Firstname</label><br/>
            <input type="text" onChange={pickname}/><br/>
            <label>Lastname</label><br/>
            <input type="text"value={lanme} onChange={pickLname}   /><br/> <br/>
           
            <button onClick={pickValue}>submit</button>
           
        </div>
    )
}
export default Form

Form.defaultProps={
    heading:"Signup"
     }