import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/admin/Sidebar";

function AdminLayout() {

  const [open, setOpen] = useState(false);


  return (

    <div className="min-h-screen bg-gray-100 flex">


      {/* Mobile Menu Button */}

      <button
        onClick={() => setOpen(!open)}
        className="
        md:hidden
        fixed
        top-4
        left-4
        z-50
        bg-green-700
        text-white
        px-4
        py-2
        rounded-lg
        shadow-lg
        "
      >
        {open ? "✕" : "☰"}
      </button>





      {/* Overlay Mobile */}

      {open && (

        <div

          onClick={() => setOpen(false)}

          className="
          md:hidden
          fixed
          inset-0
          bg-black/40
          z-30
          "

        ></div>

      )}






      {/* Sidebar */}

      <aside

        className={`
        fixed
        md:static
        top-0
        left-0
        h-screen
        z-40
        transition-transform
        duration-300

        ${
          open
          ? "translate-x-0"
          : "-translate-x-full md:translate-x-0"
        }

        `}

      >

        <Sidebar closeMenu={() => setOpen(false)} />

      </aside>







      {/* Main Content */}

      <main

        className="
        flex-1
        w-full
        min-w-0
        p-4
        sm:p-6
        md:p-8
        mt-14
        md:mt-0
        "

      >

        <Outlet />

      </main>



    </div>

  );

}


export default AdminLayout;