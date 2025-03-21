import React, { useState } from "react";
import "./returnMain.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { FaStarOfLife } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const faqs = [
  {
    question: "일반휴학(복학) 할 때 신청이나 저장이 안됩니다. 어떻게 하나요?",
    answer:
      "일반휴학(복학)은 모바일에서는 신청할 수 없습니다. PC 환경에서만 할 수 있으며 크롬에서 혜린린대학교 검색 후 다시 신청해주세요.",
  },
  {
    question: "휴학할 때 등록금을 납부해야 하나요?",
    answer:
      "1) 등록금은 납부하고 싶은 학생은 등록금을 납부하고 휴학할 수 있습니다.\n2) 등록금은 납부하지 않고도 휴학할 수 있습니다.\n3) 등록금을 납부하고 휴학한 경우 등록금 반환받을 수 없습니다.",
  },
  {
    question:
      "교내외 장학금 선발 대상자입니다. 등록금 납부와 일반휴학 절차가 궁금합니다.",
    answer:
      "1) 등록금을 납부 기간에 납부합니다.\n2) 다음날 일반 휴학원을 제출합니다.\n3) 등록금 납부일과 동일한 날짜에 휴학신청을 할 경우 전산 상 오류가 발생하여 복학할 때 등록금 납부 대상자로 설정될 수 있습니다.",
  },
  {
    question:
      "개강 이후 학기 중에 휴학을 하게 되었습니다. 성적처리는 어떻게 하나요?",
    answer:
      "1) 수업일수 2/3선 이전에 휴학하는 경우 휴학승인 처리와 동시에 수간신청 기록이 삭제됩니다. 이수한 과목의 성적은 반영되지 않으며 복학하는 학기에 다시 이수하여야 합니다.\n2) 수업일수 2/3선 이후에 휴학하는 경우에는 성적평가는 담당 교수의 권한이므로 반드시 학점인정을 받을 수 있도록 사전에 학과 및 담당교수님께 상담 받으시길 권합니다. 기말고사 성적은 담당 교수님의 권한으로 중간고사 성적의 80%를 줄 수 있습니다.",
  },
  {
    question:
      "군휴학 신청할 때 복학 예정 학기는 원하는 학기에 설정할 수 있나요?",
    answer:
      "1) 군휴학 기간은 복무기간에 한합니다. 복학 예정 학년도 학기는 본인이 설정할 수 없습니다.\n2) 복무유형(육·해·공군, 사회복무요원 등)에 따른 입대 일자에 따라 전역일이 달라지고 복학예정 학년도 학기가 자동 설정됩니다.\n학기기준 : 1학기는 3월 1일 ~ 8월 31일, 2학기는 9월 1일 ~ 2월 28일입니다.\n전역일이 9월 1일 ~ 2월 28일 경우 1학기에 복학할 수 있습니다.\n전역일이 3월 1일 ~ 8월 31일 경우 2학기에 복학할 수 있습니다.",
  },
  {
    question: "군입대 후 귀가조치를 받았습니다. 어떻게 해야 하나요?",
    answer:
      "1) 귀가일로부터 10일 이내에 귀가증을 지참하여 종합서비스센터를 방문하여 군입대 휴학취소원을 제출해주세요.\n2) 군휴학을 취소한 후 복학을 원하는 경우 방문 기간이 수업일수 1/4선까지일 경우에는 복학할 수 있습니다.\n3) 수업일수 1/4선이 넘을 경우에는 군휴학 취소 후 군휴학을 일반휴학으로 변경합니다.",
  },
  {
    question:
      "부사관으로 임관할 경우 증빙자료는 무엇이며, 언제까지 신청할 수 있나요?",
    answer:
      "1) 종합서비스센터로 창구방문 신청을 하여야 합니다.\n2) 훈련기간을 마치고 임관이 확정된 이후 약식개인인사자력표를 증빙자료로 제출하면 됩니다.",
  },
  {
    question: "5월(11월) 입대 예정인 학생의 경우 어떻게 휴학을 할 수 있나요?",
    answer:
      "1) 일반휴학 기간(2월, 8월)에 일반휴학 후 입영통지서를 받은 날부터 군휴학을 신청할 수 있습니다.\n2) 수업을 듣고 5월(11월) 입대일자로 군휴학을 할 경우 입영통지서를 받은 날부터 군휴학을 신청할 수 있습니다.",
  },
];

