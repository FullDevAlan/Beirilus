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
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/my-schedules" element={<MySchedules />} />

                </Routes>
            </AuthContext.Provider>
        </Router>
    );
};

export default appRoutes