import React, { useState } from 'react'
import "../Component/Login.css"
import imglogin from '../Images/imglogin.jpg'
import Nav from './Nav'

function Login() {
  const [data, setData] = useState({ username: '', password: '' })

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
    <div class="backcl1">

      <div class="container-logintext" onSubmit={submit}>
        <div class="row">
          <div class="col-6 log-img">
            <img src={imglogin} alt="Hello" className='img-fluid' style={{ width: '950px', height: '700px', paddingLeft: '40px', paddingTop: '40px' }} />
          </div>
          <div class="col-2" style={{ marginTop: '200px', marginLeft: '200px', paddingLeft: '120px' }}>
            <input type='text' id='username' name='username' class='form-control' placeholder='Username' onChange={change} value={data.username} style={{ width: '300px' }}></input><br></br>
            <input type='password' id='password' name='password' class='form-control' placeholder='Password' onChange={change} value={data.password} style={{ width: '300px' }}></input><br></br>
            <a href="forget" class="text-body" className='forgetpassword'>ForgetPassword?</a><br></br>
            <button class='btn btn-primary' onSubmit={submit} type="submit" style={{ width: '300px' }}>Login</button><br></br>
            <button class='btn btn-success' style={{ width: '300px', marginTop: '10px' }}>Cancel</button><br></br>


          </div>
        </div>
      </div><Nav/>
    </div>


  )
}

export default Login