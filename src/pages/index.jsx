import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { GetServerSideProps } from "next";
import prisma from "../lib/prisma";

export default function Home({ cargos }) {
  const validationSchema = Yup.object().shape({
    nomeUsuario: Yup.string().required("Nome é obrigatório"),
    cargoId: Yup.string().required("Cargo é obrigatório"),
    dataNascimento: Yup.string()
      .required("Data de nascimento é obrigatória")
      .matches(
        /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        "Data de nascimento deve ser no formato YYYY-MM-DD"
      ),
    email: Yup.string()
      .required("Email é obrigatório")
      .email("Email é inválido"),
    acceptTerms: Yup.bool().oneOf([true], "Os termos devem ser aceitos"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  async function onSubmit(data) {
    delete data.acceptTerms;

    const body = JSON.stringify({
      ...data,
      dataNascimento: new Date(data.dataNascimento + "T14:21:00+0200"),
    });
    try {
      await fetch(`/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
      alert("SUCCESS!! :-)\n\n" + body);
    } catch (error) {
      alert(error);
    }
    return false;
  }

  return (
    <div className="card m-3">
      <h5 className="card-header">Next.js - Form Validation Example</h5>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="form-group col">
              <label>Nome</label>
              <input
                name="nomeUsuario"
                type="text"
                {...register("nomeUsuario")}
                className={`form-control ${
                  errors.nomeUsuario ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.nomeUsuario?.message}
              </div>
            </div>
            <div className="form-group col">
              <label>Cargo</label>
              <select
                name="cargoId"
                {...register("cargoId")}
                className={`form-control ${errors.title ? "is-invalid" : ""}`}
              >
                <option value="" hidden></option>
                {cargos.map((cargo) => (
                  <option value={cargo.id}>{cargo.nomeCargo}</option>
                ))}
              </select>
              <div className="invalid-feedback">{errors.cargoId?.message}</div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label>Data de nascimento</label>
              <input
                name="dataNascimento"
                type="date"
                {...register("dataNascimento")}
                className={`form-control ${
                  errors.dataNascimento ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.dataNascimento?.message}
              </div>
            </div>
            <div className="form-group col">
              <label>Email</label>
              <input
                name="email"
                type="text"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
          </div>
          <div className="form-group form-check">
            <input
              name="acceptTerms"
              type="checkbox"
              {...register("acceptTerms")}
              id="acceptTerms"
              className={`form-check-input ${
                errors.acceptTerms ? "is-invalid" : ""
              }`}
            />
            <label htmlFor="acceptTerms" className="form-check-label">
              Aceitar termos
            </label>
            <div className="invalid-feedback">
              {errors.acceptTerms?.message}
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary mr-1">
              Registrar
            </button>
            <button
              type="reset"
              onClick={() => reset()}
              className="btn btn-secondary"
            >
              Resetar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const cargos = await prisma.cargo.findMany();
  console.log(cargos);
  return {
    props: { cargos },
  };
};
