import React from "react";
import headerStyles from "../styles/header.module.css";

const Header = () => {
  const x = 2;
  return (
    <div>
      <h1 className="title">
        <span>webdev</span> news
      </h1>
      <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style>
    </div>
  );
};

export default Header;
