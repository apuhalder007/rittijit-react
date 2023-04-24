import {useContext} from 'react';
import { Navigate, Outlet } from "react-router-dom";
//import Login from "./components/pages/login";
import { UserContext } from "./userContext";


/*const userAuth = () => {  
  return false;
}*/


const PrivateRoute = ()=>{
    const { userToken } = useContext(UserContext);
    console.log(userToken);
    //const isAuth = userAuth();
    //return isAuth ? <Outlet/> : <Login/>
    return userToken ? <Outlet/> : <Navigate to='/login'/>

}

export default PrivateRoute;