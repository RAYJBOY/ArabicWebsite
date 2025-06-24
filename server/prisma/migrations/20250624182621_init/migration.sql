/*
  Warnings:

  - A unique constraint covering the columns `[calendarEventId]` on the table `EnrollmentTime` will be added. If there are existing duplicate values, this will fail.
  - Made the column `calendarEventId` on table `enrollmenttime` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `enrollmenttime` MODIFY `calendarEventId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `EnrollmentTime_calendarEventId_key` ON `EnrollmentTime`(`calendarEventId`);
