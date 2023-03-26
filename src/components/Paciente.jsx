function Paciente({paciente,setPaciente,eliminarPaciente}){
    const {nombre,propietario,email,alta,sintomas,id}=paciente;
    function handleEliminar(){
        const respuesta=confirm("Quiere eliminar este elemento?")
        if(respuesta){
            eliminarPaciente(id)
        }
        
    }
    
    return (
        <div className="m-3 mt-2 bg-white shadow-md px-5 py-7 rounded-xl">
        <p className="font-bold  mb-3 text-gray-700 uppercase">Nombre:{" "} 
         <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold  mb-3 text-gray-700 uppercase">Propietario:{" "} 
         <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold  mb-3 text-gray-700 uppercase">Email:{" "} 
         <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold  mb-3 text-gray-700 uppercase">Fecha:{" "} 
         <span className="font-normal normal-case">{alta}</span>
        </p>
        <p className="font-bold  mb-3 text-gray-700 uppercase">Sintomas:{" "} 
         <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div>
            <button 
            className="bg-lime-600 my-2 mx-5 hover:bg-lime-700 rounded text-white uppercase"
            onClick={()=>setPaciente(paciente)}
            >
                
                Editar
            </button>
            <button 
            className="bg-red-600 my-2 mx-5 hover:bg-red-700 rounded text-white uppercase"
            onClick={handleEliminar}
            >
                Eliminar
            </button>
        </div>
    </div>
    )
}
export default Paciente
