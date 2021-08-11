import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Breadcrums from "../components/Breadcrums";
import MainCard from "../components/MainCard";
import ProductPricing from "../components/ProductPricing";
import { API_URL } from "../helpers";

const ProductDetails = () => {
  const [productData, setProductData] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data.item);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <Breadcrums items={[{ name: "Category" }]} />
      </div>
      <div className="container">
        <MainCard>
          <div className="row mb-2">
            <div className="product-gallery">
              <img
                src={productData.picture}
                alt={productData.title}
                className="product-gallery__picture"
              />
            </div>
            <ProductPricing productData={productData} />
          </div>
          <div className="row">
            <div className="product-description">
              <h3 className="product-description__title">
                Descripción del producto
              </h3>
              <p className="product-description__text">
                {productData.description}
              </p>
            </div>
          </div>
        </MainCard>
      </div>
    </React.Fragment>
  );
};

let dummie = {
  id: "MLA908889816",
  title: "Soporte Para Apple Tv Todas Las Generaciones",
  price: { currency: "ARS", amount: 399 },
  picture: "http://http2.mlstatic.com/D_715202-MLA46114928600_052021-I.jpg",
  condition: "new",
  free_shipping: false,
  sold_quantity: 7,
  description:
    "Soporte Para Apple Tv Todas las Generaciones\n\n*Impreso en 3d con maquinas de muy buena calidad en plástico PLA no toxico de origen vegetal.\n*Color: NEGRO\n*Selecciona la GENERACION de tu AppleTv desde el menu.\n\n=======================================================================\nIMPORTANTE: Ten en cuenta que las fotos que ves son nuestras. Te mostramos exactamente lo que recibís con la inmejorable calidad que nos caracteriza. No te dejes engañar, hay mucha diferencia de calidad en los tiempos de impresión.\n\nMás de 11 años vendiendo en ecommerce. Más de 30000 compradores nos eligieron y recomendaron, 100 porciento de opiniones positivas. Fuimos elegidos por MercadoLibre como mejores vendedores de todo el sitio.\nAmantes de las series, del cine, de los dibujos animados y de los fichines.\nTambién fabricamos todo tipo de objetos que decoran y organizan el hogar.\nUtilizamos una amplia variedad de marcas líderes en filamentos de origen vegetal no toxico que nos permite jugar con una amplia variedad de colores.\nMotivados por ser originales, prácticos, únicos e innovadores gracias al avance de la tecnología 3D.\n\n============================== MARVIK 3D==============================\n\nBuscá nuestros productos en IG\n\n¡Tambien hacemos ventas por mayor!",
};

export default ProductDetails;
