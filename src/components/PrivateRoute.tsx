import {Navigate, Outlet} from "react-router-dom"
import useAuthCheck from "../hooks/auth/useAuthCheck"

type Props = {
  redirectPath?: string
}

export const PrivateRoute = ({ redirectPath = "/login"}: Props) => {
  const { data, status} = useAuthCheck()

  if (status === 'loading') {
    return <div> Loading ... </div>
  }
  if (data?.authenticated) {
    return <Outlet />
  }
  return <Navigate to={redirectPath} replace />

}