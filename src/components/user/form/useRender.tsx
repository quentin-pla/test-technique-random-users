import React from "react";
import {IUserFormLogic, UserEditableField} from "./useLogic";

export interface IUserFormRender {
    inputs: {
        name: JSX.Element,
        email: JSX.Element,
        location: {
            street: JSX.Element,
            city: JSX.Element,
            postalCode: JSX.Element,
            country: JSX.Element
        }
    }
}

const useRender = (logic: IUserFormLogic): IUserFormRender => {
    const renderNameField = () => (
        <input value={logic.userData.name} onChange={logic.handleEditField(UserEditableField.Name)}/>
    )

    const renderEmailField = () => (
        <input value={logic.userData.email} onChange={logic.handleEditField(UserEditableField.Email)}/>
    )

    const renderStreetField = () => (
        <input value={logic.userData.location.street} onChange={logic.handleEditField(UserEditableField.Street)}/>
    )

    const renderCityField = () => (
        <input value={logic.userData.location.city} onChange={logic.handleEditField(UserEditableField.City)}/>
    )

    const renderCountryField = () => (
        <input value={logic.userData.location.country} onChange={logic.handleEditField(UserEditableField.Country)}/>
    )

    const renderPostalCodeField = () => (
        <input value={logic.userData.location.postalCode}
               onChange={logic.handleEditField(UserEditableField.PostalCode)}/>
    )

    return {
        inputs: {
            name: renderNameField(),
            email: renderEmailField(),
            location: {
                city: renderCityField(),
                country: renderCountryField(),
                postalCode: renderPostalCodeField(),
                street: renderStreetField()
            }
        }
    }
}

export default useRender;