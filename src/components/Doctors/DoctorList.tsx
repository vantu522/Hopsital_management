import { Paper, Table, TableCell, TableContainer, TableHead, TableRow,Button,TableBody } from "@mui/material";
import { Doctor } from "../../types/doctor";
import { useState } from "react";
import {Dialog,DialogTitle,DialogContent,DialogActions} from "@mui/material";

interface DoctorsListProps{
    doctors:Doctor[];
    onEdit: (doctor:Doctor) => void;
    onDelete: (id:number) =>void;
}

const DoctorsList = ({doctors,onEdit,onDelete}:DoctorsListProps)=>{
     const [openConfirm, setOpenConfirm] = useState(false);
      const [selectedId, setSelectedId] = useState<number | null>(null);
    
      const handleOpenConfirm = (id: number) => {
        setSelectedId(id);
        setOpenConfirm(true);
      };
    
      const handleCloseConfirm = () => {
        setSelectedId(null);
        setOpenConfirm(false);
      };
    
      const handleConfirmDelete = () => {
        if (selectedId !== null) {
          onDelete(selectedId);
        }
        handleCloseConfirm();
      };
    return (
        <>
          <TableContainer component={Paper} className="mt-4">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Họ tên</TableCell>
                        <TableCell>Chuyên khoa</TableCell>
                        <TableCell>Số điện thoại</TableCell>
                        <TableCell>Địa chỉ</TableCell>
                        <TableCell>Hành động</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {doctors.map((doctor)=>(
                        <TableRow key={doctor.id}>
                            <TableCell>{doctor.full_name}</TableCell>
                            <TableCell>{doctor.specialization}</TableCell>
                            <TableCell>{doctor.phone_number}</TableCell>
                            <TableCell>{doctor.address}</TableCell>
                            <TableCell>
                                <Button variant="outlined" color="warning" onClick={()=>onEdit(doctor)} >Sửa</Button>
                                <Button variant="outlined" color="error" onClick={()=>handleOpenConfirm(doctor.id)}>Xoá</Button>
                            </TableCell>


                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </TableContainer>
       {/* Popup xác nhận xóa */}
       <Dialog open={openConfirm} onClose={handleCloseConfirm}>
        <DialogTitle>Xác nhận xoá</DialogTitle>
        <DialogContent>
          Bạn có chắc chắn muốn xoá bác sĩ này không?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirm} color="primary">Huỷ</Button>
          <Button onClick={handleConfirmDelete} color="secondary">Xoá</Button>
        </DialogActions>
      </Dialog>
        
        </>
      
        
    )
} 

export default DoctorsList;