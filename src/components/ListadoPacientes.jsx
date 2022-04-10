import { Paciente } from "./Paciente";

const ListadoPacientes = () => {
  return (
    <div className="mx-3 my-10 md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      <h2 className="text-center font-black text-3xl"> ListadoPacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Adminstra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
    </div>
  );
};

export default ListadoPacientes;
