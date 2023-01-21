import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginClientes } from '../../services/LogApi/clientes';
import "./styles.css";

export default function Login(): JSX.Element {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const login = async (event: FormEvent) => {
        event.preventDefault();

        const payload = {
            email,
            password,
        };

        try {
            const response = await loginClientes(payload);

            if (response.status !== 201) {
                return alert("Deu algo errado");
            }

            alert("Login efetuado com sucesso!");
        } catch (error) {
            alert("Deu algo errado");
        }
    };

    return (
        <div>
            <form className="login-form" onSubmit={login}>
                <div className="wrap-input">
                    <label className="login-form-title">Acesse sua conta</label>
                    <div className="wrap-input">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="passoword">Senha</label>
                        <input
                            type="passoword"
                            name="passoword"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="focus-input" data-placeholder="Email"></label>
                    </div>
                    <div className="container-login-form-btn">
                        <button type="submit">Entrar</button>
                    </div>
                    <span className='txt1'>Ainda não tem cadastro?</span>
                        <Link className="txt2" to="/cadastro">
                            Cadastre-se
                            </Link>
                </div>
            </form>
        </div>
    );
}
