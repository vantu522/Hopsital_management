import { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Appointment } from "../../types/appointment";

interface Props {
  appointments: Appointment[];
  onEdit: (appointment: Appointment) => void;
  onDelete: (id: number) => void;
}

const AppointmentsList: React.FC<Props> = ({ appointments, onEdit, onDelete }) => {
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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Bác sĩ</TableCell>
              <TableCell>Bệnh nhân</TableCell>
              <TableCell>Lịch khám</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.id}</TableCell>
                <TableCell>{appointment.doctor?.full_name || "N/A"}</TableCell>
                <TableCell>{appointment.patient?.full_name || "N/A"}</TableCell>
                <TableCell>{appointment.appointment_date}</TableCell>
                <TableCell>{appointment.status}</TableCell>
                <TableCell>
                <Button variant="outlined" color="warning" onClick={()=>onEdit(appointment)} >Sửa</Button>
                <Button variant="outlined" color="error" onClick={()=>handleOpenConfirm(appointment.id)}>Xoá</Button>
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
          Bạn có chắc chắn muốn xoá lịch hẹn này không?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirm} color="primary">Huỷ</Button>
          <Button onClick={handleConfirmDelete} color="secondary">Xoá</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AppointmentsList;
