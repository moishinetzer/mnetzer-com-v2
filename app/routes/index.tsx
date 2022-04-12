import { useState, useEffect } from "react";
import github from "~/static/github.png";
import linkedin from "~/static/linkedin.png";
import gmail from "~/static/gmail.png";
import cv from "~/static/cv.png";
import LogoLink from "./LogoLink";
import BgButton from "./BgButton";
import ClearButton from "./ClearButton";
import ThumbsUp from "./ThumbsUp";
import { json, LoaderFunction } from "@remix-run/server-runtime";
import { getColors } from "~/models/colorVote.server";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { ThumbUpIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { useLocalStorage } from "~/util/useLocalStorage";

type LoaderData = {
  colors: Awaited<ReturnType<typeof getColors>>;
};
export const loader: LoaderFunction = async ({ request }) => {
  const colors = await getColors();
  return json<LoaderData>({ colors });
};

const colorOptions = [
  ["red", "text-red-300"],
  ["green", "text-green-300"],
  ["blue", "text-blue-300"],
  ["yellow", "text-yellow-300"],
];

export default function App() {
  const data = useLoaderData() as LoaderData;
  const { colors } = data;
  const fetcher = useFetcher();
  const [votedColor, setVotedColor] = useLocalStorage("votedColor", "");

  return (
    <div className="">
      {/* Header logos */}
      <div className="mt-12 flex justify-center space-x-10 opacity-60 sm:mt-14">
        <LogoLink
          href="https://github.com/moishinetzer/"
          src={github}
          alt="GitHub Link"
        />
        <LogoLink
          href="https://www.linkedin.com/in/marc-netzer-03719b147/"
          src={linkedin}
          alt="LinkedIn Link"
        />
        <LogoLink
          href="mailto:moishinetzer@gmail.com"
          src={gmail}
          alt="Gmail Link"
        />
        <LogoLink
          href="https://github.com/moishinetzer/mnetzer.com/raw/main/src/MoishiNetzerCV.pdf"
          src={cv}
          alt="CV Download Link"
        />
      </div>

      {/* Center words */}
      <p className="mt-16 select-none bg-gradient-to-l from-blue-400 to-red-400 bg-clip-text text-4xl text-transparent sm:mt-20 sm:text-7xl">
        Moishi Netzer
      </p>
      <p className="bg-gradient-to-l from-gray-400 to-gray-200 bg-clip-text p-7 text-2xl font-normal italic text-transparent opacity-40 sm:p-9 sm:text-5xl">
        In Development
      </p>
      <p className="bg-gradient-to-l from-gray-400 to-gray-200 bg-clip-text pb-3 font-bold text-transparent opacity-60 sm:text-xl">
        {true //TODO: Change to voted
          ? "Try out all the colors before choosing one"
          : "Thanks for choosing a colour!"}
      </p>

      {/* Buttons */}
      <div className="flex flex-col items-center gap-y-2 sm:w-screen sm:flex-row sm:gap-x-6 sm:px-20 lg:px-52">
        {colors.map((color) => (
          <div
            key={color.id}
            className="flex w-full items-center justify-center gap-x-3 pl-12 sm:flex-col sm:pl-0 "
          >
            <div className="space-x-4 text-xl font-semibold text-gray-500">
              <span>{color.color}</span>
              <span>{color.votes}</span>
            </div>
            <fetcher.Form method="post" action="/actions/toggleVote">
              <input type="hidden" name="color" value={color.color} />
              <input type="hidden" name="votedColor" value={votedColor} />
              <button type="submit" className="">
                <ThumbUpIcon
                  className={clsx(
                    "h-8 w-8 stroke-current pb-1 text-gray-500 transition-opacity duration-150 ease-out hover:opacity-60 sm:h-10 sm:w-10 sm:pb-0"
                  )}
                />
              </button>
            </fetcher.Form>
          </div>
        ))}
      </div>

      <div className="">
        <button>Clear</button>
      </div>
    </div>
  );
}
