import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Children } from "react";

const AuthLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>
                { children }
            </main>
            <Footer />
        </div>
    );
};

export default AuthLayout;