import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import Info from '@/components/Info';
import Animation from '@/components/Animation';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <Logos />
      <Team />
      <Footer />
    </>
  );
}
