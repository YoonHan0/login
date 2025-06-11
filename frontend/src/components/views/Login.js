import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';     // 컴포넌트 동적 이동을 위한 import

const Login = () => {
    
    const navigate = useNavigate();
    
    /** state */
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    /** 스타일 객체 */
    const styles = {
        container: {
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f6fa',
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
        },
        card: {
            backgroundColor: '#ffffff',
            padding: '2.5rem',
            borderRadius: '16px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            width: '100%',
            maxWidth: '400px',
            textAlign: 'center'
        },
        title: {
            fontSize: '1.75rem',
            marginBottom: '1.5rem',
            color: '#333'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
        },
        input: {
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            outlineColor: '#4CAF50'
        },
        button: {
            padding: '0.75rem',
            fontSize: '1rem',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
        },
        error: {
            color: 'red',
            fontSize: '0.9rem'
        },
        footer: {
            marginTop: '1.5rem',
            fontSize: '0.9rem',
            color: '#555'
        },
        link: {
            color: '#4CAF50',
            textDecoration: 'none',
            margin: '0 0.5rem'
        },
        divider: {
            margin: '0 0.5rem',
            color: '#999'
        },
        userInfoButtonWrapper: {
            marginTop: '1.5rem',
        },
        userInfoButton: {
            backgroundColor: '#2196F3',
            textDecoration: 'none',
            display: 'inline-block',
            padding: '0.75rem 1rem',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer',
        },
    };

    const handleLogin = () => {
        console.log("### 로그인 버튼 클릭 ###");
    }
    const goToUserPage = () => {
        navigate('/userList');
    }

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>로그인</h2>
                <form onSubmit={handleLogin} style={styles.form}>
                    <input
                        type="text"
                        placeholder="아이디"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        style={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                    />
                    {error && <p style={styles.error}>{error}</p>}
                    <button type="submit" style={styles.button}>
                        로그인
                    </button>
                </form>
                <div style={styles.footer}>
                    <a href="/signup" style={styles.link}>회원가입</a>
                    <span style={styles.divider}>|</span>
                    <a href="/forgot-password" style={styles.link}>비밀번호 찾기</a>
                </div>

                <div style={styles.userInfoButtonWrapper}>
                    <button onClick={goToUserPage} style={styles.userInfoButton}>
                    회원정보 확인
                    </button>
                    
                </div>

            </div>
        </div>
    );

};

export default Login;
