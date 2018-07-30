import React, { Component } from 'react';
import CommentAdd from '../CommentAdd/CommentAdd'
import CommentList from '../CommentList/CommentList'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      comments: []
    };
  }

  componentDidMount(){
    let comments = [
    {
      username:'Tom',
      content:'ReactJS好难!',
      id: Date.now()
    },
    {
      username:'Jack',
      content:'ReactJS还不错!',
      id: Date.now()+1
    }];
    this.setState({comments});
  }

  add = (comment) => {
    let comments = this.state.comments;
    comments.unshift(comment);
    this.setState({comments});
  }

  delete = (index) => {
    let comments = this.state.comments;
    comments.splice(index,1);
    this.setState({comments});
  }
  render() {
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <CommentAdd add={this.add} />
        <CommentList comments={this.state.comments} delete={this.delete} />
      </div>
    );
  }
}

export default App;
