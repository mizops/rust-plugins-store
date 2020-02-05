import React, {useState} from 'react';
import {Formik} from 'formik';
import SignInComponent from '../../../components/auth/sign-in/sign-in-component';




function SignInContainer(props) {

    const [error, setError] = useState(null);

    const onSubmit = async (formData) => {
        try {
            const response = await fetch('http://localhost:8080/auth/sign-in', {
                mode: "cors",
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.status !== 200) {
                const data = await response.json();
                setError(data.message);
                return false;
            }
            const data = await response.json();
            console.log(data);
            return true;
        } catch (e) {
            setError("Internal server error. Try later");
            console.log(e);
            return false;
        }
    }

    return(
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true);
                setTimeout(async () => {
                    const successfullSubmit = await onSubmit(values);
                    if (successfullSubmit) {
                        resetForm();
                        setError(null);
                    }
                    setSubmitting(false);
                }, 0);
            }}
        >
            {({
                    values,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
            }) => (
                <SignInComponent 
                    values={values}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                    error={error}
                />
            )}
        </Formik>
    )
}

export default SignInContainer;