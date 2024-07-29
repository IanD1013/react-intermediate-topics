import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams(); // can extract parameter values from the url
  const [searchParams, setSearchParams] = useSearchParams(); // can access and update query string parameters
  const location = useLocation(); // can access the current location object

  return <p>User</p>;
};

export default UserDetailPage;
