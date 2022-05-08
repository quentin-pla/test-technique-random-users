import React, {useMemo} from "react";
import {IHomeLogic} from "./useHomeLogic";
import {IUser} from "../../../models/IUser";
import {Col, Row} from "react-bootstrap";

export interface IHomeRender {
    users: JSX.Element,
}

const useHomeRender = (logic: IHomeLogic): IHomeRender => {
    const renderUser = (user: IUser): JSX.Element => (
        <Col key={user.id} className={"col-12 col-md-4 p-3"}>
            <div className={"user"} onClick={logic.handleUserClick(user.id)}>
                {user.name}
            </div>
        </Col>
    )

    const renderUsers = (users: Array<IUser>): JSX.Element => (
        <Row className={"usersContainer"}>
            {users.map(user => renderUser(user))}
        </Row>
    )

    return useMemo(() => ({
        users: renderUsers(logic.users)
    }), [logic.users])
}

export default useHomeRender;