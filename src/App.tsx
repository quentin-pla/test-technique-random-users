import React from "react";
import './styles/App.scss';
import {Route, Routes} from 'react-router-dom';
import {HomePage, UserPage} from "./pages";
import {Container} from "./components";
import {UsersContextProvider} from "./services";

const App = () => (
    <UsersContextProvider>
        <Routes>
            <Route path='/test-technique-random-users' element={<Container/>}>
                <Route index element={<HomePage/>}/>
                <Route path='*' element={<UserPage/>}/>
            </Route>
        </Routes>
    </UsersContextProvider>
);

export default App;
