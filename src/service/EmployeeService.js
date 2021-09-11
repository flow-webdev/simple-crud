import axios from 'axios';
//npm install axios --save

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

export default new EmployeeService();

// non esporto la classe ma un'istanza della classe che possiamo
// usare direttamente nel component