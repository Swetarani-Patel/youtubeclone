import { createStore, applyMiddleware,combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authreducer } from "./reducers/auth.reducer";
import { ChannelVideoIdReducer, RelatedVideoReducer, homeVideosReducer, subscriptionsChannelReducer } from "./reducers/videos.reducer";
import { selectedVideoReducer } from "./reducers/videos.reducer";
import { channelDetailsReducer } from "./reducers/channel.reducer";
import { commentListReducer } from "./reducers/comments.reducer";
import { searchedVideosReducer } from "./reducers/videos.reducer";

 const rootReducer =  combineReducers({
   auth:authreducer,
   homeVideos:homeVideosReducer,
   selectedVideo: selectedVideoReducer,
   channelDetails:channelDetailsReducer,
   commentList: commentListReducer,
   relatedVideos: RelatedVideoReducer,
   searchedVideos: searchedVideosReducer,
   subscriptionsChannel: subscriptionsChannelReducer,
   channelVideos: ChannelVideoIdReducer,
   
 })

const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default store