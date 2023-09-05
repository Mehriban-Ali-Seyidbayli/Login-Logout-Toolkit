import { Link } from "react-router-dom";
import styles from "./category-box.module.css";

export default function CategoryBox(props) {
  return (
    <div className="card mb-4 rounded-3 shadow-sm">
      <div className="card-header py-3">
        <h4 className="my-0 fw-normal">{props.category.name}</h4>
      </div>
      <div className="card-body">
        <img
          src={props.category.image}
          className={styles.box_image}
          alt="image"
        />
        <Link
          to={"category/" + props.category.slug}
          className="w-100 btn btn-lg btn-outline-primary"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
