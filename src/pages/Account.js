import React from 'react'
import Header from '../components/Header'
import '../assets/styling/App.css';
import {MDBContainer, MDBCol, MDBBtn, MDBRow} from 'mdbreact'


function Account(){
    return(
    <div className='App'>
        <div className='bgBlack'>
            <Header/>
        </div>
        <div>
            <p className='titleTxt fontFam'>ACCOUNT</p>
        </div>
            

        <div>
            <input placeholder='Name' className=''></input>
        </div>
        <div>
            <label>Name:</label>
        </div>

        <div>
            <input placeholder='Password' className=''></input>
        </div>
        <div>
            <label>Password:</label>
        </div>

        <div>
            <input placeholder='Email' className=''></input>
        </div>
        <div>
            <label>Email:</label>
        </div>
 
        <div>
            <input placeholder='Adress' className=''></input>
        </div>
        <div>
            <label>Address:</label>
        </div>

        <div>
            <input placeholder='Gender' className=''></input>
        </div>
        <div>
            <label>Gender:</label>
        </div>

        <div>
            <input placeholder='Age' className=''></input>
        </div>
        <div>
            <label>Age:</label>
        </div>





        
    </div>
    )
}

export default Account;