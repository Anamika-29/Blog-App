import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <p>
          I am a blogger. I write regularly for an online journal or website.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, culpa! Sint quae delectus illum quia, ducimus quo ea veritatis reiciendis at voluptates cumque iusto vero voluptas in aliquid nulla sit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
