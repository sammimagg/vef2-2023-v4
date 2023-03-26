import Link from "next/link";
import React from "react";
import { Department } from "../../types";
import styles from "./page.module.css"

interface CardProps {
    department: Department;
}

const Card: React.FC<CardProps> = ({ department }) => {
    return (
        <div className={styles.inner_card}>
            <h2>{department.title}</h2>
            <p>{department.description}</p>
            <p>
            <Link href={department._links.courses.href}>Courses</Link>
            </p>
        </div>
    );
};

export default Card;
