import {ArrowLeft} from "react-bootstrap-icons";
import React, {useCallback, useMemo} from "react";
import {useNavigate} from "react-router";

export const BackButton = () => {
    const navigate = useNavigate();

    const handleNavigateHome = useCallback(() => navigate("/test-technique-random-users"), [navigate]);

    return useMemo(() => (
        <ArrowLeft className={"button back-btn"} onClick={handleNavigateHome}/>
    ), [handleNavigateHome])
}