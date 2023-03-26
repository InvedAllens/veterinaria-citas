import { Fragment, useState , useEffect} from "react";
import Error from "./Error";
Error

function Formulario({pacientes,setPacientes,paciente,setPaciente}) {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [alta, setAlta] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [error, setError] = useState(false)
    useEffect(()=>{
        if(Object.keys(paciente).length>0){//si no esta vacio (verificando el tamaño del vector que contiene las llaves de objeto paciente)
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }

    },[paciente])
    const handleSubmit = e => {
        e.preventDefault()
        const formulario = [nombre, propietario, email, alta, sintomas]
        if (formulario.includes('')) {
            setError(true)
            return;
        }
        setError(false)
        const nuevoObjeto={
            nombre,
            propietario,
            email,
            alta,
            sintomas
        }
        if(paciente.id){
            //actualizando un paciente
            nuevoObjeto.id=paciente.id
            const pacientesActualizados= pacientes.map(pacienteState=> pacienteState.id===paciente.id ? nuevoObjeto : pacienteState)
            setPacientes(pacientesActualizados)
            
        }else{
            //creando un nuevo paciente
            nuevoObjeto.id=generarId()
            setPacientes([...pacientes,nuevoObjeto])
        }
        setPaciente({})
        setNombre('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
    }
    function generarId(){
        const fecha=Date.now().toString(36);
        const cadena=Math.random().toString(36).substr(2);
        return fecha+cadena;
    }
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-bold text-3xl text-center ">Seguimiento Pacientes</h2>
            <p className="text-lg mx-3 mt-0 text-center font-semibold">Añade Pacientes y {" "}
                <span className="text-lime-600 font-bold mb-8">Administralos</span>
            </p>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-2 px-5 mt-3">
                <div className="my-2">
                    {error && <Error><p>Todos los campos son obligatorios</p></Error>
                        
                    }
                    <label htmlFor="nombre" className="uppercase block font-bold text-gray-700">
                        Nombre de la Mascota
                    </label>
                    <input
                        className="mt-1 placeholder-gray-500 border-2 w-full p-1"
                        type="text"
                        placeholder="Ingrese el nombre de la mascota"
                        name="nombre"
                        id="nombre"
                        //? nombre : paciente.nombre
                        value={nombre }
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="propietario" className="uppercase block font-bold text-gray-700">
                        Nombre del Propietario
                    </label>
                    <input
                        className="mt-2 placeholder-gray-500 border-2 w-full p-1"
                        type="text"
                        placeholder="Ingrese el nombre del propietario"
                        id="propietario"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="email" className=" uppercase block font-bold text-gray-700">
                        Email
                    </label>
                    <input
                        className="mt-2 placeholder-gray-500 border-2 w-full p-1"
                        type="email"
                        placeholder="Ingrese un email"
                        id="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="alta" className=" uppercase block font-bold text-gray-700">
                        Fecha
                    </label>
                    <input
                        className="mt-2 placeholder-gray-500 border-2 w-full p-1"
                        type="date"
                        id="alta"
                        value={alta}
                        onChange={(e) => { setAlta(e.target.value) }}
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="sintomas" className=" uppercase block font-bold text-gray-700">
                        Sintomas u Observaciones
                    </label>
                    <textarea
                        className="mt-2 placeholder-gray-500 border-2 w-full resize-none p-1"
                        type="text"
                        id="sintomas"
                        placeholder="Describe los sintomas"
                        value={sintomas}
                        onChange={(e) => { setSintomas(e.target.value) }}
                    />
                </div>
                <input
                    type="submit"
                    className="bg-lime-600 w-full text-white font-bold p-3 hover:bg-lime-700 cursor-pointer transition-all rounded uppercase"
                    value={paciente.id ? "Actualizar Paciente" :"Agregar Paciente"} />
            </form>
        </div>


    );
}
export default Formulario;