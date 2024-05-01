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
    const [formData, setFormData] = React.useState({
        loginName: "",
        email: "",
        password1: "",
        password2: ""
    });

    const [error, setError] = React.useState({
        loginName: false,
        email: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Use a functional update to ensure you're working with the most up-to-date state
        setError(prevError => ({
            ...prevError,
            loginName: false,
            email: false
        }));

        // Continue with your form submission logic
        if (formData.password1 !== formData.password2) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: formData.loginName,
                    email: formData.email,
                    password: formData.password1
                })
            });

            if (response.ok) {
                const data = await response.json();
                alert("Registered successfully!");


            } else {
                const errorMessage = await response.text();
                // 400
                if (errorMessage.includes("EMAIL_INVALID")) {
                    setError(prev => ({ ...prev, email: true }));
                    alert('Email is invalid!');
                }

                //409
                if (errorMessage.includes("USERNAME_TAKEN")) {
                    setError(prev => ({ ...prev, loginName: true }));
                    alert('Username is already taken!');
                }
                if (errorMessage.includes("EMAIL_TAKEN")) {
                    setError(prev => ({ ...prev, email: true }));
                    alert('Email is already taken!');
                }
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while registering. Please try again.");
        }
    };

    return (
        <>
            <FloatingLines/>
            <Nav/>
            <div className="divBackground loginPosition">
                <h2 className="textCenter">Register</h2>

                <form className="justifyCenter" action="" onSubmit={handleSubmit}>
                    <InputWithLabel
                        id={"loginName"}
                        name={"loginName"}
                        label={"login name"}
                        type={"text"}
                        onChange={handleChange}
                        error={error.loginName}
                    />

                    <InputWithLabel
                        id={"email"}
                        name={"email"}
                        label={"email"}
                        type={"email"}
                        onChange={handleChange}
                        error={error.email}
                    />


                    <div className="width100 marginTop20">
                        <InputWithLabel
                            id={"password1"}
                            name={"password1"}
                            label={"password"}
                            type={"password"}
                            onChange={handleChange}/>

                        <InputWithLabel
                            id={"password2"}
                            name={"password2"}
                            label={"password again"}
                            type={"password"}
                            onChange={handleChange} />
                    </div>

                    <button className="mediumButton"
                            id="logIn"
                            type="submit">
                        Register
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
