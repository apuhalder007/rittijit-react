import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate, Navigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userToken, setUserToken } = useContext(UserContext);

  useEffect(() => {
    if (userToken) navigate("/dashboard");
  }, [userToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    const user = { email, password };
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    const data = await response.json();
    console.log(data);

    if (data.token) {
      // redirect to profile page
      setUserToken(data.token);
    } else {
      alert(data);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
        <div className="col-lg-6">
          <div className="p-5">
            <div className="text-center">
              <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
            </div>
            <form className="user" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-user"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email Address..."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-user"
                  id="exampleInputPassword"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox small">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck"
                  />
                  <label className="custom-control-label" htmlFor="customCheck">
                    Remember Me
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-user btn-block">
                Login
              </button>
              <hr />
              <a href="index.html" className="btn btn-google btn-user btn-block">
                <i className="fab fa-google fa-fw"></i> Login with Google
              </a>
              <a href="index.html" className="btn btn-facebook btn-user btn-block">
                <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
              </a>
            </form>
            <hr />
            <div className="text-center">
              <a className="small" href="forgot-password.html">
                Forgot Password?
              </a>
            </div>
            <div className="text-center">
              <a className="small" href="register.html">
                Create an Account!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
