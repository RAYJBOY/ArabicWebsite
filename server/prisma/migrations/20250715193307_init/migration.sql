-- AlterTable
ALTER TABLE `googleauthtoken` MODIFY `accessToken` TEXT NOT NULL,
    MODIFY `refreshToken` TEXT NOT NULL,
    MODIFY `scope` TEXT NULL;
