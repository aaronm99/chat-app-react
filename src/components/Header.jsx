import React from "react";

const Header = () => {
  return (
    <header id="header">
      <div className="welcome__container">
        <h1 className="landing__header">Messages to the world!</h1>
        <p className="landing__para">
          Chat to people across the world from the comfort of your home.
        </p>
      </div>
      <figure className="landing__img--wrapper">
        <img className="landing__img" src="../assets/groupchat.svg" alt="" />
      </figure>
    </header>
  );
};

export default Header;
