'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../button';

export default function CreateDepartment() {
  const [title, setTitle] = useState('');
  const [description, setContent] = useState('');
  const router = useRouter();
 
  const create = async(e: React.FormEvent) => {
    e.preventDefault();

    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/departments`, {
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
      <Button label="Create" typeOf="submit" color="blue"/>
    </form>
  );
}
