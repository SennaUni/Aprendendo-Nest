-- CreateTable
CREATE TABLE "Jogadores" (
    "id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "ranking" TEXT NOT NULL,
    "rankingPosition" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Jogadores_pkey" PRIMARY KEY ("id")
);
