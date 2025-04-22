import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/HomePage'
import AdminHome from "../pages/AdminHome";
 import DiscriptionMovie from '../pages/DiscriptionMoviePage';
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Manager" element={<AdminHome />} />
                <Route path="/MovieComing" element={<DiscriptionMovie />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;