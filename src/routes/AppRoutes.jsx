import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/HomePage'
import AdminHome from "../pages/AdminHome";
 import DiscriptionMovie from '../pages/DiscriptionMoviePage';
import AdminMoviePage from '../pages/AdminMoviePage'
import ShowtimePage from '../pages/ShowtimeManager'
import AdminBookingList from "../pages/AdminBookingList";
import AccountManager from "../pages/AccountManager";
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Manager" element={<AdminHome />} />
                <Route path="/discription/:id" element={<DiscriptionMovie />} />
                <Route path="/movies-manager" element={<AdminMoviePage />} />
                <Route path="/showtimes-manager" element={<ShowtimePage />} />
                <Route path="/tickets-manager" element={<AdminBookingList />} />
                <Route path="/users-manager" element={<AccountManager />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;