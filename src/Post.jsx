function Post() {
    return (
        <div className="panel panel-default post">
            <div className="panel-body">
                <div className="row">
                    <div className="col-sm-2">
                        <a className="post-avatar thumbnail" href="profile.html">
                            <img src="img/user.png" alt="User" />
                            <div className="text-center">DevUser1</div>
                        </a>
                        <div className="likes text-center">7 Likes</div>
                    </div>
                    <div className="col-sm-10">
                        <div className="bubble">
                            <div className="pointer">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                            </div>
                            <div className="pointer-border"></div>
                        </div>
                        <p className="post-actions">
                            <a href="#">Comment</a> - <a href="#">Like</a> - <a href="#">Follow</a> - <a href="#">Share</a>
                        </p>
                        <form className="form-inline comment-form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter Comment" />
                            </div>
                            <button type="submit" className="btn btn-default">Add</button>
                        </form>
                        <div className="comments">
                            <div className="comment">
                                <a className="comment-avatar pull-left" href="#"><img src="img/user.png" alt="User" /></a>
                                <div className="comment-text"><p>Sample comment content</p></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Post;