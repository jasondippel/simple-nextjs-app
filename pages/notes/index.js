import React from 'react'
import Link from 'next/link'

const Page = () => (
  <section>
    <h1>Notes</h1>
    <Link href="/notes/1">
      <a>Note 1</a>
    </Link>
    <br/>
    <Link href="/notes/2">
      <a>Note 2</a>
    </Link>
    <br/>
    <Link href={`/`}>
      <a>Back</a>
    </Link>
  </section>
)

export default Page
