import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/modules/Header";
import Slider from "@/components/Slider/Slider";
import Content from "@/modules/Content/Content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}
