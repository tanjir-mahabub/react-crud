import { useNavigate } from "react-router-dom";
import { deleteEmployee, getListEmployees } from "../services/localStorage";

type employeeProps = {
    [key: string]: string;
}
const EmployeeItem = ({ employee, setEmployees }: employeeProps) => {
    const { id, name, email, address, phone } = employee;
    const navigate = useNavigate();

    const removeEmployee = () => {
        deleteEmployee(id);
        setEmployees(getListEmployees());
    }

    return (
        <tr>
            <th>{name}</th>
            <th>{email}</th>
            <th>{address}</th>
            <th>{phone}</th>
            <th>
                <div className="d-flex gap-3">
                    <span role="button" className="badge bg-success" onClick={() => navigate(`/edit-employee/${id}`)}>
                        Edit
                    </span>
                    <span role="button" className="badge bg-danger" onClick={() => removeEmployee()}>
                        Delete
                    </span>
                </div>
            </th>
        </tr>
    )
}

export default EmployeeItem