'use client'
import { Carousel } from 'flowbite-react'

import { getFeaturedPosts } from 'src/api/getFeaturedPosts/getFeaturedPosts'

export function HomeCarousel() {
    const featuredPosts = getFeaturedPosts()

    return (
        <div className='w-full h-[600px] bg-red'>
            <Carousel>
                {featuredPosts.map((post, index) => (
                    <img src={post.src} alt='FEATURED POST' key={index} />
                ))}
            </Carousel>
        </div>
    )
}
