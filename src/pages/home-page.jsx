import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { api } from '../services'
import { Card } from '../components/post-card/post-card'

export const HomePage = () => {
	const [data, setData] = useState(null)
	const [isFetched, setIsFetched] = useState(false)

	useEffect(() => {
		setIsFetched(false)
		api.getPosts().then(res => {
			setData(res.data);
			setIsFetched(true)
		})
	}, [])

	if(!isFetched) return 'Loading...'

	return (
		<div className='wrapper'>
			{data.map(el => (
				<Card post={el}/>
			))}
		</div>
	)
}
