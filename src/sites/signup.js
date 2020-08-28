import React, {useState} from "react";
import fire, {db} from "../app/firebase";
import 'firebase/auth'
import ErrorMessage from "../components/errorMessage";

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [errorOccurred, setErrorOccurred] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleSurnameChange = e => {
        setSurname(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleSignup = async (e) => {
        try {
            e.preventDefault()
            const response = await fire.auth().createUserWithEmailAndPassword(email, password)
            await db.collection('users').add({
                name: name,
                surname: surname,
                email: email,
                uuid: response.user.$.W
            })
            console.log(response)
        } catch (e) {
            setErrorOccurred(true)
            setErrorMessage(e.message)
        }
    }
    return(
        <div className={'container row flex-column align-content-center mt-5'}>
            <ErrorMessage error={errorMessage} occurred={errorOccurred}/>
            <form className={'d-flex flex-column col-lg-4 col-md-5 col-sm-6 col-8 p-0'}>
                <input className={'margin-auto rounded my-3'} type="text" name={'Name'} placeholder={'Name'} value={name} onChange={handleNameChange}/>
                <input className={'margin-auto rounded my-3'} type="text" name={'Surname'} placeholder={'Surname'} value={surname} onChange={handleSurnameChange}/>
                <input className={'margin-auto rounded my-3'} type="email" value={email} placeholder={'Email'} onChange={handleEmailChange}/>
                <input className={'margin-auto rounded my-3'} type="password" placeholder={'Password'} value={password} onChange={handlePasswordChange}/>
                <button onClick={handleSignup}>Sing Up</button>
            </form>
        </div>
    )
}

export default SignUp;