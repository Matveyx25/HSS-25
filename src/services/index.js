import axios from "axios";

const instance = axios.create({
	baseURL: 'https://qywmhkaxwhucmtmvfhpc.supabase.co/functions/v1/',
	apiKey: import.meta.env.VITE_SUPABASE_PUBLISH_KEY,
	headers: {
		Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5d21oa2F4d2h1Y210bXZmaHBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5MjA4NDMsImV4cCI6MjA4NzQ5Njg0M30.ihJ-ZUGqPGsoHvhBZQi54FEzT3pYTTlWriqP1UDPpzI"
	}
})

export const api = {
	getPosts(params) {
		return instance.get('posts', {params})
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