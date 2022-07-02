import React, {useEffect} from 'react';
import {getPosts} from "../redux/reducers/Posts";
import {connect} from "react-redux";
import {PostCard} from "./../components/core"
import {Grid,Pagination} from "./../components/base";

const PostsPage = (props) => {
    const {getPosts,posts}=props
    const [page, setPage] = React.useState(1);
    const pageSize=8
    const pageCount=Math.ceil( posts.length/pageSize)

    const slicePosts=(page)=>{
       const startPoint=(page-1)*pageSize
        const endPont=(page)*pageSize
        return posts.slice(startPoint,endPont)
    }

    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(()=>{
        getPosts()
    },[])



    return (
        <Grid container spacing={2}>
            {
                slicePosts(page).map(post=> <Grid item xs={6} md={4} lg={3}>
                    <PostCard post={post}/>
                </Grid>)
            }
            <Grid item xs={12} sx={{display:"flex",justifyContent:"center"}}>
                <Pagination  count={pageCount} page={page} onChange={handleChange} />
            </Grid>

        </Grid>
    );
};
const mapStateToPtops = (state) => {
    return {
        posts: state?.posts?.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (data) => dispatch(getPosts(data))
    }
}
export default connect(mapStateToPtops, mapDispatchToProps)(PostsPage);
