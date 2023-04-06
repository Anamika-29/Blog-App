import "./write.css";
import React,{Component} from "react";
import { Link } from "react-router-dom";
class Write extends Component{
  state={
    blog:{img:"",title:"",description:""}
  }
  
  handleChange = (e) =>{
    const {currentTarget: input} = e;
    let s1 = {...this.state};
    s1.blog[input.name] = input.value;
        
        this.setState(s1);
    
  }
  check = () =>{
    let{title,img,description}={...this.state.blog}
    if(!title){
      alert('Enter Title,Upload Image and Write Content of Blog');
        }
        else if(!img){
          alert('Enter Title,Upload Image and Write Content of Blog');
        }
            else if(!description){
              alert('Enter Title,Upload Image and Write Content of Blog');
            }
                else{
                  alert('Your blog has been posted');
                }
  }

render(){
  let{img,title,description}=this.state.blog;
  return (
    <div className="write">
      
      <img
        className="writeImg"
        src="https://www.blendb2b.com/hubfs/BLD%20techncial%20blog.jpeg"
        alt=""
      />
      <button className="return"><Link className="h" to="/posts">Return to Home</Link></button>
     
      
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} name="img" value={img}  onChange={this.handleChange}/>
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            
            onChange={this.handleChange}
            name="title" value={title} 

            
          />
        </div>
        
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            name="description"
            value={description}
            
            onChange={this.handleChange}
          />
        </div>
        <button className="writeSubmit" onClick={()=>this.check()} type="submit">
          Publish
        </button>
        

        
      </form>
    </div>
  );
}
}
export default Write;
