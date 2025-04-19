import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/HomePage'
import ShowsTime from '../pages/ShowsTimePage'
import Login from '../pages/LoginPage'
import ManagerPage from "../pages/ManagerPage"
 
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ShowsTime" element={<ShowsTime />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Manager" element={<ManagerPage />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;