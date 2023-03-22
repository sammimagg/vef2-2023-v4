import React from "react";
import { Department } from "../types";

interface CardProps {
    department: Department;
}

const Card: React.FC<CardProps> = ({ department }) => {
    return (
        <div>
            <h2>{department.title}</h2>
            <p>{department.description}</p>
        </div>
    );
};

export default Card;
