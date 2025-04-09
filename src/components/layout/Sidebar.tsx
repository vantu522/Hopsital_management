"use client"

import { List, ListItem, ListItemIcon, ListItemText, Divider, Box, Typography } from "@mui/material"
import { motion } from "framer-motion"
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  MedicalServices as MedicalServicesIcon,
  CalendarToday as CalendarIcon,
  Settings as SettingsIcon,
  LocalHospital as HospitalIcon,
} from "@mui/icons-material"
import { NavLink, useLocation } from "react-router-dom"

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/admin" },
  { text: "Quản lý bệnh nhân", icon: <PeopleIcon />, path: "/admin/patients" },
  { text: "Quản lý bác sĩ", icon: <MedicalServicesIcon />, path: "/admin/doctors" },
  { text: "Lịch khám", icon: <CalendarIcon />, path: "/admin/appointments" },
  { text: "Settings", icon: <SettingsIcon />, path: "/admin/settings" },
]

const Sidebar = () => {
  const location = useLocation()

  return (
    <Box
      className="w-64 h-screen bg-white shadow-xl fixed left-0 top-0 z-10 overflow-y-auto"
      sx={{
        borderRight: "1px solid rgba(0, 0, 0, 0.08)",
        background: "linear-gradient(to bottom, #ffffff, #f8faff)",
      }}
    >
      <Box
        className="p-5 border-b flex items-center gap-3"
        sx={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
          background: "linear-gradient(135deg, #3b82f6, #2563eb)",
        }}
      >
        <Box
          className="flex items-center justify-center rounded-full bg-white p-2"
          sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
        >
          <HospitalIcon sx={{ color: "#2563eb", fontSize: 24 }} />
        </Box>
        <Box>
          <Typography variant="h6" className="font-bold text-white m-0">
            MediCare
          </Typography>
          <Typography variant="caption" className="text-blue-100 opacity-90">
            Hospital Management
          </Typography>
        </Box>
      </Box>

      <List sx={{ padding: "12px 0" }}>
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path

          return (
            <motion.div key={item.text} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `block ${isActive ? "text-blue-600" : "text-gray-600"}`}
              >
                <ListItem
                  component="button"
                  sx={{
                    padding: "10px 16px",
                    margin: "4px 8px",
                    borderRadius: "8px",
                    backgroundColor: isActive ? "rgba(59, 130, 246, 0.08)" : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(59, 130, 246, 0.05)",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "40px",
                      color: isActive ? "#2563eb" : "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      "& .MuiTypography-root": {
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? "#2563eb" : "rgba(0, 0, 0, 0.7)",
                      },
                    }}
                  />
                </ListItem>
              </NavLink>

              {index === 2 && (
                <Divider
                  sx={{
                    margin: "8px 16px",
                    opacity: 0.6,
                  }}
                />
              )}
            </motion.div>
          )
        })}
      </List>

      <Box
        className="absolute bottom-0 left-0 w-full p-4 text-center text-xs text-gray-500"
        sx={{
          borderTop: "1px solid rgba(0, 0, 0, 0.08)",
          background: "linear-gradient(to top, rgba(248, 250, 255, 0.9), transparent)",
        }}
      >
        <Typography variant="caption">© 2025 MediCare System v1.2.0</Typography>
      </Box>
    </Box>
  )
}

export default Sidebar
