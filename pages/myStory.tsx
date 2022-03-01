import React from "react";
import Lottie, { useLottie } from "lottie-react";
import animationData from "../public/assets/idea.json";
import Link from "next/link";
import Image from "next/image";

const MyStory = () => {
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
    <div className="h-screen bg-[#09090B] flex flex-col p-16">
      <Link href="/">
        <a>
          <div className="h-8 w-8 md:h-10 md:w-10 relative">
            <Image
              src="/assets/shreya-logo.svg"
              alt="logo"
              layout="fill"
              className="absolute"
            />
          </div>
        </a>
      </Link>
      <div className="flex flex-row justify-center items-center">
        <div className="w-96 h-96 mr-10">{View}</div>
        <h1 className="text-[#4A68D1] text-sm p-4 rounded-md animate-ping-slow ml-10">
          Writing isn’t easy and writing my story is even harder.
        </h1>
      </div>
    </div>
  );
};

export default MyStory;
