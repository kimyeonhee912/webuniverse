import { useState } from "react";

export default function ReturnForm() {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    semester: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("복학 신청 데이터:", formData);
    alert("복학 신청이 완료되었습니다.");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          복학 신청
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="block font-semibold">이름</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
            required
          />

          <label className="block font-semibold">학번</label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
            required
          />

          <label className="block font-semibold">복학 학기</label>
          <select
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
            required
          >
            <option value="">학기 선택</option>
            <option value="2025-1">2025년 1학기</option>
            <option value="2025-2">2025년 2학기</option>
          </select>

          <label className="block font-semibold">복학 사유</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
            rows={3}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            신청하기
          </button>
        </form>
      </div>
    </div>
  );
}
