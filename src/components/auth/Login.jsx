import {useForm} from "react-hook-form"

const Login = () => {
    const {register, formState: { errors }, handleSubmit} = useForm()

    const customSubmit = (data) =>{
        console.log(data)
    }
    return (
        <form className="form-login" onSubmit={handleSubmit(customSubmit)} action="">
            <h1>Inicie sesión</h1>
            <div>
                <label>User name</label><br></br>
                <input type="text" {...register("UserName", { required: true })} 
                aria-invalid={errors.UserName ? "true" : "false"}  />
                {errors.UserName?.type === 'required' && <p role="alert">Nombre de usuario requerido</p>}
            </div>
            <div>
                <label>Password</label><br></br>
                <input type="password" {...register("Password", { required: true })} 
                aria-invalid={errors.Password ? "true" : "false"}  />
                {errors.Password?.type === 'required' && <p role="alert">Ingrese la contraseña</p>}
            </div>
                                   
            <input type="submit" value="Send" />
        </form>
    )
}

export default Login