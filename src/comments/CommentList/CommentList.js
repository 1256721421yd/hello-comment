/*
*评论组件
* 
*/
import React,{Component} from 'react';
import CommentItem from '../CommentItem/CommentItem'
import './CommentList.css'


class CommentList extends Component{
	render(){
		let comments = this.props.comments;
		let display = comments.length > 0 ? 'none' : 'block';
	  return(
        <div className="col-md-8">
           <h3 className="reply">评论回复：</h3>
           <h2 style={{display: display}}>暂无评论，点击左侧添加评论！！！</h2>
           <ul className="list-group">
           {
           	comments.map((comment,index) => {
           		console.log(comment);
           		return <CommentItem comment={comment} key={index} 
           							delete={this.props.delete} index={index} />
           	})
           }
           </ul>
        </div>
			);
	}
}

export default CommentList;