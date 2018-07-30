/*
* 添加组件
*/
import React from 'react';

class CommentAdd extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username:'',
      content:''
    };
    this.changeUsername = this.changeUsername.bind(this);
    this.changeContent = this.changeContent.bind(this);
  }

  changeUsername(event){
    let username = event.target.value;
    this.setState({
      username:username
     });
  }

  changeContent(){
    this.setState({
      content:this.refs.content.value
    });
  }

  addComment(){
    // 第一种方法
    let username = this.state.username;
    let content = this.state.content;
    // 第二种方法
    // let {username,content} = this.state;
    let comment = {username,content};

    this.props.add(comment);
    this.refs.content.value='';
    this.setState({
      username:'',
      // content:''
    });
  }

	render(){
		return (
            <div className="col-md-4">
                <form className="form-horizontal">
                  <div className="form-group">
                    <label>用户名</label>
                    <input type="text" className="form-control" placeholder="用户名" 
                           value={this.state.username} onChange={this.changeUsername} />
                  </div>
                  <div className="form-group">
                    <label>评论内容</label>
                    <textarea className="form-control" rows="6" placeholder="评论内容"
                              ref="content" onChange={this.changeContent}></textarea>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                      <button type="button" className="btn btn-default pull-right"
                              onClick={this.addComment.bind(this)}>提交</button>
                    </div>
                  </div>
                </form>
            </div>
			);
	}
}

export default CommentAdd;