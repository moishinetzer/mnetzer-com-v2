import { ActionFunction, json } from "@remix-run/server-runtime";
import invariant from "tiny-invariant";
import {
  decrementColorVote,
  incrementColorVote,
} from "~/models/colorVote.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const color = formData.get("color");
  const option = formData.get("option");
  invariant(
    typeof color === "string" && color.length !== 0,
    "color is required"
  );
  invariant(
    option === "increment" || option === "decrement",
    "Option must be either increment or decrement"
  );

  console.log(color, option);

  if (option === "increment") {
    await incrementColorVote({ color });
    console.log("increment");
    return json({});
  } else {
    await decrementColorVote({ color });
    console.log("decrement");
    return json({});
  }
};
