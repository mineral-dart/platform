import {useMutation, useQueryClient} from "@tanstack/react-query"
import {apiClient} from "../../utils/axios"
import {useNavigate} from "react-router-dom"

type Props = {
  email: string,
  password: string
}

export default () => {
  const navigate = useNavigate()
  return useMutation(async (params: Props) => {
    const {data} = await apiClient.post('/auth/login', params)

    return data
  }, { onSuccess: () => {
      navigate("/")
  }})
}