import { Card } from 'antd'
import React from 'react'

function LatestNewsBlog() {
    const gridStyle = {
        width: "100%"
    }
    return (
        <Card hoverable={false}>
            <Card.Grid hoverable={false} style={gridStyle}>
                Card content
            </Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
                Card content
            </Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
                Card content
            </Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
                Card content
            </Card.Grid>
        </Card>
    )
}

export default LatestNewsBlog