/*
  Warnings:

  - You are about to drop the column `voteCount` on the `ColorVote` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ColorVote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "color" TEXT NOT NULL,
    "votes" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_ColorVote" ("color", "id") SELECT "color", "id" FROM "ColorVote";
DROP TABLE "ColorVote";
ALTER TABLE "new_ColorVote" RENAME TO "ColorVote";
CREATE UNIQUE INDEX "ColorVote_color_key" ON "ColorVote"("color");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
