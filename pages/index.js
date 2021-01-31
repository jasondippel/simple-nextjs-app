import React from 'react'
import Link from 'next/link'

const Page = () => (
  <section>
    <h1>Home Page</h1>
    <Link href="/notes">
      <a>Notes</a>
    </Link>
  </section>
)

export default Page
