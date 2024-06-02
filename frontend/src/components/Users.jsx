/* eslint-disable no-unused-vars */
import React from "react";
import { VITE_GET_ALL_USER } from "../config/constant";
const Users = () => {
  const [arr, setArr] = React.useState([]);

  React.useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const response = await fetch(VITE_GET_ALL_USER, {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    setArr(data.data);
  };

  return (
    <section className="tableClass flex items-center justify-center h-[90vh] ">
      <main>
        <table>
          <thead className="bg-violet-600 text-white rounded">
            <tr>
              <th className="p-4 ">User Id</th>
              <th className="p-4 ">Name</th>
              <th className="p-4 ">Photo</th>
              <th className="p-4 ">Role</th>
              <th className="p-4 ">Since</th>
            </tr>
          </thead>

          <tbody>
            {arr?.map((i) => (
              <tr key={i._id}>
                <td className="p-4 border ">{i._id}</td>
                <td className="p-4 border ">{i.name}</td>
                <td className="p-4 border ">null</td>
                <td className="p-4 border ">{i.role}</td>
                <td className="p-4 border ">{i.createdAt.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Users;
