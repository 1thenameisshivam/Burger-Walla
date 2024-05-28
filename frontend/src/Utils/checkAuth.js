import Cookies from "js-cookie";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
const checkAuth = () => {
  const token = Cookies.get("token");
  if (token) {
    return true;
  } else {
    toast.error("You are not Logged In", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    return redirect("/login");
  }
};

export default checkAuth;
