import React from 'react'
import { MDBRow, MDBCol } from 'mdbreact'
import '../assets/styling/App.css';
import Header from '../components/Header'
import blogPic1 from '../assets/images/lpSinging.jpg'

function Blog(){
    return(
        <div className='App'>
            <div className='bgBlack'>
                <Header/>
            </div>
            <div>
                <p className='titleTxt fontFam'>
                    BLOG
                </p>
            </div>
            <div className='d-flex justify-content-around imgTxtCon'>
                <div>
                  <img src={blogPic1} className='imgBlogStyle'/>
                </div>
                <p className='blogTxt fontFam'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className='d-flex justify-content-around imgTxtCon'>
                <div>
                  <img src={blogPic1} className='imgBlogStyle'/>
                </div>
                <p className='blogTxt'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className='d-flex justify-content-around imgTxtCon'>
                <div>
                  <img src={blogPic1} className='imgBlogStyle'/>
                </div>
                <p className='blogTxt'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className='d-flex justify-content-around imgTxtCon'>
                <div>
                  <img src={blogPic1} className='imgBlogStyle'/>
                </div>
                <p className='blogTxt'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>

    )
}

export default Blog;