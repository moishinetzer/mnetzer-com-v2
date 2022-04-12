import { ActionFunction, json } from "@remix-run/server-runtime";
import invariant from "tiny-invariant";
import { decrementColorVote, incrementColorVote } from "~/models/colorVote.server";
import { useLocalStorage } from "~/util/useLocalStorage";

export const action: ActionFunction = async ({ request }) => {
  const [votedColor, setVotedColor] = useLocalStorage("votedColor", "");

  const formData = await request.formData();
  const color = formData.get("color");
  invariant(
    typeof color === "string" && color.length !== 0,
    "color is required"
  );
  invariant(votedColor === "" || votedColor === color, "Can't vote on non chosen color");

  if (color === votedColor) {
    setVotedColor("");
    await decrementColorVote({color});
    return json({});
  } else {
    setVotedColor(color);
    await incrementColorVote({ color });
    return json({});
  } 
};
