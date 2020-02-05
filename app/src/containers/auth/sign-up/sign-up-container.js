import React from 'react';
import SignUpComponent from '../../../components/auth/sign-up/sign-up-component';
import * as yup from 'yup';
import {Formik} from 'formik';




function SignUpContainer(props) {

    const validationSchema = yup.object({
        nickname: 
            yup.string()
            .min(2)
            .required(),
        email: 
            yup.string()
            .email()
            .required(),
        password:
            yup.string()
            .min(6)
            .required()
    })
    
    const onSubmit = async (formData) => {
        try {
            const response = await fetch("http://localhost:8080/auth/sign-up", 
            {
                mode:"cors",
                method: "POST", 
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 201) {
                const data = await response.json();
                setTimeout(() => props.history.push('/'), 0);
                return true
            }
        } catch(e) {
            console.log(e)
        }
    }
    return(
            <Formik
                initialValues={{
                    nickname: "",
                    email: "",
                    password: ""
                }}
                validationSchema={validationSchema}
                validateOnChange={true}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setSubmitting(true)
                    setTimeout(async () => {
                        const successfullSignUp = await onSubmit(values);
                        setSubmitting(false);
                        if (successfullSignUp) {
                            resetForm();
                        }
                    }, 0);
                }}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    errors,
                    touched,
                    setTouched
                }) => (
                    <SignUpComponent 
                        values={values}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        isSubmitting={isSubmitting}
                        errors={errors}
                        touched={touched}
                        setTouched={setTouched}
                    />
                )}
            </Formik>
    )
    
}

export default SignUpContainer;