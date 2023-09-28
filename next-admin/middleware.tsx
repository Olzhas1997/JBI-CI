import { NextResponse } from 'next/server';

// eslint-disable-next-line consistent-return
export function middleware(req:any) {
  const token = req.cookies.get('accessToken');
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/auth') || pathname.startsWith('/_next') || pathname.startsWith('/favicon.ico')) { /* empty */ } else if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = '/auth';
    return NextResponse.redirect(url);
  }
}
