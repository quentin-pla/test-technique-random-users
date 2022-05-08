import React, {useMemo} from "react";
import {IUserLogic, UserEditableField} from "./useUserLogic";
import {ArrowLeft} from "react-bootstrap-icons";
import EditableField from "../../utils/EditableField/EditableField";
import {IUser} from "../../../models/IUser";

export interface IUserRender {
    backButton: JSX.Element,
    profile: JSX.Element | null,
}

const useUserRender = (logic: IUserLogic): IUserRender => {

    const renderBackButton = useMemo(() => (
        <ArrowLeft className={"button back-btn"} onClick={logic.handleNavigateHome}/>
    ), [])

    const renderProfileData = (userData: IUser) => (
        <div className={"row"}>
            <div className={"col col-12"}>
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
            </div>
        </div>
    )

    const renderLocationData = (userData: IUser) => (
        <div className={"row"}>
            <div className={"col col-12"}>
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
            </div>
        </div>
    )

    const renderUserProfile = () => !logic.userData ? null : (
        <div className={"row profile-data pb-5"}>
            <div className={"col col-12 d-flex justify-content-center mb-3"}>
                <img className={"user-picture"} src={logic.userData.picture} alt={"user picture"}/>
            </div>
            <div className={"col col-12 d-flex justify-content-center mb-4"}>
                <h1 className={"text-center"}>{logic.userData.name}</h1>
            </div>
            <div className={"col col-12"}>
                <div className={"row justify-content-center"}>
                    <div className={"col col-12 col-md-5"}>
                        {renderProfileData(logic.userData)}
                    </div>
                    <div className={"col col-2 d-none d-md-flex justify-content-center"}>
                        <div className={"vertical-separator"}/>
                    </div>
                    <div className={"col col-12 col-md-5 mt-3 mt-md-0"}>
                        {renderLocationData(logic.userData)}
                    </div>
                </div>
            </div>
        </div>
    )

    return useMemo(() => ({
        backButton: renderBackButton,
        profile: renderUserProfile(),
    }), [logic.userData])
}

export default useUserRender;