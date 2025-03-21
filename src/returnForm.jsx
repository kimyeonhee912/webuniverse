import { useState } from "react";
import "./returnForm.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function ReturnForm() {
  const handleLogoClick = () => {
    //navigate("/");
  };

  return (
    <div className="">
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
      </header>

      <main>
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
            ..
          </h2>
          <p className="text-gray-700 mb-4">
            안녕하세요, 학생 여러분. 복학 신청 절차에 대해 안내드립니다.
          </p>
          <p className="text-gray-700 mb-4">
            복학 신청은 아래의 절차를 따라 진행해주시기 바랍니다:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>복학 신청서 작성</li>
            <li>필요 서류 제출</li>
            <li>학과 사무실 방문</li>
            <li>복학 승인 확인</li>
          </ul>
          <p className="text-gray-700 mb-4">
            자세한 사항은 학과 사무실로 문의해주시기 바랍니다. 감사합니다.
          </p>
        </div>
      </main>
    </div>
  );
}
