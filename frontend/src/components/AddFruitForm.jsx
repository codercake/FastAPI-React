import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const AddFruitForm = ({ addFruit }) => {
  const [fruitName, setFruitName] = useState("");

  const formStyle = useSpring({
    from: { transform: "translateY(-10px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fruitName.trim()) {
      addFruit(fruitName);
      setFruitName("");
    }
  };

  return (
    <animated.form onSubmit={handleSubmit} style={formStyle}>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          value={fruitName}
          onChange={(e) => setFruitName(e.target.value)}
          placeholder="Enter fruit name"
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            outline: "none",
            fontSize: "14px",
            fontFamily: "'Roboto', sans-serif",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#6a1b9a",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          ADD 🍓
        </button>
      </div>
    </animated.form>
  );
};

export default AddFruitForm;
