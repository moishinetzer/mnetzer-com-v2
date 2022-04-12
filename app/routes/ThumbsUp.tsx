import { useFetcher } from "@remix-run/react";
import { useLocalStorage } from "~/util/useLocalStorage";
import { ThumbUpIcon } from "@heroicons/react/outline";
import clxs from "clsx";

function toggleVotedColor({
  color,
  votedColor,
  setVotedColor,
}: {
  color: string;
  votedColor: string;
  setVotedColor: (value: string | ((val: string) => string)) => void;
}) {
  if (color === votedColor) {
    setVotedColor("");
  } else {
    setVotedColor(color);
  }
}

type Props = {
  color: string;
  colorClassName: string;
  votes: number;
};
export default function ThumbsUp({ color, colorClassName, votes }: Props) {
  // Check if user has voted using local storage
  const [votedColor, setVotedColor] = useLocalStorage("votedColor", "");
  const votedForThisColor = votedColor === color;
  const fetcher = useFetcher();

  return (
    <>
      {votes}
      <fetcher.Form method="post" action="/actions/toggleVote">
        <input type="hidden" name="color" value={color} />
        <input type="hidden" name="votedColor" value={votedColor} />
        <button
          type="submit"
          onClick={() => toggleVotedColor({ color, votedColor, setVotedColor })}
        >
          <ThumbUpIcon
            className={clxs(
              { "text-gray-300": !votedColor },
              { "text-gray-100": votedColor && !votedForThisColor },
              { "text-green-300": votedForThisColor },
              "h-8 w-8 stroke-current pb-1 transition-opacity duration-150 ease-out hover:opacity-60 sm:h-10 sm:w-10 sm:pb-0"
            )}
          />
        </button>
      </fetcher.Form>
    </>
  );
}
