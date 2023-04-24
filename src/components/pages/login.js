import {useState, useContext, useEffect} from 'react';
import { UserContext } from '../../userContext';
import {useNavigate, Navigate, Link} from 'react-router-dom';

const Login = ()=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { userToken, setUserToken } = useContext(UserContext);

    useEffect(()=>{
        if(userToken) navigate('/dashboard');
    },[userToken])

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(email);
        const user = {email,password}
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        
        const data = await response.json();
        console.log(data);

        if(data.token){
            // redirect to profile page
            setUserToken(data.token);
        }else{
            alert(data);
        }

    }

    return (
        <div className='loginPage container'>
            <div className='row'>
                <div className="col-sm-6 col-offset-sm-3">
                    <h1></h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" 
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className="form-control" id="password" placeholder="Password"
                            onChange={(e)=> setPassword(e.target.value)} 
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login