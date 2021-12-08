const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1 className="logo">TrackCovid</h1>
        <div className="theme">
          <p className="theme-text">Dark mode</p>
          <button className="toggle">
            <div className="toggle-indicator"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
