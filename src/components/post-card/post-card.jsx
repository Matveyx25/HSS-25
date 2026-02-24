import { NavLink } from 'react-router-dom'
import s from './post-card.module.scss'

export const Card = ({post}) => {

	return (
		<NavLink className={s.card} to={`/post/${post?.id}`}>
			<h6 className={s.title}>{post?.title}</h6>
			<p className={s.body}>{post?.body}</p>
		</NavLink>
	)
}