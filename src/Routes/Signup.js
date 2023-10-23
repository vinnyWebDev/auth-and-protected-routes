import React from 'react'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const Signup = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const auth = getAuth()


    async function handleSignUp(e) {
        e.preventDefault()
        //this function creates new user
        //needs auth, email and passwords as params.
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <h1>Signup</h1>
            <fom action="">
                <input onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email'></input>
                <input onChange={(e) => setPassword(e.target.value)} type='text' placeholder='Password'></input>
                <button onClick={(e) => { handleSignUp(e) }}>Sign Up</button>
            </fom>
        </div>
    )
}

export default Signup
