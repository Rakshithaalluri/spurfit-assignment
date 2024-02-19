import "./index.css";

const Header = () => (
  <>
    <nav className="navbar">
      <div className="navbar-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUHHhmODkp6LXZiHf1FRJNpV3ukrlxjHgNMQTNQ46WNCTL5RV0ACYYWt_HrbfX08YLms&usqp=CAU"
          alt="website logo"
          className="header-logo"
        />
        <ul className="navbar-texts">
          <li className="nav-link hover:underline">Home</li>
          <li className="nav-link hover:underline">About</li>
          <li className="nav-link hover:underline">Services</li>
          <li className="nav-link hover:underline">Contact</li>
        </ul>
        <button className="download-Button"> Download app </button>
      </div>
    </nav>
  </>
);

export default Header;
