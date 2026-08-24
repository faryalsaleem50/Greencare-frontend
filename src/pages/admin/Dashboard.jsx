import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getProducts();
    getUsers();
  }, []);



  const getProducts = async () => {

    try {

      const res = await axios.get(
        "https://greencare-backend.vercel.app/api/products"
      );

      setProducts(res.data.products);

    } catch (error) {

      console.log(error);

    }

  };



  const getUsers = async () => {

    try {

      const res = await axios.get(
        "https://greencare-backend.vercel.app/api/auth/users"
      );

      setUsers(res.data.users);


    } catch (error) {

      console.log(error);


    } finally {

      setLoading(false);

    }

  };



  const categories = [
    ...new Set(products.map((item)=>item.category))
  ];



  if(loading){

    return (

      <h1 className="
      text-3xl 
      font-bold
      ">
        Loading Dashboard...
      </h1>

    );

  }



  return (

    <div>


      <h1 className="
      text-3xl 
      sm:text-4xl 
      font-bold 
      mb-8
      ">
        Dashboard
      </h1>





      <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-4 
      gap-6
      ">



        <div className="
        bg-white 
        p-6 
        rounded-xl 
        shadow 
        hover:shadow-lg 
        transition
        ">

          <h2 className="text-gray-500">
            Total Products
          </h2>

          <p className="
          text-4xl 
          font-bold 
          text-green-700 
          mt-3
          ">
            {products.length}
          </p>

        </div>





        <div className="
        bg-white 
        p-6 
        rounded-xl 
        shadow 
        hover:shadow-lg 
        transition
        ">

          <h2 className="text-gray-500">
            Categories
          </h2>

          <p className="
          text-4xl 
          font-bold 
          text-green-700 
          mt-3
          ">
            {categories.length}
          </p>

        </div>





        <div className="
        bg-white 
        p-6 
        rounded-xl 
        shadow 
        hover:shadow-lg 
        transition
        ">

          <h2 className="text-gray-500">
            Orders
          </h2>

          <p className="
          text-4xl 
          font-bold 
          text-green-700 
          mt-3
          ">
            0
          </p>

        </div>





        <div className="
        bg-white 
        p-6 
        rounded-xl 
        shadow 
        hover:shadow-lg 
        transition
        ">

          <h2 className="text-gray-500">
            Users
          </h2>

          <p className="
          text-4xl 
          font-bold 
          text-green-700 
          mt-3
          ">
            {users.length}
          </p>

        </div>




      </div>


    </div>

  );

}


export default Dashboard;