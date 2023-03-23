'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';



export default function CreateDepartment() {
  const [title, setTitle] = useState('');
  const [description, setContent] = useState('');
  const router = useRouter();
 
  const create = async(e: React.FormEvent) => {
    e.preventDefault();

    await fetch('https://vef2-2023-v3-synilausn-production.up.railway.app/departments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "title": title,
        "description": description,
      }),
    });
  
    setContent('');
    setTitle('');

    router.refresh();

  }

  return (
    <form onSubmit={create}>
      <h3>Create a new Department</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">
        Create department
      </button>
    </form>
  );
}
