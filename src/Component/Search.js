import React,{Component} from "react";




class Search extends Component {
  Submit(event){
    event.preventDefault();
    let value=this.refs.username.value;
    this.props.getProfile(value);
    this.refs.username.value="";

  }
  render(){
    return(
      <div className="search-box">
        <form onSubmit={this.Submit.bind(this)}>
          <label><input type="search" ref="username" placeholder="Type username"/></label>
        </form>
      </div>
    );
  }
}
export default Search;
