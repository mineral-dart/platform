import useAuthUser from "../hooks/auth/useAuthUser";
import Navbar from "../components/Navbar";

export default () => {
  const {data} = useAuthUser()
  return (
    <>
      <Navbar />
      <h1>HELLO WORLD</h1>
    </>
  )
}