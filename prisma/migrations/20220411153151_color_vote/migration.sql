-- CreateTable
CREATE TABLE "colorVote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "color" TEXT NOT NULL,
    "voteCount" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "colorVote_color_key" ON "colorVote"("color");
