import React, { Component } from 'react';
import "../App.css";
import GoogleLogin from 'react-google-login';
import {Link} from "react-router-dom";
export default class Login extends Component {
    constructor(){
        super();

        this.passwordHandler = this.passwordHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);

        this.logIn = this.logIn.bind(this);

        this.state={
            email:"",
            emailerr:false,
            password:"",
            passworderr:false
        }
    }

    passwordHandler=(pass)=>{
        this.setState({
            password:pass.target.value
        },()=>{
            if(pass.target.value.length<=8){
                this.setState({
                    passworderr:true
                })
            }else{
                this.setState({
                    passworderr:false
                })
            }
        })
    }
        emailHandler =(event)=>{
            this.setState({
                  email:event.target.value
            },()=>{
                let emailRegex = /^[a-zA-z0-9]+(\.[a-zA-Z0-9]+)*@([a-z0-9]+([a-z0-9]*)\.)[a-zA-Z]+$/gm;
                  if(emailRegex.test(this.state.email)) {
                      this.setState({
                          emailerr: false
                      })
                  } else {
                      this.setState({
                          emailerr: true
                      })
                  }
            })
        }
        
        logIn=(event)=>{
            event.preventDefault();
            localStorage.setItem('document',JSON.stringify(this.state));
            if(this.state.email!==""&&this.state.password!==""){
             window.location="/converter"
                   
            }else{
                alert("Please fill all the  fields")
            }
        }
        componentDidMount(){
            this.documentData = JSON.parse(localStorage.getItem('document'));
            if (localStorage.getItem('document')) {
                this.setState({
                   // email: this.documentData.email,
                   //password: this.documentData.password,
                   
            })
        } else {
            this.setState({
                email: '',
                password: ''
            })
        }
        }

        responseGoogle = (response) => {
            if(response.profileObj) {
                window.location = '/Converter'
            }
            console.log(response);
          }
       
    render() {
        return (
            <div className="login">
                <h2 style={{textAlign:"center",color:"deeppink",margin:"1em 0"}}>Login</h2>
                <div className="google"><GoogleLogin
    clientId="424627207158-b8p8i4ipaj9nf616usrsul594gkbit9h.apps.googleusercontent.com"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
  />  or Login with your email</div>
  

            <form  onSubmit={this.logIn}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.emailHandler} ></input>
                    <div>{this.state.emailerr&& <span style={{color:"red"}}>Please enter valid email</span>}</div>
                </div>
                <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.passwordHandler}></input>
            <div>{this.state.passworderr&& <span style={{color:"red"}}>Password must be 8 characters length</span>}</div>
                </div>
                <div className="fpass"><a href="/login">Forgot your password?</a></div>
                <div>
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                </div>
            </form>
            <div style={{marginTop:"1em",textAlign:"center"}}><p>Don't have an account?
                <Link to ="/SignUp"><button style={{marginLeft:"0.2em",padding:"0.1em"}} className="btn btn-warning text-white">SignUp</button></Link>
                </p></div>

            </div>
        )
    }
}
