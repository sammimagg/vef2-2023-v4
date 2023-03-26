"use client";
import React, { useState, useEffect } from "react"
import { Department } from "../../types"
import { useRouter } from 'next/navigation';
import styles from "./page.module.css"
import Button from "../../button";

export default function UpdateDepartment({ department }: { department: Department }) {
    const [title, setTitle] = useState(department.title);
    const [description, setDescription] = useState(department.description);
    const router = useRouter();
    const update = async (e: React.FormEvent) => {
      e.preventDefault();
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${department.slug}`, {
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
    const deleteDepartment = async(e: { preventDefault: () => void; }) => {
      e.preventDefault();
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/departments/${department.slug}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (response.status === 204) {
        console.log('Department deleted successfully');
      } else {
        const deleteResponse = await response.json();
        console.error('Error deleting department:', deleteResponse);
        
      }

      router.push(`/`)
      router.refresh();
    }
    
    return (
      <div >
        <form className={`${styles.inner_card} ${styles.row}`} onSubmit={update}>
            <label>Title</label>
            <input 
                className={styles.input}
                value={title} 
                type="text" 
                onChange={(e) => setTitle(e.target.value)}
                required />
            <label>Description</label>
            <textarea
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                />
            <Button label="Save" typeOf="submit" color="green"/>
        </form>
        <div className={styles.float_right}>
          <button onClick={deleteDepartment} className={`${styles.transparent_button} ${styles.button_delete}`}>Delete</button>
        </div>
      </div>  
    )
}
