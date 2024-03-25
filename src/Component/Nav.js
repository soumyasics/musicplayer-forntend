import React from 'react'
import '../Component/Nav.css'
function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
        <div class="container-fluid navmusic">
          <a class="navbar-brand col-4" href="#">Harmonic Hub</a>
          <form class="d-flex " style={{paddingLeft:'450px'}} role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02" style={{paddingLeft:'30px'}}>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="Homepage">Home</a>
      </li>
      <li>
                <a class="nav-link active" aria-current="page" href="Login">Login</a>
                </li>
                <li>
                <a class="nav-link active" aria-current="page" href="Register">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav