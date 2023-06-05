import React from 'react'

function Content({info}) {
    const {title,description} = info
    return (
        <article className="slider__card">
            <h2 className='slider__title'>{title}</h2>
            <p className="slider__copy">{description}</p>
        </article>
    )
}

export default Content