/*
  Warnings:

  - You are about to drop the column `daily_calories` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `imc` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `daily_calories`,
    DROP COLUMN `imc`;

-- CreateTable
CREATE TABLE `imcData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `imc` DOUBLE NOT NULL,

    UNIQUE INDEX `imcData_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `imcData` ADD CONSTRAINT `imcData_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
