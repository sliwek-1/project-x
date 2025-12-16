import React from "react";

interface FormData {
    email: string,
    password: string
}

export function Login() {

    const initialValues = {
        email: "",
        password: ""
    }

    const onSubmit = (values: FormData) => {
        console.log(values);
    }

    return (
        <>
            <h1>Login</h1>

        </>
    )
}