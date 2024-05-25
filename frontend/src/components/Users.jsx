/* eslint-disable no-unused-vars */
import React from "react";

const Users = () => {
  const arr = [1, 2, 3, 4];

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
            {arr.map((i) => (
              <tr key={i}>
                <td className="p-4 border ">#sdkfsdfdsf</td>
                <td className="p-4 border ">Abhi</td>
                <td className="p-4 border ">
                  <img src={""} alt="User" />
                </td>
                <td className="p-4 border ">Admin</td>
                <td className="p-4 border ">{"24-23-2023"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Users;
