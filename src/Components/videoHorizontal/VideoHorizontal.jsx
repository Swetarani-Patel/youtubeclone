import React from "react";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./_videoHorizontal.scss";
import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import request from "../../api";
import { useNavigate } from "react-router-dom";

const VideoHorizontal = ({ video, searchScreen, subScreen }) => {
  const {
    id,
    snippet: {
      resourceId,
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const isVideo = id.kind === "youtube#video";
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);
  const _channelId = resourceId?.channelId || channelId

  useEffect(() => {
    const get_video_details = async () => {
      try {
        const {
          data: { items },
        } = await request("/videos", {
          params: {
            part: "contentDetails,statistics",
            id: id.videoId,
          },
        });

        if (items && items.length > 0) {
          setDuration(items[0].contentDetails.duration);
          setViews(items[0].statistics.viewCount);
        }
      } catch (error) {
        console.error("Error fetching video details:", error);
        
      }
    };

    if (isVideo) {
      get_video_details();
    }
  }, [id, isVideo]);

  useEffect(() => {
    const get_channel_icon = async () => {
      try {
        const {
          data: { items },
        } = await request("/channels", {
          params: {
            part: "snippet",
            id: _channelId,
          },
        });

        if (items && items.length > 0) {
          setChannelIcon(items[0].snippet.thumbnails.default);
        }
      } catch (error) {
       console.error("Error fetching channel icon:", error);
        
     }
    };

    if (isVideo) {
      get_channel_icon();
    }
  }, [_channelId, isVideo]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  const navigate = useNavigate();
  const handleClick = () => {
    isVideo ? navigate(`/watch/${id.videoId}`) : navigate(`/channel/${_channelId}`);
  };


  
  
  const thumbnail = !isVideo && "videoHorizontal__thumbnail-channel";

  return (
    <Row className="videoHorizontal m-1 py-2 align-items-center" onClick={handleClick}>
      <Col xs={6} md={searchScreen ? 4 : 6} className="videoHorizontal__left">
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className={`videoHorizontal__thumbnail ${thumbnail}`}
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        {isVideo && <span className="videoHorizontal__duration">{_duration}</span>}
      </Col>
      <Col xs={6} md={searchScreen ? 8 : 6} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-1">{title}</p>

        {isVideo && (
          <div className="videoHorizontal__details">
            {numeral(views).format("0.a")} views •{moment(publishedAt).fromNow()}
          </div>
        )}

        {(searchScreen || subScreen) && <p className="mt-1 videoHorizontal__desc">{description}</p>}

        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {isVideo && <LazyLoadImage src={channelIcon?.url} effect="blur" />}
          <p className="mb-0">{channelTitle}</p>
        </div>
        {
          subScreen && (
            <p className="mt-2">
              {video.contentDetails.totalItemCount} Videos
            </p>
          )
        }
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
