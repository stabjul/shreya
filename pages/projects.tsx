import React from "react";
import Lottie, { useLottie } from "lottie-react";
import animationData from "../public/assets/work.json";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const options = {
    animationData: animationData,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: true,
    },
  };
  const { View } = useLottie(options);
  return (
    <div className="h-screen bg-[#09090B] flex flex-col">
      <Link href="/">
        <a className="m-10">
          <Image
            src="/assets/shreya-logo.svg"
            alt="logo"
            width={30}
            height={41}
          />
        </a>
      </Link>
      <div className="flex flex-row justify-center items-center">
        <div className="w-96 h-96 mr-10">{View}</div>
        <h1 className="bg-gradient-to-r from-[#D14A84] via-[#4A68D1] via-[#F291BB] via-[#849CF0] to-[#D14A84] text-xl p-4 rounded-md animate-pulse">
          Still working on this page :)
        </h1>
      </div>
    </div>
  );
};

export default Projects;
