import React, { useState } from 'react'
import Form from './components/Form'
import Render from './components/Render'

const App = () => {
    const [test, setTest]=useState([{name: "SEZIM"}])

    const getProduct=(data)=>{
        console.log(data);
        setTest([...test, data])
    }
  return (
    <div>
        <Form onGetData={getProduct}/>

        {
            test.map((el)=>{
                return <Render  name={el.name} />
            })
        }
    </div>
  )
}

export default App