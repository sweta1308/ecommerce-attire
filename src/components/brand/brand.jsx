import { useNavigate } from "react-router";
import {
  hm,
  sassafras,
  levis,
  urbanic,
  zara,
  dolce,
  roadster,
  tokyoTalkies,
} from "../../assets";
import { useFilters } from "../../context/filterContext";
import "./brand.css";

export const Brand = () => {
  const { filterDispatch } = useFilters();
  const navigate = useNavigate();
  return (
    <>
      <h2>Brands ✨</h2>
      <div className="brand">
        <img
          src={hm}
          alt="hm"
          onClick={() => {
            filterDispatch({ type: "clear_filters" });
            filterDispatch({ type: "filter_by_brands", payload: "H&M" });
            navigate("/products");
          }}
        />
        <img
          src={sassafras}
          alt="sassafras"
          onClick={() => {
            filterDispatch({ type: "clear_filters" });
            filterDispatch({ type: "filter_by_brands", payload: "Sassafras" });
            navigate("/products");
          }}
        />
        <img
          src={levis}
          alt="levis"
          onClick={() => {
            filterDispatch({ type: "clear_filters" });
            filterDispatch({ type: "filter_by_brands", payload: "Levis" });
            navigate("/products");
          }}
        />
        <img
          src={urbanic}
          alt="urbanic"
          onClick={() => {
            filterDispatch({ type: "clear_filters" });
            filterDispatch({ type: "filter_by_brands", payload: "Urbanic" });
            navigate("/products");
          }}
        />
        <img
          src={zara}
          alt="zara"
          onClick={() => {
            filterDispatch({ type: "clear_filters" });
            filterDispatch({ type: "filter_by_brands", payload: "Zara" });
            navigate("/products");
          }}
        />
        <img
          src={dolce}
          alt="dolce"
          onClick={() => {
            filterDispatch({ type: "clear_filters" });
            filterDispatch({
              type: "filter_by_brands",
              payload: "Dolce & Gabbana",
            });
            navigate("/products");
          }}
        />
        <img
          src={roadster}
          alt="roadster"
          onClick={() => {
            filterDispatch({ type: "clear_filters" });
            filterDispatch({ type: "filter_by_brands", payload: "Roadster" });
            navigate("/products");
          }}
        />
        <img
          src={tokyoTalkies}
          alt="tokyoTalkies"
          onClick={() => {
            filterDispatch({ type: "clear_filters" });
            filterDispatch({
              type: "filter_by_brands",
              payload: "Tokyo Talkies",
            });
            navigate("/products");
          }}
        />
      </div>
    </>
  );
};
