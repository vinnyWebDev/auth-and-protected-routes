import React from 'react'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'

const Signin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //not sure
    const auth = getAuth()
    //this is a hook from rrdom that redirects people
    const navigate = useNavigate()


    //basically the same as our create user function
    //but callign a different firebase fucntion
    async function handleSignin(e) {
        e.preventDefault()
        //this function creates new user
        //needs auth, email and passwords as params.
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user)
                //redirects user to homepage upon sign in
                navigate("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <h1>Signin</h1>
            <fom action="">
                <input onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email'></input>
                <input onChange={(e) => setPassword(e.target.value)} type='text' placeholder='Password'></input>
                <button onClick={(e) => handleSignin(e)}>Sign In</button>
            </fom>
        </div>
    )
}

export default Signin
