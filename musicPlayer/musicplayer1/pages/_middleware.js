import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"


export async function middleware(req) {

    //token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const {  pathname } = req.nextUrl;
  const url = req.nextUrl.clone()
  url.pathname = '/login'
  //allow the request if: 
  //1) its a request for next-auth session and provider fetching
  //2) token exists

  if(pathname.includes("/api/auth") || token ) {

    return NextResponse.next();
  }
  //redirect them to login page if they dont have token and are requesting protected route

  if(!token && pathname!=="/login") {
    return NextResponse.rewrite(url)
  }
}