import React, { useState } from "react";
import "./styles.css";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log("submit", { email, password });
    };

    return (
        <div id="login">
            <h1 className="title">Login do sitema</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="passoword" >Senha</label>
                    <input
                        type="passoword"
                        name="passoword"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />

                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    )
}

export default Login