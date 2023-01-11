import './FormComponent.css'
import { useState } from 'react'

const FormComponent = () => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    const [errorUserName, setErrorUserName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorRePassword, setErrorRePassword] = useState("")

    const [userNameColor, setUserNameColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    const [rePasswordColor, setRepasswordColor] = useState('')


    const validateForm = (e) => {
        e.preventDefault()
        
        if(userName.length>8){
            setErrorUserName('')
            setUserNameColor('green')
        }else{
            setErrorUserName('Please enter username more than 8 characters')
            setUserNameColor('red')
        }

        if(email.includes('@')){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail('Not an proper email form')
            setEmailColor('red')
        }

        if(password.length>8){
            setErrorPassword('')
            setPasswordColor('green')

        }else{
            setErrorPassword('Password has to be more than 8 characters/numbers')
            setPasswordColor('red')
        }

        if(password === repassword && repassword !== ""){
            setErrorRePassword('')
            setRepasswordColor('green')

        }else{
            setErrorRePassword("Password doesn't matched")
            setRepasswordColor('red')
        }
    }
    
    
    return(
        <div className="container" onSubmit={validateForm}>
            <form className="form">
            <h2>From Validation</h2>
                <div className="form-control">
                    <label>Username</label>
                    <input type='text' value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}} />
                    <small style={{color:userNameColor}}>{errorUserName}</small>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}} />
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}/>
                    <small style={{color:passwordColor}}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>Confirm Password</label>
                    <input type='password' value={repassword} onChange={(e)=>setRepassword(e.target.value)} style={{borderColor:rePasswordColor}} />
                    <small style={{color:rePasswordColor}}>{errorRePassword}</small>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormComponent;