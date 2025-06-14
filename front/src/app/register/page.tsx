"use client";
import React from 'react';
import { AuthCard } from './AuthCard';
import Link from 'next/link';
import { useToast } from '@/context/ToastContext';

const RegisterPage = () => {
    const [form, setForm] = React.useState({ name: '', email: '', password: '' });
    const { showToast } = useToast();

    const formInput = {
        title: 'Cadastro de Usuário',
        fields: [
            {
                name: 'name',
                type: 'text',
                label: 'Nome',
                placeholder: 'Digite seu nome',
                required: true,
            },
            {
                name: 'email',
                type: 'email',
                label: 'Email',
                placeholder: 'Digite seu email',
                required: true,
            },
            {
                name: 'password',
                type: 'password',
                label: 'Senha',
                placeholder: 'Digite sua senha',
                required: true,
            },
        ],
        buttonText: 'Cadastrar',
        downText: (
            <>
                Já tem uma conta?{' '}
                <Link href="/login" className="text-primary cursor-pointer transition-transform hover:scale-105">
                    Faça login
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
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        if (!res.ok) {
            showToast('Erro ao cadastrar usuário!', { type: 'error' });
            return;
        }
        showToast('Cadastro realizado com sucesso!', { type: 'success' });
    };

    return (
        <div className="h-[100vh] flex items-center justify-center">
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

export default RegisterPage;