import useAuth from "../../../../hooks/useAuth";
import { useForm } from "react-hook-form";


export default function AddProduct() {
 
  const { user,   } = useAuth();
console.log(user)
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  console.log(data)


  };
  return (
    <div>
      <h1 className="mb-12 text-2xl text-center "></h1>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
          {errors.name && <span className="text-red-600">This field is required</span>}
        </div>
       
        
       
       

        <div className="mt-6 form-control">
          <button type="submit" className="btn btn-primary">Register </button>
        </div>
      </form>
    </div>
  )
}
