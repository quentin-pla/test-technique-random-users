import React from "react";
import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home/Home";
import User from "./components/User/User";
import Container from "./components/Container/Container";
import UsersContextProvider from "./context/UsersContext";

const App = () => (
    <UsersContextProvider>
        <Routes>
            <Route path='/test-technique-random-users' element={<Container/>}>
                <Route index element={<Home/>}/>
                <Route path='*' element={<User/>}/>
            </Route>
        </Routes>
    </UsersContextProvider>
);

export default App;
