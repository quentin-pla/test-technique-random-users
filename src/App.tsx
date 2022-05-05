import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Home from "./components/home/Home";
import User from "./components/user/User";
import Container from "./components/container/Container";
import UsersContextProvider from "./context/UsersContext";

const App = () => (
    <UsersContextProvider>
        <Routes>
            <Route path='/' element={<Container/>}>
                <Route index element={<Home/>}/>
                <Route path='*' element={<User/>}/>
            </Route>
        </Routes>
    </UsersContextProvider>
);

export default App;
