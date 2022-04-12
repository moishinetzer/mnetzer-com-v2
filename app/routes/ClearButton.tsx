export default function ClearButton(props: any) {
  const { setFunctions } = props;
  const { setFirstBg, setSecondBg, currentBg, setCurrentBg } = setFunctions;
  return (
    <button
      className="
              m-2 m-4 h-10 w-1/2 rounded-full border-2 border-gray-100
              border-opacity-20 p-1 tracking-wide text-gray-200 
              transition-opacity duration-150 ease-out 
              hover:opacity-60 focus:outline-none sm:h-12 sm:w-1/4 lg:w-1/6"
      onClick={() => {
        if (currentBg === "first") {
          setSecondBg("to-gray-700");
          setCurrentBg("second");
        } else {
          setFirstBg("to-gray-700");
          setCurrentBg("first");
        }
      }}
    >
      CLEAR
    </button>
  );
}
