import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

export const Tag = ({ tag }) => {
    const history = useHistory();

    return (
        <Card>
            <p className="tag-name">
                <h2 onClick={() => {
                    history.push(`/`)
                }}></h2>
            </p>
        </Card>
    )
}