
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/login.svg'
import { useContext } from 'react';
import { Authcontext } from '../../Auth/Authprovider';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';



const Login = () => {

  const {login, googleLogin}  = useContext(Authcontext)
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // login func call
        login(email , password)
        .then(res => {

          const loggedinUser = res.user;

          const user = {email};

          axios.post('http://localhost:4000/jwt', user,{withCredentials:true})
            .then(data =>{
            console.log(data.data)
        if(data.data.success){
           navigate(location.state? location.state :  '/')

                }
            })


         .catch(err => console.log(err))
        // navigate(location.state? location.state :  '/')

          toast.success("Login Success !", {
            position: "top-center"
          });
        })
        .catch(err => {
          toast.success("There is an error !", {
            position: "top-center"
          });
          console.log(err)
        })

    }  
    
    
    const handleGoogleLogin =()=>{
      googleLogin()
      .then(res => {

        navigate(location.state? location.state :  '/')


        
        toast.success("Login Success !", {
          position: "top-center"
        });




      })
      .catch(err => {
        toast.error(err.message, {
          position: "top-center"
        });
        console.log(err.message)
      })
    }




    return (
      <div className="hero min-h-screen bg-base-100 dark:bg-gray-900">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="Login Illustration" />
        </div>
        <div className="card w-full max-w-sm shrink-0 shadow-xl bg-base-100 dark:bg-gray-800">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-xl text-center font-bold text-indigo-600 dark:text-indigo-400">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-200">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered bg-white border-gray-300 dark:bg-gray-600 dark:border-gray-800"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-200">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered bg-white border-gray-300 dark:bg-gray-600 dark:border-gray-800"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-indigo-600 dark:text-indigo-400">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-indigo-900 text-white hover:bg-indigo-700">Login</button>
            </div>
          </form>
          <div className="flex items-center justify-center mt-4">
            <button onClick={handleGoogleLogin} className="btn btn-ghost">Google</button>
            <button className="btn btn-ghost">Github</button>
          </div>
          <p className="my-4 text-center">
            New to <span className="font-semibold">Blogaa?</span>
            <Link to="/register" className="link mx-2 text-indigo-600 dark:text-indigo-400">Register</Link>
          </p>
        </div>
      </div>
    </div>
    );
};

export default Login;