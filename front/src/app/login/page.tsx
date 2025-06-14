"use client";
import { AuthCard } from "../register/AuthCard";
import React from "react";
import Link from "next/link";
import { useToast } from "@/context/ToastContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginPage = () => {
    const [form, setForm] = React.useState({ email: "", password: "" });
    const { showToast } = useToast();
    const router = useRouter();

    const formInput = {
        title: "Login de Usuário",
        fields: [
            {
                name: "email",
                type: "email",
                label: "Email",
                placeholder: "Digite seu email",
                required: true,
                value: form.email,
            },
            {
                name: "password",
                type: "password",
                label: "Senha",
                placeholder: "Digite sua senha",
                required: true,
                value: form.password,
            },
        ],
        buttonText: "Entrar",
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

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const usersStr = localStorage.getItem("users");
        const users = usersStr ? JSON.parse(usersStr) : [];
        const user = users.find((u: any) => u.email === form.email && u.password === form.password);
        if (!user) {
            showToast("Email ou senha inválidos!", { type: "error" });
            return;
        }
        let lastToken = parseInt(localStorage.getItem("lastToken") || "0", 10);
        lastToken++;
        localStorage.setItem("lastToken", String(lastToken));
        localStorage.setItem("currentUser", JSON.stringify({ ...user, token: lastToken }));
        showToast("Login realizado com sucesso!", { type: "success" });
        setTimeout(() => {
            router.push("/dashboard");
        }, 800);
    };

    return (
        <div className="flex flex-row h-screen">
            {/* Lado da logo */}
            <div className="flex items-center justify-center w-1/2 bg-white">
                <Image src="/logo.png" alt="Logo" width={300} height={300} className="max-w-xs" priority />
            </div>
            {/* Lado do formulário */}
            <div className="flex items-center justify-center w-1/2 bg-gradient-to-br from-tertiary to-primary">
                <div className="w-full max-w-md">
                    <AuthCard
                        onSubmit={onSubmit}
                        onChange={handleChange}
                        title={formInput.title}
                        fields={formInput.fields}
                        buttonText={formInput.buttonText}
                        downText={formInput.downText}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;