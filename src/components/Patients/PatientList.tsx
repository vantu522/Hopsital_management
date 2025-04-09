import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button,Dialog,DialogTitle,DialogContent,DialogActions } from "@mui/material";
import dayjs from "dayjs";
import { Patient } from "../../types/patient";
import { useState } from "react";
interface PatientsListProps {
  patients: Patient[];
  onEdit: (patient: Patient) => void;
  onDelete: (id: number) => void;
}

const PatientsList = ({ patients, onEdit, onDelete }: PatientsListProps) => {
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


        const getGenderLabel = (gender: string): string => {
          switch (gender) {
            case 'male':
              return 'Nam';
            case 'female':
              return 'Nữ';
            case 'others':
              return 'Khác';
           
            default:
              return gender;
          }
        };
  return (
    <>
      <TableContainer component={Paper} className="mt-4">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Họ tên</TableCell>
            <TableCell>Tuổi</TableCell>
            <TableCell>Giới tính</TableCell>
            <TableCell>Chuẩn đoán</TableCell>
            <TableCell>Ngày nhập viện</TableCell>
            <TableCell>Phòng</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell>{patient.full_name}</TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell>{getGenderLabel(patient.gender)}</TableCell>
              <TableCell>{patient.diagnosis}</TableCell>
              <TableCell>{dayjs(patient.admission_date).format("DD/MM/YYYY")}</TableCell>
              <TableCell>{patient.room_number}</TableCell>
              <TableCell>
                <Button variant="outlined" color="warning" onClick={()=>onEdit(patient)} >Sửa</Button>
                <Button variant="outlined" color="error" onClick={()=>handleOpenConfirm(patient.id)}>Xoá</Button>
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
          Bạn có chắc chắn muốn xoá bệnh nhân này không?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirm} color="primary">Huỷ</Button>
          <Button onClick={handleConfirmDelete} color="secondary">Xoá</Button>
        </DialogActions>
      </Dialog>
    </>
  
  );
};

export default PatientsList;
