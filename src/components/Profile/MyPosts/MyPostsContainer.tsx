import { connect } from 'react-redux';
import { addPost } from '../../../redux/profileReducer';
import { AppStateType } from '../../../redux/reduxStore';
import { PostType } from '../../../types/types';
import MyPosts from './MyPosts';

type MapStatePropsType = {
  posts: Array<PostType>
}
type MapDispatchPropsType = {
  addPost: (newPostBody: string) => void
}
type OwnPropsType = {}


const mapStateToProps = (state: AppStateType) => ({ posts: state.profilePage.posts }) 

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {addPost})(MyPosts);
