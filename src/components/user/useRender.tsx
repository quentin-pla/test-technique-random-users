import React from "react";
import {IUserLogic} from "./useLogic";
import {Col, Row} from "react-bootstrap";
import {ArrowLeft} from "react-bootstrap-icons";

export interface IUserRender {
    backButton: JSX.Element,
    profile: JSX.Element,
}

const useRender = (logic: IUserLogic): IUserRender => {

    const renderBackButton = () => (
        <ArrowLeft className={"back-btn"} onClick={logic.handleNavigateHome}/>
    )

    const renderUserProfile = () => (
        <Row>
            <Col className={"col-12 d-flex justify-content-center mb-3"}>
                <img className={"user-picture"} src={logic.userData.picture} alt={"user picture"}/>
            </Col>
            <Col className={"col-12 d-flex justify-content-center mb-4"}>
                <h1>{logic.userData.name}</h1>
            </Col>
            <Col className={"col-12"}>
                <Row className={"d-flex justify-content-center gap-5"}>
                    <Col className={"col-auto"}>
                        <h4>Email</h4>
                        <input value={logic.userData.email}/>
                    </Col>
                    <Col className={"col-auto"}>
                        <h4>Location</h4>
                        <p>{logic.userData.location.street}</p>
                        <p>{logic.userData.location.city} {logic.userData.location.postalCode}</p>
                        <p>{logic.userData.location.country}</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )

    return {
        backButton: renderBackButton(),
        profile: renderUserProfile(),
    }
}

export default useRender;