import { useQuery } from "@tanstack/react-query"
import { api } from "../services"

export const usePostComments = ({params, options}) => {
	return useQuery({
		queryKey: ['post-comments', params?.postId],
		queryFn: () => api.getComments(params?.postId),
		enabled: !!params?.postId,
		...options
	})
}