import axiosInstance from "../config/axios";
import { Appointment, AppointmentFormData } from "../types/appointment";

const API_URL = "/appointments";

export const getAppointments = async (): Promise<Appointment[]> => {
    const response = await axiosInstance.get(API_URL);
    return response.data.data;
};

export const addAppointment = async (data: AppointmentFormData): Promise<Appointment> => {
    const response = await axiosInstance.post(`${API_URL}/create`, data);
    return response.data.data;
};

export const updateAppointment = async (id: number, data: Partial<AppointmentFormData>): Promise<Appointment> => {
    const response = await axiosInstance.put(`${API_URL}/update/${id}`, data);
    return response.data.data;
};

export const deleteAppointment = async (id: number): Promise<void> => {
    await axiosInstance.delete(`${API_URL}/${id}`);
};
