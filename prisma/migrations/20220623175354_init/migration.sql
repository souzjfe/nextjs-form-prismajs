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


INSERT INTO "Cargos" values ('cl4pwiv7r000009mj81fn03kr', 'Gerente');
INSERT INTO "Cargos" values ('cl4pwjjgw000109mj4lokedor', 'Provador de cerveja');
INSERT INTO "Cargos" values ('cl4pwovz7000209mj3tom7661', 'Cervejeiro');
INSERT INTO "Cargos" values ('cl4pwp5wx000409mj86fzhuy8', 'Mestre cervejeiro');
INSERT INTO "Cargos" values ('cl4pwpg5t000509mjcl4ofdwl', 'Cervejeiro estagiário');

