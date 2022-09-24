import {QueryClient, useQuery} from "@tanstack/react-query"
import {queryKeys} from "../query-keys"
import {apiClient} from "../../utils/axios"

export default () => {
  return useQuery(
    queryKeys.authCheck(),
    async () => {
      const response = await apiClient.get('/check')

      return response.data
    }, {staleTime: Infinity}
  )
}