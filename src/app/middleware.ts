import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import axios from 'axios';
// https://aziz-api.abdaziz.dev/auth/authenticated
async function isAuthenticated() {
 
    const response = await axios.get(
        "https://azizhelper.com/api/auth/authenticated",);
    if (response.status === 200) {
        // Store the token in local storage
        return true;
    } else {
        return false;
    }
}


export async function middleware(request: NextRequest) {

  
  try {
    const IsAuthenticated = await isAuthenticated();

    if (request.nextUrl.pathname === '/login' && IsAuthenticated) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    if (!IsAuthenticated && request.nextUrl.pathname !== '/login') {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    if (request.nextUrl.pathname !== '/') {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|register).*)',
  ],
}