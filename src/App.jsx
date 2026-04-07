import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home-page"
import { PostPage } from "./pages/post-page"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			select: res => res.data,
			retry: 3
		}
	}
})

function App() {
  return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage/>}/>
					<Route path="/post/:postId" element={<PostPage/>}/>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default App


