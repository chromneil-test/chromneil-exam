import React from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/styling/App.css';
import { MDBContainer, MDBRow, MDBIcon, Alert, MDBBtn, MDBCol } from 'mdbreact'
import Header from '../components/Header'
import backgroundImg from '../assets/images/lpWallpaper.jpg'
import albumImg from '../assets/images/albumImg.jpg'
import playBtn from '../assets/images/playBtn.png'
import heart from '../assets/images/heart.png'
import ellipsis from '../assets/images/ellipsis.png'

function Home() {
  return (
    <div className="App">
      <Header/>
      <div className='homeBtn bgColorheader'>
        <p className='titleTxt font-black'>
          Linkin Park Music Player
        </p>
        <div>
          <MDBBtn type='button' color='black' className='margin-bottom' onClick={()=>{alert('Under Development')}}>Listen Now</MDBBtn>
        </div>
      </div>
      <div className=''>
        <img src={backgroundImg} className='homeImgStyle'/>
      </div>
      <p className='titleTxt'>
        The Linkinpark
      </p>
      <MDBContainer className='p-0'>
        <MDBRow className='p-0 m-0'>
          <img src={albumImg} className='albumImgStyle'/>
          <MDBCol className='playlistConH p-0 m-0'>
            <p className='font-white fontFam'>
              Playlist
            </p>
            <p className='font-white fontFam font-size-50'>
              Best of Linkin Park
            </p>
            <p className='font-white'>
              Le meilleur de Linkin Park avec "In the end", "Numb", "One Step Closer" et bien d'autres.
            </p>
            <p className='font-white'>
            391 likes 2 hr 13 min
            </p>
          </MDBCol>
        </MDBRow>
          <MDBRow className='d-flex justify-content-start plClr m-0'>
            <a onClick={()=>{alert('Under Development')}} >
              <img src={playBtn} className='plIcnH'/>
            </a>
            <a onClick={()=>{alert('Under Development')}} >
              <img src={heart} className='plIcnH'/>
            </a>
            <a onClick={()=>{alert('Under Development')}} >
             <img src={ellipsis} className='plIcn'/>
            </a>
          </MDBRow>
          <MDBCol className='p-0 playlistConH border-bottom'>
            <a onClick={()=>{alert('Under Development')}}>
              <MDBRow className='d-flex justify-content-between pr-3 pl-3'>
                <p className='font-white pl-3'>Somewhere I Belong</p>
                <p className='pt-0 pr-3 mt-3 font-white'>3:30</p>
              </MDBRow>
              <MDBRow className='pl-3'>
              <p className='d-flex justify-content-start font-white pl-3 pt-0 '>Linkin Park</p>
              </MDBRow>
            </a>
          </MDBCol>
          <MDBCol className='p-0 playlistConH border-bottom'>
            <a onClick={()=>{alert('Under Development')}}>
              <MDBRow className='d-flex justify-content-between pr-3 pl-3'>
                <p className='font-white pl-3'>One Step Closer</p>
                <p className='pt-0 pr-3 mt-3 font-white'>4:30</p>
              </MDBRow>
              <MDBRow className='pl-3'>
              <p className='d-flex justify-content-start font-white pl-3 pt-0 '>Linkin Park</p>
              </MDBRow>
            </a>
          </MDBCol>
          <MDBCol className='p-0 playlistConH border-bottom'>
            <a onClick={()=>{alert('Under Development')}}>
              <MDBRow className='d-flex justify-content-between pr-3 pl-3'>
                <p className='font-white pl-3'>What I`ve Done</p>
                <p className='pt-0 pr-3 mt-3 font-white'>5:30</p>
              </MDBRow>
              <MDBRow className='pl-3'>
              <p className='d-flex justify-content-start font-white pl-3 pt-0 '>Linkin Park</p>
              </MDBRow>
            </a>
          </MDBCol>
          <MDBCol className='p-0 playlistConH border-bottom'>
            <a onClick={()=>{alert('Under Development')}}>
              <MDBRow className='d-flex justify-content-between pr-3 pl-3'>
                <p className='font-white pl-3'>Numb</p>
                <p className='pt-0 pr-3 mt-3 font-white'>4:00</p>
              </MDBRow>
              <MDBRow className='pl-3'>
              <p className='d-flex justify-content-start font-white pl-3 pt-0 '>Linkin Park</p>
              </MDBRow>
            </a>
          </MDBCol>
          <MDBCol className='p-0 playlistConH border-bottom'>
            <a onClick={()=>{alert('Under Development')}}>
              <MDBRow className='d-flex justify-content-between pr-3 pl-3'>
                <p className='font-white pl-3'>In the End</p>
                <p className='pt-0 pr-3 mt-3 font-white'>4:30</p>
              </MDBRow>
              <MDBRow className='pl-3'>
              <p className='d-flex justify-content-start font-white pl-3 pt-0 '>Linkin Park</p>
              </MDBRow>
            </a>
          </MDBCol>
          <MDBCol className='p-0 playlistConH border-bottom'>
            <a onClick={()=>{alert('Under Development')}}>
              <MDBRow className='d-flex justify-content-between pr-3 pl-3'>
                <p className='font-white pl-3'>Points of Authority</p>
                <p className='pt-0 pr-3 mt-3 font-white'>4:00</p>
              </MDBRow>
              <MDBRow className='pl-3'>
              <p className='d-flex justify-content-start font-white pl-3 pt-0 '>Linkin Park</p>
              </MDBRow>
            </a>
          </MDBCol>
          <MDBCol className='p-0 playlistConH border-bottom'>
            <a onClick={()=>{alert('Under Development')}}>
              <MDBRow className='d-flex justify-content-between pr-3 pl-3'>
                <p className='font-white pl-3'>Faint</p>
                <p className='pt-0 pr-3 mt-3 font-white'>3:30</p>
              </MDBRow>
              <MDBRow className='pl-3'>
              <p className='d-flex justify-content-start font-white pl-3 pt-0 '>Linkin Park</p>
              </MDBRow>
            </a>
          </MDBCol>
          <MDBCol className='p-0 playlistConH border-bottom'>
            <a onClick={()=>{alert('Under Development')}}>
              <MDBRow className='d-flex justify-content-between pr-3 pl-3'>
                <p className='font-white pl-3'>Papercut</p>
                <p className='pt-0 pr-3 mt-3 font-white'>5:00</p>
              </MDBRow>
              <MDBRow className='pl-3'>
              <p className='d-flex justify-content-start font-white pl-3 pt-0 '>Linkin Park</p>
              </MDBRow>
            </a>
          </MDBCol>
          </MDBContainer>

    </div>
  );
}

export default Home;
