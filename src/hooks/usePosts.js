import { useQuery } from "@tanstack/react-query"
import { api } from "../services"

export const usePosts = (params) => {
	return useQuery({
			queryKey: ['posts', params],
			queryFn: () => api.getPosts(params),
		})
}