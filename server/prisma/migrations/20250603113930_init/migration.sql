/*
  Warnings:

  - A unique constraint covering the columns `[stripeSubscriptionId]` on the table `Enrollment` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `enrollment` ADD COLUMN `stripeSubscriptionId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Enrollment_stripeSubscriptionId_key` ON `Enrollment`(`stripeSubscriptionId`);
