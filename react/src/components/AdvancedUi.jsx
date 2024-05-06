import React, { useEffect, useMemo, useState } from 'react'

function AdvancedUi() {
    const [data, setData] = useState()
    
    useEffect(() => {
        const processData = () =>{
            fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response =>  response.json())
          .then(json => setData(json))
          .catch(err=>console.log(err))
        }
     
        processData()
    }, [])
    
    const memorizedData = useMemo(() => data, [data])

  return (
    <div>
        <h3>10. Advanced UI and Performance Optimization:</h3>
        {
            memorizedData? <div>{memorizedData.length}</div>:<div>memo loading...</div>
        }
    </div>
  )
}

export default AdvancedUi