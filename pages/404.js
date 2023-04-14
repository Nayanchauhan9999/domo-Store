import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

const ErrorPage = () => {
  const route = useRouter()
  setTimeout(() => {
    route.push("/")
  }, 5000);
  return (
    <>
    <h3>Hello I'm Error Page. Ha ha ha ha ha....</h3>
    <div>Go to Home Page : <Link href="/">Home</Link> </div>
    </>
  )
}

export default ErrorPage