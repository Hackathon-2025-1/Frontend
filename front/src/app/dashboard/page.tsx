// src/app/dashboard/page.tsx
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const isAuthenticated = false; // Troque pela sua lógica de autenticação

  if (!isAuthenticated) {
    redirect("/login");
  }

  return <div>Bem-vindo ao Dashboard!</div>;
}