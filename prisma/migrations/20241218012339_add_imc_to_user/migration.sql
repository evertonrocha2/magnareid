/*
  Warnings:

  - Added the required column `daily_calories` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imc` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `daily_calories` INTEGER NOT NULL,
    ADD COLUMN `imc` VARCHAR(191) NOT NULL;
