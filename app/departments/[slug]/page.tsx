"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Department } from "../../types";
import Card from "./DepartmentCard";
import UpdateDepartment from "./EditDepartmentForm";
import styles from "./page.module.css"

async function getDepartment(slug: string): Promise<Department> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/departments/${slug}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data as Department;
}
export default function DepartmentPage({params,}: {params: { slug: string };}) {
  const { slug } = params;
  const [active, setActive] = useState("Cancel");
  const [department, setDepartment] = useState<Department | null>(null);

  useEffect(() => {
    getDepartment(slug).then((data) => setDepartment(data));
  }, [slug]);
  const toggleActive = () => {
    setActive((prevState) => (prevState === "Cancel" ? "Edit" : "Cancel"));
  };
  if (!department) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.full}>
      <div className={styles.card}>
        <div className={styles.float_right}>
          <button className={styles.transparent_button} onClick={toggleActive}>{active === "Cancel" ? "Edit" : "Cancel"}</button>
        </div>
          {active === "Cancel" && <Card department={department} />}
          {active === "Edit" && <UpdateDepartment department={department} />}
      </div>
    </div>
  );
}