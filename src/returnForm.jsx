import { useState } from "react";
import "./returnForm.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import ReturnMain from "./returnMain";

export default function ReturnForm() {
  const handleLogoClick = () => {
    //navigate("/");
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="return-form">
      <header>
        <div className="header-links">
          <div className="link-group">
            <div className="logo">
              <p onClick={handleLogoClick} style={{ cursor: "pointer" }}>
                Bigs
              </p>
            </div>
            <div className="links">
              <span>login</span> | <span>language</span> | <span>popup</span>
            </div>
          </div>
          <div className="icon-1">
            <FaMagnifyingGlass className="icon" />
          </div>
          <div className="icon-2">
            <GiHamburgerMenu className="icon icon-2" />
          </div>
        </div>
        <div className="background-image">
          <div className="background-text">교육</div>
        </div>
      </header>

      <main className="main-content">
        <ReturnMain />
      </main>

      <button className="scroll-to-top" onClick={handleScrollToTop}>
        Top
      </button>
    </div>
  );
}
