import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const refreshToken = req.cookies.get("refreshToken");

  const isAuthPage =
    req.nextUrl.pathname.startsWith("/sign-in") ||
    req.nextUrl.pathname.startsWith("/sign-up");

  // If no access token and not on auth page, redirect to sign-in
  if (!refreshToken && !isAuthPage) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // If has access token and on auth page, redirect to home
  if (refreshToken && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/:slug", "/:slug/:id", "/:slug/:path"], // Apply to all paths
};
