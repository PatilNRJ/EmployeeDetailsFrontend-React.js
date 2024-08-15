import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddEmployeeComponent = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [emailId, setemailId] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();

  const saveEmployee = (e) => {
    e.preventDefault();
  
    const employee = { firstName, lastName, emailId };
    if(id){
      EmployeeService.updateEmployee(id, employee).then((response) =>{
        console.log(response.data)
        navigate('/employees')
      }).catch(error =>{
        console.log(error)
      })
    }else{
    EmployeeService.createEmployee([employee]).then((response) => {

      console.log(response.data);

      navigate('/employees');

    }).catch(error => {
      console.log(error)
    })
  }}
  useEffect(() =>{
    if(id){
    EmployeeService.getEmployeeById(id).then((response) =>{
      setfirstName(response.data.firstName);
      setlastName(response.data.lastName);
      setemailId(response.data.emailId);
    }).catch(error =>{
      console.log(error);
    })
  }
  }, [id])


  const title = () =>{
    if(id){
      return <h2 className='text-center'> Update Employee </h2>
    }
    else{
      return <h2 className='text-centre'>Add Employee </h2>
    }
  }
  return (
    <div>
      <br/> <br/>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            {title()}            
            <form className='mb-2'>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name:</label>
                <input 
                  type='text' 
                  placeholder='Enter First Name' 
                  name='FirstName' 
                  className='form-control' 
                  value={firstName} 
                  onChange={(e) => setfirstName(e.target.value)} 
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Last Name:</label>
                <input 
                  type='text' 
                  placeholder='Enter Last Name' 
                  name='LastName' 
                  className='form-control' 
                  value={lastName} 
                  onChange={(e) => setlastName(e.target.value)} 
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Email Id:</label>
                <input 
                  type='text' 
                  placeholder='Enter Email Id' 
                  name='EmailId' 
                  className='form-control' 
                  value={emailId} 
                  onChange={(e) => setemailId(e.target.value)} 
                />
              </div>

              <button 
                className='btn btn-success' 
                onClick={saveEmployee}>
                Save Employee
              </button>

              <Link
                to='/employees'
                className='btn btn-danger ms-3'
              >
                Cancel
              </Link>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
