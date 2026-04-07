import { NavLink } from 'react-router-dom'
import { Card } from '../components/post-card/post-card'
import s from './home-page.module.scss'
import { usePosts } from '../hooks/usePosts'

export const HomePage = () => {
	const {data, isFetched} = usePosts()

	if(!isFetched) return <div className={s.page}>Loading...</div>

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
