import { Link } from 'react-router-dom';
import img from '../../assets/login.svg'
import { useContext } from 'react';
import { Authcontext } from '../../Auth/Authprovider';
import { toast } from 'react-toastify';

const Register = () => {
  const {createUser} = useContext(Authcontext)

    const handleRegister = event =>{
        event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const confrimPassword = form.confirmPassword.value;


            // create user with email and password 
            createUser(email ,password)
            .then(res => {
              console.log(res.user)
              toast.success("register Success !", {
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
      <div className="hero bg-base-100 dark:bg-gray-900 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2 mr-12">
          <img src={img} alt="Register Illustration" />
        </div>
        <div className="card bg-base-100 dark:bg-gray-800 w-full max-w-sm shrink-0 shadow-xl">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-xl text-center text-indigo-600 dark:text-indigo-400 font-bold">Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-200">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered bg-white border-gray-300 dark:bg-gray-600 dark:border-gray-800"
                required
              />
            </div>
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-200">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input input-bordered bg-white border-gray-300 dark:bg-gray-600 dark:border-gray-800"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-indigo-900 text-white hover:bg-indigo-700">
                Register
              </button>
            </div>
          </form>
          <p className="my-4 text-center text-gray-700 dark:text-gray-200">
            Already Have An Account? 
            <Link to="/login" className="link mx-2 text-orange-600 dark:text-orange-400">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
    );
};

export default Register;