import { useState } from "react";
import "./returnForm.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import ReturnMain from "./returnMain";
import { IoIosPin } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";

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
              <p
                onClick={handleLogoClick}
                style={{
                  cursor: "pointer",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                혜린대학교
              </p>
            </div>
            <div className="links">
              <span>Login</span> <div className="separator">|</div>{" "}
              <span>Language</span> <div className="separator">|</div>{" "}
              <span>Popup</span>
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
          <nav className="navigation-bar">
            <ul>
              <li>
                {" "}
                <IoIosPin />
                교육
              </li>
              <IoIosArrowForward />
              <li>학생정보</li>
              <IoIosArrowForward />
              <li>휴학/복학</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <ReturnMain />
      </main>

      <button className="scroll-to-top" onClick={handleScrollToTop}>
        <FaArrowUp />
        Top
      </button>
    </div>
  );
}
