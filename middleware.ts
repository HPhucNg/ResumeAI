// import { withClerkMiddleware } from "@clerk/nextjs"; // remove this line

// export default withClerkMiddleware((req, res) => {
//   // ... existing code ...
// });

import { NextResponse } from 'next/server';

export function middleware(req) {
  // You can perform any checks or logic here
  // For example, logging the request URL
  console.log('Request URL:', req.url);

  // Allow all requests by returning NextResponse.next()
  return NextResponse.next();
}
