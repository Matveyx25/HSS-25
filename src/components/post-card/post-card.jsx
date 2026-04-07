import { NavLink } from 'react-router-dom'
import s from './post-card.module.scss'

export const Card = ({post}) => {
	const imageId = (post?.id ?? 1) + 20
	const tagList = ['Health & Nutrition', 'Sustainability', 'Cultural Insights', 'Adventure', 'Wellness']
	const tag = tagList[(post?.id ?? 0) % tagList.length]

	return (
		<NavLink className={s.card} to={`/post/${post?.id}`}>
			<img
				className={s.image}
				src={`https://picsum.photos/seed/post-${imageId}/900/1200`}
				alt={post?.title}
			/>
			<span className={s.tag}>{tag}</span>
			<h6 className={s.title}>{post?.title}</h6>
			<p className={s.body}>{post?.body}</p>
		</NavLink>
	)
}
