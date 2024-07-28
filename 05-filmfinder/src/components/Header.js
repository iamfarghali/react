function Header() {
  return (
    <header className="header">
      <input className="header__search" type="text" name="search" />
      <div className="header__actions">
        <button className="btn">My favorite</button>
        <button className="btn">Watch later</button>
      </div>
    </header>
  );
}

export default Header;
