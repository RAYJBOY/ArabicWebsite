/*
  Warnings:

  - You are about to drop the column `enrollmentStartDate` on the `enrollment` table. All the data in the column will be lost.
  - Added the required column `classesInAMonth` to the `Enrollment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `enrollment` DROP COLUMN `enrollmentStartDate`,
    ADD COLUMN `classesInAMonth` INTEGER NOT NULL;
