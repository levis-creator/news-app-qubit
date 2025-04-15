import { Typography } from 'antd';
import { Card } from 'antd'
import React from 'react'
import LatestNewsBlog from './LatestNewsBlog';
import NewsCarousel from './NewsCarousel';
const { Meta } = Card;
function FeaturedBlog({featuredData}) {
    return (
        <>
            <div className='flex flex-col md:flex-row w-full gap-4'>
                {/* carousel */}
                <div className='md:flex-2/3'>
                    <div>
                        <Typography.Title level={5} >
                            Featured News
                        </Typography.Title>
                    </div>
                   <NewsCarousel data={featuredData}/>
                </div>
                {/* latest news */}
                <div className='md:flex-1/3'>
                    <Typography.Title level={5} >
                        Latest News
                    </Typography.Title>
                    <LatestNewsBlog/>
                </div>
            </div>
        </>
    )
}

export default FeaturedBlog