import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Blog-App Made Using React</span>
        <span className="headerTitleLg">Welcome to "BLOG-APP"</span>
      </div>
      <img
        className="headerImg"
        src="https://world.edu/wp-content/uploads/2020/07/writing-great-blogs.jpg"
        alt=""
      />
    </div>
  );
}
