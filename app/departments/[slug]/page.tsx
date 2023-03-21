import Link from "next/link";
async function getCourse(departmentSlug: string) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/departments/${departmentSlug}/courses/`
    );
    const data = await res.json();
    return data as any[];
}

export default async function DepartmentPage({params}: any) {
    const courses = await getCourse(params.slug);


    // id, courseId, title ,units, semester, level, url
    return (

            <table>
                <thead>
                    <tr>
                        <th>Course id</th>
                        <th>Title</th>
                        <th>Units</th>
                        <th>Semester</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    {courses?.map((course) => {
                        return <Course key={course.id} course={course}/>
                    })}
                </tbody>
            </table>

    );
}
function Course({course}:any) {
    const { id, courseId, title ,units, semester, level, url} =  course || {};
    return (
        <tr>
            <td>{courseId}</td>
            <td>{title}</td>
            <td>{units}</td>
            <td>{semester}</td>
            <td>{level}</td>
            <td><a href={url}>Slóð námskeiðs</a></td>
        </tr>
    );
}