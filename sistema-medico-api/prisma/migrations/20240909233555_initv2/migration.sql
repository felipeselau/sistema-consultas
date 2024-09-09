/*
  Warnings:

  - Added the required column `dataAdmissao` to the `Funcionario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Funcionario" ADD COLUMN     "dataAdmissao" TIMESTAMP(3) NOT NULL;
