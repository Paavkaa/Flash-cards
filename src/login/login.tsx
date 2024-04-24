import React from "react";
import Nav, {InputWithLabel} from "../utils";
import "./styles.css";
import "../index.css";
import FloatingLines from "../utils/background";
import {BsFacebook, BsGoogle} from "react-icons/bs";

export default function Login() {
    return (
        <>
            <FloatingLines/>
            <Nav/>
            <div className="divBackground loginPosition">
                <h1 className="textCenter">Log in</h1>

                <form className="justifyCenter" action="">
                    <InputWithLabel id={"loginName"} name={"loginName"} label={"loginName"} type={"text"}/>

                    <InputWithLabel id={"loginName"} name={"loginName"} label={"loginName"} type={"text"}/>

                    <button className="mediumButton"
                            id="logIn"
                            type="submit">
                        Log in
                    </button>

                    <p>
                        Don't have an account? <a href="/register">Sign up!</a>
                    </p>
                </form>

                <div className="flex column alignCenter">
                    <h3>Other variations</h3>

                    <div className="flex column alignCenter width100">
                        <a className="mediumButton borderButton textCenter width80" href="/login">
                            <BsGoogle/> Google</a>
                        <a className="mediumButton borderButton textCenter width80" href="/login"><BsFacebook/> Facebook</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export function Register() {

    return (
        <>
            <FloatingLines/>
            <Nav/>
            <div className="divBackground loginPosition">
                <h2 className="textCenter">Register</h2>

                <form className="justifyCenter" action="">
                    <InputWithLabel id={"loginName"} name={"loginName"} label={"loginName"} type={"text"}/>

                    <InputWithLabel id={"email"} name={"email"} label={"email"} type={"email"}/>


                    <div className="width100 marginTop">
                        <InputWithLabel id={"password1"} name={"password1"} label={"password"} type={"password"}/>

                        <InputWithLabel id={"password2"} name={"password2"} label={"password again"} type={"password"}/>
                    </div>

                    <button className="mediumButton"
                            id="logIn"
                            type="submit">
                        Log in
                    </button>

                    <p>
                        Already have account? <a href="/login">Sign in!</a>
                    </p>

                    <div className="flex column alignCenter">
                        <h3>Connect with your account</h3>

                        <div className="flex column alignCenter width100">
                            <a className="mediumButton borderButton textCenter width80" href="/login">
                                <BsGoogle/> Google</a>
                            <a className="mediumButton borderButton textCenter width80"
                               href="/login"><BsFacebook/> Facebook</a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

