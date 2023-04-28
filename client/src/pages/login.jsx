import { useState } from "react"
import { Link, Navigate} from 'react-router-dom'
import ButtonLogin from '../components/LoginButton'
import ButtonGoogleLoggin from '../components/GoogleButton'



export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setReDirect] = useState(false)


    const loginHandling = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/login',{
          method: 'POST',
          body: JSON.stringify({email,password}),
          headers: {'Content-Type':'application/json'}
        });

        if(response.ok){
          setReDirect(true)
        }else{
          alert('wrong credentials')
        }
    }

    if(redirect){
      return <Navigate to={'/home'}/>
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
                  Email address
                </label>
                <div className="">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    placeholder="Enter your Email"
                    required
                    className="block w-full rounded-sm border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-green-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    autoComplete="current-password"
                    placeholder="Enter your Password"
                    required
                    className="block w-full rounded-sm border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-green-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <ButtonLogin/>
              </div>

              <div className="flex justify-center items-center">
                <p>or</p>
              </div>

              <div>
                <ButtonGoogleLoggin/>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <Link to="/register" className="font-semibold leading-6 text-green-600 hover:text-green-500">
                Create an account?
              </Link>
            </p>
          </div>
        </div>
        </div>
    )
}