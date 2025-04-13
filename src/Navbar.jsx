function Navbar() {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="index.html">Home</a></li>
                        <li><a href="member.html">Members</a></li>
                        <li><a href="groups.html">Groups</a></li>
                        <li><a href="photos.html">Photos</a></li>
                        <li><a href="profile.html">Profile</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;