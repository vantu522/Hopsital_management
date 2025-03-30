import { List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import { motion } from "framer-motion";
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  MedicalServices as MedicalServicesIcon,
  CalendarToday as CalendarIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { text: "Quản lý bệnh nhân", icon: <PeopleIcon />, path: "/patients" },
  { text: "Quản lý bác sĩ", icon: <MedicalServicesIcon />, path: "/doctors" },
  { text: "Lịch khám", icon: <CalendarIcon />, path: "/appointments" },
  { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
];

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md fixed">
      <div className="p-4 text-xl font-semibold text-blue-600 border-b">
        Hospital Management
      </div>
      <List>
        {menuItems.map((item, index) => (
          <motion.div key={item.text} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block text-gray-700 px-4 py-2 ${isActive ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}`
              }
            >
              <ListItem component="div">
                <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </NavLink>
            {index === 2 && <Divider />}
          </motion.div>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
