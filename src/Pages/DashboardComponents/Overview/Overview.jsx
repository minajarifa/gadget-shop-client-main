import useAuth from "../../../hooks/useAuth"


export default function Overview() {
  const {user}=useAuth();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <h3 className="text-xl text-center">{user.email}</h3>
      <h3></h3>
      <h3></h3>
    </div>
  )
}
