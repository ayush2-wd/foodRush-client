import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { FaUtensils } from 'react-icons/fa';

const UpdateMenu = () => {
    const item = useLoaderData();
    console.log(item);
        const axiosPublic = useAxiosPublic();
        const axiosSecure = useAxiosSecure();

        const navigate = useNavigate();
          const {
              register,
              handleSubmit,
              reset
            } = useForm()
          const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
          // console.log(image_hosting_key)
          const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`;
          
      
          const onSubmit = async (data) => {
            const formData = new FormData();
            formData.append('image', data.image[0]);
          
            try {
              console.log('Uploading image...');
              const hostingImg = await axiosPublic.post(image_hosting_api, formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
          
              if (hostingImg.data.success) {
                const menuItem = {
                  name: data.name,
                  category: data.category,
                  price: parseFloat(data.price),
                  recipe: data.recipe,
                  image: hostingImg.data.data.display_url, 
                };
                console.log('Updating menu item...');

                const postMenuItem = await axiosSecure.patch(`/menu/${item._id}`, menuItem);
          
                if (postMenuItem) {
                  reset();
                  Swal.fire({
                    position: 'between',
                    icon: 'success',
                    title: 'Your Menu item updated successfully',
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/dashboard/manage-items")
                }
              } else {
                console.error('Image upload failed:', hostingImg.data);
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Image upload failed!',
                });
              }
            } catch (error) {
              console.error('Error uploading image:', error);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              });
            }
          };
      
    return (
        <div className='w-full md:w-[870px] mx-auto'>
        <h2 className='text-2xl font-semibold my-4'>
         Update this 
        <span className='text-green '> Menu Item</span>
        </h2>
  
        {/* form */}
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 1st row */}
          <div className="form-control w-full my-6">
              <label className="label">
              <span className="label-text">Recipe Name<span className='text-red'>*</span></span>
              </label>
              <input type="text" defaultValue={item.name} {...register("name", { required: true })} placeholder="Recipe Name" className="input input-bordered w-full text-gray-400" />
          </div>
  
          {/* 2nd Row */}
          <div className='flex items-center gap-4'>
          {/* Categories */}
              <div className="form-control w-full my-6">
    <div className="label">
      <span className="label-text">Category<span className='text-red'>*</span></span>
    </div>
    <select className="select select-bordered" {...register("category", { required: true })} defaultValue={item.category}>
      <option disabled value="default">Select Category</option>
      <option value="salad">Salad</option>
      <option value="pizza">Pizza</option>
      <option value="dessert">Desserts</option>
      <option value="soup">Soup</option>
      <option value="drinks">Drinks</option>
      <option value="popular">Popular</option>
    </select>
              </div>
          {/* Price */}
              <div className="form-control w-full max-w-xs">
    <label className="label">
      <span className="label-text">Price<span className='text-red'>*</span></span>
    </label>
    <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full "  defaultValue={item.price}/>
              </div>
          </div>
  
          {/* 3rd Row */}
          <div>
              <div className="form-control">
              <div className="label">
              <span className="label-text">Recipe Details</span>
              </div>
              <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Add the complete Recipe Details for the customers" defaultValue={item.recipe}></textarea>
              </div>
          </div>
  
          {/* 4th Row */}
          <div className="form-control w-full my-6">
              <div className="label">
                  <span className="label-text">Pick a file</span>
              </div>
              <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
          </div>
          {/* button */}
          <button className='btn bg-green text-white px-6'>Update Item <FaUtensils/> </button>
      </form>
        </div>
      </div>
  )
}

export default UpdateMenu
