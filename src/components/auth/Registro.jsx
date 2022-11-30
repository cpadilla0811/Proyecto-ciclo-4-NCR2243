import {useForm} from "react-hook-form"

const Registro = () => {
    const {register, formState: { errors }, handleSubmit} = useForm()

    const customSubmit = (data) =>{
        console.log(data)
    }
    return (
        <form className="form-login" onSubmit={handleSubmit(customSubmit)} action="">
            <h1>Registrarse</h1>
            <div>
                <label>Nombre completo</label><br></br>
                <input type="text" {...register("Nombre", { required: true })} 
                aria-invalid={errors.Nombre ? "true" : "false"}  />
                {errors.Nombre?.type === 'required' && <p role="alert">First name is required</p>}
            </div>
            <div>
                <label>Email</label><br></br>
                <input type="text" {...register("Email", { required: true })} 
                aria-invalid={errors.Email ? "true" : "false"}  />
                {errors.Email?.type === 'required' && <p role="alert">First name is required</p>}
            </div>
            <div>
                <label>User Name</label><br></br>
                <input type="text" {...register("UserName", { required: true })} 
                aria-invalid={errors.UserName ? "true" : "false"}  />
                {errors.UserName?.type === 'required' && <p role="alert">First name is required</p>}
            </div>
            <div>
                <label>Password</label><br></br>
                <input type="password" {...register("Password", { required: true })} 
                aria-invalid={errors.Password ? "true" : "false"}  />
                {errors.Password?.type === 'required' && <p role="alert">First name is required</p>}
            </div>
                                   
            <input type="submit" value="Send" />
        </form>
    )
}

export default Registro