import { useState, useEffect } from "react";
// import { Transition } from "@headlessui/react";
import github from "~/static/github.png";
import linkedin from "~/static/linkedin.png";
import gmail from "~/static/gmail.png";
import cv from "~/static/cv.png";
import LogoLink from "./LogoLink";
import BgButton from "./BgButton";
import ClearButton from "./ClearButton";
import ThumbsUp from "./ThumbsUp";

export default function App() {
  // @ts#5328-check

  // State
  var [firstBg, setFirstBg] = useState("to-gray-700");
  var [secondBg, setSecondBg] = useState("to-gray-700");
  var [currentBg, setCurrentBg] = useState("first");
  var [canVote, setCanVote] = useState(true);

  var bgFunctions = { setFirstBg, setSecondBg, currentBg, setCurrentBg };

  // Firebase Setups
  // useEffect(() => {
  //   const colors = ["red", "yellow", "blue", "green"];
  //   if (auth.currentUser || colors.includes(localStorage.mnVoteColor)) {
  //     setCanVote(false);
  //   } else {
  //     auth.signInAnonymously();
  //   }
  //   firebase.analytics();
  // }, [auth]);

  return (
    <>
      {/* Backgrounds to be transitioned between */}
      <div
        className={`absolute inset-0 h-screen w-screen bg-gradient-to-br from-gray-900 ${secondBg}`}
      ></div>

      {/* <Transition
        show={currentBg === "first" ? true : false}
        enter="transition-opacity duration-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-700"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      > */}
      <div
        className={`absolute inset-0 h-screen w-screen bg-gradient-to-br from-gray-900 ${firstBg}`}
      ></div>
      {/* </Transition> */}

      {/* Start of content */}
      <div
        className={`App font-poppins absolute flex h-screen w-screen select-none items-start justify-center font-bold tracking-wide`}
      >
        <div>
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
          <p className="mt-16 select-text bg-gradient-to-l from-blue-400 to-red-400 bg-clip-text text-4xl text-transparent sm:mt-20 sm:text-7xl">
            Moishi Netzer
          </p>
          <p className="bg-gradient-to-l from-gray-400 to-gray-200 bg-clip-text p-7 text-2xl font-normal italic text-transparent opacity-40 sm:p-9 sm:text-5xl">
            In Development
          </p>
          <p className="bg-gradient-to-l from-gray-400 to-gray-200 bg-clip-text pb-3 font-bold text-transparent opacity-60 sm:text-xl">
            {canVote
              ? "Try out all the colors before choosing one"
              : "Thanks for choosing a colour!"}
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-y-2 sm:w-screen sm:flex-row sm:gap-x-6 sm:px-20 lg:px-52">
            <div className="flex w-full items-center justify-center gap-x-3 pl-12 sm:flex-col sm:pl-0 ">
              <BgButton
                text="RED"
                textColor="red-200"
                borderColor="red-300"
                bgColor="to-red-800"
                setFunctions={bgFunctions}
              />
              <ThumbsUp
                color="red"
                canVoteFunctions={{ canVote, setCanVote }}
              />
            </div>
            <div className="flex w-full items-center justify-center gap-x-3 pl-12 sm:flex-col sm:pl-0 ">
              <BgButton
                text="GREEN"
                textColor="green-200"
                borderColor="green-300"
                bgColor="to-green-700"
                setFunctions={bgFunctions}
              />
              <ThumbsUp
                color="green"
                canVoteFunctions={{ canVote, setCanVote }}
              />
            </div>
            <div className="flex w-full items-center justify-center gap-x-3 pl-12 sm:flex-col sm:pl-0 ">
              <BgButton
                text="BLUE"
                textColor="blue-200"
                borderColor="blue-300"
                bgColor="to-blue-900"
                setFunctions={bgFunctions}
              />
              <ThumbsUp
                color="blue"
                canVoteFunctions={{ canVote, setCanVote }}
              />
            </div>
            <div className="flex w-full items-center justify-center gap-x-3 pl-12 sm:flex-col sm:pl-0 ">
              <BgButton
                text="YELLOW"
                textColor="yellow-200"
                borderColor="yellow-300"
                bgColor="to-yellow-600"
                setFunctions={bgFunctions}
              />
              <ThumbsUp
                color="yellow"
                canVoteFunctions={{ canVote, setCanVote }}
              />
            </div>
          </div>

          <div className="">
            <ClearButton setFunctions={bgFunctions} />
          </div>
        </div>
      </div>
    </>
  );
}
