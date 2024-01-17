import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function  Logout() {
    const history = useNavigate();
    

    useEffect(()=> {
        localStorage.setItem("usertoken", '');
        localStorage.setItem("userid", '');
        localStorage.setItem("username", '');
        localStorage.setItem("userType", '');
        history("/");
    }, [])
    return (
        <h5>logout</h5>
    )
}
