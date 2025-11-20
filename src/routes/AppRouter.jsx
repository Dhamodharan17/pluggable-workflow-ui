import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "../views/Auth";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../views/Home";


const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            {/* Public routes */}
            <Route path="/login" element={<AuthPage />} />

            {/* Protected routes */}
            <Route element={<ProtectedRoute />} >
                <Route path="/" element={<Home />} />
                {/* <Route path="/courses" elemetn={<Courses />} /> */}
            </Route>

        </Routes>
    </BrowserRouter>
);

export default AppRouter;