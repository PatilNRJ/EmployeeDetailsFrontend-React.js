import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8722/api/v1/employees'

class EmployeeService{

    getAllEmployee(){

        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }
    createEmployee(Employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, Employee)
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL+'/'+employeeId)
    }
    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL+'/'+employeeId, employee)
    }
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL+'/'+employeeId)
    }
}


export default new EmployeeService();