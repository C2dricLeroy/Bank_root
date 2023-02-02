-- CreateTable
CREATE TABLE "Customer" (
    "customer_id" SERIAL NOT NULL,
    "customer_firstname" TEXT NOT NULL,
    "customer_lastname" TEXT NOT NULL,
    "customer_username" TEXT NOT NULL,
    "customer_password" TEXT NOT NULL,
    "account_id" INTEGER NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "admin_id" SERIAL NOT NULL,
    "admin_username" TEXT NOT NULL,
    "admin_password" TEXT NOT NULL,
    "account_id" INTEGER NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("admin_id")
);

-- CreateTable
CREATE TABLE "Bank_account" (
    "account_id" SERIAL NOT NULL,
    "account_balance" INTEGER NOT NULL,
    "account_RIB" TEXT,

    CONSTRAINT "Bank_account_pkey" PRIMARY KEY ("account_id")
);

-- CreateTable
CREATE TABLE "Logs" (
    "logs_id" SERIAL NOT NULL,
    "operation_date" TEXT,
    "operation_type" TEXT,
    "operation_state" BOOLEAN,
    "account_id" INTEGER,

    CONSTRAINT "Logs_pkey" PRIMARY KEY ("logs_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_customer_username_key" ON "Customer"("customer_username");
