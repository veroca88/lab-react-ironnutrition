import React from "react";

const FoodBox = ({ name, calories, image, id, handleChange, addToItemList }) => {
  return (
      <article className="box media container">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons quantity">
            <div className="control">
              <input onChange={handleChange} className="input" type="number" defaultValue="1" />
            </div>
            <div className="control">
              <button id={id} onClick={addToItemList} className="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    );
  }

export default FoodBox;
