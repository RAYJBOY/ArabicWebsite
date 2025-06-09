/*
  Warnings:

  - You are about to drop the column `classesInAMonth` on the `enrollment` table. All the data in the column will be lost.
  - Added the required column `endTime` to the `Enrollment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Enrollment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Enrollment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `enrollment` DROP COLUMN `classesInAMonth`,
    ADD COLUMN `endTime` VARCHAR(191) NOT NULL,
    ADD COLUMN `startDate` DATETIME(3) NOT NULL,
    ADD COLUMN `startTime` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `RecurringBookingDay` (
    `id` VARCHAR(191) NOT NULL,
    `recurringBookingId` VARCHAR(191) NOT NULL,
    `dayOfWeek` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RecurringBookingDay` ADD CONSTRAINT `RecurringBookingDay_recurringBookingId_fkey` FOREIGN KEY (`recurringBookingId`) REFERENCES `Enrollment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
