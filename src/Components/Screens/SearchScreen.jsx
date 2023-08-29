import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getVideosBySearch } from '../../Redux/actions/video.action';
import { Container } from 'react-bootstrap';
import VideoHorizontal from '../videoHorizontal/VideoHorizontal';
import Skeleton from 'react-loading-skeleton';
import { SkeletonTheme } from 'react-loading-skeleton';

function SearchScreen() {
    const {query} = useParams()
    console.log(query);

    const dispatch = useDispatch()
    useEffect(()=>{
    dispatch(getVideosBySearch(query))
    },[query, dispatch])
    const{videos, loading} = useSelector(state=>state.searchedVideos)
  return (
    <Container>
      {
        !loading?(
          videos?.map(video=><VideoHorizontal video={video} key={video.id.videoId} SearchScreen/>)
        ):(
          <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                  <Skeleton width='100%' height='16 0px' count={20} />
               </SkeletonTheme>
        )
      }
    </Container>
  )
}

export default SearchScreen
