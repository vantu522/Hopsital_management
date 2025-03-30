import { Dialog, DialogContent, DialogTitle, TextField, Button, DialogActions, Box } from "@mui/material";
import { Doctor, DoctorFormData } from "../../types/doctor";
import { useEffect, useState } from "react";

interface DoctorFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: DoctorFormData) => void;
  initialData?: Doctor | null;
}

const DoctorForm = ({ open, onClose, onSubmit, initialData }: DoctorFormProps) => {
  const [formData, setFormData] = useState<DoctorFormData>({
    full_name: "",
    specialization: "",
    phone_number: "",
    address: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({ ...initialData });
    } else {
      setFormData({
        full_name: "",
        specialization: "",
        phone_number: "",
        address: "",
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
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{initialData ? "Edit Doctor" : "Add New Doctor"}</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} mt={1}>
          <TextField fullWidth label="Họ tên đầy đủ" name="full_name" value={formData.full_name} onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Chuyên khoa" name="specialization" value={formData.specialization} onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Số điện thoại" name="phone_number" value={formData.phone_number} onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Địa chỉ" name="address" value={formData.address} onChange={handleChange} margin="normal" />
        </Box>
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

export default DoctorForm;
