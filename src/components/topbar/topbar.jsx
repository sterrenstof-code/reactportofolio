import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            TC
          </a>
        </div>

        <div className="right">
          {/* <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div> */}
          <div className={"navigation " + (menuOpen && " active")}>
            <ul>
              <li onClick={() => setMenuOpen(false)}>
                <a href="#intro">Home</a>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <a href="#portofolio">Projects</a>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <a href="#works">Skills</a>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <a href="#testimonials">Resume</a>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
