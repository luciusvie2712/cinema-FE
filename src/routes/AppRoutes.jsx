import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/HomePage'
import AdminHome from "../pages/AdminHome";
 
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Manager" element={<AdminHome />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;