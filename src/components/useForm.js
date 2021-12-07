import React,{ useState, useEffect } from "react";
import validation from "./validation";

const useForm = (submitForm) => { 
const [values, setValues] = React.useState({
            fullname: '',
            email: '',
            password: '',
        }); 

    const [errors, setErrors] = React.useState({});
    const [dataIsCorect, setDataIsCorect] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorect(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorect) {
        submitForm(true);
        }
    }, [errors]);

    return { handleChange, handleFormSubmit, errors, values };

};

export default useForm;
