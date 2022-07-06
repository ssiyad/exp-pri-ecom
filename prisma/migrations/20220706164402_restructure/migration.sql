/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CatalogToProduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_OrderToProduct` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `Catalog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Catalog` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_CatalogToProduct_B_index";

-- DropIndex
DROP INDEX "_CatalogToProduct_AB_unique";

-- DropIndex
DROP INDEX "_OrderToProduct_B_index";

-- DropIndex
DROP INDEX "_OrderToProduct_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Product";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_CatalogToProduct";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_OrderToProduct";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_CatalogToOrder" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CatalogToOrder_A_fkey" FOREIGN KEY ("A") REFERENCES "Catalog" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CatalogToOrder_B_fkey" FOREIGN KEY ("B") REFERENCES "Order" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Catalog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Catalog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Catalog" ("id", "user_id") SELECT "id", "user_id" FROM "Catalog";
DROP TABLE "Catalog";
ALTER TABLE "new_Catalog" RENAME TO "Catalog";
CREATE UNIQUE INDEX "Catalog_user_id_key" ON "Catalog"("user_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_CatalogToOrder_AB_unique" ON "_CatalogToOrder"("A", "B");

-- CreateIndex
CREATE INDEX "_CatalogToOrder_B_index" ON "_CatalogToOrder"("B");
