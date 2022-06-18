import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import Hero from '../components/home/hero';
import Animation from '../components/home/animation';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Eden의 개발블로그</title>
        <meta name="description" content="Eden의 개발블로그" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </Layout>
  );
}
