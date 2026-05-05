import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home-page"
import { PostPage } from "./pages/post-page"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { LoginPage } from "./pages/login-page"
import { queryClient } from "./shared/clients/queryClient"
import { AuthProvider } from "./shared/context/AuthContext"


function App() {
  return (
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<HomePage/>}/>
						<Route path="/post/:postId" element={<PostPage/>}/>
						<Route path="/sign-in" element={<LoginPage/>}/>
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
		</AuthProvider>
	)
}

export default App


