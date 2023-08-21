import React from 'react';

import { Link } from 'react-router-dom';
const Login = () => {
    return ( 
      <div className='m-10'>
        <h1 className="mb-5 text-5xl font-bold text-center">Login</h1>
        <form onSubmit={()=>{}}>
        <div className="form-control mt-5  ">
         <label className='input-group flex flex-col items-center justify-center '  >
         <label><input type="email" placeholder="Votre email" className="input input-bordered ml-5 mb-3" required/></label>
          <label ><input type="password" placeholder="votre mot de passe" className="input input-bordered ml-5 mb-3" required /></label>
          <button><Link to='/Dashboard' className="btn  bg-primary text-black border-none">Submit</Link>
          </button>
          </label>
          </div>
          </form>
      </div>
    );
}
 
export default Login;