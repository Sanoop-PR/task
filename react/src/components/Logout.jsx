import axios from "axios";
import React from "react";

function Logout() {
  const logoutt = async () => {
    const {_id} = JSON.parse(localStorage.getItem('user')) 

    try {
        await axios.post(`http://localhost:5000/user/logout`, {
            token: localStorage.getItem('refresh_token'),
          });
              localStorage.clear();
              window.location.reload();
        
    } catch (error) {
        console.log(error)
    } 
  };

//   function logoutt() {
    
//     const {_id} = JSON.parse(localStorage.getItem('user')) 
//     const id = user._id;
// console.log(_id)
//   }

  
  return <div>
    <button type="button" onClick={() => logoutt()}>logout</button>
  </div>;
}

export default Logout;
