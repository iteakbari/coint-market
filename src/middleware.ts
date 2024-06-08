import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.url;
  let pathname = req.nextUrl.pathname;
  const token = req.cookies.get("accessToken");

  // اینجا عبارت منظم را اضافه می‌کنیم تا هر بخشی مانند //pipe/UUID/ را حذف کند
  pathname = pathname.replace(/\/\/pipe\/[a-z0-9-]+\//i, "/");

  const referer = req.headers.get("referer");

  if (!token || token === undefined) {
    if (pathname.startsWith("/dashboard") || pathname.startsWith("/purchase")) {
      return NextResponse.redirect(new URL("/unauthorised", url));
    }
  } else if (token) {
    if (
      pathname.startsWith("/sign") ||
      pathname.startsWith("/login") ||
      pathname.startsWith("/forgetPassword")
    ) {
      console.log(referer);

      const redirectUrl = referer ? new URL(referer) : new URL("/", req.url);
      return NextResponse.redirect(redirectUrl);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/sign",
    "/login",
    "/forgetPassword",
  ],
};
