import Head from 'next/head'

const Home = () => (
    <div className="container">
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav>
            <ul>
                <li>colors</li>
                <li>nature</li>
                <li>celebrities</li>
                <li>style</li>
            </ul>
        </nav>
        <main>
            <h1 className="title">
                Hey Ambiyo! <a href="https://nextjs.org">You're cute!</a>
            </h1>
        </main>

        <footer></footer>

        <style jsx>{`
            .container {
                min-height: 100vh;
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            main {
                padding: 5rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            footer {
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            nav {
                width: 100vw;
            }
            nav ul {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
            }
            nav li {
                list-style: none;
                margin-right: 24px;
            }

            @media (max-width: 600px) {
                .grid {
                    width: 100%;
                    flex-direction: column;
                }
            }
        `}</style>

        <style jsx global>{`
            html,
            body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
                    Droid Sans, Helvetica Neue, sans-serif;
            }

            * {
                box-sizing: border-box;
            }
        `}</style>
    </div>
)

export default Home
