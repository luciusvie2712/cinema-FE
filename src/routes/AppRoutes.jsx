import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/HomePage'
import AdminHome from "../pages/AdminHome";
 import DiscriptionMovie from '../pages/DiscriptionMoviePage';
import AdminMoviePage from '../pages/AdminMoviePage'
import ShowtimePage from '../pages/ShowtimeManager'
import AdminBookingList from "../pages/AdminBookingList";
import AccountManager from "../pages/AccountManager";
import MyTicketPage from "../pages/MyTicketPage";
import PaymentSuccess from '../pages/payment-success';
import PaymentCancel from '../pages/payment-cancel';
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
                <Route path="/my-ticket" element={<MyTicketPage />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
                <Route path="/payment-cancel" element={<PaymentCancel />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;