import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import React from "react";

const Protected = ({ children }) => {

    const {
        loading,
        user
    } = useAuth();

    if (loading) {

        return (
            <main
                className="loading-screen"
                aria-live="polite"
            >
                <div className="loading-spinner" />

                <p>
                    Loading...
                </p>
            </main>
        );
    }

    if (!user) {

        return (
            <Navigate to="/login" />
        );
    }

    return children;
};

export default Protected;