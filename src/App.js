import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import Home from './components/auth/Home';
import RegisterForm from './components/auth/RegisterForm';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginForm />}></Route>
                <Route path="/register" element={<RegisterForm />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/"></Route>
                <Route path="/admin"></Route>
                <Route path="/seller"></Route>
                <Route path="/accountant"></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
