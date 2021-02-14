import React, { Component } from 'react';


const {post} = require('axios')



export default class Login extends Component{
    constructor(props){
       super(props)
       this.state={
           login:{
           username:"",
           password:""
           },
           action:"/login"
       }
       this.onSubmit=this.onSubmit.bind(this)
    }

    onSubmit(){
     post(`http://127.0.0.1:5000/login`,{...this.state.login}) 
      this.setState({action:"/profile/"+this.state.login.username})
    } 


   render(){
      return(
        <div>
            <div style={{textAlign:"center"}}>
                <h1>
                    Giriş yap!
                </h1>

            </div>
            <hr/>
            <div className="container" style={{marginTop:100,textAlign:"center"}}>
            <form action={this.state.action} onSubmit={this.onSubmit}>
            <div className="input-group mb-3">
                    <input style={{textAlign:"center"}} onChange={val=>this.setState({login:{username:val.target.value,password:this.state.login.password}})} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                    <input style={{textAlign:"center"}} onChange={val=>this.setState({login:{username:this.state.login.username,password:val.target.value}})} type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
            </div>
            <button type="submit" className="btn btn-outline-primary">Gönder</button>
            </form>
            </div>
        </div>
      )
  }

}