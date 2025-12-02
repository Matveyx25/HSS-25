import { useEffect, useState } from "react"
import { Button } from "./components/button/button"

function App() {
	const [value, setValue] = useState(0)

	useEffect(() => {
		console.log('MAKE V8 GREAT AGAIN')
	}, [value])

  return (
		<div className=''>
			Hello
			<Button label={value} onClick={() => setValue((prev) => prev + 1)} название="имя"/>
		</div>
	)
}

export default App


