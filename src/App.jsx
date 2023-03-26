import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'
import Formulario from './components/Formulario'

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  useEffect(() => {
    
  
      const cargarPacientesLS = () => {
        const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
        pacientesLS.length>0 && setPacientes(pacientesLS)

    }
      cargarPacientesLS()
  }, [])

  useEffect(() => {
      localStorage.setItem('pacientes', JSON.stringify(pacientes)) 
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesNoEliminados = pacientes.filter(paciente => paciente.id != id)
    setPacientes(pacientesNoEliminados)
  }
  // const valorDelPadre=(valor)=>{
  //   setCount(valor)
  // }
  return (
    <div className="Container mx-5 mt-2 md:h-screen ">
      <Header
      />
      <div className='md:flex mt-3 md:h-4/5'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
