import axios from "axios";

const instance = axios.create({
	baseURL: 'https://qywmhkaxwhucmtmvfhpc.supabase.co/functions/v1/',
	apiKey: import.meta.env.VITE_API_KEY
})

export const api = {
	getPosts() {
		return instance.get('posts')
	},
	getPostById(id) {
		return instance.get(`posts/${id}`)
	},
	getComments(id){
		return instance.get(`posts/${id}/comments`)
	},
	getUser(id) {
		return instance.get(`users/${id}`)
	},
	getAlbums(id){
		return instance.get(`users/${id}/albums`)
	},
	getPhotos(id){
		return instance.get(`albums/${id}/photos`)
	},
}