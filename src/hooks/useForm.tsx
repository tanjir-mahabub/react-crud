import { useState, ChangeEvent } from 'react';

type InputValues = {
    [key: string]: string;
};

type FormProps = {
    [key: string]: string | number | boolean;
};

const useForm = (initialState: FormProps = {}) => {
    const [inputValues, setInputValues] = useState<InputValues>(initialState);

    const resetForm = () => {
        setInputValues(initialState);
    };

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };

    const setForm = (newValues: InputValues) => {
        setInputValues(newValues);
    }

    return {
        inputValues,
        handleInputChange,
        resetForm,
        setForm
    };
};

export default useForm;
