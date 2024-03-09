import { Link } from "react-router-dom"
import rakuten_logo from "../assets/Rakuten-Logo.wine.svg"
import home from "../assets/house-door.svg"
import my_resume_logo from "../assets/file-earmark-person-fill.svg"
import my_resume from "../assets/CV - 2024.pdf"

export const Navbar = () => {
  return <>
  <header>
    <div className="navbar1">
      <Link to="https://fr.shopping.rakuten.com/"><img src={rakuten_logo} className="rakuten_logo"/></Link>
    </div>
    <div className="navbar2">
      <Link to="/"><img src={home}/></Link>
      <a href={my_resume} download={my_resume}><img src={my_resume_logo}/></a>
    </div>
    <div className="drop_menu">
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Show more
        </button>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" type="button" to="/">Home</Link></li>
          <li><a className="dropdown-item" type="button" href={my_resume} download={my_resume}>My Resume</a></li>
        </ul>
      </div>
    </div>
  </header>
  </>
} 