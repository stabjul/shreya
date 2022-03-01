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

      <div className="flex flex-col justify-between content-center h-screen bg-[#09090B] p-8 md:p-16 text-white">
        <div className="flex justify-between items-center">
          <div className="h-8 w-8 md:h-10 md:w-10 relative">
            <Image
              src="/assets/shreya-logo.svg"
              alt="logo"
              layout="fill"
              className="absolute"
            />
          </div>

          <div className="flex flex-row gap-14 cursor-pointer font-['SofiaPro']">
            <Link href="./projects">
              <a>Projects</a>
            </Link>
            <Link href="./myStory">
              <a>My Story</a>
            </Link>
          </div>
        </div>

        <div className="font-medium font-['SofiaPro']">
          <h2 className="text-2xl md:text-3xl">
            Hey There, I&apos;m <span className="text-[#F291BB] ">Shreya</span>
          </h2>
          <h1 className="text-5xl md:text-6xl">
            An experienced web <br /> developer
          </h1>
          <a href="https://www.buymeacoffee.com/stabjul">
            <button className="bg-[#D14A84] text-white rounded-md mt-5 p-2 cursor-pointer">
              Ask me how
            </button>
          </a>
        </div>

        <div className="flex flex-row content-center gap-5 cursor-pointer">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
