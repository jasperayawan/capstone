import { useState } from "react"
import {GoogleLogin} from "react-google-login"

export default function GoogleButton(){
    const [showLoginButton, setShowLoginButton] = useState(true);

    const onLoginSuccess = (res) => {
        console.log('Login Success', res.profileObj)
        setShowLoginButton(false)
    }
    const onLoginFailed = (res) => {
        console.log('login failed', res)
    }
    
    const client = "485183917309-lm2cdjuujljilhc3jcnrtkqms8ultd8e.apps.googleusercontent.com"
    return(
        <div>
            {showLoginButton ? 
            <GoogleLogin
                clientId={client}
                buttonText="Login"
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailed}
                isSignedIn={true}
                cookiePolicy={'single_host_origin'}
                className="flex w-full items-center shadow-none justify-center rounded-sm border-[1px] border-green-400 text-green-600 px-3 py-1.5 text-sm leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            /> : null 
            }

            
        </div>
    )
}