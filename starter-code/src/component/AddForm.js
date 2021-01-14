import React from "react"

const AddForm = ({handleChange, handleSubmit}) => {
  return (
    <form className="addFormBox" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input onChange={handleChange}
              className="input .input-form"
              type="text"
              name="name"
              placeholder="Tag Name"
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input onChange={handleChange}
              className="input .input-form"
              type="number"
              name="calories"             
              placeholder="100"
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input onChange={handleChange}
              id="image-file"
              className="input .input-form"
              type="file" 
              name="image"
              placeholder="Load image"
              required
            />
          </div>
        </div>
        <button type="submit">Add Food</button>

    </form>
  );
}

export default AddForm