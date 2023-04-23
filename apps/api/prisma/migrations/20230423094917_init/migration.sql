-- CreateEnum
CREATE TYPE "PharmaceuticalForm" AS ENUM ('Tablet', 'Capsule', 'Solution', 'Injection', 'Ointment', 'Syrup', 'Patch', 'Suppository', 'Powder');

-- CreateTable
CREATE TABLE "Medicine" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "pharmaceuticalForm" "PharmaceuticalForm" NOT NULL,
    "description" TEXT NOT NULL,
    "prescribedOnly" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Medicine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pharmacy" (
    "id" SERIAL NOT NULL,
    "organizationId" INTEGER NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Pharmacy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assortment" (
    "id" SERIAL NOT NULL,
    "medicineId" INTEGER NOT NULL,
    "pharmacyId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Assortment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Medicine_title_key" ON "Medicine"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_title_key" ON "Organization"("title");

-- AddForeignKey
ALTER TABLE "Pharmacy" ADD CONSTRAINT "Pharmacy_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assortment" ADD CONSTRAINT "Assortment_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "Medicine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assortment" ADD CONSTRAINT "Assortment_pharmacyId_fkey" FOREIGN KEY ("pharmacyId") REFERENCES "Pharmacy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
