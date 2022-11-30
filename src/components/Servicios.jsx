import {useForm} from "react-hook-form"


const Servicios = ()=>{

    const {register, formState: { errors }, handleSubmit} = useForm()

    const customSubmit = (data) =>{
        console.log(data)
    }
    return (
        <form className="form-login" onSubmit={handleSubmit(customSubmit)} action="">
            <div className="Servicios">    
                <h1>Ingresa el servicio</h1>
            
                <div className="Info-fecha">
                    <label>Fecha</label>
                    <input type="date" {...register("Fecha", { required: true })} 
                    aria-invalid={errors.Fecha ? "true" : "false"}  />
                    {errors.Fecha?.type === 'required' && <p role="alert">La fecha es requerida</p>}
                    
                    <label>Hora</label>
                    <input type="time" {...register("Hora", { required: true })} 
                    aria-invalid={errors.Hora ? "true" : "false"}  />
                    {errors.Hora?.type === 'required' && <p role="alert">Ingrese la hora de recogida</p>}
                </div>
                <div className="Dimensiones-envio">
                    <label>Largo</label>
                    <input type="number" {...register("Largo", { required: true })} 
                    aria-invalid={errors.Largo ? "true" : "false"}  />
                    {errors.Largo?.type === 'required' && <p role="alert">Ingrese el Largo. Solo ingrese numero</p>}
                
                    <label>Ancho</label>
                    <input type="number" {...register("Ancho", { required: true })} 
                    aria-invalid={errors.Ancho ? "true" : "false"}  />
                    {errors.Ancho?.type === 'required' && <p role="alert">Ingrese el ancho. Solo ingrese numero</p>}
                

                    <label>Alto</label>
                    <input type="number" {...register("Alto", { required: true })} 
                    aria-invalid={errors.Alto ? "true" : "false"}  />
                    {errors.Alto?.type === 'required' && <p role="alert">Ingrese el Alto. Solo ingrese numero</p>}
                
                    <label>Peso</label>
                    <input type="number" {...register("Peso", { required: true })} 
                    aria-invalid={errors.Peso ? "true" : "false"}  />
                    {errors.Peso?.type === 'required' && <p role="alert">Ingrese el Peso. Solo ingrese numero</p>}
                </div>
                <div className="Delicado">
                    <label name="delicado">Mercancia delicada</label>
                    <input type="checkbox" {...register("Delicado", { required: true })} 
                    aria-invalid={errors.Delicado ? "true" : "false"}  />
                    <input type="checkbox" {...register("Delicado", { required: true })} 
                    aria-invalid={errors.Delicado ? "true" : "false"}  />
                    {errors.Si?.type === 'required' && <p role="alert">Requerido indicar si es delicado</p>}
                
                </div>
            </div>     
                <div className="info-general-envios">
                    <label>Dirección de recogida</label>
                    <input type="text" {...register("DireccionRecogida", { required: true })} 
                    aria-invalid={errors.DireccionRecogida ? "true" : "false"}  />
                    {errors.DireccionRecogida?.type === 'required' && <p role="alert">Direccion requerida</p>}
                    
                    <label>Ciudad de recogida</label>
                    <input type="text" {...register("CiudadRecogida", { required: true })} 
                    aria-invalid={errors.CiudadRecogida ? "true" : "false"}  />
                    {errors.CiudadRecogida?.type === 'required' && <p role="alert">Ciudad requerida</p>}

                    <label>Nombre</label>
                    <input type="text" {...register("Nombre", { required: true })} 
                    aria-invalid={errors.Nombre ? "true" : "false"}  />
                    {errors.Nombre?.type === 'required' && <p role="alert">Nombre requerido</p>}

                    <label>Nit / C.C. Destinatario</label>
                    <input type="number" {...register("IdDestintatario", { required: true })} 
                    aria-invalid={errors.IdDestintatario ? "true" : "false"}  />
                    {errors.IdDestintatario?.type === 'required' && <p role="alert">Identificación requerida</p>}

                    <label>Dirección de Entrega</label>
                    <input type="text" {...register("DireccionEntrega", { required: true })} 
                    aria-invalid={errors.DireccionEntrega ? "true" : "false"}  />
                    {errors.DireccionEntrega?.type === 'required' && <p role="alert">Direccion requerida</p>}

                    <label>Ciudad de Entrega</label>
                    <input type="text" {...register("CiudadEntrega", { required: true })} 
                    aria-invalid={errors.CiudadEntrega ? "true" : "false"}  />
                    {errors.CiudadEntrega?.type === 'required' && <p role="alert">Ciudad requerida</p>}
                </div>
                   
            <input type="submit" value="Send" />
        </form>
    )
}

    
export default Servicios