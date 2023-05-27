import Head from "next/head";
import Layout from "../layout/layout";
import { Hero, Sidebar } from "../components";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rof1yev Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Rofiyev Dilshod" />
      </Head>
      <Layout>
        <Hero />
        <Container sx={{ display: "flex", gap: "20px" }}>
          <Sidebar />
          {/* <Content /> */}
        </Container>
      </Layout>
    </>
  );
}