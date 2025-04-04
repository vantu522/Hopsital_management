import { Navigate,useLocation } from "react-router-dom";

interface Props{
    children: React.ReactNode
}

const RequireAuth: React.FC<Props> = ({children} ) =>{
    const location = useLocation();
    const isLoggedIn = !!localStorage.getItem("token")

    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    
      return <>{children}</>;
}

export default RequireAuth