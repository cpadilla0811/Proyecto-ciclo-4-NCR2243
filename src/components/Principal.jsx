import React from "react"
import tractor from "../assets/img/tractor.jpg"
import { NavLink } from "react-router-dom"

const Principal = () => {
    return (
        <div>
            <section className="seccion-principal">
                <img className = "tractor" src={tractor} alt="" />
                <button> <NavLink className="nav-link" to="/servicios">Servicios</NavLink></button>
            </section>
        </div>
    )
}

export default Principal