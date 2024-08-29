import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to Launchpad!</h1>
      <nav>
        <Link href="/about">About</Link> | <Link href="/contact">Contact</Link>
      </nav>
    </Layout>
  );
}