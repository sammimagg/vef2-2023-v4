'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Department } from "../../../types";
import Button from "../../../button";

export function CreateCourseForm({slug}: {slug: string}) {
    const [ courseId, setCourseId ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ units, setUnits ] = useState('');
    const [ semester, setSemester ] = useState("Vor");
    const [ level, setLevel ] = useState('Grunnnám');
    const [ url, setUrl ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState(''); // added state variable for error message
    const router = useRouter();

    const create = async(e: React.FormEvent) => {
        e.preventDefault();
        console.log(semester)
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/departments/${slug}/courses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                "courseId": courseId,
                "title": title,
                "units" : parseInt(units),
                "semester": semester,
                "level": level,
                "url": url
            }),
        });
        setCourseId('');
        setTitle('');
        setUnits('');
        setSemester('');
        setLevel('');
        setUrl('');
        const data = await res.json();
        if (res.status !== 200) {
            setErrorMessage(`Error: ${data.errors[0].msg}`); // set error message if status code is not 200
        } else {
            setErrorMessage(''); // clear error message if status code is 200
            console.log()
            router.refresh();
        }
    }
    return (
        <div>
            {errorMessage && <p style=
                {
                    {
                        backgroundColor: '  #ffb6b6  ',
                        padding: '1em',
                        marginBottom: '1em',
                        border: '1px solid  #ff5b5b ',
                        borderRadius: 6,
                    }
                }
            >{errorMessage}</p>} {/* display error message if it exists */}
            <form onSubmit={create}>
                <label>Course ID</label>
                <input 
                    type="text"
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                />
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Units</label>
                <input
                    type="text"
                    value={units}
                    onChange={(e) => setUnits(e.target.value)}
                />
                <label>Semester</label>
                <select 
                    name = "dropdown"
                    defaultValue={semester}
                    onChange={(e) => setSemester(e.target.value)
                    }
                >
                <option value = "Vor" >Vor</option>
                <option value = "Haust">Haust</option>
                <option value = "Heilsárs">Heilsárs</option>
                </select>
                <label>Level</label>
                <select
                    name = "dropdown"
                    defaultValue={level}
                    onChange={(e) => setLevel(e.target.value)
                    }
                >
                <option value = "Grunnnám">Grunnnám</option>
                <option value = "Framhaldsnám">Framhaldsnám</option>
                </select>
                <label>URL:</label>
                <input
                    type="text"
                    placeholder="https://www.."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <Button label="Create" typeOf="submit" color="blue"/>
            </form>
        </div>
    );
}