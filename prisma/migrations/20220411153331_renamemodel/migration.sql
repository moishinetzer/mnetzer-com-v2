/*
  Warnings:

  - You are about to drop the `colorVote` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "colorVote";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ColorVote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "color" TEXT NOT NULL,
    "voteCount" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "ColorVote_color_key" ON "ColorVote"("color");
