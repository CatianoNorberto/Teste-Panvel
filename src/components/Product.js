/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Product.css";

function Product() {
  return (
    <section>
      <div className="container">
        <div className="products">
          <button className="amount">
            <i class="far fa-th"></i>
            Quantidade
          </button>
          <button className="order">
            <i class="fal fa-repeat-alt"></i>
            Ordenar
          </button>
        </div>

        <div className="demonstration">
          <h3>SHAMPOOS E DERMOCOSMÉTICOS</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            quae, at, accusantium veniam provident eveniet perspiciatis
            voluptatum suscipit recusandae nemo quod explicabo excepturi. Ab,
            nostrum molestiae laboriosam rem facere tenetur.
          </p>
        </div>

        <div className="banner">
          <div className="banner-1">
            <div className="ban">
              <h3>COMO ESCOLHER O MELHOR SHAMPOO?</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                quae, at, accusantium veniam provident eveniet perspiciatis
                voluptatum suscipit recusandae nemo quod explicabo excepturi.
                Ab, nostrum molestiae laboriosam rem facere tenetur.
              </p>
            </div>
            <div>
              <h3>QUEDA DE CABELO NUNCA MAIS</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                quae, at, accusantium veniam provident eveniet perspiciatis
                voluptatum suscipit recusandae nemo quod explicabo excepturi.
                Ab, nostrum molestiae laboriosam rem facere tenetur.
              </p>
            </div>
          </div>

          <div className="banner-2">
            <div className="img-title">
              <h3>CONHEÇA NOSSOS SHAMPOOS</h3>
            </div>
            <img src="https://st2.depositphotos.com/1491329/8004/i/600/depositphotos_80042014-stock-photo-woman-touching-her-straight-hair.jpg" />
          </div>
        </div>

        <div className="text-message">
          <h3>ANTICASPA</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            quae, at, accusantium veniam provident eveniet perspiciatis
            voluptatum suscipit recusandae nemo quod explicabo excepturi. Ab,
            nostrum molestiae laboriosam rem facere tenetur.
          </p>
        </div>

        <footer>
          <p>
            Para mais informações sobre o combate à caspa, acesse o Dermaclub
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Product;
