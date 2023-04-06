import React,{Component} from "react";
import Post from "../post/Post";
import "./posts.css";
class Posts extends Component{
  state={
    posts:[    {img:"https://www.eweek.com/wp-content/uploads/2022/05/enterprise-AI.jpg",title:"Artificial Intelligence",description:"What is artificial intelligence (AI)? Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision."},

      {img:"https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667",title:"Nature",description:"..m"},
    {img:"https://upload.wikimedia.org/wikipedia/commons/2/25/Sachin_Tendulkar_at_MRF_Promotion_Event.jpg",title:"Sachin Tendular",description:"You’ve heard the chant. You may not have heard of the sport, but you’ve heard the chant. The chant - one that a billion people once lived by; one that would originate from the Wankhede and echo across the city and the seas. It is a name that continues to inspire many, not only in India, but all over the world, to take up the sport. Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest; yet he maintained that he wasn’t greater than than the game. To the people of India, the 5’5” giant of a man was much more than that. He was an emotion; a symbol of hope in a nation that revered him as nothing short of a God"},
    {img:"https://img.etimg.com/thumb/msid-88634316,width-1200,height-900,imgsize-65126,resizemode-8,quality-100/tech/technology/tracking-the-buzz-in-tech.jpg",title:"Technology",description:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumendaofficia architecto deserunt deleniti? Labore ipsum aspernatur magnafugiat, reprehenderit praesentium blanditiis quos cupiditate rationeatque, exercitationem quibusdam, reiciendis odio laboriosam?"},
    {img:"https://customsitesmedia.usc.edu/wp-content/uploads/sites/59/2019/11/16024710/Taiwan-Blue-Magpie-web.jpg",title:"Birds",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumendaofficia architecto deserunt deleniti? Labore ipsum aspernatur magnafugiat, reprehenderit praesentium blanditiis quos cupiditate rationeatque, exercitationem quibusdam, reiciendis odio laboriosam?"},
    {img:"http://cdn.zeebiz.com/hindi/sites/default/files/styles/zeebiz_850x478/public/2022/09/30/103747-whatsapp-image-2022-07-08-at-114320-am.jpeg?itok=P3q3OEb0",title:"Stock Market",description:"The derivatives market was introduced in India in the year 2000, and since then derivatives market has been gaining great significance, just like its counterpart abroad.Just like shares, Derivatives are also traded in stock exchanges. Derivatives are a type of security whose value is derived from an underlying asset.These underlying assets can be stocks, bonds, commodities, or currencies. The popularity of derivatives can easily be understood by the daily turnover in the derivatives segment on the exchange, which is much higher than the turnover in the cash segment on the same exchange."},
  ]
  }
  render(){
    let{posts} = this.state;
    return (
      <div className="posts">
        {posts.map(ele=><Post img={ele.img} title={ele.title} description={ele.description} />
  )}
        
      </div>
    );

  }

}


export default Posts;
  
  

