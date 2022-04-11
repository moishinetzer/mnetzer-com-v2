export default function BgButton(props: any) {
  const { text, textColor, borderColor, bgColor, setFunctions, db } = props;

  const { setFirstBg, setSecondBg, currentBg, setCurrentBg } = setFunctions;

  return (
    <button
      className={`
        text-${textColor}
        border-${borderColor} 
        m-2 w-full rounded-full border-4 border-opacity-60 p-1 text-lg 
        tracking-wide 
        transition-opacity duration-150
        ease-out
        hover:opacity-60
        focus:outline-none
        sm:h-14
        sm:text-xl 
        `}
      onClick={() => {
        // Change bg color
        if (currentBg === "first") {
          setSecondBg(bgColor);
          setCurrentBg("second");
        } else {
          setFirstBg(bgColor);
          setCurrentBg("first");
        }
      }}
    >
      {text}
    </button>
  );
}
