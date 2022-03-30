import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = ({ clickEvent, currentUser, handleSignOut }) => {
  return (
    <nav>
      <div className="nav__primary">
        <div className="menu__icon">
          <GiHamburgerMenu />
        </div>
        <figure className="logo">
          <img className="logo__img" src="../assets/logo.png" alt="" />
        </figure>
      </div>
      <div className="nav__secondary">
        {currentUser && (
          <h2 className="welcome__msg">
            Welcome, {currentUser.displayName.split(" ").slice(0, 1)}!
          </h2>
        )}

        {currentUser ? (
          <button className="signout__btn" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <button className="login__btn" onClick={clickEvent}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
