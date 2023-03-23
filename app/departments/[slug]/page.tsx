"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Department } from "../../types";
import Card from "../Card";
import UpdateDepartment from "../Form";


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
  const [active, setActive] = useState("Card");
  const [department, setDepartment] = useState<Department | null>(null);

  useEffect(() => {
    getDepartment(slug).then((data) => setDepartment(data));
  }, [slug]);
  const toggleActive = () => {
    setActive((prevState) => (prevState === "Card" ? "Form" : "Card"));
  };

  if (!department) {
    return <div>Loading...</div>;
  }
  console.log(department._links.self)
  return (
    <div>
      <button onClick={toggleActive}>{active === "Card" ? "Form" : "Card"}</button>
      {active === "Card" && <Card department={department} />}
      {active === "Form" && <UpdateDepartment department={department} />}
      <Link href={department._links.courses.href}>Courses</Link>
    </div>
  );
}
