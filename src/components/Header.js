const Header = ({ toggleTheme }) => {
  return (
    <header>
      <div className="header-container">
        <h1 className="logo">TrackCovid</h1>
        <div className="theme">
          <p className="theme-text">Dark mode</p>
          <button className="toggle" onClick={toggleTheme}>
            <div className="toggle-indicator dark-mode-active"></div>
            <div className="toggle-indicator light-mode-active"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
