import React from 'react';
import bagOne from "../assets/bag_1.png";

function Article({redText, productImage, productName, price}) {
    return (
        <article>
                  <span>
                      {redText}
                  </span>
            {productImage}
            <p>
                {productName}
            </p>
            <h4>
                {price}
            </h4>
        </article>
    );
}

export default Article;