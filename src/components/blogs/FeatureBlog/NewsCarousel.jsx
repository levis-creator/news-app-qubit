import { Carousel } from 'antd'
import { Card } from 'antd'
import React from 'react'

function NewsCarousel({data}) {
    const cardStyle={
        height:"100%",
        width:"100%",
        overflow:"hidden"
    }
    const carouselStyle={
        width:"900px",
        height:"400px"
    }
    const featuredData=()=>{
        const newData=[];
        let count=0;
        for(let item in data){
            newData.push(item)
            if(count==5){
                break;
            }
            count++;
        }
        return newData;
    }
    return (
        <Card style={cardStyle}>
        
    
             <Carousel autoplay style={carouselStyle}>
                {
                    data.map(
                        (dataItem)=>(
                            <div>
                                <img 
                                src={dataItem.urlToImage} 
                                alt={dataItem.description} 
                                className='h-full w-full object-cover' 
                                />
                            </div>
                        )
                    )
                }
             </Carousel>

        </Card>
    )
}

export default NewsCarousel