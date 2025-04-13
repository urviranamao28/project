import React from 'react';
function Sidebar() {
    return (
        <div className="col-md-4">
            <div className="panel panel-default friends">
                <div className="panel-heading"><h3 className="panel-title">My Friends</h3></div>
                <div className="panel-body">
                    <ul className="list-unstyled">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <li key={i}><a className="thumbnail" href="profile.html"><img src="img/user.png" alt="Friend" /></a></li>
                        ))}
                    </ul>
                    <div className="clearfix"></div>
                    <a className="btn btn-primary" href="#">View All Friends</a>
                </div>
            </div>
            <div className="panel panel-default groups">
                <div className="panel-heading"><h3 className="panel-title">Latest Groups</h3></div>
                <div className="panel-body">
                    {[...Array(4)].map((_, i) => (
                        <div className="group-item" key={i}>
                            <img src="img/group.png" alt="Group" />
                            <h4><a href="#">Sample Group One</a></h4>
                            <p>This is a DCX social network sample group</p>
                            <div className="clearfix"></div>
                        </div>
                    ))}
                    <a className="btn btn-primary" href="#">View All Groups</a>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;