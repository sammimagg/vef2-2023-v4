"use client";
import React, { useState, useEffect } from "react"
import { Department } from "../types"
import { useRouter } from 'next/navigation';


export default function UpdateDepartment({ department }: { department: Department }) {
    const [title, setTitle] = useState(department.title);
    const [description, setDescription] = useState(department.description);
    const router = useRouter();
    const update = async (e: React.FormEvent) => {
      e.preventDefault();
      
      const response = await fetch(`https://vef2-2023-v3-synilausn-production.up.railway.app/departments/${department.slug}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "title": title,
          "description": description,
        }),
      });
      const updatedDepartment = await response.json();

      setDescription('');
      setTitle('');
      router.push(`/departments/${updatedDepartment.slug}`);
    }
    
    return (
        <form onSubmit={update}>
            <label>Title</label>
            <input 
                value={title} 
                type="text" 
                onChange={(e) => setTitle(e.target.value)}
                required />
            <label>Description</label>
            <textarea
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                />
            <button type="submit">Save</button> 
        </form>
    )
}