const ReturnMain = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="return-main">
      <h2>휴학/복학</h2>
      <div className="returnWord1">휴학</div>
      <p>휴학이란 학적은 보유하되 일정 기간 학업을 쉬는 상태를 말함</p>
      <h3>휴학구분</h3>
      <ul>
        <li>
          일반휴학: 질병, 사고, 가정 사정, 임신·출산·육아, 창업 또는 기타
          부득이한 사유로 휴학하는 경우
        </li>
        <li>입대휴학 : 교육소집 또는 입영영장을 받고 군에 입대하는 경우</li>
      </ul>
      <h3>휴학기간</h3>
      <ul>
        <li>1회에 1년(두 학기)을 초과할 수 없음</li>
        <li>
          신입(편입)생은 입학 후 1년(2학기)간 휴학 할 수 없음. 다만, 군입대,
          임신· 출산· 육아 또는 총장이 특별히 인정하는 경우에는 휴학할 수 있음
        </li>
        <li>
          재학 중 휴학은 통산 4년(8학기) 을 초과할 수 없음. 질병, 장애 등 총장이
          특별히 인정하는 경우에는 통산 휴학 기간을 초과하여 휴학할 수 있음
        </li>
        <li>
          창업, 질병, 장애의 사유로 인한 휴학 기간은 최대 2년(4학기)을 초과할 수
          없으며 총 휴학 기간 및 휴학 횟수에 포함하지 아니함
        </li>
        <li>
          재입학생의 경우 재입학 이전 휴학 기간은 전체 휴학 기간에 산입하지
          아니함
        </li>
        <li>병역으로 인한 휴학기간은 전체 휴학기간에 산입하지 아니함</li>
      </ul>
      <h3>신청방법</h3>
      <ul>
        <li>온라인 신청</li>
        <ul>
          <li>일반휴학 : 포털혜린→ 학적정보→ 휴학/복학→ 일반휴학</li>
          <li>입대휴학 : 포털혜린 → 학적정보 → 휴학/복학 → 군휴학</li>
        </ul>
        <li>방문신청</li>
        <ul>
          <li>
            대상 : 신입생, 편입생이 특별한 사유가 발생 할 경우, 병가휴학,
            육아휴학 사유 등이 발생할 경우, 1학기 이상을 이수하고 창업사유로
            휴학을 하고자 하는 경우
          </li>
          <li>
            일반휴학: 홈페이지 → 포털혜린 → 학적정보 → 휴·복학휴학/복학 → 원서
            출력(특별사유 관련 증빙서류) → 종합서비스센터
          </li>
        </ul>
      </ul>
      <h3>기타 사항</h3>
      <ul>
        <li>
          일반휴학 중 입영통지서가 나오는 경우, 입대휴학으로 변경 신청해야 함
        </li>
        <li>
          입대휴학 : 수강 중인 학생이 수업일수 2/3선 이후 입대하는 경우
          입영통지서와 학점인정원을 지참하여 종합서비스센터 방문 신청
        </li>
        <li>
          입영예정자의 입영통지서가 발부되지 않은 경우, 일반휴학 후 입대휴학으로
          변경
        </li>
      </ul>
      <h3>신청 시기</h3>
      <ul>
        <li>
          일반휴학 : 1학기는 매년 2월 한 달간이며, 2학기는 매년 8월 한 달간 접수
        </li>
        <li>입대휴학 : 병무청으로부터 입영통지서를 받은 날부터 제출 가능</li>
        <li>
          휴학연장: 휴학생이 휴학 기간이 만료되었으나 계속 휴학하고자 하는 경우
          만료 전에 온라인으로 연장 신청할수 있음
        </li>
      </ul>
      <h3>유의사항</h3>
      <ul>
        <li>휴학생의 등록금 대체</li>
        <li>
          등록을 마친 후 수업일수 2/3 해당일까지 입대휴학원을 제출하고 입영한
          경우에는 이미 납입한 등록금을 반환하지 아니하고 전역 후 복학하는 첫
          학기 등록금으로 대체
        </li>
        <li>
          등록금을 전액 납부한 일반휴학자의 등록금은 복학하는 첫 학기에 다음과
          같이 대체
        </li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>대체 사유 발생일</th>
            <th>대체금액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              매학기 소정의 휴학신청기간 및 수업일수 1/3 해당일 까지 휴학하는
              경우
            </td>
            <td>수업료 전액 대체 인정</td>
          </tr>
          <tr>
            <td>수업일수 1/3을 경과하고 1/2 해당일 까지 휴학하는 경우</td>
            <td>수업료의 2/3 대체 인정</td>
          </tr>
          <tr>
            <td>수업일수 1/2을 경과하고 2/3 해당일 까지 휴학하는 경우</td>
            <td>수업료의 1/2 대체 인정</td>
          </tr>
          <tr>
            <td>수업일수 2/3을 해당일 이후 휴학하는 경우</td>
            <td>대체 인정 없음</td>
          </tr>
        </tbody>
      </table>
      <div className="noteTelNumber">
        {" "}
        <FaStarOfLife /> 문의 : 종합서비스센터(TEL 041-870-8868 / FAX 6477)
      </div>
      <div className="returnWord2">복학</div>
      <p>
        복학이란 휴학한 자가 휴학 기간 만료로 학업을 계속하고자 할 때 소정의
        기간 내에 복학 신청
      </p>
      <h3>복학대상</h3>
      <ul>
        <li>휴학기간이 만료된 경우</li>
        <li>
          두 학기 휴학 신청하였으나 한 학기 휴학 후 복학을 원하는 경우(조기복학)
        </li>
        <li>
          조기복학의 경우, 해당학기 총 수업일수 3/4 이상을 출석할 수 있어야 함
        </li>
      </ul>
      <h3>복학 시기</h3>
      <p>1학기는 매년 1월~2월 두 달간이며, 2학기는 매년 7월~8월 두 달간 접수</p>
      <h3>신청방법</h3>
      <ul>
        <li>
          홈페이지 포털혜린에서 신청 : 일반복학(군복학, 일반 조기 복학 포함)
        </li>
        <ul>
          <li>홈페이지 → 포털혜린 → 학적정보 → 휴·복학 메뉴에서 신청</li>
        </ul>
        <li>종합서비스센터 방문신청 : 군 조기복학</li>
      </ul>
      <h3>군조기복학 준비서류(복학원서 공통)</h3>
      <ul>
        <li>복학기간 내 전역한 자 : 전역증</li>
        <li>개강일 이후 전역예정인자</li>
        <ul>
          <li>
            전역예정증명서 (수강신청 정정기간 전역 시에는 전역예정증명서만 제출)
          </li>
          <li>취학허가서 : 부대장(기관장) 승인</li>
        </ul>
      </ul>
      <h3>유의사항</h3>
      <ul>
        <li>
          휴학기간 종료에도 복학하지 않을 경우 "미복학 제적" 처리됨(제적 및
          재입학 참조)
        </li>
        <li>등록금 반환(학칙 시행세칙 제 2장 15조)</li>
        <ul>
          <li>
            휴학생이 등록금 대체 후 제적(자퇴, 미복학 제적)된 경우 휴학일을
            기준으로 등록금을 반환함
          </li>
        </ul>
      </ul>
      <h3>등록금 반환 기준</h3>
      <table>
        <thead>
          <tr>
            <th>반환사유발생일</th>
            <th>반환금액</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>학기 개시 전일까지</td>
            <td>수업료 및 입학금 전액</td>
            <td>입학생의 학기개시일은 입학일을 기준으로 함</td>
          </tr>
          <tr>
            <td>학기개시일 부터 30일까지</td>
            <td>수업료의 5/6 해당액</td>
            <td></td>
          </tr>
          <tr>
            <td>학기개시일에서 30일이 지난 날 로부터 60일까지</td>
            <td>수업료의 2/3 해당액</td>
            <td></td>
          </tr>
          <tr>
            <td>학기개시일에서 60일이 지난 날 로부터 90까지</td>
            <td>수업료의 1/2 해당액</td>
            <td></td>
          </tr>
          <tr>
            <td>학기개시일 90일이 지난 날</td>
            <td>반환하지 않음</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="returnWord3">휴학/복학 FAQ</div>
      <div className="faq-section">
        <p className="highlight-number-section">
          총 <span className="highlight-number">13</span> 개의 게시물이
          있습니다.
        </p>
        <div className="faq-controls">
          <select className="faq-dropdown">
            <option value="title">제목</option>
          </select>
          <div className="faq-search">
            <input type="text" placeholder="검색" />
            <button className="faq-search-button">
              <FaMagnifyingGlass />
            </button>
          </div>
        </div>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <FaQuestionCircle className="fa-question-circle" />
              {faq.question}
              <MdOutlineArrowDropDownCircle className="md-outline-arrow-drop-down-circle" />
            </div>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReturnMain;
