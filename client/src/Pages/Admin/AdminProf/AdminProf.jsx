import React, { useEffect } from 'react'
import { getProfessionals } from '../../../Redux/Actions'
import { useState } from 'react'
import { getPato } from '../../../Redux/Actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import './AdminProf.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Loading from '../../Loading/Loading'

const AdminProf =() => {

    const allProfessionals = useSelector((state) => state.allProfessionals);
    const Pato = useSelector((state) => state.pato);
    const dispatch = useDispatch()
    const id = useParams()
    const location = useLocation()
const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(getProfessionals()).then(() => setLoading(false))
        dispatch(getPato(id))
    }, [dispatch])



const handleEdit = (prof) => {
    console.log(prof.id)
}

const handleDelete = (id) => {
    console.log(id)
}
  const isProfesionales = location.pathname === "/Administrador/Profesionales";
    if (loading) return <Loading />
  return (
    <>
    <hr />
    <div className="btn">
    {isProfesionales ? (
        <Link to={`/Administrador/Profesionales/${Pato[0].id}`}>
          <button className="button">Profesionales</button>
        </Link>
      ) : (
        <Link to={`/Administrador/${Pato[0].id}`}>
          <button className="button">Inicio</button>
        </Link>
      )}
          <button className="button">Blog</button>
          <button className="button">Contacto</button>
        </div>
    <div>
        <h1>Profesionales del centro</h1>
    </div>
    <div className="professionals-container">
  {/* {allProfessionals.map((prof) => {
    return (
        <div className="professional-container">
            <div className="professional-icons">
          <button className="professional-button" onClick={() => handleEdit(prof)}>
            <i className="fas fa-edit"></i>✏️ Editar
          </button>
          <button className="professional-button" onClick={() => handleDelete(prof.id)}>
            <i className="fas fa-trash-alt"></i>Eliminar 🗑️ 
          </button>
        </div>
       
        <img className="professional-image" src={prof.image} alt="imagen de profesional"/>
        <h3 className="professional-name">{prof.name}</h3>
        <h4 className="professional-profession">{prof.profession}</h4>
        <p className="professional-description">{prof.description}</p>
        <p className="professional-extra">{prof.extra}</p>
        <p className="professional-otroextra">{prof.otroextra}</p>
        
      </div> 
    )
  })} */}
  <table class="professional-table">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Profesión</th>
      <th>Descripción</th>
      <th>Imagen</th>
      <th>Editar</th>
    
    </tr>
  </thead>
  <tbody>
    {allProfessionals.map((prof) => {
      return (
        <tr key={prof.name}>
          <td>{prof.name}</td>
          <td><img class="professional-image" src={prof.image} alt="imagen de profesional"/></td>
          <td>{prof.profession}</td>
          <td>{prof.description}</td>
          <td>
            <button class="professional-button" onClick={() => handleEdit(prof)}>
              <i class="fas fa-edit"></i>✏️ 
            </button>
            <button class="professional-button" onClick={() => handleDelete(prof.id)}>
              <i class="fas fa-trash-alt"></i> 🗑️ 
            </button>
          </td>
        </tr>
      )
    })}
  </tbody>
</table>

</div>    
    </>
  )
}

export default AdminProf