// pages/user.js
import Head from 'next/head'

function User() {
  return (
    <>
    <Head>
    <title>Hello user from JSX.</title>
    </Head>
      <div className="container">
        <h1>Hello User</h1>
        <p>This is JSX with CSS in JS</p>
        <p>AAAAAAAAArghhhh...!</p>
        <style jsx>{`
          .container {
            margin: 50px;
          }
          p {
            color: blue;
          }
        `}</style>
      </div>
    </>
  )
}

export default User