import type { ColorVote } from "@prisma/client";

import { prisma } from "~/db.server";

export function getColors() {
  return prisma.colorVote.findMany();
}

export function incrementColorVote({ color }: Pick<ColorVote, "color">) {
  return prisma.colorVote.upsert({
    create: {
      color,
      votes: 1,
    },
    update: {
      votes: {
        increment: 1,
      },
    },
    where: { color },
  });
}

export function decrementColorVote({ color }: Pick<ColorVote, "color">) {
  return prisma.colorVote.update({
    where: { color },
    data: {
      votes: {
        decrement: 1,
      },
    },
  });
}
