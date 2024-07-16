import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../contexts/userContext";
import axios from "axios";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
  });
  const history = useHistory();
  const { changeUser } = useContext(UserContext);

  const submitFormData = (formData) => {
    axios
      .get("https://669617c50312447373c1057a.mockapi.io/api/v1/users", {
        params: {
          username: formData.username,
          password: formData.password,
        },
      })
      .then((res) => {
        const user = res.data[0];
        toast(`Merhaba ${user.username}. Tekrar hoş geldin...`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        changeUser(user);
        console.log(user);
        history.push("/comments");
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="w-3/4 mx-auto mt-6 border-2 p-4">
      <h2>Login</h2>
      <form className="mt-2" onSubmit={handleSubmit(submitFormData)}>
        <div>
          <label className="block" htmlFor="username">
            Username:
          </label>
          <input
            {...register("username", {
              required: true,
              minLength: {
                value: 3,
                message: "Kullanıcı adınızı tam girdiğinizdan emin olunuz.",
              },
            })}
            type="text"
            placeholder="Kullanıcı adınızı giriniz."
          />
          {errors.username && (
            <div className="border-2 border-red-500 bg-red-200 text-red-500 p-3 rounded-md">
              {errors.username.message}
            </div>
          )}
        </div>
        <div>
          <label className="block" htmlFor="username">
            Password:
          </label>
          <input
            {...register("password", {
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Şifrenizi doğru girdiğinizden emin olunuz.",
              },
            })}
            type="password"
            placeholder="Şifrenizi giriniz"
          />
          {errors.password && (
            <div className="border-2 border-red-500 bg-red-200 text-red-500 p-3 rounded-md">
              {errors.password.message}
            </div>
          )}
        </div>
        <button
          className="p-2 border-2 rounded-md text-slate-50 bg-blue-400 mt-4 cursor-pointer"
          disabled={!isValid}
          type="submit"
        >
          Giriş
        </button>
      </form>
    </div>
  );
}
