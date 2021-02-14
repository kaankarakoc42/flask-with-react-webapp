import React, { Component } from 'react';
const {post} = require('axios')



export default class Profile extends Component {
  constructor(props){
      super(props)
      this.username=props?.match?.params?.username
      this.state={
          val:""
      }
      this.getDataFromBackEnd=this.getDataFromBackEnd.bind(this)
  }
  
  getDataFromBackEnd(){
     post(`http://127.0.0.1:5000/profile/${this.username}`).then(res=>{
         if(res.data){
             this.setState({val:res.data}) 
             console.log(this.state.val)
         }

     })
  }

  render() {
    this.getDataFromBackEnd()
    return (
      <div style={{textAlign:"center"}}> 
          <h1>{this.username}</h1>
          <hr/>
          <p>{this.state.val} burası profil kısmı dostum</p>
      </div>
    );
  }
}
