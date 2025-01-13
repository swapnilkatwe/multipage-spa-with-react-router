import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <p>
        Go to List of Products. <Link to="products"> Product Link</Link>
      </p>
    </>
  );
}
