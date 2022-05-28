import React, {useMemo} from "react";
import {IUser, IUserProfileLogic, IUserProfileRender, UserProfileEditableField} from "../interfaces";
import {EditableField} from "../components";

export const useUserProfileRender = (logic: IUserProfileLogic): IUserProfileRender => {
    const renderProfileData = (userData: IUser) => (
        <div className={"row"}>
            <div className={"col col-12"}>
                <h2 className={"mb-3"}>Profile</h2>
                <EditableField
                    label={"Name"}
                    value={userData.name}
                    onChange={logic.handleFieldUpdate(UserProfileEditableField.Name)}
                    className={"mb-3"}
                />
                <EditableField
                    label={"Email"}
                    value={userData.email}
                    onChange={logic.handleFieldUpdate(UserProfileEditableField.Email)}
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
                    onChange={logic.handleFieldUpdate(UserProfileEditableField.Street)}
                    className={"mb-3"}
                />
                <EditableField
                    label={"City"}
                    value={userData.location.city}
                    onChange={logic.handleFieldUpdate(UserProfileEditableField.City)}
                    className={"mb-3"}
                />
                <EditableField
                    label={"State"}
                    value={userData.location.state}
                    onChange={logic.handleFieldUpdate(UserProfileEditableField.State)}
                    className={"mb-3"}
                />
                <EditableField
                    label={"Postal code"}
                    value={userData.location.postalCode + ""}
                    onChange={logic.handleFieldUpdate(UserProfileEditableField.PostalCode)}
                    className={"mb-3"}
                    regexValidator={new RegExp("^[0-9]*$")}
                    errorMessage={"This postal code is invalid"}
                />
                <EditableField
                    label={"Country"}
                    value={userData.location.country}
                    onChange={logic.handleFieldUpdate(UserProfileEditableField.Country)}
                    className={"mb-3"}
                />
            </div>
        </div>
    )

    const renderUserProfile = useMemo(() => !logic.userData ? null : (
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
    ), [logic.userData]);

    return {
        profile: renderUserProfile,
    }
}