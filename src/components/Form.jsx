import React, { useState } from 'react'

const Form = (props) => {
    const [name, setName] = useState("")
    const inpHandler=(e)=>{
        setName(e.target.value)
    }


    const addHandler=()=>{
        const product = {
            name: name
        }
        console.log(product);
        props.onGetData(product)
    }
  return (
    <div>
        <input onChange={inpHandler} type="text" />
        <button onClick={addHandler}>Add</button>
    </div>
  )
}

export default Form