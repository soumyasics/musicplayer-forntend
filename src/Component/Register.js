import React, { useState } from 'react'
import '../Component/Register.css'
import Nav from './Nav'

function Register() {
 
    const[data,setData]=useState({firstName:'',lastName:'',gender:'',dob:'',street:'',city:'',state:'',pincode:'',contact:'',email:'',password:'',country:''})
    const change=(enter)=>{
      console.log(enter)
      setData({...data,[enter.target.name]:enter.target.value})
  
  }
  const submit=(ab)=>{
    ab.preventDefault()
    console.log("saved");
    
    }
console.log(data);
    return(
    <div >

      <div class="img">
        <div class='register-text'>
          <h1>REGISTRATION </h1>
        </div>
        <div class='register-container'>
          <form class="form-class" id="registrationForm" onSubmit={submit}>
            <div class="row">
              <label for="Name">Name</label><br></br>
              <div class="col-5 first-name">
                
                <input type="text" id="firstName" className="form-control bg-light"placeholder='First Name' name="firstName" onChange={change} value={data.firstName}required></input>
              </div>
              <div class='col-5 last-name'>
                <input type="text" id="lastName"className="form-control bg-light"placeholder='Last Name' name="lastName"onChange={change} value={data.lastName} required></input>
              </div>

              <div class="col-5 gender1">
                <label>Gender</label>
                <div class="radio-group reg-gender">
                  <label for="male">Male</label>
                  <input type="radio" id="male" name="gender" onChange={change} value="male"></input>
                  <label for="female">Female</label>
                  <input type="radio" id="female" name="gender" onChange={change} value="female"></input>
                  <label for="other">Other</label>
                  <input type="radio" id="other" name="gender" onChange={change} value="other"></input>

                </div>
              </div>
              <div class="col-2 dob-class">
                <label for="dob">DOB</label><br></br>
                <input type="date" className='form-control bg-light' id="dob" name="dob" onChange={change} value={data.dob} required></input>
              </div>

              <label for="location">Location</label>
              <div class="col-5">

                <input type="text" className='form-control bg-light' id="street" placeholder='Street' name="street" onChange={change} value={data.street} required></input>
              </div>
              <div class="col-5 city1">

                <input type="text" id="city"className='form-control bg-light' placeholder='City' name="city" onChange={change} value={data.city} required></input>
              </div>
              <div class='col-5 states-class'>
                <select id="state" className='form-control bg-light'name="state" onChange={change} value={data.state} required>
                  <option value="state1">TamilNadu</option>
                  <option value="state2">Kerala</option>
                  <option value="state1">And</option>
                  <option value="state2">Kerala</option>
                  <option value="state1">TamilNadu</option>
                  <option value="state2">Kerala</option>

                </select></div>
              <div class='col-5 pincode-class'>
                <input type="text" id="pincode" className='form-control bg-light' placeholder='Pincode' name="pincode" onChange={change} value={data.pincode} pattern="[0-9]{6}" title="Enter a 6-digit pin code" required></input>
              </div>
              <div class=' contactnumber-class'>
                <label for="contact">Contact </label>
                <div class='col-3'>
                  <input type="tel" id="contact" className='form-control bg-light' placeholder='Mobile Number' name="contact" onChange={change} value={data.contact} pattern="[0-9]{10}" title="Enter a 10-digit phone number" required></input>
                </div>
              </div>
              <label for="email">Email Verfication</label>
              <div class='col-7 emailclass'>
                <input type="email"className='form-control bg-light' id="email" placeholder='Enter Your Email Address' name="email" onChange={change} value={data.email} required></input>
               </div>
               <div class="col-7 passwordclass">
                <input type='password' className='form-control bg-light' name='password' onChange={change} value={data.password} placeholder='Password' ></input>
              </div>
              <div class='col-6 countryclass'>
                <select className="form-select bg-light" name="country" onChange={change} value={data.country} required>
                  <option placeholder="select country">India</option>
                  <option placeholder="select country">America</option>
                  <option placeholder="select country">Korea</option>
                </select></div>
                
                </div><br></br>
                <p>Profile Picture</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
                <div class="col-1">
 <input class="form-control" type="file" id="formFile"></input>
</div>

              <button type="broswer"  className='col-2 btn btn-success '>Browser</button><br></br><br></br>
             
              
              <button type="submit"  className='col-3 btn btn-outline-success '>Register</button>
          </form>

        </div>
      </div><Nav/>
    </div>
  )
}

export default Register