import Head from 'next/head';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from './css/layout.module.css';
import Navbar from "./components/global/Navbar";
import './css/globals.css';
import Footer from "./components/global/Footer";

export const metadata: Metadata = {
  title: "Almost Studio",
  metadataBase: new URL("https://sanity-nextjs-site.vercel.app"),
  description: "Almost Studio is a design practice working on projects between the US and France.",
  openGraph: {
    images:
      "https://cdn.sanity.io/images/oogp23sh/production/3a718c50f7f615917e97299f70d1e4f266bc4127-1200x630.png",
  },
};

export const siteTitle = 'ALMOST STUDIO';

async function fetchData() {
  // Fetch dynamic data
  const dynamicRes = await fetch('https://api.vercel.app/products', {
    cache: 'no-store',
  });
  const products = await dynamicRes.json();

  // Fetch static data with revalidation
  const staticRes = await fetch('https://api.vercel.app/blog', {
    next: {
      revalidate: 3600, // 1 hour
    },
  });
  const blog = await staticRes.json();

  return { products, blog };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { products, blog } = await fetchData();

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
