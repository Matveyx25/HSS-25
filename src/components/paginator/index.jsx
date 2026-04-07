import React, { useState } from 'react'
import s from './style.module.scss'
import classNames from 'classnames'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

export const Paginator = ({pageCount, currentPage, setCurrentPage, MIN_PAGE}) => {
	const selectPage = (page) => {
		setCurrentPage(page)
	}


	const prevPage = () => {
		setCurrentPage(current => {
			if(current > MIN_PAGE){
				return current - 1
			}else{
				return current
			}
		})
	}

	const nextPage = () => {
		setCurrentPage(current => {
			if(current < pageCount - 1 + MIN_PAGE){
				return current + 1
			}else{
				return current
			}
		})
	}


	return (
    <div className={s.wrapper}>
      <button className={classNames(s.button, s.prevButton, !(currentPage > MIN_PAGE) ? s.disabled : '')} disabled={!(currentPage > MIN_PAGE)} onClick={prevPage}>
        <IconChevronLeft />
      </button>

      {new Array(pageCount).fill(0).map((_, index) => (
        <button
          className={classNames(
            s.button,
            currentPage === index ? s.active : "",
          )}
					onClick={() => selectPage(index + MIN_PAGE)}
        >
          {index + 1}
        </button>
      ))}

      <button className={classNames(s.button, s.nextButton, !(currentPage < pageCount - 1 + MIN_PAGE) ? s.disabled : '')} disabled={!(currentPage < pageCount - 1 + MIN_PAGE)} onClick={nextPage}>
        <IconChevronRight />
      </button>
    </div>
  );
}
