import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { getAppointments, addAppointment, updateAppointment, deleteAppointment } from "../api/appointmentApi";
import AppointmentsList from "../components/Appointments/AppointmentList";
import AppointmentForm from "../components/Appointments/AppointmentForm";
import { Appointment, AppointmentFormData } from "../types/appointment";
import { toast } from "react-toastify";

const Appointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const res = await getAppointments();
    setAppointments(res);
  };

  const handleOpen = (appointment?: Appointment) => {
    setSelectedAppointment(appointment || null);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSubmit = async (data: AppointmentFormData) => {
  try{
    if (selectedAppointment) {
      await updateAppointment(selectedAppointment.id, data);
      toast.success("Cập nhật lịch hẹn thành công")
    } else {
      await addAppointment(data);
      toast.success("Thêm lịch hẹn thành công")
    }
    fetchAppointments();
    handleClose();
  } catch(error){
    toast.error("Thao tác thất bại")
    console.error(error)

  }
  };

  const handleDelete = async (id: number) => {
    await deleteAppointment(id);
    fetchAppointments();
  };

  return (
    <div className="p-4 mt-16">
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>Tạo lịch hẹn</Button>
      <AppointmentsList appointments={appointments} onEdit={handleOpen} onDelete={handleDelete} />
      <AppointmentForm open={open} onClose={handleClose} onSubmit={handleSubmit} initialData={selectedAppointment} />
    </div>
  );
};

export default Appointments;
