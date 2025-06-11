import React, { useEffect, useState } from 'react'

const MainHome = () => {

    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/login/getUserInfo');      // GET요청
                const data = await response.json();
                console.log("### 데이터 확인 ### \n", data);
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
    return (
        <div>
            <h1>Main Home</h1>
            {data && (
                <div>
                    <p>Email: {data.email}</p>
                    <p>Name: {data.name}</p>
                </div>
            )}
        </div>
    )
};

export default MainHome;
