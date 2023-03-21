import Link from "next/link";
import CreateDepartment from "./CreateDepartment";
import styles from "./Department.module.css"

async function getDepartments(){
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/departments`,
        { cache: 'no-store' }
    );
    const data = await res.json();
    return data as any[];
}

export default async function DepartmentPage() {
    const departments = await getDepartments();
   
    return(
        <div>
            <h1>Departments</h1>
            <section className={styles.grid}>
                {departments?.map((department) => {
                    return <Department key={department.id} department={department}/>
                })}
            </section>
            <CreateDepartment/>
        </div>
    );
}
function Department({ department }: { department: { id: string, title: string, slug: string, description: string } }) {
    const { id, title, slug, description } = department;

    return (

            <div className={styles.department}>
                <Link href={`/departments/${slug}`}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </Link>
            </div>

    )
}