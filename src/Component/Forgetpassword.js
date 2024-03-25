import React, { useState } from 'react'
import radio1 from '../Images/radio1.jpg'
import '../Component/Forgetpassword.css'

function Forgetpassword() {
    const [data, setData] = useState({ email: '', phone: '',otp:'', newpassword:'',confirmpassword:''})

  const change = (enter) => {
    console.log(enter)
    setData({ ...data, [enter.target.name]: enter.target.value })
  }

  const submit = (a) => {
    a.preventDefault()
    console.log("saved");
  }
  console.log(data);
    return (
        <div class='backcl'>
            <div className='change-password-container'>
                <div class="row">
                    <div class="col-6 imagestyle">
                       <img src={radio1} alt="something went wrong"style={{width:"950px",height:"700px",paddingLeft:"40px",paddingTop:"40px"}}></img> 

                       
                </div>
                <div class="col-6 "  >
                   
                <h2 style={{paddingLeft:"320px",paddingTop:"50px", fontFamily:"monospace"}}>Change Password</h2>
                        <form class="fgt" id="fgt" onSubmit={submit}>

                            <input type="text" id="email" className='form-control bg-light'placeholder='Enter Email' onChange={change} name="email"value={data.email} required>
                            </input><br></br>
                            <label>Or
                            </label>
                            <br></br>
                            <input type="number" id="phone" className='form-control bg-light' placeholder='Phone Number'onChange={change} name="phone" value={data.phone} required></input><br></br><br></br>
                            <input type="text" id="otp" className='form-control bg-light' placeholder='Enter OTP'onChange={change} name="otp"value={data.otp} required>
                            </input><br></br><br></br>
                            <input type="password" id="newpassword"className='form-control bg-light' placeholder='New Password'onChange={change} name="newpassword" value={data.newpassword} required>
                            </input><br></br><br></br>
                            <input type="password" id="confirmpassword"className='form-control bg-light' placeholder='Confirm Password' onChange={change} name="confirmpassword" value={data.confirmpassword} required></input><br></br><br></br>
                            <button type="submit" className='btn btn-success'>Confirm</button><br></br>
                            <br></br>
                            <button type="button" className='btn btn-light'>Cancel</button>
                  
                </form>
                </div>
            </div>
        </div>
          

        </div >
    )
}


export default Forgetpassword