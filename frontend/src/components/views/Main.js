import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Main.css';

const Main = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
    }

    return (
        <div className="main-container">
            <button className="logout-button" onClick={handleLogout}>
            로그아웃
            </button>
            <h1 className="main-title">메인 페이지</h1>
            <p className="main-description">로그인이 완료되었습니다.</p>
            <p className="main-description">React + SpringBoot 프로젝트에 오신 것을 환영합니다!</p>
        </div>
    )
}
export default Main;