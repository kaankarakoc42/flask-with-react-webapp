import React, { Component } from 'react';



export default class Index extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>
           flask ve react 
        </h1>
        <hr/>
        <div style={{marginTop:100,textAlign:"center"}}>
        <p>
         Bildiğiniz gibi flask çok basit ve hızlı  şekilde webapp geliştirmeye yarayan bir backend-python kütüphanesi
        </p>
        <p>
          react ise facebook tarafından geliştirilen bir frontend-javascript kütüphanesidir daha önce hiç bu iki harika kütüphanenin beraber nasıl çalışabileceğini düşündünüz mü? 
        </p>
        <p>
        backend  ve frontend i farklı portlardan çalıştırıp aralarında json veri tipiyle iletişim kurmak böyle bir proje yapabilmemiz mümkün oluyor.
        </p>
        <p>
          işte bir kaç örnek
        </p>
        <li>
          <a href="/login">örnek kullanıcı giriş sayfası</a>
        </li>
        <li>
          <a href="/profile/kaan">örnek dinamik kullanıcı profil sayfası</a>
        </li>
        </div>
      
    
      </div>
    );
  }
}
