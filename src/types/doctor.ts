export interface Doctor{
    id:number,
    full_name:String,
    specialization:String,
    phone_number:String,
    address:String,
    created_at:String,
    updated_at:String
}

export type DoctorFormData = Omit<Doctor,'id' | 'created_at' | 'updated_at'>