import React, { useState } from "react";
import { connect } from "react-redux";
import Input from "./../components/input/input";
import { addSpecs, removeSpecs } from "./../actions";

const initialVales = {
  price: "",
  specs: "",
  colour: "",
  capacity: "",
};

function MainContainer(props) {
  const { results } = props;
  const [form, setForm] = useState(initialVales);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(initialVales);
    props.addSpecs(form);
  };
  return (
    <div>
      <h1>Mobile Arena</h1>
      <form
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label>Add the specs:</label>
        <Input
          id="price"
          className="input"
          type="text"
          name="price"
          placeholder="enter price"
          value={form.price}
          onChange={handleInputChange}
        />
        <Input
          id="specs"
          className="input"
          type="specs"
          name="specs"
          placeholder="enter specs"
          value={form.specs}
          onChange={handleInputChange}
        />
        <Input
          id="colour"
          className="input"
          type="colour"
          name="colour"
          placeholder="enter colour"
          value={form.colour}
          onChange={handleInputChange}
        />
        <Input
          id="capacity"
          className="input"
          type="capacity"
          name="capacity"
          placeholder="enter capacity"
          value={form.capacity}
          onChange={handleInputChange}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      <div className="card-container">
        {results?.map((val, i) => {
          const { price, specs, colour, capacity } = val;
          return (
            <ul className="card" key={i}>
              <li>{price}</li>
              <li>{specs}</li>
              <li>{colour}</li>
              <li>{capacity}</li>
            </ul>
          );
        })}
      </div>
      <br />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
    results: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSpecs: (form) => dispatch(addSpecs(form)),
    removeSpecs: () => dispatch(removeSpecs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
