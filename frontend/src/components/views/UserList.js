import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserList = () => {

    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/getUserInfo');      // GET요청
                console.log("### 데이터 확인 ### \n", response);
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log("FETCH ERROR ", error);
                setError(error);
            }
        };
        fetchData();
    }, []);

    if(error) {
        return <div>Error: {error.message}</div>
    }

    const styles = {
        container: {
            padding: '15rem',
            fontFamily: 'sans-serif',
        },
        title: {
            marginBottom: '1rem',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
        },
        th: {
            borderBottom: '2px solid #ccc',
            padding: '0.5rem',
            textAlign: 'left',
        },
        td: {
            borderBottom: '1px solid #eee',
            padding: '0.5rem',
        },
        backButtonWrapper: {
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'flex-end', // 👉 오른쪽 정렬
        },
        backButton: {
            backgroundColor: '#4CAF50',
            color: '#fff',
            padding: '0.75rem 1.25rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
        },
        emptyMessage: {
            marginTop: '2rem',
            padding: '2rem',
            backgroundColor: '#f8f9fa',
            border: '1px solid #ccc',
            borderRadius: '8px',
            textAlign: 'center',
            color: '#888',
            fontSize: '1.1rem',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>회원 목록</h2>
            {
                data.length === 0 ? (
                    <div style={styles.emptyMessage}>
                        가입된 회원이 없습니다.
                    </div>
                )
                :
                (
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.th}>ID</th>
                                <th style={styles.th}>PW</th>
                                <th style={styles.th}>이름</th>
                                <th style={styles.th}>이메일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((user) => (
                                    <tr key={user.id}>
                                    <td style={styles.td}>{user.id}</td>
                                    <td style={styles.td}>{user.password}</td>
                                    <td style={styles.td}>{user.name}</td>
                                    <td style={styles.td}>{user.email}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }
            <div style={styles.backButtonWrapper}>
                <button onClick={() => navigate('/')} style={styles.backButton}>
                    로그인 화면으로
                </button>
            </div>
        </div>
    );
};

export default UserList;
