/*
  Warnings:

  - You are about to alter the column `imc` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `daily_calories` INTEGER NULL,
    MODIFY `imc` DOUBLE NULL;
