import React, { useState } from "react"
import { Department } from "../types"
interface CardProps {
    department: Department;
}
const Form:  React.FC<CardProps> = ({ department }) => {

    const [title, setTitle] = useState(department.title);
    const [description, setDescription] = useState(department.description);
  
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    };
  
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(e.target.value);
    };
    console.log(department.description)
    return (
        <form>
            <label>Title</label>
            <input 
                value={title} 
                type="text" 
                onChange={handleTitleChange}></input>
            <label>Description</label>
            <input 
                value={description} 
                type="text" 
                onChange={handleDescriptionChange}
            ></input>
        </form>
    )
}
export default Form;