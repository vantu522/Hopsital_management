import { AppBar, Toolbar, Typography, IconButton, Badge, Avatar } from "@mui/material";
import { Notifications as NotificationsIcon, Menu as MenuIcon } from "@mui/icons-material";

const Topbar: React.FC = () => {
  return (
    <AppBar position="fixed" className="bg-white text-gray-800 shadow-sm ml-64">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="text-white-600">
          Hospital Dashboard
        </Typography>
        <div className="flex items-center space-x-4">
          <IconButton color="inherit" className="right-4">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar alt="Admin" src="/avatar.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
