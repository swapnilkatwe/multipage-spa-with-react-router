import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const param = useParams();

  return (
    <>
      <div>ProductDetails</div>
      <h1>{param.productId}</h1>
    </>
  );
}
