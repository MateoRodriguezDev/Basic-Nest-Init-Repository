/*
  Warnings:

  - You are about to drop the column `uid` on the `User` table. All the data in the column will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_uid_key` ON `User`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `uid`,
    ADD COLUMN `password` VARCHAR(100) NOT NULL,
    ADD COLUMN `userName` VARCHAR(100) NOT NULL,
    MODIFY `role` ENUM('user', 'cashier', 'admin') NOT NULL DEFAULT 'user';
