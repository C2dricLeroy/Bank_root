/*
  Warnings:

  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `account_id` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `admin_id` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `admin_password` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `admin_username` on the `Admin` table. All the data in the column will be lost.
  - The primary key for the `Bank_account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `account_RIB` on the `Bank_account` table. All the data in the column will be lost.
  - You are about to drop the column `account_balance` on the `Bank_account` table. All the data in the column will be lost.
  - You are about to drop the column `account_id` on the `Bank_account` table. All the data in the column will be lost.
  - The primary key for the `Logs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `account_id` on the `Logs` table. All the data in the column will be lost.
  - You are about to drop the column `logs_id` on the `Logs` table. All the data in the column will be lost.
  - You are about to drop the column `operation_date` on the `Logs` table. All the data in the column will be lost.
  - You are about to drop the column `operation_state` on the `Logs` table. All the data in the column will be lost.
  - You are about to drop the column `operation_type` on the `Logs` table. All the data in the column will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Password` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Username` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Balance` to the `Bank_account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `admin_id` to the `Bank_account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `log_id` to the `Bank_account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `Bank_account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Bank_account` to the `Logs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_pkey",
DROP COLUMN "account_id",
DROP COLUMN "admin_id",
DROP COLUMN "admin_password",
DROP COLUMN "admin_username",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "Password" TEXT NOT NULL,
ADD COLUMN     "Username" TEXT NOT NULL,
ADD CONSTRAINT "Admin_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Bank_account" DROP CONSTRAINT "Bank_account_pkey",
DROP COLUMN "account_RIB",
DROP COLUMN "account_balance",
DROP COLUMN "account_id",
ADD COLUMN     "Balance" INTEGER NOT NULL,
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "RIB" TEXT,
ADD COLUMN     "admin_id" INTEGER NOT NULL,
ADD COLUMN     "log_id" INTEGER NOT NULL,
ADD COLUMN     "owner_id" INTEGER NOT NULL,
ADD CONSTRAINT "Bank_account_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Logs" DROP CONSTRAINT "Logs_pkey",
DROP COLUMN "account_id",
DROP COLUMN "logs_id",
DROP COLUMN "operation_date",
DROP COLUMN "operation_state",
DROP COLUMN "operation_type",
ADD COLUMN     "Bank_account" INTEGER NOT NULL,
ADD COLUMN     "Date" TEXT,
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "State" BOOLEAN,
ADD COLUMN     "Type" TEXT,
ADD CONSTRAINT "Logs_pkey" PRIMARY KEY ("Id");

-- DropTable
DROP TABLE "Customer";

-- CreateTable
CREATE TABLE "Customers" (
    "Id" SERIAL NOT NULL,
    "Firstname" TEXT NOT NULL,
    "Lastname" TEXT NOT NULL,
    "Username" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "Customers_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customers_Username_key" ON "Customers"("Username");

-- AddForeignKey
ALTER TABLE "Bank_account" ADD CONSTRAINT "Bank_account_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Customers"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bank_account" ADD CONSTRAINT "Bank_account_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
