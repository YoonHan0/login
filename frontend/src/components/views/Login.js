import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { User, Lock, Eye, EyeOff } from "lucide-react"
import "./Login.css"

const Login = () => {
    const navigate = useNavigate();

    /** state */
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
        const init = async () => {
            try {
                // 이 왜 안되노;;
                setId("");
                setPassword("");
            } catch (error) {
                console.log("FETCH ERROR ", error);
                setError(error);
            }
        };
        init();
    }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log("ID: ", id, "\nPW: ", password);
      setIsLoading(false);
    }, 1000);
    
    try {
        // const parameter = new URLSearchParams({
        //     username: 'user',
        //     password: '6b7e01d1-68f6-4090-91ce-b5a1ef310bb0',
        // });
        // const res = await callApi('/loginProc', parameter);
        const res = await fetch('/loginProc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                username: 'user',
                password: '63930132-1a57-41e3-a332-3cd8fca17d5f',
            }),
            credentials: 'include', // 세션 쿠키를 받아오기 위함
        });
        
        console.log("### 데이터 확인 ### \n", res);
        if(res.ok) {
            console.log("### 로그인 성공 ###");
            navigate('/main');
        } else {
            console.log("### 로그인 실패 ###");
        }

    } catch (error) {
        console.log("FETCH ERROR ", error);
        setError(error);
    }
  }

  const goToUserPage = () => {
    navigate("/userList")
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const callApi = async (url, body) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body,
        credentials: 'include', // 세션 쿠키를 받아오기 위함
    });
    return res;
  }

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="login-card">
        <div className="login-header">
          <div className="logo-circle">
            <User size={32} />
          </div>
          <h1 className="login-title">환영합니다!</h1>
          <p className="login-subtitle">계정에 로그인하세요</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <div className="input-wrapper">
              <User className="input-icon" size={20} />
              <input
                type="text"
                placeholder="아이디를 입력하세요"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="login-input"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-wrapper">
              <Lock className="input-icon" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
                required
              />
              <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className={`login-button ${isLoading ? "loading" : ""}`} disabled={isLoading}>
            {isLoading ? <div className="loading-spinner"></div> : "로그인"}
          </button>
        </form>

        <button onClick={goToUserPage} className="secondary-button">
          회원정보 확인
        </button>

        <div className="login-footer">
          <a href="/signup" className="footer-link">
            회원가입
          </a>
          <span className="footer-divider">•</span>
          <a href="/forgot-password" className="footer-link">
            비밀번호 찾기
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
