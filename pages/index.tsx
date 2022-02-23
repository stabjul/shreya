import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Shreya</title>
        <meta name="description" content="Welcome to her world" />
        <link rel="icon" href="/assets/shreya-logo.svg" />
        <link
          rel="preload"
          href="/fonts/SofiaPro-Bold.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/SofiaPro-Medium.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <main className="h-screen bg-[#09090B] p-16 text-white">
        <nav className="flex justify-between content-center">
          <Image
            src="/assets/shreya-logo.svg"
            alt="logo"
            width="30"
            height="41"
          />
          <div className="flex flex-row gap-14 cursor-pointer font-['SofiaPro']">
            <Link href="./projects">
              <a>Projects</a>
            </Link>
            <Link href="./myStory">
              <a>My Story</a>
            </Link>
          </div>
        </nav>
        <div className="flex flex-col">
          <div className="mt-28 font-medium font-['SofiaPro']">
            <h2 className="text-2xl">
              Hey There, I&apos;m{" "}
              <span className="text-[#F291BB] ">Shreya</span>
            </h2>
            <h1 className="text-6xl">
              An experienced pokemon <br /> trainer
            </h1>
            <a href="https://www.buymeacoffee.com/stabjul">
              <button className="bg-[#D14A84] text-white rounded-md mt-5 p-2 cursor-pointer">
                Ask me how
              </button>
            </a>
          </div>
          <div className="flex flex-row justify-between content-center space-x-96">
            <div className="flex flex-row gap-5 mt-52 cursor-pointer">
              <a href="https://github.com/stabjul">
                <Image
                  src="/assets/github.svg"
                  alt="github icon"
                  width="27"
                  height="27"
                />
              </a>
              <a href="https://www.linkedin.com/in/shreya-tabjul-4050821b1/">
                <Image
                  src="/assets/linkedin.svg"
                  alt="linkedin icon"
                  width="27"
                  height="27"
                />
              </a>
              <a href="mailto:stabjul@gmail.com" className="-mt-0.5">
                <Image
                  src="/assets/mail.svg"
                  alt="email icon"
                  width="34"
                  height="34"
                />
              </a>
              <div className="pl-96 ml-40 mt-3">
                <Image
                  src="/assets/down.svg"
                  alt="design icon"
                  width="25"
                  height="25"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
