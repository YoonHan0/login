import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(null); // TODO: 서버에서 로그인 여부 확인 로직 필요
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch('/checkLogin', { credentials: "include", });
                const data = await res.json();
                console.log("=== 로그인 체크 === \n", data);
                setIsAuthenticated(data.authenticated);
                if (data && data.userName) {
                    setUserName(data.userName);
                }
            } catch (error) {
                console.error("인증 체크 중 오류", error);
                setIsAuthenticated(false);
            } 
        };

        checkAuth();
    }, []);
    
    if (isAuthenticated === null) {
        return <div>인증 확인 중...</div>; // 또는 로딩 스피너
    }

    console.log("=== PrivateRoute Component === \n", isAuthenticated);
    
    return isAuthenticated ? React.cloneElement(children, { userName }) : <Navigate to="/login" replace />
};

export default PrivateRoute;
