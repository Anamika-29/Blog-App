import React,{Component} from "react";
import { Link } from "react-router-dom";
class Search extends Component{
state={
    search:{search:""}
}

handleChange = (e) =>{
    const {currentTarget: input} = e;
    let s1 = {...this.state};
    s1.search[input.name] = input.value;
        
        this.setState(s1);
    
  }

  check = () =>{
    let{search}={...this.state.search}
    if(!search){
      alert('Enter Title of Blog to Search');
        }

  }

render(){
    let {search}= this.state.search;
    return (
        <div className="write">
          
          <img
            className="writeImg"
            src="https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/google-search-t.jpg"
            alt=""
          />
          <button className="return"><Link className="h" to="/posts">Return to Home</Link></button>
         
          
          <form className="writeForm">
            <div className="writeFormGroup">
              
              <input
                className="writeInput"
                placeholder="Enter Title of Blog to Search"
                type="text"
                
                onChange={this.handleChange}
                name="search" value={search} 
    
                
              />
            </div>
            
            
            <button className="writeSubmit" onClick={()=>this.check()} type="submit">
              Search
            </button>
            
    
            
          </form>
        </div>
      );
}
}
export default Search;