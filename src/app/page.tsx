import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import Team from '@/components/Team';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Logos />
      <Team />
    </>
  );
}
