import { NextResponse, type NextRequest } from "next/server";

const SUPPORTED = ["fr"] as const;
const DEFAULT_LOCALE = "fr";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/" || pathname === "") {
    const url = req.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}`;
    return NextResponse.redirect(url);
  }

  const first = pathname.split("/")[1];
  if (first && !(SUPPORTED as readonly string[]).includes(first)) {
    const url = req.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
