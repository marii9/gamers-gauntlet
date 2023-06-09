import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { QUERY_SCORES } from "../utils/queries";
import { useMutation, useQuery } from "@apollo/client";
import "../assets/css/final.css";
function FinalScreen() {
  const navigate = useNavigate();
  // const score = useSelector((state) => state.score);
  const { loading, error, data } = useQuery(QUERY_SCORES);
  console.log(loading);
  console.log(data ?? []);
  if (loading) {
    return <p>Loading...</p>;
  }
  const score = data.scores[data.scores.length - 1].score;

  return (
    <div className="d-flex flex-column">
      <div className="spacer2"></div>
      <h3 className="text-center score">Final Score: <span className="score-number">{score}!</span></h3>
      <div className="spacer2"></div>
      <div className="select-buttons">
        <button
          onClick={() => {
            navigate("/profile");
          }}
          className="btn profile"
        >
          Profile
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn home"
        >
          Home
        </button>
      </div>
    </div>
  );
}
export default FinalScreen;
