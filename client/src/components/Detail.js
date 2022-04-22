// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getDetails } from "../redux/actions";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

// export default function Detail() {
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const detailRecipe = useSelector((state) => state.details);

//   useEffect(() => {
//     dispatch(getDetails(id));
//   }, [dispatch, id]);
// }
// return (

//     <div>{detailRecipe.length === 0 ? (
//      <p>Loading...</p>
// ) : (
//     detailRecipe.length > 0 && (
//             <div>
//                 <h1>{ detailRecipe[0].name}</h1>
//         </div>

//     )}
