"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./Signup.css"
import OkAlert from "../common/OkAlert";

const Signup = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)) // 임시 딜레이
      console.log("회원가입 시도:", { userId, password, name, email });
      const param = {
        id: userId, 
        password: password, 
        name: name, 
        email: email
      }
      const res = await postCallApi('/joinProc', param);
      
      console.log("### 회원가입 완료 ### \n", res);
      if(res.ok) {
         setAlertOpen(true);
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      alert("회원가입 중 오류가 발생하였습니다😅");
      console.log("ERROR ", error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleConfirm = () => {
    navigate('/login');
  }

  const postCallApi = async (url, param) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(param),
        credentials: 'include', // 세션 쿠키를 받아오기 위함
    });

    return res;
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

      <OkAlert
        isOpen={alertOpen}
        onClose={() => setAlertOpen(false)}
        // title=""
        message="회원가입이 완료되었습니다🎉"
        onConfirm={handleConfirm}
      />
    </div>    
  )
}
export default Signup;