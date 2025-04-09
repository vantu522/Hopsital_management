import { useNavigate } from "react-router-dom";
import axiosInstance from "../../config/axios";

const LogoutButton = () =>{
    const navigate = useNavigate();

    const handleLogout = async () =>{
        try{
            const token = localStorage.getItem("token");
            await axiosInstance.post("/logout",{},{
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            });

            localStorage.removeItem("token")
            navigate('/login')
        } catch(err){
            console.error("Logout faild", err)
        }
    }

    return (
        <button
            onClick={handleLogout}
             className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
            Đăng xuất

        </button>
    )
}

export default LogoutButton