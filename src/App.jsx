import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home-page"
import { PostPage } from "./pages/post-page"

function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/post/:postId" element={<PostPage/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App


