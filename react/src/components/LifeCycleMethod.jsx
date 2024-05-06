import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function LifeCycleMethod() {
    const [user, setuser] = useState([]);

    useEffect(() => {
      console.log('Component rendered');
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setuser(json))
      return () => {
        console.log('Component unmounted');
      };
    },[]);

  return (
    <div>
        <h3>6. Lifecycle Methods</h3>
        {
            user?
            <div>
                {
                    user.map((item)=>
                    (
                        <ul key={item.id}>
                            <li>{item.name}</li>
                        </ul>
                    ))
                }
            </div>
            :<p>loading</p>
        }
    </div>
  )
}

export default LifeCycleMethod