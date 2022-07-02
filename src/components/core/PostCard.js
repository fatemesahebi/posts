import React from 'react';
import {Card,CardContent,CardMedia,Typography,Button,CardActions } from "./../base";
import cardImg from "./../../assets/images/mae-mu-XTztXbv6gMs-unsplash.jpg"
import {useNavigate} from "react-router-dom";
const PostCard =(props)=> {
    const{post}=props
    const navigation=useNavigate()

    const handleClickCard = (id) => {
      navigation(`/${id}`)
    }
    return (
        <Card sx={{maxHeigh:"400px"}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={cardImg}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" height={"120px"}>
                        {post?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" height={"120px"}>
                        {(post?.body?.length>200)? post?.body?.substring(0,200)+"..." : post?.body}
                    </Typography>
                </CardContent>
            <CardActions>
                <Button onClick={()=>handleClickCard(post?.id)} size="small" color="primary">
                    more info
                </Button>
            </CardActions>
        </Card>
    );
}
export default PostCard;