import React, { useState } from 'react'

function FormController() {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    age:Number,
    gender:''
  })

  const [isDetails, setIsDetails] = useState(false)

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.gender.trim()===""||formData.age.trim()==="") {
      alert('Please fill in all fields.');
      return;
    }
    setIsDetails(true)
    console.log(formData)
  }

  return (
    <div>
      <h3>4. Forms and Controlled Components</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name</label> : &nbsp;
          <input type="text" id='name' name='name' value={formData.name}
              onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">email</label> : &nbsp;
          <input type="email" id='email' name='email' value={formData.email}
              onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="age">age</label> : &nbsp;
          <input type="number" id='age' name='age' value={formData.age}
              onChange={handleChange}/>
        </div>
        <div>
          <span>gender : </span>
          <input type="radio" name='gender' id='male' value={"male"} checked={formData.gender=='male'}
              onChange={handleChange}/>
          <label htmlFor="male">male</label>

          <input type="radio" name='gender' id='female'value={"female"} checked={formData.gender=='female'}
              onChange={handleChange}/>
          <label htmlFor="female">female</label>
          <input type="radio" name='gender' id='other' value={"other"} checked={formData.gender=='other'}
              onChange={handleChange}/>
          <label htmlFor="other">other</label>
        </div>
        <button type='submit'>submit</button>
      </form>
      <section>
        {
          isDetails===true && 
          <div>
            <p>name : {formData.name}</p>
            <p>email : {formData.email}</p>
            <p>age : {formData.age}</p>
            <p>gender : {formData.gender}</p>
          </div>
        }
      </section>
    </div>
  )
}

export default FormController
