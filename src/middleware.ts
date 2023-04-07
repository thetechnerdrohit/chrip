import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default withClerkMiddleware((req: NextRequest) => {
    console.log("Middleware running!")
    return NextResponse.next();
});

// Stop Middleware running on static files
export const config = { matcher: '/((?!_next/image|_next/static|favicon.ico).*)', };
