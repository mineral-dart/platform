import {useQuery, useQueryClient} from "@tanstack/react-query"
import {queryKeys} from "../query-keys"
import {apiClient} from "../../utils/axios"

export default () => {
  const queryClient = useQueryClient()
  return useQuery(queryKeys.authUser(), async () => {
    const response = await apiClient.get('/me')

    return response.data
  }, {staleTime: Infinity })
}