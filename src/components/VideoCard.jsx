import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'


import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

const VideoCard = ( {video : {id:{videoID }, snippet }} ) => {
  return (
    <Card sx={ { width: {md: '320px', xs: '100%'}, boxShadow: 'none', borderRadius: 0 } }>

        <Link to={videoID ? `/video/${videoID}` : demoVideoUrl} >
            <CardMedia 
            
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title} 
            sx={ {width: 358, height: 180} } >

            </CardMedia>

        </Link>

        <CardContent sx={ {backgroundColor: '#1E1E1E', height: '106px'} } >

        <Link to={videoID ? `/video/${videoID}` : demoVideoUrl} >

                <Typography variant='subtitle1' fontWeight="bold" color='#fff'>
                  {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
          </Link>


        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >

<Typography variant='subtitle2' fontWeight="bold" color='gray'>
  {snippet?.demoChannelTitle || demoChannelTitle }
</Typography>
</Link>
    <CheckCircle sx={ {fontSize: 12, color: 'gray', m1: '5px'} } />

    </CardContent>

    </Card>
  )
}

export default VideoCard