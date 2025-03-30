import { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, MenuItem, DialogActions, Button } from "@mui/material";
import dayjs from "dayjs";
// import { PatientFormData, Patient } from "../types/patient";
import { PatientFormData,Patient } from "../../types/patient";

interface PatientFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: PatientFormData) => void;
  initialData?: Patient | null;
}

const PatientForm = ({ open, onClose, onSubmit, initialData }: PatientFormProps) => {
  const [formData, setFormData] = useState<PatientFormData>({
    full_name: "",
    age: 0,
    gender: "male",
    diagnosis: "",
    admission_date: "",
    discharged: false,
    room_number: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        admission_date: dayjs(initialData.admission_date).format("YYYY-MM-DD"),
      });
    } else {
      setFormData({
        full_name: "",
        age: 0,
        gender: "male",
        diagnosis: "",
        admission_date: "",
        discharged: false,
        room_number: "",
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{initialData ? "Sửa thông tin bệnh nhân" : "Thêm bệnh nhân"}</DialogTitle>
      <DialogContent>
        <TextField fullWidth label="Họ tên đầy đủ" name="full_name" value={formData.full_name} onChange={handleChange} className="mb-2" margin="normal"/>
        <TextField fullWidth label="Tuổi" name="age"  value={formData.age} onChange={handleChange} className="mb-2" margin="normal"/>
        <TextField select fullWidth label="Giới tính" name="gender" value={formData.gender} onChange={handleChange} className="mb-2">margin="normal"
          <MenuItem value="male">Nam</MenuItem>
          <MenuItem value="female">Nữ</MenuItem>
          <MenuItem value="other">Khác</MenuItem>
        </TextField>
        <TextField fullWidth label="Chuẩn đoán" name="diagnosis" value={formData.diagnosis} onChange={handleChange} className="mb-2" margin="normal"/>
        <TextField fullWidth label="Ngày vào viện" name="admission_date" type="date" value={formData.admission_date} onChange={handleChange} className="mb-2" margin="normal"InputLabelProps={{ shrink: true }} />
        <TextField fullWidth label="Phòng" name="room_number" value={formData.room_number} onChange={handleChange} className="mb-2" margin="normal"/>
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
