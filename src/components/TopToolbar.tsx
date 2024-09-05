import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function TopToolbar() {
  return (
    <div className="top-toolbar">
      <img
        src="/icons8-spotify-250.svg"
        className="spotify-logo"
        alt="spotify logo"
        width="35rem"
      />
      <div className="center">
        <img
          src="/home.png"
          className="home-icon"
          alt="home icon"
          title="Home"
        />
        <div className="search-bar">
          <img
            src="/search.png"
            className="search-icon"
            alt="search icon"
            title="Search"
          />
          <form action="" method="get">
            <input
              className="search-input"
              type="text"
              placeholder="What do you want to play?"
            />
            <img src="/browse.png" className="browse-icon" alt="browse icon" />
          </form>
        </div>
      </div>
      <div className="right">
        <img
          src="/notifications-bell.png"
          className="notification-icon"
          alt="notification icon"
        />
        <div className="account-icon">
          <AccountCircleIcon htmlColor="white" fontSize="inherit" />
        </div>
      </div>
    </div>
  );
}

export default TopToolbar;
