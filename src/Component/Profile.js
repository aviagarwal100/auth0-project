import React,{Component} from "react";



class Profile extends Component {


  render(){
    let userdata=this.props.userData;
    let followers=`${userdata.homeURL}/followers`;
    let following=`${userdata.homeURL}/following`;
    let repos=`${userdata.homeURL}/repos`;

    if(userdata.notFound==="Not Found"){
      return(
        <div className="notfound">
         <h3>Please try another username</h3>
         <h3>This username is not valid</h3>
        </div>
      );
    }
    else{
      return(

          <section className="github-profile">
          <div className="github-profile-info">
            <a href={userdata.homeURL} target="_blank" title={userdata.name || userdata.username}><img src={userdata.avatar}/></a><br/>
            <a href={userdata.homeURL}  target="_blank" title={userdata.username}>{userdata.name || userdata.username}</a>
          </div>
          <div>
           <ul className="github-profile-state">
           <li className="cen" ><a href={followers}target="_blank" title="followers">Followers: {userdata.followers}</a></li><br/>
           <li className="cen"><a href={following}target="_blank" title="following">Following: {userdata.following}</a></li><br/>
           <li className="cen1"><a href={repos} target="_blank" title="repos">Repository: {userdata.repos}</a></li>
           </ul>
          </div>
        </section>
      );

    }

  }
}
export default Profile;
