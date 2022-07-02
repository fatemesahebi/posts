import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getPostById} from "../redux/reducers/Posts";
import sampleImg from "./../assets/images/mae-mu-XTztXbv6gMs-unsplash.jpg"
import {Grid,Typography,Box} from "./../components/base"
import {useParams} from "react-router-dom";
const SinglePostPage = (props) => {
    const {getPostById, postById} = props
    const params=useParams()
    const postId=params?.postId
    useEffect(() => {
        getPostById(postId)
    }, [postId])
    return (
        <Grid container spacing={2} xs={12}>
            <Grid item xs={12} md={6}>
               <Box component={"img"} src={sampleImg} width={"100%"} height={"100vh"}/>
            </Grid>
            <Grid item md={6} xs={12}>
                <Typography gutterBottom variant="h5" component="div">
                    {postById?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {postById?.body}
                </Typography>
            </Grid>
        </Grid>

        );
};
const mapStateToPtops = (state) => {
    return {
        postById: state?.posts?.postById
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPostById: (data) => dispatch(getPostById(data))
    }
}
export default connect(mapStateToPtops, mapDispatchToProps)(SinglePostPage);