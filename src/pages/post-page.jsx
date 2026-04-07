import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import s from './post-page.module.scss'
import { usePostById } from '../hooks/usePostById'
import { usePostComments } from '../hooks/usePostComments'
import { getGradient } from '../helpers/getGradient'

const splitBody = (body = '') => {
	const normalized = body.replace(/\s+/g, ' ').trim()
	if (!normalized) return []
	const midpoint = Math.ceil(normalized.length / 2)
	const breakpoint = normalized.indexOf(' ', midpoint)
	if (breakpoint === -1) return [normalized]
	return [normalized.slice(0, breakpoint), normalized.slice(breakpoint + 1)]
}

export const PostPage = () => {
	const {postId} = useParams()

	const {data: post, isFetched: postIsFetched} = usePostById({
		params: {postId}
	})
	const {data: comments, isFetched: commentsIsFetched} = usePostComments({
		params: {postId}
	})

	if(!postIsFetched) return <div className={s.loading}>Loading...</div>

	const imageUrl = `https://picsum.photos/seed/post-cover-${postId}/1600/900`
	const bodyParts = splitBody(post?.body)

	return (
		<div className={s.page}>
			<div className={s.shell}>
				<section className={s.hero} style={{background: getGradient(postId)}}>
					<NavLink className={s.backLink} to="/">← Back to home</NavLink>

					<div className={s.heroContent}>
						<h1 className={s.title}>{post?.title}</h1>
					</div>
				</section>

				<div className={s.content}>
					<article className={s.article}>
						<div className={s.meta}>
							<div className={s.metaCard}>Post #{postId}</div>
							<div className={s.metaCard}>{comments?.length ?? 0} comments</div>
							<div className={s.metaCard}>5 min read</div>
						</div>

						<div className={s.articleBody}>
							{bodyParts.map((part, index) => (
								<p key={index}>{part}</p>
							))}
							<p>
								This page keeps the same visual language as the home feed: rounded surfaces,
								soft shadows, and a spacious reading rhythm that matches the gallery-like front
								page.
							</p>
						</div>

						<h2 className={s.sectionTitle}>Comments</h2>

						<div className={s.comments}>
							{commentsIsFetched ? comments.map((el) => (
								<div key={el.id} className={s.commentCard}>
									<div className={s.commentHeader}>
										<h4>{el?.name}</h4>
										<span>{el?.email}</span>
									</div>
									<p>{el?.body}</p>
								</div>
							)) : 'Loading...'}
						</div>
					</article>

				</div>
			</div>
		</div>
	)
}
