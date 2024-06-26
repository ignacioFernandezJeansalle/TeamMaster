import { useUsuario } from "./src/context/AuthContext.jsx";
import { Routes, Route } from "react-router-dom";
import { Home } from "./src/pages/Home";
import Error from "./src/pages/Error";
import Layout from "./src/layout/Layout";
import Competitions from "./src/pages/Competitions";
import Competition from "./src/pages/Competition";




const RouterApp = () => {
    const { user } = useUsuario();
    console.log(user)
    const ProtectedRoute = ({ children }) => {
        return user ? <Layout>{children}</Layout> : <Home />;
    };

    return (
        <Routes>
            <Route path="/" element={user ? <Competition /> : <Home />} />
            <Route path="/competitions" element={<ProtectedRoute><Competitions /></ProtectedRoute>} />
            <Route path="/competitions/:id" element={<ProtectedRoute><Competition /></ProtectedRoute>} />
            <Route path="*" element={<Layout><Error /></Layout>} />
        </Routes>
    )

};



export default RouterApp;