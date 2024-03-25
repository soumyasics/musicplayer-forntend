import React from 'react'
import img1 from '../Images/img1.jpg'
import headphones from '../Images/headphones.jpg'
import img3 from '../Images/img3.jpg'
import '../Component/Homepage.css'
import mic from '../Images/mic.jpg'
import sriram from'../Images/sriram.jpg'
import Nav from './Nav'

function Homepage() {
  return (
    <div className='home-mainclass'>
      <div class="container-homepage" >
        <div class="row">
          <div class="col-6 content-arrangement">
           <p><h1>Tune In, Turn Up</h1><br></br>

              <h2> "Unlock the Rhythm of Life."</h2><br></br>
              <h4>Welcome to Harmonic Hub, your ultimate destination for streaming and enjoying music.
                Enjoy your favorite music on the go, whether you're commuting, working out, or relaxing at home. Immerse yourself in high-definition sound quality for the best listening experience.Browse through our vast collection of tracks, albums, and artists.
                Discover new releases, top charts, and trending playlists.
                Filter music by genre, mood, or era to find exactly what you're looking for.Access your music across multiple devices - desktop, mobile, and tablet.We offer a diverse range of music genres and artists to cater to every musical preference.Stay up-to-date with the latest releases and trends in the music industry.
              </h4></p>
            <div class="latest-music">
              <button type="LatestMusic" className='rounded-pill btn btn-success'>Latest Music</button>
            </div>
            
            <p style={{paddingTop:"40px",paddingLeft:"650px"}}>ViewChannels</p>
          </div>
        


          <div class="col-2 home-image">

            <img src={img1} alt="Something went wrong" />

            <div className='subscribe'>

              <button type=" subscribe" class="btn btn-light" >subscribe</button>
            </div>
          </div>
          <div class="col-2 home-image1">
            <img src={headphones} alt="Something went wrong" />
          </div> <div class="col-2 home-image2">
            <img src={img3} alt="Something went wrong" />
          </div>

        </div>
      </div>
      <p><h3>Recent Podcast</h3></p>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card h-100">
            <img src={sriram} class="card-img-top"  alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"> </p>
              <button type="subscribe" className='btn btn-success rounded-pill'>Subscribe</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={mic} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"></p>
              <button type="subscribe" >Subscribe</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={mic} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"></p>
              <button type="subscribe" >Subscribe</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={mic} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <button type="subscribe" >Subscribe</button>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <p style={{paddingLeft:"650px"}}>Explore_More_Music</p>

      </div>
      <p><h3>Recommended</h3></p>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card h-100">
            <img src={mic} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"></p>
              <button type="subscribe" >Subscribe</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={mic} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"></p>
              <button type="subscribe" >Subscribe</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={mic} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"></p>
              <button type="subscribe" >Subscribe</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={mic} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"> </p>
              <button type="subscribe" >Subscribe</button>
            </div>
          </div>
        </div>
        <p style={{paddingLeft:"650px"}}>Explore_More_Music</p>
      </div>
      <p><h3>Frequently Played</h3></p>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card h-100">
            <img src={mic} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"></p>
              <button type="subscribe" >Subscribe</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={mic} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"></p>
              <button type="subscribe" >Subscribe</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={mic} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"> </p>
              <button type="subscribe" >Subscribe</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={mic} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text"> </p>
              <button type="subscribe" >Subscribe</button>
            </div>
          </div>
        </div>
        

      </div><Nav/>
    </div>


  )
}

export default Homepage