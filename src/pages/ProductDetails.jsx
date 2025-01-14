import { useParams, Link } from "react-router-dom";

export default function ProductDetails() {
  const param = useParams();

  return (
    <>
      <div>ProductDetails</div>
      <h1>{param.productId}</h1>
      <p>
      <Link to=".." relative="path">Back</Link>
      </p>
    </>
  );
}
