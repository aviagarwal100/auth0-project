import React,{Component} from "react";
import Search from "./Component/Search";
import Profile from "./Component/Profile";



const api="https://api.github.com/users"
class Github extends Component {
  componentDidMount(){
    this.getProfile(this.state.username);
  }
  constructor(props){
    super(props);

    this.state = {
      username:"hiteshchoudhary",
      name:"",
      repos:"",
      followers:"",
      following:"",
      homeURL:"",
      notFound:""
    };
  }
  getProfile(username){
    let finalURL=`${api}/${username}`;
    fetch(finalURL)
    .then((result)=>result.json())
    .then((data)=>{
      this.setState({
        username:data.login,
        name:data.name,
        avatar:data.avatar_url,
        repos:data.public_repos,
        followers:data.followers,
        following:data.following,
        homeURL:data.html_url,
        notFound:data.message
      })
    })
    .catch((error)=>{
      console.log("There is a problem");
    })
  }
  render(){
    return(
      <section id="card">
        <Search  getProfile={this.getProfile.bind(this)} />
        <Profile userData={this.state} />
      </section>
    );
  }
}

export default Github;
