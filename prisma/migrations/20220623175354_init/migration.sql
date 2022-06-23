-- CreateTable
CREATE TABLE "Cargos" (
    "id" TEXT NOT NULL,
    "nomeCargo" TEXT NOT NULL,

    CONSTRAINT "Cargos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" TEXT NOT NULL,
    "nomeUsuario" TEXT,
    "email" TEXT,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "cargoId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "Cargos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;


INSERT INTO "Cargos" values (gen_random_uuid (), 'Gerente');
INSERT INTO "Cargos" values (gen_random_uuid (), 'Provador de cerveja');
INSERT INTO "Cargos" values (gen_random_uuid (), 'Cervejeiro');
INSERT INTO "Cargos" values (gen_random_uuid (), 'Mestre cervejeiro');
INSERT INTO "Cargos" values (gen_random_uuid (), 'Cervejeiro estagiário');

