import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/HomePage'
import ShowsTime from '../pages/ShowsTimePage'
import Login from '../pages/LoginPage'
 
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ShowsTime" element={<ShowsTime />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;