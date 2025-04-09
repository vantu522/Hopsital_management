import { Patient, PatientFormData } from "../types/patient";
import axiosInstance from "../config/axios";
const API_URL = "/patients"; // Thay URL này bằng backend của bạn

export const getPatients = async (): Promise<Patient[]> => {
  const response = await axiosInstance.get(API_URL);
  return response.data.data;
};

export const addPatient = async (data: PatientFormData): Promise<Patient> => {
  const response = await axiosInstance.post(`${API_URL}/create`, data);
  return response.data.data;
};

export const updatePatient = async (id: number, data: Partial<PatientFormData>): Promise<Patient> => {
  const response = await axiosInstance.put(`${API_URL}/update/${id}`, data);
  return response.data;
};

export const deletePatient = async (id: number): Promise<void> => {
  await axiosInstance.delete(`${API_URL}/delete/${id}`);
};
