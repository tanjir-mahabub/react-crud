import uuid from "react-uuid";

type employeeProps = {
    [key: string]: string;
}

export const getListEmployees = () => {
    if (!localStorage["@employees"]) {
        localStorage["@employees"] = JSON.stringify([]);
    }

    const employees = JSON.parse(localStorage["@employees"]);

    return employees;
}

export const getEmployeeById = (id: string) => {
    const employees = getListEmployees();
    const employee = employees.find((employee: employeeProps) => employee.id === id);
    return employee;
}

export const addEmployee = (employee: employeeProps) => {
    const employees = getListEmployees();
    employees.push({id: uuid(), ...employee});
    localStorage["@employees"] = JSON.stringify(employees);
}

export const editEmployee = (id: string, newEmployee: employeeProps) => {
    let employees = getListEmployees();
    employees = employees.filter((employee: employeeProps) => employee.id !== id);
    employees.push(newEmployee);
    localStorage["@employees"] = JSON.stringify(employees);
}

export const deleteEmployee = (id: string) => {
    let employees = getListEmployees();
    employees = employees.filter((employee: employeeProps) => employee.id !== id);
    localStorage["@employees"] = JSON.stringify(employees);
}