import { useState } from 'react'
import {Link} from 'react-router-dom'
import SignupButton from '../components/SignupButton'

export default function Register(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function loginHandling(e){
      e.preventDefault();

       const response = await fetch('http://localhost:4000/register', {
          method: 'POST',
          body: JSON.stringify({username,email,password}),
          headers: {'Content-Type':'application/json'},
        });

        if(response.status === 200){
          alert('registration successful')
        }else{
          alert('registration failed')
        }
        
    }
    return(
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Welcome back
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" onSubmit={loginHandling}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                  Username
                </label>
                <div className="">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Enter Username'
                    required
                    className="block w-full rounded-sm border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-green-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                    Email
                  </label>
                </div>
                <div className="">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter Email'
                    required
                    className="block w-full rounded-sm border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-green-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                    Password
                  </label>
                </div>
                <div className="">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter Password'
                    required
                    className="block w-full rounded-sm border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-green-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
                <SignupButton/>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <Link to="/login" className="font-semibold leading-6 text-green-600 hover:text-green-500">
                Create an account?
              </Link>
            </p>
          </div>
        </div>
        </div>
    )
}