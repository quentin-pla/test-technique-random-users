import React from "react";
import {IUserLogic, UserEditableField} from "./useUserLogic";
import {Col, Row} from "react-bootstrap";
import {ArrowLeft} from "react-bootstrap-icons";
import EditableField from "../../utils/EditableField/EditableField";

export interface IUserRender {
    backButton: JSX.Element,
    profile: JSX.Element,
}

const useUserRender = (logic: IUserLogic): IUserRender => {

    const renderBackButton = () => (
        <ArrowLeft className={"back-btn"} onClick={logic.handleNavigateHome}/>
    )

    const renderProfileData = () => (
        <Row>
            <Col className={"col-12"}>
                <h2 className={"mb-3"}>Profile</h2>
                <EditableField
                    label={"Name"}
                    value={logic.userData.name}
                    onChange={logic.handleFieldUpdate(UserEditableField.Name)}
                    className={"mb-3"}
                />
                <EditableField
                    label={"Email"}
                    value={logic.userData.email}
                    onChange={logic.handleFieldUpdate(UserEditableField.Email)}
                    className={"mb-3"}
                />
            </Col>
        </Row>
    )

    const renderLocationData = () => (
        <Row>
            <Col className={"col-12"}>
                <h2 className={"mb-3"}>Location</h2>
                <EditableField
                    label={"Street"}
                    value={logic.userData.location.street}
                    onChange={logic.handleFieldUpdate(UserEditableField.Street)}
                    className={"mb-3"}
                />
                <EditableField
                    label={"City"}
                    value={logic.userData.location.city}
                    onChange={logic.handleFieldUpdate(UserEditableField.City)}
                    className={"mb-3"}
                />
                <EditableField
                    label={"Postal code"}
                    value={logic.userData.location.postalCode + ""}
                    onChange={logic.handleFieldUpdate(UserEditableField.PostalCode)}
                    className={"mb-3"}
                />
            </Col>
        </Row>
    )

    const renderUserProfile = () => (
        <Row className={"profile-data"}>
            <Col className={"col-12 d-flex justify-content-center mb-3"}>
                <img className={"user-picture"} src={logic.userData.picture} alt={"user picture"}/>
            </Col>
            <Col className={"col-12 d-flex justify-content-center mb-4"}>
                <h1>{logic.userData.name}</h1>
            </Col>
            <Col className={"col-12"}>
                <Row>
                    <Col className={"col-5"}>
                        {renderProfileData()}
                    </Col>
                    <Col className={"col-2 d-flex justify-content-center"}>
                        <div className={"vertical-separator"}/>
                    </Col>
                    <Col className={"col-5"}>
                        {renderLocationData()}
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

export default useUserRender;