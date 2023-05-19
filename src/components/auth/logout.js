import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../userContext";



const Logout = () => {
    const navigate = useNavigate();
    const { userToken, setUserToken } = useContext(UserContext);

    useEffect(() => {
        setUserToken(null);
        navigate('/');
    }, [setUserToken]);

    
    return (
        <div>
            <h1>Logout</h1>
        </div>
    )
}
export default Logout;