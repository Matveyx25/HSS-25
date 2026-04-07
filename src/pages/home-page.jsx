import React from 'react'
import { NavLink } from 'react-router-dom'
import { api } from '../services'
import { Card } from '../components/post-card/post-card'
import { useQuery } from '@tanstack/react-query'
import s from './home-page.module.scss'

const formatDate = (id) => {
	const date = new Date(2014 + (id % 11), (id * 2) % 12, 3 + (id % 24))
	return date.toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	})
}

export const HomePage = () => {
	const {data, isFetched} = useQuery({
		queryKey: ['posts'],
		queryFn: api.getPosts,
	})

	if(!isFetched) return <div className={s.page}>Loading...</div>

	const featuredPosts = data?.slice(0, 3) ?? []
	const latestPosts = data?.slice(3, 6) ?? []

	return (
		<div className={s.page}>
			<div className={s.shell}>
				<header className={s.topbar}>
					<div className={s.brand}>
						<span className={s.brandMark}>∞</span>
						<span>enjooy</span>
					</div>

					<nav className={s.nav}>
						<NavLink className={`${s.navLink} ${s.navLinkActive}`} to="/">Home</NavLink>
						<NavLink className={s.navLink} to="/">Blog</NavLink>
						<NavLink className={s.navLink} to="/">Service</NavLink>
						<NavLink className={s.navLink} to="/">About</NavLink>
						<NavLink className={s.navLink} to="/">Contact</NavLink>
					</nav>

					<div className={s.actions}>
						<button className={s.ghostButton} type="button">Sign in</button>
						<button className={s.primaryButton} type="button">Register</button>
					</div>
				</header>
				<div className={s.content}>
					<main>
						<div className={s.sectionHeader}>
							<h2>Whiteboards are remarkable.</h2>
							<div className={s.line} />
						</div>

						<div className={s.grid}>
							{data?.map((el) => (
								<Card key={el.id} post={el}/>
							))}
						</div>
					</main>
				</div>
			</div>
		</div>
	)
}
