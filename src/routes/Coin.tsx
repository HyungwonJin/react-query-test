import React from 'react';
import {useParams} from "react-router-dom";

function Coin() {
  const {coinId} = useParams()

  return (
    <div>{coinId}</div>
  );
}

export default Coin;