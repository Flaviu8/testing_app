import { useEffect } from "react";
import axios from "axios";

const checkAuth = async () => {
    try {
        const response = await axios.get("http://localhost:8080/user/check-auth", {
            withCredentials: true, // ✅ Ensures cookies are sent
        });

        if (response.status === 200) {
            console.log("User is authenticated");
        } else {
            console.log("User is NOT authenticated");
        }
    } catch (error) {
        console.error("Auth check failed:", error);
    }
};

const AuthCheckComponent = () => {
    useEffect(() => {
        checkAuth();
    }, []);

    return null; // No UI needed, just runs the check
};

export default AuthCheckComponent;
