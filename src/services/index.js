import axios from "axios";

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const api = {
	getPosts() {
		return instance.get('posts')
	},
	getPostById(id) {
		return instance.get(`posts/${id}`)
	}
}