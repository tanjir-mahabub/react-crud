import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { addEmployee, editEmployee, getEmployeeById } from '../services/localStorage';

export const EmployeeForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [showAlert, setShowAlert] = useState<boolean>(false);

    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        name: '',
        email: '',
        address: '',
        phone: '',
    });

    useEffect(() => {
        if (id) {
            const employee = getEmployeeById(id);
            setForm(employee);
        }
    }, [id]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        id ? editEmployee(id, inputValues) : addEmployee(inputValues);
        setShowAlert(true);
        resetForm();
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    };

    return (
        <div>
            <div className="d-flex my-5 justify-content-between">
                <button className="btn btn-outline-secondary" onClick={() => navigate('/')}>
                    Back
                </button>
                <h1>{id ? 'Edit' : 'Create'} employee</h1>
            </div>

            <div className="card border-primary p-5 m-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter Name"
                            value={inputValues.name}
                            onChange={handleInputChange}
                            name="name"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter Email"
                            value={inputValues.email}
                            onChange={handleInputChange}
                            name="email"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="address">
                            Address
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Enter Address"
                            value={inputValues.address}
                            onChange={handleInputChange}
                            name="address"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="Enter Phone"
                            value={inputValues.phone}
                            onChange={handleInputChange}
                            name="phone"
                        />
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-outline-primary">
                            {id ? 'Edit' : 'Create'} employee
                        </button>
                    </div>
                </form>
            </div>

            {
                showAlert && (
                    <div className='px-5'>
                        <div className="alert alert-success text-white" role='alert'>
                            Well Done! You've {id ? 'Edited' : 'Created'} an employee successfully
                        </div>
                    </div>
                )
            }
        </div>
    );
};
