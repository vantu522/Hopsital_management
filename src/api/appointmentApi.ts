import axios from "axios";
import { Appointment, AppointmentFormData } from "../types/appointment";
const API_URL = "http://127.0.0.1:8000/api/appointments"

export const getAppointments= async(): Promise<Appointment[]> =>{
    const response = await axios.get(API_URL);
    return response.data.data;
}

export const addAppointment = async(data:AppointmentFormData):Promise<Appointment> =>{
    const response = await axios.post(`${API_URL}/create`,data);
    return response.data.data;
}

export const updateAppointment = async(id:number, data:Partial<AppointmentFormData>):Promise<Appointment> =>{
    const response = await axios.put(`${API_URL}/update/${id}`,data);
    return response.data;
}

export const deleteAppointment = async(id:number): Promise<void> =>{
    await axios.delete(`${API_URL}/${id}`);
} 