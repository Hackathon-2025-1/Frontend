import React from 'react';
import {AuthCard} from './AuthCard'
import Link from "next/link";

const RegisterPage = () => {
    const formInput = {
        title: "Cadastro de Usuário",
        fields: [
            {
                name: "name",
                type: "text",
                label: "Nome",
                placeholder: "Digite seu nome",
                required: true,
            },
            {
                name: "email",
                type: "email",
                label: "Email",
                placeholder: "Digite seu email",
                required: true,
            },
            {
                name: "password",
                type: "password",
                label: "Senha",
                placeholder: "Digite sua senha",
                required: true,
            },
        ],
        buttonText: "Cadastrar",
        downText: (
            <>
                Já tem uma conta?{" "}
                <Link href="/login" className="text-primary cursor-pointer transition-transform hover:scale-105">
                    Faça login
                </Link>
            </>
        ),
    }

    const onSubmit = (data) => {
        console.log("Form submitted with data:", data);
    }

    return (
        <div className='h-[100vh] flex items-center justify-center'>
            <AuthCard
                title={formInput.title}
                fields={formInput.fields}
                buttonText={formInput.buttonText}
                downText={formInput.downText}
                />
        </div>
    )
}

export default RegisterPage;