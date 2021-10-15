import React from "react";
import { Card, CardBody } from "reactstrap";

export const Category = ({ category }) => {
    return (
        <Card>
            <CardBody>
                <p className="category-name">
                    {category.name}
                </p>
            </CardBody>
        </Card>
    )
}