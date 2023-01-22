import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import Login from "../Pages/Login";
import Home from "../Pages/Home/Home";

import { AuthContext } from "../Contexts/auth";
import Schedule from "../Pages/Schedule";
import MySchedules from "../Pages/MySchedules";
import { Pagina4 } from "../Pages/Schedule/Pagina4";
import { Pagina3 } from "../Pages/Schedule/Pagina3";
import { Pagina9 } from "../Pages/Schedule/Pagina9";
import { Pagina11 } from "../Pages/Schedule/Pagina11";
import { Pagina13 } from "../Pages/Schedule/Pagina13";


const appRoutes = () => {
    const [user, setUser] = useState(null);

    const login = (email: any, password: any) => {
        console.log("login", { email, password });
        setUser(user)
    };
    const logout = () => {
        console.log("logout");
    };

    return (
        <Router>
            <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/schedule" element={<Schedule />} /> */}
                    <Route path="/my-schedules" element={<MySchedules />} />
                    <Route path="/pagina4" element={ <Pagina4 />} />
                    <Route path="/pagina3" element={ <Pagina3 />} />
                    <Route path="/pagina9" element={ <Pagina9 />} />
                    <Route path="/pagina13" element={ <Pagina13 /> } />
                    <Route path="/pagina11" element={ <Pagina11 /> } />

                </Routes>
            </AuthContext.Provider>
        </Router>
    );
};

export default appRoutes