import { Typography } from 'antd';
import { Card } from 'antd'
import React from 'react'
const { Meta } = Card;
function FeaturedBlog() {
    return (
        <>
            <div className='flex flex-col md:flex-row w-full gap-4'>
                <div className='md:flex-2/3'>
                    <div>
                        <Typography.Title level={5} >
                            Featured News
                        </Typography.Title>
                    </div>
                    <Card >
                        featured blogs
                    </Card>
                </div>
                <div className='md:flex-1/3'>
                    <Typography.Title level={5} >
                        Latest News
                    </Typography.Title>
                    <Card> 
                        <Card.Grid>
                            Card content
                        </Card.Grid>
                        <Card.Grid>
                            Card content
                        </Card.Grid>
                        <Card.Grid>
                            Card content
                        </Card.Grid>
                        <Card.Grid>
                            Card content
                        </Card.Grid>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default FeaturedBlog