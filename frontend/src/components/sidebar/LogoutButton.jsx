import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
          onClick={logout}
        />
      ) : (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner mr-2"></span>
          <span className="text-white">Logging out...</span>
        </div>
      )}
    </div>
  );
};
export default LogoutButton;
