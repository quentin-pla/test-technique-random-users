import React, {useMemo} from "react";
import {IUserLogic, UserEditableField} from "./useUserLogic";
import {Col, Row} from "react-bootstrap";
import {ArrowLeft} from "react-bootstrap-icons";
import EditableField from "../../utils/EditableField/EditableField";
import {IUser} from "../../../models/IUser";

export interface IUserRender {
    backButton: JSX.Element,
    profile: JSX.Element | null,
}

const useUserRender = (logic: IUserLogic): IUserRender => {

    const renderBackButton = () => (
        <ArrowLeft className={"button back-btn"} onClick={logic.handleNavigateHome}/>
    )

    const renderProfileData = (userData: IUser) => (
        <Row>
            <Col className={"col-12"}>
                <h2 className={"mb-3"}>Profile</h2>
                <EditableField
                    label={"Name"}
                    value={userData.name}
                    onChange={logic.handleFieldUpdate(UserEditableField.Name)}
                    className={"mb-3"}
                />
                <EditableField
                    label={"Email"}
                    value={userData.email}
                    onChange={logic.handleFieldUpdate(UserEditableField.Email)}
                    className={"mb-3"}
                    regexValidator={new RegExp("^[a-zA-Z0-9-_.]+@[a-zA-Z0-9]+[.]{1}[a-z]{2,3}$")}
                    errorMessage={"This email is invalid"}
                />
            </Col>
        </Row>
    )

    const renderLocationData = (userData: IUser) => (
        <Row>
            <Col className={"col-12"}>
                <h2 className={"mb-3"}>Location</h2>
                <EditableField
                    label={"Street"}
                    value={userData.location.street}
                    onChange={logic.handleFieldUpdate(UserEditableField.Street)}
                    className={"mb-3"}
                />
                <EditableField
                    label={"City"}
                    value={userData.location.city}
                    onChange={logic.handleFieldUpdate(UserEditableField.City)}
                    className={"mb-3"}
                />
                <EditableField
                    label={"State"}
                    value={userData.location.state}
                    onChange={logic.handleFieldUpdate(UserEditableField.State)}
                    className={"mb-3"}
                />
                <EditableField
                    label={"Postal code"}
                    value={userData.location.postalCode + ""}
                    onChange={logic.handleFieldUpdate(UserEditableField.PostalCode)}
                    className={"mb-3"}
                    regexValidator={new RegExp("^[0-9]*$")}
                    errorMessage={"This postal code is invalid"}
                />
                <EditableField
                    label={"Country"}
                    value={userData.location.country}
                    onChange={logic.handleFieldUpdate(UserEditableField.Country)}
                    className={"mb-3"}
                />
            </Col>
        </Row>
    )

    const renderUserProfile = useMemo(() => !logic.userData ? null : (
        <Row className={"profile-data pb-5"}>
            <Col className={"col-12 d-flex justify-content-center mb-3"}>
                <img className={"user-picture"} src={logic.userData.picture} alt={"user picture"}/>
            </Col>
            <Col className={"col-12 d-flex justify-content-center mb-4"}>
                <h1 className={"text-center"}>{logic.userData.name}</h1>
            </Col>
            <Col className={"col-12"}>
                <Row className={"justify-content-center"}>
                    <Col className={"col-12 col-md-5"}>
                        {renderProfileData(logic.userData)}
                    </Col>
                    <Col className={"col-2 d-none d-md-flex justify-content-center"}>
                        <div className={"vertical-separator"}/>
                    </Col>
                    <Col className={"col-12 col-md-5 mt-3 mt-md-0"}>
                        {renderLocationData(logic.userData)}
                    </Col>
                </Row>
            </Col>
        </Row>
    ), [])

    return useMemo(() => ({
        backButton: renderBackButton(),
        profile: renderUserProfile,
    }), [logic.userData])
}

export default useUserRender;