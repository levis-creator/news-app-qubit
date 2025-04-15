import React from 'react'
import FeaturedBlog from '../components/blogs/FeatureBlog/FeaturedBlog'
import { useEffect } from 'react'
import { useState } from 'react'
import { TOPHEADLINES_API_URL } from '../lib/ApiUrl'

function Home() {
    const[featuredNews, setFeaturedNews]=useState([])
    useEffect(()=>{
        fetch(TOPHEADLINES_API_URL)
        .then(async(res)=>{
            const result= await res.json()
            setFeaturedNews(result.articles)
        })
    },[])
    return (
        <div>
            <FeaturedBlog featuredData={featuredNews}/>
        </div>
    )
}

export default Home