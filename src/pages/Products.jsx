import { Link } from "react-router-dom";

const DummyData = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {DummyData.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/products/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
