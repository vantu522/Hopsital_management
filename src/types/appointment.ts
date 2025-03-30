import { Doctor } from "./doctor";
import { Patient } from "./patient";
export interface Appointment {
    id: number;
    doctor_id: number;
    patient_id: number;
    appointment_date: string;
    status: "pending" | "confirmed" | "canceled" | "completed";
    doctor?: Doctor;
    patient?: Patient;
    created_at:String;
    updated_at:String;
  }


export type AppointmentFormData = Omit<Appointment,'id' | 'created_at' | 'updated_at'>
