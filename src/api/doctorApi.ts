import axios from "axios";
import { Doctor, DoctorFormData } from "../types/doctor";
import axiosInstance from "../config/axios";
const API_URL = "http://127.0.0.1:8000/api/doctors";

export const getDoctors = async (): Promise<Doctor[]> => {
    const response = await axiosInstance.get(API_URL);
    return response.data.data;
}


export const addDoctor = async (data:DoctorFormData):Promise<Doctor>=>{
    const response = await axiosInstance.post(`${API_URL}/create`,data);
    return response.data.data;
}

export const updateDoctor = async (id: number, data: Partial<DoctorFormData>): Promise<Doctor> => {
    const response = await axiosInstance.put(`${API_URL}/update/${id}`, data);
    return response.data;
  };
  
  export const deleteDoctor = async (id: number): Promise<void> => {
    await axiosInstance.delete(`${API_URL}/delete/${id}`);
  };