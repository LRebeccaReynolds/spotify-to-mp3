import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function TopToolbar() {
  return (
    <div className="top-toolbar">
      <img src="/icons8-spotify-250.svg" alt="spotify logo" width="40rem" />
      <div className="main-actions">
        <HomeOutlinedIcon htmlColor="#B3B3B3" />
        <div className="search-bar">
          <SearchOutlinedIcon className="search-icon" htmlColor="#B3B3B3" />
          <form action="" method="get">
            <input
              className="general-search"
              type="text"
              placeholder="What do you want to play?"
            />
          </form>
        </div>
      </div>
      <div className="user-actions">
        <NotificationsNoneIcon htmlColor="#B3B3B3" />
        <div className="account-icon">
          <AccountCircleIcon htmlColor="white" fontSize="inherit" />
        </div>
      </div>
    </div>
  );
}

export default TopToolbar;
