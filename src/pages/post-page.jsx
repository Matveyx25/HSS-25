import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { api } from '../services'
import { useQuery } from '@tanstack/react-query'
import s from './post-page.module.scss'

const categories = ['Travel Journal', 'Hidden Gems', 'Culture', 'Wellness', 'Adventure']

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

	const {data: post, isFetched: postIsFetched} = useQuery({
		queryKey: ['post', postId],
		queryFn: () => api.getPostById(postId),
		enabled: !!postId
	})
	const {data: comments, isFetched: commentsIsFetched} = useQuery({
		queryKey: ['post-comments', postId],
		queryFn: () => api.getComments(postId),
		enabled: !!postId
	})

	if(!postIsFetched) return <div className={s.loading}>Loading...</div>

	const category = categories[Number(postId) % categories.length]
	const imageUrl = `https://picsum.photos/seed/post-cover-${postId}/1600/900`
	const bodyParts = splitBody(post?.body)

	return (
		<div className={s.page}>
			<div className={s.shell}>
				<section className={s.hero} style={{backgroundImage: `url(${imageUrl})`}}>
					<NavLink className={s.backLink} to="/">← Back to home</NavLink>

					<div className={s.heroContent}>
						<span className={s.tag}>{category}</span>
						<h1 className={s.title}>{post?.title}</h1>
						<p className={s.lead}>
							A calm, editorial layout for reading, discussion, and quick navigation back to the
							story feed.
						</p>
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

					<aside className={s.sidebar}>
						<div className={s.sidebarCard}>
							<h3>Overview</h3>
							<p>
								A bright article view with a large image header, compact metadata, and readable
								comment cards.
							</p>
						</div>

						<div className={s.sidebarCard}>
							<h3>Reading notes</h3>
							<ul>
								<li>Large headline and contrast overlay for the hero image</li>
								<li>Soft neutral containers consistent with the home page</li>
								<li>Comments grouped into separate cards for easier scanning</li>
							</ul>
						</div>
					</aside>
				</div>
			</div>
		</div>
	)
}
