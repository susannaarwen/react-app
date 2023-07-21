import { Link } from "react-router-dom";

function Nav() {
    return (
        <div class="navbar">
        <nav class="nav">
          {/* Link components allow you to create links to other pages */}
          <ul class="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/experience">My Experience</Link>
            </li>
          </ul>
        </nav>
      </div>


    )
}

export default Nav;