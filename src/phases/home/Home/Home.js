import React from "react";
import Product from "../../../shared/Componets/Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-5ff78a97-f4d3-4242-9344-c1f478aff592._CB428091778_QL85_V1_.jpg"
        alt="sffffffffffffg"
      />
      <div className="home__row">
        <Product
          sku="mans-2"
          title="The Lean startup: new constant Innovation"
          price={24}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          sku="mans-3"
          title="The Lean startup: new constant Innovation"
          price={38}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          sku="mans-1"
          title="The Lean startup: new constant Innovation"
          price={44}
          rating={5}
          image="https://m.media-amazon.com/images/I/81Pi4nhjlwL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          sku="mans-1"
          title="The Lean startup: new constant Innovation"
          price={44}
          rating={5}
          image="https://m.media-amazon.com/images/I/81Pi4nhjlwL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          sku="mans-3"
          title="The Lean startup: new constant Innovation"
          price={38}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
