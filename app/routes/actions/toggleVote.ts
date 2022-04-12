import { ActionFunction, json } from "@remix-run/server-runtime";
import invariant from "tiny-invariant";
import {
  decrementColorVote,
  incrementColorVote,
} from "~/models/colorVote.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const color = formData.get("color");
  const votedColor = formData.get("votedColor");
  invariant(
    typeof color === "string" && color.length !== 0,
    "color is required"
  );
  invariant(
    votedColor === "" || votedColor === color,
    "Can't vote on non chosen color"
  );

  console.log(color, votedColor);

  if (color === votedColor) {
    await decrementColorVote({ color });
    console.log("decrement");
    return json({});
  } else {
    await incrementColorVote({ color });
    console.log("increment");
    return json({});
  }
};
