import React from 'react';
import { Patient } from '../types/patient';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';

interface RecentPatientsProps {
  patients: Patient[];
}

const RecentPatients: React.FC<RecentPatientsProps> = ({ patients }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg shadow-sm p-4"
    >
      <h3 className="text-lg font-semibold mb-4">Recent Patients</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => (
            <motion.tr
              key={patient.id}
              whileHover={{ backgroundColor: 'rgba(25, 118, 210, 0.04)' }}
            >
              <TableCell>
                <div className="flex items-center">
                  <Avatar className="mr-2">{patient.full_name.charAt(0)}</Avatar>
                  {patient.full_name}
                </div>
              </TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell>{patient.gender}</TableCell>
              <TableCell>
                <Chip
                  label="Active"
                  color="success"
                  size="small"
                  className="text-xs"
                />
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
};

export default RecentPatients;