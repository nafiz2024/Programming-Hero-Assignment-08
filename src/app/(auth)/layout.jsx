import Navbar from "@/components/shared/Navbar";
import { Children } from "react";

const AuthLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>
                { children }
            </main>
        </div>
    );
};

export default AuthLayout;