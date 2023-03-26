import Link from "next/link";
import { CreateCourseForm } from "./CreateCourseForm";
async function getCourse(departmentSlug: string) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/departments/${departmentSlug}/courses/`,
        { cache: 'no-store' }
    );
    const data = await res.json();
    return data as any[];
}
export default async function CoursesPage({params}: any) {
    const courses = await getCourse(params.slug);
    return (
            <div>
                <CreateCourseForm slug={params.slug}/>
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
            </div>
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
                <td><a href={url}>link</a></td>
            </tr>
    );
}