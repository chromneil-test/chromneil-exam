import React from 'react'
import Header from '../components/Header'
import '../assets/styling/App.css';
import {MDBContainer, MDBCol, MDBBtn, MDBRow} from 'mdbreact'


function Login(){
    return(
    <div className='App'>
        <div className='bgBlack'>
            <Header/>
        </div>
        <div>
            <p className='titleTxt fontFam'>
                LOGIN
            </p>
        </div>
        <MDBContainer >
            <MDBCol>
                <MDBBtn color='blue' className='border-radius' onClick={()=>{alert('Under Development')}}>CONTINUE WITH FACEBOOK</MDBBtn>
                <MDBBtn color='red' className='border-radius' onClick={()=>{alert('Under Development')}}>CONTINUE WITH GOOGLE</MDBBtn>
            </MDBCol>
            <p className='pt-3 pb-3'>OR</p>
            <MDBCol>
                <label className='pr-3'>Username:</label>
                <input name='username' placeholder='Enter your username' className='w-25'></input> 
            </MDBCol>
            <MDBCol>
                <label className='pr-3'>Password:</label>
                <input name='password' placeholder='Enter your password' className='w-25 pl-2'></input> 
            </MDBCol>
            <MDBBtn color='green' className='border-radius w-25' onClick={()=>{alert('Under Development')}}>LOGIN</MDBBtn>
            <MDBRow className='d-flex justify-content-center'>
                <a onClick={()=>{alert('Under Development')}}className='pr-5'><p className='font-color-blue hover'>Forgot your password</p></a>
                <a onClick={()=>{alert('Under Development')}}className='pl-5'><p className='font-color-blue hover'>Register Account</p></a>
            </MDBRow>
        </MDBContainer>
    </div>
    )
}

export default Login;