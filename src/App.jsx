import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReturnForm from "./ReturnForm";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-700 mb-4">대학교 포털</h1>
      <Link
        to="/return"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        복학 신청하기
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/return" element={<ReturnForm />} />
      </Routes>
    </Router>
  );
}
