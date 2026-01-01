import React, {useState, useEffect}  from "react";
import axios from 'axios';
//import { positions } from "../data/data";

const Positions = () => {

  const [allPositions,setAllPositions]=useState([]);
  
    useEffect(()=>{
      axios.get("http://localhost:3001/allPositions").then((res)=>{
        console.log(res.data);
        setAllPositions(res.data);
      })
    },[])

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&amp;L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions && allPositions.length > 0 ? (
              allPositions.map((stock) => {
                const curVal = stock.price * stock.qty;
                const pnl = curVal - stock.avg * stock.qty;
                const profClass = pnl >= 0 ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";

                return (
                  <tr key={stock.name}>
                    <td>{stock.product}</td>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td className={profClass}>{pnl.toFixed(2)}</td>
                    <td className={dayClass}>{stock.day}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No positions available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
