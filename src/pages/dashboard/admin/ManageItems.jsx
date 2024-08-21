import React from 'react';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  };

  return (
    <div className="w-full md:w-[870px] px-4 mx-auto my-8">
      <h2 className="text-3xl font-bold my-6 text-center text-gray-700">
        Manage All 
        <span className="text-orange-500"> Menu Items</span>
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="table-auto w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-gray-600">#</th>
              <th className="py-3 px-4 text-gray-600">Image</th>
              <th className="py-3 px-4 text-gray-600">Name</th>
              <th className="py-3 px-4 text-gray-600">Price</th>
              <th className="py-3 px-4 text-gray-600">Edit</th>
              <th className="py-3 px-4 text-gray-600">Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id} className="border-b">
                <td className="py-4 px-4 text-gray-700">{index + 1}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-700">{item.name}</td>
                <td className="py-4 px-4 text-gray-700">${item.price}</td>
                <td className="py-4 px-4">
                  <Link to={`/dashboard/update-menu/${item._id}`}>
                    <button className="btn bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
                      <FaEdit />
                    </button>
                  </Link>
                </td>
                <td className="py-4 px-4">
                  <button
                    className="btn btn-ghost text-red  "
                    onClick={() => handleDeleteItem(item)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
