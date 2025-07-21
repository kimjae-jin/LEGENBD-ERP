/*
  Warnings:

  - You are about to drop the column `account_holder` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `account_number` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `bank_name` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `business_number` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `ceo_name` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `client_type` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `corporate_number` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `contract_category` on the `contracts` table. All the data in the column will be lost.
  - You are about to drop the column `department` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `hire_date` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `acquisition_date` on the `equipment` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `equipment` table. All the data in the column will be lost.
  - You are about to drop the column `serial_number` on the `equipment` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `equipment` table. All the data in the column will be lost.
  - You are about to drop the column `comments` on the `individual_performances` table. All the data in the column will be lost.
  - You are about to drop the column `evaluation_period` on the `individual_performances` table. All the data in the column will be lost.
  - You are about to drop the column `evaluator_id` on the `individual_performances` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `individual_performances` table. All the data in the column will be lost.
  - You are about to drop the column `due_date` on the `invoices` table. All the data in the column will be lost.
  - You are about to drop the column `invoice_file_url` on the `invoices` table. All the data in the column will be lost.
  - You are about to drop the column `invoice_number` on the `invoices` table. All the data in the column will be lost.
  - You are about to drop the column `issue_date` on the `invoices` table. All the data in the column will be lost.
  - You are about to drop the column `remarks` on the `invoices` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `invoices` table. All the data in the column will be lost.
  - You are about to drop the column `supply_amount` on the `invoices` table. All the data in the column will be lost.
  - You are about to drop the column `total_amount` on the `invoices` table. All the data in the column will be lost.
  - You are about to drop the column `vat_amount` on the `invoices` table. All the data in the column will be lost.
  - You are about to drop the column `expiry_date` on the `licenses` table. All the data in the column will be lost.
  - You are about to drop the column `file_url` on the `licenses` table. All the data in the column will be lost.
  - You are about to drop the column `issue_date` on the `licenses` table. All the data in the column will be lost.
  - You are about to drop the column `issuer` on the `licenses` table. All the data in the column will be lost.
  - You are about to drop the column `end_date` on the `project_participants` table. All the data in the column will be lost.
  - You are about to drop the column `remarks` on the `project_participants` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `project_participants` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `project_participants` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `project_participants` table. All the data in the column will be lost.
  - You are about to drop the column `pm_id` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `expiry_date` on the `qualifications` table. All the data in the column will be lost.
  - You are about to drop the column `issue_date` on the `qualifications` table. All the data in the column will be lost.
  - You are about to drop the column `issuer` on the `qualifications` table. All the data in the column will be lost.
  - You are about to drop the column `client_id` on the `quotations` table. All the data in the column will be lost.
  - You are about to drop the column `issue_date` on the `quotations` table. All the data in the column will be lost.
  - You are about to drop the column `quotation_file_url` on the `quotations` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `quotations` table. All the data in the column will be lost.
  - You are about to drop the column `total_amount` on the `quotations` table. All the data in the column will be lost.
  - You are about to drop the column `valid_until` on the `quotations` table. All the data in the column will be lost.
  - You are about to drop the column `completion_status` on the `trainings` table. All the data in the column will be lost.
  - You are about to drop the column `course_name` on the `trainings` table. All the data in the column will be lost.
  - You are about to drop the column `end_date` on the `trainings` table. All the data in the column will be lost.
  - You are about to drop the column `institution` on the `trainings` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `trainings` table. All the data in the column will be lost.
  - You are about to drop the `joint_venture_partners` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `project_contractors` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[business_registration_number]` on the table `clients` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[corporate_registration_number]` on the table `clients` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[quotation_number]` on the table `quotations` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `business_registration_number` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `change_reason` to the `contract_revisions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `revised_equity_ratio` to the `contract_revisions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `revised_total_amount` to the `contract_revisions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `revised_total_equity_amount` to the `contract_revisions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `revision_number` to the `contract_revisions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_name` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Made the column `resident_registration_number` on table `employees` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `performance_details` to the `individual_performances` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invoice_amount` to the `invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invoice_content` to the `invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invoice_date` to the `invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `acquisition_date` to the `licenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `issuing_authority` to the `licenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_id` to the `project_participants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `job_field` to the `project_participants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `project_participants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responsibilities` to the `project_participants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responsibility_level` to the `project_participants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialty_field` to the `project_participants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pm_name` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `acquisition_date` to the `qualifications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quotation_amount` to the `quotations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quotation_content` to the `quotations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recipient_name` to the `quotations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `training_date` to the `trainings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `training_institution` to the `trainings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `training_name` to the `trainings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "individual_performances" DROP CONSTRAINT "individual_performances_project_id_fkey";

-- DropForeignKey
ALTER TABLE "joint_venture_partners" DROP CONSTRAINT "joint_venture_partners_client_id_fkey";

-- DropForeignKey
ALTER TABLE "joint_venture_partners" DROP CONSTRAINT "joint_venture_partners_contract_id_fkey";

-- DropForeignKey
ALTER TABLE "project_contractors" DROP CONSTRAINT "project_contractors_client_id_fkey";

-- DropForeignKey
ALTER TABLE "project_contractors" DROP CONSTRAINT "project_contractors_project_id_fkey";

-- DropForeignKey
ALTER TABLE "quotations" DROP CONSTRAINT "quotations_client_id_fkey";

-- DropIndex
DROP INDEX "clients_business_number_key";

-- DropIndex
DROP INDEX "clients_corporate_number_key";

-- DropIndex
DROP INDEX "employees_email_key";

-- DropIndex
DROP INDEX "equipment_serial_number_key";

-- AlterTable
ALTER TABLE "clients" DROP COLUMN "account_holder",
DROP COLUMN "account_number",
DROP COLUMN "bank_name",
DROP COLUMN "business_number",
DROP COLUMN "ceo_name",
DROP COLUMN "client_type",
DROP COLUMN "corporate_number",
DROP COLUMN "email",
DROP COLUMN "phone",
ADD COLUMN     "accounting_contact_business_card_url" TEXT,
ADD COLUMN     "accounting_contact_email" TEXT,
ADD COLUMN     "accounting_contact_name" TEXT,
ADD COLUMN     "accounting_contact_phone" TEXT,
ADD COLUMN     "business_contact_business_card_url" TEXT,
ADD COLUMN     "business_contact_email" TEXT,
ADD COLUMN     "business_contact_name" TEXT,
ADD COLUMN     "business_contact_phone" TEXT,
ADD COLUMN     "business_registration_file_url" TEXT,
ADD COLUMN     "business_registration_number" TEXT NOT NULL,
ADD COLUMN     "contact_number" TEXT,
ADD COLUMN     "corporate_registration_number" TEXT;

-- AlterTable
ALTER TABLE "contract_revisions" ADD COLUMN     "change_reason" TEXT NOT NULL,
ADD COLUMN     "revised_equity_ratio" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "revised_total_amount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "revised_total_equity_amount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "revision_contract_file_url" TEXT,
ADD COLUMN     "revision_number" INTEGER NOT NULL,
ADD COLUMN     "revision_proof_file_url" TEXT;

-- AlterTable
ALTER TABLE "contracts" DROP COLUMN "contract_category";

-- AlterTable
ALTER TABLE "employees" DROP COLUMN "department",
DROP COLUMN "email",
DROP COLUMN "hire_date",
DROP COLUMN "name",
DROP COLUMN "phone",
DROP COLUMN "position",
ADD COLUMN     "employee_name" TEXT NOT NULL,
ADD COLUMN     "final_education" TEXT,
ADD COLUMN     "final_education_file_url" TEXT,
ADD COLUMN     "kocea_career_db_id" TEXT,
ADD COLUMN     "remarks" TEXT,
ALTER COLUMN "resident_registration_number" SET NOT NULL;

-- AlterTable
ALTER TABLE "equipment" DROP COLUMN "acquisition_date",
DROP COLUMN "model",
DROP COLUMN "serial_number",
DROP COLUMN "status",
ADD COLUMN     "calibration_certificate_url" TEXT,
ADD COLUMN     "calibration_date" TIMESTAMP(3),
ADD COLUMN     "model_number" TEXT,
ADD COLUMN     "next_calibration_date" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "individual_performances" DROP COLUMN "comments",
DROP COLUMN "evaluation_period",
DROP COLUMN "evaluator_id",
DROP COLUMN "score",
ADD COLUMN     "performance_details" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "invoices" DROP COLUMN "due_date",
DROP COLUMN "invoice_file_url",
DROP COLUMN "invoice_number",
DROP COLUMN "issue_date",
DROP COLUMN "remarks",
DROP COLUMN "status",
DROP COLUMN "supply_amount",
DROP COLUMN "total_amount",
DROP COLUMN "vat_amount",
ADD COLUMN     "invoice_amount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "invoice_content" TEXT NOT NULL,
ADD COLUMN     "invoice_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "payment_amount" DECIMAL(65,30),
ADD COLUMN     "payment_date" TIMESTAMP(3),
ADD COLUMN     "special_notes" TEXT,
ADD COLUMN     "tax_invoice_amount" DECIMAL(65,30),
ADD COLUMN     "tax_invoice_date" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "licenses" DROP COLUMN "expiry_date",
DROP COLUMN "file_url",
DROP COLUMN "issue_date",
DROP COLUMN "issuer",
ADD COLUMN     "acquisition_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "applied_personnel" TEXT,
ADD COLUMN     "issuing_authority" TEXT NOT NULL,
ADD COLUMN     "legal_standard" TEXT,
ADD COLUMN     "license_proof_file_url" TEXT,
ADD COLUMN     "renewal_cycle" TEXT,
ADD COLUMN     "renewal_date" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "project_participants" DROP COLUMN "end_date",
DROP COLUMN "remarks",
DROP COLUMN "role",
DROP COLUMN "start_date",
DROP COLUMN "user_id",
ADD COLUMN     "employee_id" TEXT NOT NULL,
ADD COLUMN     "job_field" TEXT NOT NULL,
ADD COLUMN     "position" TEXT NOT NULL,
ADD COLUMN     "responsibilities" TEXT NOT NULL,
ADD COLUMN     "responsibility_level" TEXT NOT NULL,
ADD COLUMN     "special_notes" TEXT,
ADD COLUMN     "specialty_field" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "pm_id",
ADD COLUMN     "pm_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "qualifications" DROP COLUMN "expiry_date",
DROP COLUMN "issue_date",
DROP COLUMN "issuer",
ADD COLUMN     "acquisition_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "expiration_date" TIMESTAMP(3),
ADD COLUMN     "qualification_file_url" TEXT;

-- AlterTable
ALTER TABLE "quotations" DROP COLUMN "client_id",
DROP COLUMN "issue_date",
DROP COLUMN "quotation_file_url",
DROP COLUMN "status",
DROP COLUMN "total_amount",
DROP COLUMN "valid_until",
ADD COLUMN     "provisional_contract_name" TEXT,
ADD COLUMN     "quotation_amount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "quotation_content" TEXT NOT NULL,
ADD COLUMN     "recipient_contact" TEXT,
ADD COLUMN     "recipient_email" TEXT,
ADD COLUMN     "recipient_name" TEXT NOT NULL,
ADD COLUMN     "related_data_file_url" TEXT;

-- AlterTable
ALTER TABLE "trainings" DROP COLUMN "completion_status",
DROP COLUMN "course_name",
DROP COLUMN "end_date",
DROP COLUMN "institution",
DROP COLUMN "start_date",
ADD COLUMN     "required_cycle" TEXT,
ADD COLUMN     "training_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "training_institution" TEXT NOT NULL,
ADD COLUMN     "training_name" TEXT NOT NULL;

-- DropTable
DROP TABLE "joint_venture_partners";

-- DropTable
DROP TABLE "project_contractors";

-- CreateIndex
CREATE UNIQUE INDEX "clients_business_registration_number_key" ON "clients"("business_registration_number");

-- CreateIndex
CREATE UNIQUE INDEX "clients_corporate_registration_number_key" ON "clients"("corporate_registration_number");

-- CreateIndex
CREATE UNIQUE INDEX "quotations_quotation_number_key" ON "quotations"("quotation_number");

-- AddForeignKey
ALTER TABLE "project_participants" ADD CONSTRAINT "project_participants_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "individual_performances" ADD CONSTRAINT "individual_performances_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("project_id") ON DELETE CASCADE ON UPDATE CASCADE;
