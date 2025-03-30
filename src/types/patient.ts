export interface Patient {
    id: number;
    full_name: string;
    age: number;
    gender: 'male' | 'female' | 'other';
    diagnosis: string;
    admission_date: string;
    discharged: boolean;
    room_number: string;
    created_at: string;
    updated_at: string;
  }
  
  export type PatientFormData = Omit<Patient, 'id' | 'created_at' | 'updated_at'>;