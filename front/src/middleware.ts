import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  return NextResponse.next();
}

// Aplica o middleware apenas nas rotas desejadas
export const config = {
  matcher: ["/login", "/register", "/dashboard"],
};