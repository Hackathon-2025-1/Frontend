"use client";
import React from 'react';
import { AuthCard } from './AuthCard';
import Link from 'next/link';
import { useToast } from '@/context/ToastContext';
import { useRouter } from 'next/navigation';


const RegisterPage = () => {
    const [form, setForm] = React.useState({ name: '', email: '', password: '' });
    const { showToast } = useToast();
    const router = useRouter();

    const formInput = {
        title: 'Cadastro de Usuário',
        fields: [
            {
                name: 'name',
                type: 'text',
                label: 'Nome',
                placeholder: 'Digite seu nome',
                required: true,
                value: form.name,
            },
            {
                name: 'email',
                type: 'email',
                label: 'Email',
                placeholder: 'Digite seu email',
                required: true,
                value: form.email,
            },
            {
                name: 'password',
                type: 'password',
                label: 'Senha',
                placeholder: 'Digite sua senha',
                required: true,
                value: form.password,
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

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Busca usuários cadastrados no localStorage
        const usersStr = localStorage.getItem('users');
        const users = usersStr ? JSON.parse(usersStr) : [];
        // Verifica se já existe usuário com o mesmo email
        const exists = users.some((u: any) => u.email === form.email);
        if (exists) {
            showToast('Email já cadastrado!', { type: 'error' });
            return;
        }
        // Adiciona novo usuário
        users.push({ ...form });
        localStorage.setItem('users', JSON.stringify(users));
        showToast('Cadastro realizado com sucesso!', { type: 'success' });
        // Gera token incremental e salva usuário logado
        router.push('/login');
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