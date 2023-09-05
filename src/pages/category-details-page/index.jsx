import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";

export default function CategoryDetailsPage() {
  const params = useParams();
  const api = useApi();
  const [categoryDetails, setCategoryDetails] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [services, setServices] = useState(null);

  useEffect(() => {
    api
      .get(`public/categories/getBySlug/${params.slug}`)
      .then((res) => {
        setCategoryDetails(res.data.data.category);
        setBlogs(res.data.data.blogs);
        setServices(res.data.data.services);
      })
      .catch((err) => {
        console.log("detaldan", err);
      });
  }, []);

  if (categoryDetails === null) {
    return (
      <>
        <h2 className="text-center">Loading...</h2>
      </>
    );
  }
  return (
    <div className="text-center">
      <h2>{categoryDetails.name}</h2>
      <p>{categoryDetails.description}</p>
    </div>
  );
}
