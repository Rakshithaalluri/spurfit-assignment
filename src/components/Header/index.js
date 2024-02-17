import "./index.css";
// import MainContent from "../MainContent";

const Header = () => (
  <>
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="Ahead-logo"> Ahead Logo </h1>
        <ul className="navbar-texts">
          <li className="nav-link"> Emotions </li>
          <li className="nav-link"> Manifesto </li>
          <li className="nav-link"> Self-awareness test </li>
          <li className="nav-link"> Work With Us </li>
        </ul>
        <button className="download-Button"> Download app </button>
      </div>
    </nav>
  </>
);

export default Header;
