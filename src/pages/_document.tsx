import { Head, Html, Main, NextScript } from "next/document";

const Document = (): JSX.Element => {
  return (
    <Html lang="pt-br">
      <Head>
        <meta
          name="description"
          content="Aplicação para pesquisar e favoritar filmes no Local Storage do navegador, fazendo uso da API do The Movie Database (TMDB)"
        />
        <meta
          name="keywords"
          content="React, NextJS, TypeScript, TailwindCSS"
        />
        <meta name="author" content="Rian Oliveira" />
        <meta name="theme-color" content="#17162E" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
