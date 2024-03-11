import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const Main = ({setDetails}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("https://api.thecatapi.com/v1/images/search?limit=10").then(
      ({ data }) => setProducts(data)
    );
  }, []);

  return (
    <>
      <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
        <div class="container">
          <div class="flex flex-wrap -mx-4">
            {products.map((el) => (
              <Card product={el} setDetails={setDetails} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
