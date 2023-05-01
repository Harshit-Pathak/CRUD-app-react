import React from 'react';
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Edit(){
    const [name,setName] = useState("");
    const [age,setAge]=useState("");
    const[id,setId]=useState("");

    let history = useNavigate();
    
    const handleEdit=(e)=>{
        e.preventDefault();
        let a = Employees[index]
        a.Name = name;
        a.Age = age;


        history("/")
    }
    useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setId(localStorage.getItem('Id'))
    },[])
    var index = Employees.map(function (e) {
        return e.id;
    }).indexOf(id);

    return(
        <Form className='d-grid gap-2' style={{margin:"15rem"}}>
            <Form.Group className='mb-3' controlId='formName'>
                <Form.Control type='text' placeholder='Enter Name' value={name} required onChange={(e)=>setName(e.target.value)}>
            </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formAge'>
                <Form.Control type='text' placeholder='Enter Age' value={age} required onChange={(e)=>setAge(e.target.value)}>
            </Form.Control>
            </Form.Group>
            <Button onClick={(e)=>handleEdit(e)} type='submit'>Edit Employee</Button>
        </Form>
    )

}
export default Edit
