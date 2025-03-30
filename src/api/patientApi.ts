import { Patient, PatientFormData } from "../types/patient";
import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/patients"; // Thay URL này bằng backend của bạn

export const getPatients = async (): Promise<Patient[]> => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

export const addPatient = async (data: PatientFormData): Promise<Patient> => {
  const response = await axios.post(`${API_URL}/create`, data);
  return response.data.data;
};

export const updatePatient = async (id: number, data: Partial<PatientFormData>): Promise<Patient> => {
  const response = await axios.put(`${API_URL}/update/${id}`, data);
  return response.data;
};

export const deletePatient = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/delete/${id}`);
};
