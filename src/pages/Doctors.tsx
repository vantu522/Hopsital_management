import { useEffect, useState } from "react";
import { Doctor, DoctorFormData } from "../types/doctor";
import { getDoctors,updateDoctor,deleteDoctor, addDoctor } from "../api/doctorApi";
import { Button, } from "@mui/material";
import DoctorForm from "../components/Doctors/DoctorForm";
import DoctorsList from "../components/Doctors/DoctorList";
import {toast} from 'react-toastify'

const Doctors = () =>{
    const [doctors,setDoctors] = useState<Doctor[]>([]);
    const [open,setOpen] = useState(false);
    const [selectedDoctor, setselectedDoctor]= useState<Doctor| null>(null);

    useEffect(()=>{
        fetchDoctors();
    },[]);

    const fetchDoctors = async () =>{
        const res = await getDoctors();
        setDoctors(res);
    }

    const handleOpen = (doctor?: Doctor) => {
        setselectedDoctor(doctor || null);
        setOpen(true);
      };
    
      const handleClose = () => setOpen(false);
    
      const handleSubmit = async (data: DoctorFormData) => {
        try {
          if (selectedDoctor) {
            await updateDoctor(selectedDoctor.id, data);
            toast.success("Cập nhật bác sĩ thành công");
          } else {
            await addDoctor(data);
            toast.success("Thêm bác sĩ thành công");
          }
          fetchDoctors();
          handleClose();
        } catch (error) {
          toast.error("Có lỗi xảy ra!");
          console.error(error);
        }
      };
      
    
      const handleDelete = async (id: number) => {
        try {
          await deleteDoctor(id);
          toast.success("Xoá bác sĩ thành công");
          fetchDoctors();
        } catch (error) {
          toast.error("Xoá thất bại");
          console.error(error);
        }
      };
      

    return (
        <div className="p-4 mt-16">
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>Thêm bác sĩ</Button>
      <DoctorsList doctors={doctors} onEdit={handleOpen} onDelete={handleDelete} />
      <DoctorForm open={open} onClose={handleClose} onSubmit={handleSubmit} initialData={selectedDoctor} />
    </div>
    )

}

export default Doctors;