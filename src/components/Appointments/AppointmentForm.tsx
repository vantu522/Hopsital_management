import { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, MenuItem, DialogActions, Button } from "@mui/material";
import { Appointment, AppointmentFormData } from "../../types/appointment";
import { getDoctors } from "../../api/doctorApi";
import { getPatients } from "../../api/patientApi";
import { Doctor } from "../../types/doctor";
import { Patient } from "../../types/patient";
interface AppointmentFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: AppointmentFormData) => void;
  initialData?: Appointment | null;
}

const PatientForm = ({ open, onClose, onSubmit, initialData }: AppointmentFormProps) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
   doctor_id:0,
   patient_id:0,
   appointment_date:",",
   status:"pending",
  });

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
      });
    } else {
      setFormData({
        doctor_id:0,
        patient_id:0,
        appointment_date:",",
        status:"pending",
      });
    }
    fetchDoctors(),
    fetchPatients()
  }, [initialData]);

  const fetchDoctors = async () => {
    const res = await getDoctors();
    setDoctors(res);
  };

  const fetchPatients = async () => {
    const res = await getPatients();
    setPatients(res);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{initialData ? "Sửa thông tin lịch hẹn" : "Tạo lịch hẹn"}</DialogTitle>
      <DialogContent>
       <TextField
        select
        label="Bác sĩ"
        name="doctor_id"
        fullWidth
        margin="dense"
        value={formData.doctor_id}
        onChange={handleChange}
       >{doctors.map((doctor)=>(
        <MenuItem key={doctor.id} value={doctor.id}>
            {doctor.full_name}
        </MenuItem>
       ))}

       </TextField>
       <TextField
        select
        label="Bệnh nhân"
        name="patient_id"
        fullWidth
        margin="dense"
        value={formData.patient_id}
        onChange={handleChange}
       >{patients.map((patient)=>(
        <MenuItem key={patient.id} value={patient.id}>
            {patient.full_name}
        </MenuItem>
       ))}

       </TextField>

       <TextField
          label="Lịch khám"
          name="appointment_date"
          type="datetime-local"
          fullWidth
          margin="dense"
          value={formData.appointment_date}
          onChange={handleChange}
        />

        <TextField
        select
        label="Trạng thái"
        name="status"
        fullWidth
        margin="dense"
        value={formData.status}
        onChange={handleChange}
        >
             {["pending", "confirmed", "canceled", "completed"].map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </TextField>

      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {initialData ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PatientForm;
