﻿var data = [
  { Id: 1, Author: "Daniel Lo Nigro", Text: "Hello ReactJS.NET World!" },
  { Id: 2, Author: "Pete Hunt", Text: "This is one comment" },
  { Id: 3, Author: "Jordan Walke", Text: "This is *another* comment" }
];

var CommentBox = React.createClass({
    handleCommentSubmit: function (comment) {
        var data = new FormData();
        data.append('Author', comment.Author);
        data.append('Text', comment.Text);

        var xhr = new XMLHttpRequest();
        xhr.open('post', this.props.submitUrl, true);
        xhr.onload = function () {
            this.loadCommentsFromServer();
        }.bind(this);
        xhr.send(data);
    },
    getInitialState: function () {
        return { data: [] };
    },
    loadCommentsFromServer: function () {
        var xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        }.bind(this);
        xhr.send();
    },
    componentDidMount: function () {
        this.loadCommentsFromServer();
        window.setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});
var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.Author} key={comment.Id}>{comment.Text}
        </Comment>
      );
    });
    return (
      <div className="commentList">{commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
    getInitialState: function () {
        return { author: '', text: '' };
    },
    handleAuthorChange: function (e) {
        this.setState({ author: e.target.value });
    },
    handleTextChange: function (e) {
        this.setState({ text: e.target.value });
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({ Author: author, Text: text });
        this.setState({ author: '', text: '' });
    },
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
            <input type="text"
                    placeholder="Your name"
                    value={this.state.author}
                    onChange={this.handleAuthorChange} />
            <input type="text"
                    placeholder="Say something..."
                    value={this.state.text}
                    onChange={this.handleTextChange} />
            <input type="submit" value="Post" />
            </form>
        );
    }
});
var Comment = React.createClass({
    render: function() {
        return (
          <div className="comment">
            <h2 className="commentAuthor">
              {this.props.author}
            </h2>
        {this.props.children}
        </div>
      );
    }
});
ReactDOM.render(
<CommentBox url="home/comments" submitUrl="home/comments_new" pollInterval={2000} />,
  document.getElementById('content')
);