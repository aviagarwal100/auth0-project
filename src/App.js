import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Github from "./Github";
import Header from "./Component/Header";
import "./Component/bootstrap.min.css";
import Auth0Lock from 'auth0-lock';

class App extends Component {
  static  defaultProps={
    domain:"dev-3o0b-6fc.auth0.com",
    clientId:"Teqfrn7upmSJKMHpPUOa7bNCOQ4A4z2M"
  }
  constructor(props){
    super(props);

    this.state = {
      idToken:"",
      profile:{}
    };
  }
  componentWillMount(){
    this.lock=new Auth0Lock(this.props.clientId,this.props.domain);
    this.lock.on('authenticated',(authResult)=>{
      this.lock.getProfile(authResult.accessToken,(error,profile)=>{
        if(error){
          console.log(error);
          return;
        }
        this.setProfile(authResult.accessToken,profile);
      })
    });
    this.getProfile();

  }
  setProfile(idToken,profile){
    localStorage.setItem('idToken',idToken);
    localStorage.setItem('profile',JSON.stringify(profile));
    this.setState({
      idToken:localStorage.getItem('idToken'),
      profile:JSON.parse(localStorage.getItem('profile'))
    })


  }
  getProfile(){
    if(localStorage.getItem('idToken')!=null){
      this.setState({
        idToken:localStorage.getItem('idToken'),
        profile:JSON.parse(localStorage.getItem('profile'))
      })
    }
  }
  showLock(){
    this.lock.show();
  }
  onLogout(){
    this.setState({
      idToken:"",
      profile:{}
    })
    localStorage.removeItem("idToken");
    localStorage.removeItem("profile");
  }
  render(){
    let page;
    if(this.state.idToken){
      page=<Github />
    }
    else{
      page="Click to login button";
    }
  return (
    <div className="App">
      <Header idToken={this.state.idToken} onLogout={this.onLogout.bind(this)} onLogin={this.showLock.bind(this)}/>
      {page}
    </div>
  );
}
}

export default App;
