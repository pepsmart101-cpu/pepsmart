import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Rate limiting with in-memory store (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string, limit = 10, windowMs = 60000): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= limit) {
    return false;
  }

  entry.count++;
  return true;
}

// Paths that require authentication
const protectedPaths = [
  "/community/dashboard",
  "/api/protected",
  "/checkout",
  "/account",
];

// API routes that rate limit
const apiPaths = ["/api/auth", "/api/checkout", "/api/community"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  // Get IP for rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "127.0.0.1";

  // Security headers (additional layer beyond next.config)
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // CORS strict
  response.headers.set(
    "Access-Control-Allow-Origin",
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  );
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  response.headers.set("Access-Control-Allow-Credentials", "true");

  // Rate limit API routes
  if (apiPaths.some((p) => pathname.startsWith(p))) {
    if (!rateLimit(ip, 20, 60000)) {
      return new NextResponse("Too many requests", {
        status: 429,
        headers: {
          "Retry-After": "60",
          "Content-Type": "text/plain",
        },
      });
    }
  }

  // Check auth for protected paths
  if (protectedPaths.some((p) => pathname.startsWith(p))) {
    const sessionCookie = request.cookies.get("sb-session")?.value;

    if (!sessionCookie) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|public|images).*)",
  ],
};