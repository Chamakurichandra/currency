import React, { Component } from 'react';
import "../App.css";
import {Link} from "react-router-dom";
export default class SignUp extends Component {
    constructor(){
        super();
        this.state={
            username: '',
            usernameerr:false,
            firstname:"",
            firstnameerr:false,
            lastname:"",
            lastnameerr:false,
            email:"",
            emailerr:false,
            password:"",
            passworderr:false,
            cpassword:"",
            cpassworderr:false
    
        }
    }
    usernameHandler=(event)=>{
    
    this.setState({
        username:event.target.value
    },()=>{
        if(event.target.value.length<6){
            this.setState({
                usernameerr:true
            })
        }else{
            this.setState({
                usernameerr:false
            })
        }
    })
    }
    firstnameHandler=(active)=>{
        
        this.setState({
            firstname:active.target.value
        },()=>{
            if(active.target.value.length<3){
                this.setState({
                    firstnameerr:true
                })
            }else{
                this.setState({
                    firstnameerr:false
                })
            }
        })
    }
    lastnameHandler=(event)=>{
        
        this.setState({
            lastname:event.target.value
        },()=>{
            if(event.target.value.length<3){
                this.setState({
                    lastnameerr:true
                })
            }else{
                this.setState({
                    lastnameerr:false
                })
            }
        })
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
    cpasswordHandler=(event)=>{
        
        this.setState({
            cpassword:event.target.value
        },()=>{
            if(this.state.password !== this.state.cpassword){
                this.setState({
                    cpassworderr:true
                })
            }else{
                this.setState({
                    cpassworderr:false
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
  signUp=(event)=>{
      event.preventDefault();
      if(this.state.username&&this.state.firstname&&this.state.lastname&&this.state.email&&this.state.password&&this.state.cpassword) {
        window.location="/Converter"     
      }else{
          alert("Please fill all the  fields")
      }
     
  }
    render() {
        return (
            <div className="SignUp">
                 <h2 style={{textAlign:"center",color:"deeppink",margin:"1em 0"}}>SignUp</h2>
                <form  onSubmit={this.signUp}>
                    <div className="form-group">
                        <input type="text"  className="form-control" placeholder="Username" value={this.state.username} onChange={this.usernameHandler}></input>
                        <p>{this.state.usernameerr&&<span style={{color:"red"}}>Username should be atleast 6 characters length</span>}</p>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="First Name" value={this.state.firstname} onChange={this.firstnameHandler} ></input>
                            <div>{this.state.firstnameerr&&<span style={{color:"red"}}>First name should be atleast 3 characters length</span>}</div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Last Name" value={this.state.lastname} onChange={this.lastnameHandler} ></input>
                        <div>{this.state.lastnameerr&&<span style={{color:"red"}}>Lastname should be atleast 3 characters length</span>}</div>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.emailHandler} ></input>
                            <div>{this.state.emailerr&& <span style={{color:"red"}}>Please enter valid email</span>}</div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Password" value={this.state.password} onChange={this.passwordHandler} ></input>
                        <div>{this.state.passworderr&& <span style={{color:"red"}}>Password must be 8 characters length</span>}</div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Confirm Password" value={this.state.cpassword} onChange={this.cpasswordHandler} ></input>
                    <div>{this.state.cpassworderr&& <span style={{color:"red"}}>Password and confirm password must be same</span>}</div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-warning btn-block text-white">SignUp</button>
                    </div>
                </form>
                <div style={{marginTop:"1em",textAlign:"center"}}> Already have an account?<Link style={{textDecoration:"none"}} to="/"> <button style={{padding:"0.1em"}} className="btn btn-primary">Login</button></Link></div>
                
            </div>
        )
    }
}
