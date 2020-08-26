import React, {useState} from "react";
import fire from "../app/firebase";
import ErrorMessage from "../components/errorMessage";

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorOccurred, setErrorOccurred] = useState(false)

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleSignup = async () => {
        try {
            await fire.auth().createUserWithEmailAndPassword(email, password)
        } catch (e) {
            setErrorOccurred(true)
            console.log(e)
        }
    }
    return(
        <div>
            <form>
                <ErrorMessage occurred={errorOccurred}/>
                <input type="email" value={email} onChange={handleEmailChange}/>
                <input type="password" value={password} onChange={handlePasswordChange}/>
                <button onClick={handleSignup}>Sing Up</button>
            </form>
        </div>
    )
}

export default SignUp;