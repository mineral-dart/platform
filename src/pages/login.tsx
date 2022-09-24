import useAuthLogin from "../hooks/auth/useAuthLogin"
import {FieldValues, useForm} from "react-hook-form"

export default () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const { mutate: loginUser} = useAuthLogin()

  const onSubmit = (data: FieldValues) => {
    loginUser({ email: data.email, password: data.password})
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="form--input">
              <input type="email" id="email" {...register('email')}/>
              <input type="password" id="password" {...register('password')}/>
            </div>

            <button type="submit">
              Se Connecter
            </button>
          </div>
        </form>
      </div>
    </>
  )
}