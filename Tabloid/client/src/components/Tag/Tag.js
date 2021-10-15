import React from "react";
import { Card, CardBody } from "reactstrap";

export const Tag = ({ tag }) => {
    return (
        <Card>
            <CardBody>
                <p className="tag-name">
                    {tag.name}
                </p>
            </CardBody>
        </Card>
    )
}