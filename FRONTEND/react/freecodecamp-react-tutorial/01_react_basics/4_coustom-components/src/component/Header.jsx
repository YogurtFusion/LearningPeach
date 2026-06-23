import React from 'react'

function Header() {
  return (
    <header className="head">
      <img className="head-img" src="/src/assets/react.svg" alt="" />

      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header