import { NavLink } from 'react-router-dom'
import s from './post-card.module.scss'
import gravatar from 'gravatar'
import { getGradient } from '../../helpers/getGradient';

export const Card = ({post}) => {
	const tagList = ['Health & Nutrition', 'Sustainability', 'Cultural Insights', 'Adventure', 'Wellness']
	const tag = tagList[(post?.id ?? 0) % tagList.length]

	return (
		<NavLink className={s.card} to={`/post/${post?.id}`}>
			<div className={s.image} style={{
				background: getGradient(post?.id)
			}}></div>
			<span className={s.tag}>{tag}</span>
			<h6 className={s.title}>{post?.title}</h6>
			<p className={s.body}>{post?.body}</p>
		</NavLink>
	)
}
