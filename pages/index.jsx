import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default Home;

function Home() {
  // form validation rules
  const validationSchema = Yup.object().shape({
    titulo: Yup.string().required("Titulo é obrigatório"),
    nome: Yup.string().required("Nome é obrigatório"),
    cargo: Yup.string().required("Cargo é obrigatório"),
    dob: Yup.string()
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

  function onSubmit(data) {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
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
                name="firstName"
                type="text"
                {...register("firstName")}
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.firstName?.message}
              </div>
            </div>
            <div className="form-group col">
              <label>Cargo</label>
              <select
                name="cargo"
                {...register("cargo")}
                className={`form-control ${errors.title ? "is-invalid" : ""}`}
              >
                <option value=""></option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
              </select>
              <div className="invalid-feedback">{errors.cargo?.message}</div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label>Data de nascimento</label>
              <input
                name="dob"
                type="date"
                {...register("dob")}
                className={`form-control ${errors.dob ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.dob?.message}</div>
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
