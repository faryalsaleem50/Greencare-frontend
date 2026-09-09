import { useEffect, useState } from "react";
import API from "../../api/axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/auth/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsers(res.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="
      bg-white
      p-4
      sm:p-6
      rounded-xl
      shadow-lg
      "
    >
      {/* Header */}

      <div
        className="
        flex
        flex-col
        sm:flex-row
        justify-between
        gap-4
        mb-6
        "
      >
        <h1
          className="
          text-2xl
          sm:text-3xl
          font-bold
          "
        >
          All Users
        </h1>

        <span
          className="
          bg-green-600
          text-white
          px-4
          py-2
          rounded-lg
          w-fit
          "
        >
          Total: {users.length}
        </span>
      </div>

      {/* Desktop Table */}

      <div
        className="
        hidden
        md:block
        overflow-x-auto
        "
      >
        <table
          className="
          w-full
          border-collapse
          "
        >
          <thead>
            <tr
              className="
              bg-green-600
              text-white
              "
            >
              <th className="p-3 text-left">
                Name
              </th>

              <th className="p-3 text-left">
                Email
              </th>

              <th className="p-3 text-left">
                Joined
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="
                border-b
                hover:bg-gray-50
                "
              >
                <td
                  className="
                  p-3
                  font-semibold
                  "
                >
                  {user.name}
                </td>

                <td className="p-3">
                  {user.email}
                </td>

                <td className="p-3">
                  {new Date(
                    user.createdAt
                  ).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}

      <div
        className="
        md:hidden
        space-y-4
        "
      >
        {users.map((user) => (
          <div
            key={user._id}
            className="
            border
            rounded-xl
            p-4
            shadow-sm
            "
          >
            <h2
              className="
              font-bold
              text-lg
              "
            >
              {user.name}
            </h2>

            <p
              className="
              text-gray-600
              mt-2
              break-all
              "
            >
              📧 {user.email}
            </p>

            <p
              className="
              text-gray-500
              mt-2
              "
            >
              Joined:{" "}
              {new Date(
                user.createdAt
              ).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;