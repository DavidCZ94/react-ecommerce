import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate  = useNavigate();

  useEffect(() => {
    navigate('/home/all');
  }, [])
  


  return (
    <>
      <h1>NotFound</h1>
    </>
  )
}

export default NotFound
