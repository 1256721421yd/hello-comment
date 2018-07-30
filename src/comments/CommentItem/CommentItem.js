/*
* 组件列表
*/
import React,{Component} from 'react';
import './CommentItem.css' 

class CommentItem extends Component{
   constructor(props){
      super(props);
      this.deleteComment=this.deleteComment.bind(this);
   }

   deleteComment(){
      let username = this.props.comment.username;
      // if (confirm(`确定删除${username}的评论吗?`)){
      //    this.props.delete(this.props.index);
      // }
      this.props.delete(this.props.index);
   }

	render(){
      let comment = this.props.comment;
		return (
            <ul className="list-group">
           <li className="list-group-item">
                  <div className="handle">
                     <a href="javascript:;" onClick={this.deleteComment}>删除</a>
                  </div>
                  <p className="user"><span >{comment.username}</span><span>说:</span></p>
                  <p className="centence">{comment.content}</p>
               </li>   
            </ul>
			);
	}
}

export default CommentItem;