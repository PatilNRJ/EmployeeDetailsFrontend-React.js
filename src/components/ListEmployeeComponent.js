import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom';


const ListEmployeeComponent = () => {
    
   const [employee, setEmployees] = useState([])

   const fetchEmployees = ()=> {
    EmployeeService.getAllEmployee().then((response)=>{
      setEmployees(response.data);
    }).catch(error =>{
      console.log(error);
    })
   }
   
    const handleDelete = (employeeId)=>{
      if (window.confirm('Are you sure you want to delete this employee?')){
      EmployeeService.deleteEmployee(employeeId).then((response) =>{
        console.log("Employee Deleted: ", response.data);

        fetchEmployees();
      }).catch(error =>{
        console.log("error while deleting employee, check if ID is correct", error);
      })
    }
  }
   useEffect(() =>{
    EmployeeService.getAllEmployee().then((response) =>{
     setEmployees(response.data)
     console.log(response.data);
    }).catch(error => {
     console.log(error);
    }) 
}, [])

  return (
    <div className='container'>
      <h1 className='text-center'> List of Employees</h1>
      <Link to = "/addemployee" className="btn btn-primary mb-2">Add Employee</Link>
      <table className='table table-bordered table-striped'>
        <thead>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Employee Email Id</th>
            <th>Actions</th>
        </thead>

    <tbody>
        {
            employee.map(
                employee =>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.emailId}</td>
                        <td>
                        <Link className='btn btn-info me-2' to={`/edit-employee/${employee.id}`}> Update </Link>
                        <button className='btn btn-danger' onClick={() => handleDelete(employee.id)}> Delete Employee </button>
                        </td>
                    </tr>

            )
        }
    </tbody>
      </table>
    </div>
  )




}

export default ListEmployeeComponent
