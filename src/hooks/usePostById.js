import { useQuery } from "@tanstack/react-query"
import { api } from "../services"

export const usePostById = ({params, options}) => {
	return useQuery({
		queryKey: ['post', params?.postId],
		queryFn: () => api.getPostById(params?.postId),
		enabled: !!params?.postId,
		...options
	})
}