import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import api from "../api.js";
import AddFruitForm from "./AddFruitForm";

const Fruits = () => {
  const [fruits, setFruits] = useState([]);

  //fetch fruits from the API
  const fetchFruits = async () => {
    try {
      const response = await api.get("/fruits");
      setFruits(response.data.fruits);
    } catch (error) {
      console.error("Error fetching fruits", error);
    }
  };

  //add a fruit to the API
  const addFruit = async (name) => {
    try {
      await api.post("/fruits", { name });
      fetchFruits();
    } catch (error) {
      console.error("Error adding fruit", error);
    }
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  const listStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "30px auto",
        textAlign: "center",
        backgroundColor: "#e3f2fd", 
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          color: "#4a148c", 
          fontFamily: "'Inter', sans-serif",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Fruits List 🍎
      </h2>

      <animated.ul style={listStyle}>
        {fruits.map((fruit, index) => (
          <li
            key={index}
            style={{
              margin: "10px 0",
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: "#ffffff",
              border: "1px solid #e6e6e6",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.05)",
              fontFamily: "'Roboto', sans-serif",
              fontSize: "16px",
              color: "#555",
            }}
          >
            {fruit.name}
          </li>
        ))}
      </animated.ul>

      <AddFruitForm addFruit={addFruit} />
    </div>
  );
};

export default Fruits;
