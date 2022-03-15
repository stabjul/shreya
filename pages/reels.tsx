import React from "react";
import { sdk } from "../utils/sdk";
import { ReelFragment } from "../graphql/generated-ssr";
import Image from "next/image";
import Link from "next/link";
import { GetServerSideProps } from "next";

export interface ReelsProps {
  reels: ReelFragment[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await sdk.GetReels();

  if (!data?.reels) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      reels: data.reels,
    },
  };
};

const Reels = ({ reels }: ReelsProps) => {
  return (
    <div className="bg-[#09090B] p-8 md:p-16">
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
      <h1 className="text-white font-['SofiaPro'] mt-10 text-5xl">My Reels</h1>
      <div className="mt-10 grid grid-cols-3 grid-flow-row gap-10">
        {reels.map((reel) => (
          <>
            <Link href={`/reel/${reel.slug}`}>
              <a>
                <div
                  key={reel.id}
                  className="text-white rounded-lg h-64 w-10/12 border-2 border-[#E5679E] p-3 drop-shadow-lg font-['SofiaPro']"
                >
                  {reel.thumbnail ? (
                    <Image
                      src={reel.thumbnail.url}
                      alt={reel.title}
                      width={400}
                      height={170}
                      className="rounded-lg"
                    />
                  ) : (
                    <Image
                      src="/assets/danceThumbnail.jpg"
                      alt={reel.title}
                      width={400}
                      height={170}
                      className="rounded-lg"
                    />
                  )}
                  <div className="flex flex-row justify-between">
                    <h3 className="text-3xl truncate whitespace-nowrap overflow-hidden">
                      {reel.title}
                    </h3>
                    {reel.tags.length > 0 && (
                      <h1 className="text-[#036ffc]">#{reel.tags}</h1>
                    )}
                  </div>
                  <h1 className="font-['SofiaPro-Bold'] font-sans mt-4 w-56 truncate whitespace-nowrap overflow-hidden">
                    {reel.description}
                  </h1>
                </div>
              </a>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Reels;
