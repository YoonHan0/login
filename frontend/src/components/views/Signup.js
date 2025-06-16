"use client"

import { useState } from "react"
import "./Signup.css"

const Signup = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // 회원가입 로직 구현
    try {
      // 실제 API 호출 로직이 들어갈 자리
      await new Promise((resolve) => setTimeout(resolve, 1000)) // 임시 딜레이
      console.log("회원가입 시도:", { userId, password, name, email });
      
      const fetchData = async () => {
          try {
              const response = await fetch('/joinProc');      // GET요청
              console.log("### 회원정보 조회 ### \n", response);
              const data = await response.json();
              
              console.log("### 회원가입 완료 ### \n", data);

          } catch (error) {
              console.log("FETCH ERROR ", error);
          }
      };


    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h1 className="signup-title">회원가입</h1>
          <p className="signup-subtitle">새로운 계정을 만들어보세요</p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <label htmlFor="id" className="input-label">
              아이디
            </label>
            <input
              id="id"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="input-field"
              placeholder="아이디를 입력해주세요"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password" className="input-label">
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="비밀번호를 입력해주세요"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="name" className="input-label">
              이름
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              placeholder="이름을 입력해주세요"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email" className="input-label">
              이메일
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="이메일을 입력해주세요"
              required
            />
          </div>

          <button type="submit" className={`submit-button ${isLoading ? "loading" : ""}`} disabled={isLoading}>
            {isLoading ? "가입 중..." : "완료"}
          </button>
        </form>

        <div className="signup-footer">
          <p>
            이미 계정이 있으신가요?{" "}
            <a href="/login" className="login-link">
              로그인
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Signup;