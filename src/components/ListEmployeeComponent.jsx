import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'

class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }

    // always use this component to make rest api or ajax calls because this method 
    // will be called immediately after a component is mounted
    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    render() {
        return (
            <div>

                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td> {employee.firstName} </td>
                                            <td> {employee.lastName} </td>
                                            <td> {employee.email} </td>

                                        </tr>
                                )
                            }
                        </tbody>

                    </table>

                </div>

            </div>
        )
    }
}

export default ListEmployeeComponent;