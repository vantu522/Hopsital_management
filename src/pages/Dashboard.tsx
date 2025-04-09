import React, { useEffect,useState} from 'react';
import { motion } from 'framer-motion';
import {
  People as PeopleIcon,
  MedicalServices as DoctorsIcon,
  EventAvailable as AppointmentsIcon,
  LocalHospital as HospitalIcon,
} from '@mui/icons-material';
import StatsCard from '../components/StatsCard';
import RecentPatients from '../components/RecentPatients';
import { Patient } from '../types/patient';
import axios from 'axios';

const Dashboard: React.FC = () => {
  // Mock data
  const [stats, setStats] = useState([
    { title: 'Total Patients', value: 0, icon: <PeopleIcon />, color: 'primary' },
    { title: 'Total Doctors', value: 0, icon: <DoctorsIcon />, color: 'secondary' },
    { title: 'Appointments', value: 0, icon: <AppointmentsIcon />, color: 'info' },
    { title: 'Available Beds', value: '0/0', icon: <HospitalIcon />, color: 'success' },
  ]);

  const recentPatients: Patient[] = [
    {
      id: 1,
      full_name: 'John Doe',
      age: 32,
      gender: 'male',
      diagnosis: 'Flu',
      admission_date: '2024-03-01',
      discharged: false,
      room_number: 'A101',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 2,
      full_name: 'Jane Smith',
      age: 28,
      gender: 'female',
      diagnosis: 'Migraine',
      admission_date: '2024-03-02',
      discharged: true,
      room_number: 'B203',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ];
  

  useEffect(()=>{
    const fetchStats = async() =>{
      try{
        const res = await axios.get('https://laravelresfulapi-production.up.railway.app/api/statistics');
        const data = res.data
        setStats([
          { title: 'Total Patients', value: data.total_patients, icon: <PeopleIcon />, color: 'primary' },
          { title: 'Total Doctors', value: data.total_doctors, icon: <DoctorsIcon />, color: 'secondary' },
          { title: 'Appointments', value: data.total_appointments, icon: <AppointmentsIcon />, color: 'info' },
          { title: 'Available Beds', value: data.available_beds, icon: <HospitalIcon />, color: 'success' },
        ]);
      } catch( error){
        console.error(error)
      }
    }
    fetchStats()
  },[])
  
  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <StatsCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentPatients patients={recentPatients} />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-lg font-semibold mb-4">Upcoming Appointments</h3>
            {/* Appointment list would go here */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;