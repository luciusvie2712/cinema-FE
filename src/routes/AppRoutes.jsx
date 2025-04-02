import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/HomePage'
import ShowsTime from '../pages/ShowsTimePage'
 
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ShowsTime" element={<ShowsTime />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;