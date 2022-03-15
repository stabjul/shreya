import React, { useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { sdk } from "../../utils/sdk";
import { ReelFragment } from "../../graphql/generated-ssr";
import Link from "next/link";
import Image from "next/image";
import Section from "../../Components/Section";
import { IoMdArrowBack } from "react-icons/io";
import { BsPlay } from "react-icons/bs";

export const getServerSideProps: GetServerSideProps<{
  reel: ReelFragment;
}> = async (ctx) => {
  const slug = ctx.query.slug;

  if (!slug)
    return {
      notFound: true,
    };

  const variables = {
    slug: slug as string,
  };

  const { data } = await sdk.GetReel(variables);
  if (!data?.reel) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      reel: data.reel,
    },
  };
};

const Reel = ({
  reel,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="h-screen bg-[#09090B] p-8 md:p-16">
      <div className="flex flex-row justify-between">
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
        <Link href="/reels">
          <a>
            <div className="flex flex-row justify-center items-center gap-2 font-['SofiaPro'] text-md bg-[#D14A84] px-2 rounded-lg">
              <IoMdArrowBack />
              My Reels
            </div>
          </a>
        </Link>
      </div>

      <div className="flex flex-row gap-x-52 mt-10 text-white">
        <div key={reel.id} onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <video autoPlay style={{ width: 1000, height: 450 }} controls>
              <source src={reel.mp4.url} />
            </video>
          ) : reel && reel.thumbnail ? (
            <Image
              src={reel.thumbnail.url}
              alt={reel.title}
              width={1000}
              height={450}
              className="rounded-lg"
            />
          ) : (
            <Image
              src="/assets/danceThumbnail.jpg"
              alt={reel.title}
              width={1000}
              height={450}
              className="rounded-lg"
            />
          )}

          <div className="flex flex-row justify-between mt-5">
            <h3 className="text-3xl truncate whitespace-nowrap overflow-hidden">
              {reel.title}
            </h3>
            {reel.tags.length > 0 && (
              <h1 className="text-[#036ffc]">#{reel.tags}</h1>
            )}
          </div>
          <div className="flex flex-row gap-10">
            <h1 className="font-['SofiaPro-Bold'] font-sans mt-4 w-56 truncate whitespace-nowrap overflow-hidden">
              {reel.description}
            </h1>
          </div>
        </div>

        <div>
          <Section />
        </div>
      </div>
    </div>
  );
};

export default Reel;
