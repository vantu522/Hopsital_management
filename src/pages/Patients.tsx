import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { getPatients, addPatient, updatePatient, deletePatient } from "../api/patientApi";
import PatientsList from "../components/Patients/PatientList";
import PatientForm from "../components/Patients/PatientForm";
import { Patient, PatientFormData } from "../types/patient";
import { toast } from "react-toastify";

const Patients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    const res = await getPatients();
    setPatients(res);
  };

  const handleOpen = (patient?: Patient) => {
    setSelectedPatient(patient || null);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSubmit = async (data: PatientFormData) => {
  try{
    if (selectedPatient) {
      await updatePatient(selectedPatient.id, data);
      toast.success("Cập nhật bệnh nhân thành công")
    } else {
      await addPatient(data);
      toast.success("Thêm bệnh nhân thành công")
    }
    fetchPatients();
    handleClose();
  } catch(error){
    toast.error("Có lỗi xảy ra!");
    console.error(error);
  }
  };

  const handleDelete = async (id: number) => {
   try{
      await deletePatient(id);
      fetchPatients();
      toast.success("Xoá bệnh nhân thành công")
    } catch(error){
      toast.error("Có lỗi xảy ra!");
      console.error(error);
    }
  };

  return (
    <div className="p-4 mt-16">
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>Thêm bệnh nhân</Button>
      <PatientsList patients={patients} onEdit={handleOpen} onDelete={handleDelete} />
      <PatientForm open={open} onClose={handleClose} onSubmit={handleSubmit} initialData={selectedPatient} />
    </div>
  );
};

export default Patients;
