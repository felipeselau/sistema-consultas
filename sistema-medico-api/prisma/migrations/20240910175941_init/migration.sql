-- CreateEnum
CREATE TYPE "Cargo" AS ENUM ('ATENDENTE', 'ADMIN');

-- CreateEnum
CREATE TYPE "Especialidade" AS ENUM ('CARDIOLOGISTA', 'CLINICO_GERAL', 'DERMATOLOGISTA', 'ENDOCRINOLOGISTA', 'GINECOLOGISTA', 'NEUROLOGISTA', 'OFTALMOLOGISTA', 'ORTOPEDISTA', 'OTORRINOLARINGOLOGISTA', 'PEDIATRA', 'PSIQUIATRA', 'UROLOGISTA');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('AGENDADA', 'ADIADA', 'CANCELADA', 'REALIZADA');

-- CreateTable
CREATE TABLE "Medico" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "crm" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "observacoes" TEXT NOT NULL,

    CONSTRAINT "Medico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "endereco" TEXT NOT NULL,
    "observacoes" TEXT NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consulta" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL,
    "especialidade" "Especialidade" NOT NULL,
    "observacoes" TEXT NOT NULL,
    "medicoId" INTEGER NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "funcionarioId" INTEGER NOT NULL,

    CONSTRAINT "Consulta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Funcionario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "dataAdmissao" TIMESTAMP(3) NOT NULL,
    "endereco" TEXT NOT NULL,
    "cargo" "Cargo" NOT NULL,

    CONSTRAINT "Funcionario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "Medico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "Funcionario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
