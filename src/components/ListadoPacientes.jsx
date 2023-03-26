
import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes,setPaciente,eliminarPaciente}) => {
    return (

        <div className='md:w-1/2  lg:w-3/5 my-5 md:my-0'>
            {pacientes && pacientes.length > 0 ?
                (
                    <>
                        <h2 className="font-bold text-3xl text-center ">Listado Pacientes</h2>
                        <p className="text-lg mx-3 mt-0 text-center font-semibold">Administra tus  {" "}
                            <span className="text-lime-600 font-bold mb-8">Pacientes y Citas</span>
                        </p>
                        <div className="md:overflow-y-auto  md:h-full">

                            {pacientes.length ? pacientes.map(paciente =>
                            (
                                <Paciente
                                    key={paciente.id}
                                    paciente={paciente}
                                    setPaciente={setPaciente}
                                    eliminarPaciente={eliminarPaciente} />
                            )
                            ) : (<p>No hay pacientes</p>)}


                        </div>

                    </>) : (<>
                        <h2 className="font-bold text-3xl text-center ">No hay Pacientes</h2>
                        <p className="text-lg mx-3 mt-0 text-center font-semibold">Comienza Agregando Pacientes  {" "}
                            <span className="text-lime-600 font-bold mb-8">  y aparecerán en este lugar</span>
                        </p>
                    </>)}


        </div>
    )
}
export default ListadoPacientes