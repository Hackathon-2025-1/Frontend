import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function isAuthenticated(req: NextRequest) {
  return !!req.cookies.get("token");
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Rotas não autenticadas
  const publicRoutes = ["/login", "/register"];

  // Se o usuário estiver autenticado e tentar acessar login ou register, redireciona para dashboard
  if (isAuthenticated(req) && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Se o usuário não estiver autenticado e tentar acessar dashboard, redireciona para login
  if (!isAuthenticated(req) && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Permite acesso normalmente
  return NextResponse.next();
}

// Aplica o middleware apenas nas rotas desejadas
export const config = {
  matcher: ["/login", "/register", "/dashboard"],
};