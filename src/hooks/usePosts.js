import { useQuery } from "@tanstack/react-query"
import { api } from "../services"

export const usePosts = () => {
	return useQuery({
			queryKey: ['posts'],
			queryFn: api.getPosts,
		})
}