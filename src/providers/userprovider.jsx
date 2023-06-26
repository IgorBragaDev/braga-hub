import { createContext } from "react";
import { api } from "../service/index";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const onSubmitLogin = async (data) => {
    try {
      await api.post("/sessions", data).then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("authToken", res.data.token);
        window.localStorage.setItem("userId", res.data.user.id);

        navigate("/dashboard");
      });
      toast.success("Logado", { autoClose: 2000 });
    } catch (error) {
      toast.error("Algo deu errado", { autoClose: 2000 });
    }
  };
  const onSubmitRegister = async (data) => {
    console.log(data);
    try {
      await api.post("/users", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("A conta foi criada", { autoClose: 2000 });
      navigate("/");
    } catch (error) {
      toast.error("Deu erro", { autoClose: 2000 });
    }
  };

  function checkAuthentication() {
    const userToken = localStorage.getItem("authToken");

    if (userToken == null) {
      return false;
    } else {
      return true;
    }
  }

  function autoLogin() {
    useEffect(() => {
      console.log("Entrei")
      const isAuthenticated = checkAuthentication();

      if (isAuthenticated) {
        console.log("funfou");
        navigate("/dashboard");
      }
    });
  }

  return (
    <UserContext.Provider
      value={{ onSubmitLogin, onSubmitRegister, autoLogin }}
    >
      {children}
    </UserContext.Provider>
  );
};
