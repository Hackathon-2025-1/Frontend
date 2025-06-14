"use client";
import { AuthCard } from "../register/AuthCard";
import React from "react";
import Link from "next/link";
import { useToast } from "@/context/ToastContext";

const LoginPage = () => {
    const [form, setForm] = React.useState({ email: "", password: "" });
    const { showToast } = useToast();

    const formInput = {
        title: "Login de Usuário",
        fields: [
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
        buttonText: "Login",
        downText: (
            <>
                Não tem uma conta?{" "}
                <Link href="/register" className="text-primary cursor-pointer transition-transform hover:scale-105">
                    Cadastre-se
                </Link>
            </>
        ),
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });
        if (!res.ok) {
            showToast("Erro ao fazer login!", { type: "error" }); 
            return;
        };
            showToast("Login realizado com sucesso!", { type: "success" });
        };


        return (
            <div className='h-[100vh] flex items-center justify-center'>
                <AuthCard
                    onSubmit={onSubmit}
                    onChange={handleChange}
                    title={formInput.title}
                    fields={formInput.fields}
                    buttonText={formInput.buttonText}
                    downText={formInput.downText}
                />
            </div>
        );
    };

    export default LoginPage;