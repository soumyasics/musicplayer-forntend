import React from 'react'
import '../Component/Nav.css'
function Nav() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">MusicPlayer</a>
      <div class="navbar-nav">
      <a class="nav-link active" aria-current="page" href="#" style={{paddingLeft:'500px'}}>Home</a>
       <a class="nav-link active" aria-current="page" href="#">Login</a>
        <a class="nav-link active" aria-current="true">Register</a>
        </div>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    
    </div>
  </div>
</nav>
<div className='backcolour'></div>
    </div>
  )
}

export default Nav