import { NavLink, useNavigate } from "react-router-dom";

function Sidebar({ closeMenu }) {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));


  const linkStyle = ({ isActive }) =>
    `px-4 py-3 rounded-lg transition flex items-center gap-2 ${
      isActive
        ? "bg-white text-green-700 font-semibold"
        : "hover:bg-green-600 text-white"
    }`;



  const handleClick = () => {

    if(closeMenu){
      closeMenu();
    }

  };



  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    if(closeMenu){
      closeMenu();
    }

    navigate("/login");

  };



  return (

    <aside
      className="
      w-64
      bg-green-700
      text-white
      h-screen
      overflow-y-auto
      p-5
      flex
      flex-col
      "
    >


      <h1
        className="
        text-2xl
        font-bold
        mb-8
        text-center
        "
      >
        🌿 GreenCare Admin
      </h1>





      {/* Admin Profile */}

      <div
        className="
        bg-green-600
        rounded-xl
        p-4
        mb-8
        "
      >

        <h3 className="font-bold text-lg">
          👤 {user?.name || "Admin"}
        </h3>

        <p className="text-sm text-green-100">
          {user?.role || "admin"}
        </p>

        <p className="text-xs text-green-200 break-all">
          {user?.email}
        </p>

      </div>






      <nav className="flex flex-col gap-3 flex-1">



        <NavLink
          to="/admin"
          end
          onClick={handleClick}
          className={linkStyle}
        >
          📊 Dashboard
        </NavLink>





        <NavLink
          to="/admin/add-product"
          onClick={handleClick}
          className={linkStyle}
        >
          ➕ Add Product
        </NavLink>





        <NavLink
          to="/admin/products"
          onClick={handleClick}
          className={linkStyle}
        >
          📦 All Products
        </NavLink>





        <NavLink
          to="/admin/users"
          onClick={handleClick}
          className={linkStyle}
        >
          👤 Users
        </NavLink>

        <NavLink
  to="/admin/orders"
  onClick={handleClick}
  className={linkStyle}
>
  🛒 Orders
</NavLink>

        <NavLink
  to="/"
  onClick={handleClick}
  className="
  px-4
  py-3
  rounded-lg
  hover:bg-green-600
  transition
  flex
  items-center
  gap-2
  "
>
  🏠 View Website
</NavLink>



      </nav>






      <button
        onClick={logout}
        className="
        mt-5
        px-4
        py-3
        rounded-lg
        bg-red-600
        hover:bg-red-700
        transition
        text-left
        "
      >
        🚪 Logout
      </button>



    </aside>

  );

}


export default Sidebar;