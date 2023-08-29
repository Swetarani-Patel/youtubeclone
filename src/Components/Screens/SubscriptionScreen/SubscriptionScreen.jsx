import React, { useEffect } from "react";
import "./subscriptionScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { getVideosByChannel } from "../../../Redux/actions/video.action";
import { Container } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import VideoHorizontal from "../../videoHorizontal/VideoHorizontal";

function SubscriptionScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideosByChannel());
  }, [dispatch]);
  const { loading, videos } = useSelector(
    (state) => state.subscriptionsChannel
  );
  return (
    <Container fluid>
      {!loading ? (
            videos?.map(video => (
               <VideoHorizontal video={video} key={video.id} subScreen/>
            ))
         ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="160px" count={20} />
        </SkeletonTheme>
      )}
    </Container>
  );
}

export default SubscriptionScreen;
