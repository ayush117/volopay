import React, { useEffect, useState } from "react";
import img from "../Data/fire.png";
import Card from "react-bootstrap/Card";
import data from "../Data/data";

const SubImg = "data:image/png;base64,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";

const Cards = ({ type }) => {
  const [ndata, setNdata] = useState(data);

  useEffect(() => {
    const fetchData = () => {
      try {
        setTimeout(() => setNdata(data), 3000);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const newData = data ? data.filter((e) => {
      if (e.card_type === "burner" && type === 1) {
        return true;
      } else if (e.card_type === "subcription" && type === 2) {
        return true;
      } else if (type === 0) {
        return true;
      } else {
        return false;
      }
    }) : [];
    setNdata(newData);
    console.log(newData, type);
  }, [data, type]);

  return (
    <>
      {ndata.map((element, k) => {
        const image = (element.card_type === "burner") ? img : SubImg;
        return (
          <Card
            key={k}
            style={{ width: "22rem", border: "none" }}
            className="hove mb-4 shadow p-3 mb-5 bg-white rounded"
          >
            <div className="card_body">
              <Card.Img className="imgc" alt="" src={image} />
              
              <div className="upper_data d-flex justify-content-between align-items-center">
                <Card.Title>{element.name}</Card.Title>
                <img className="limg" alt="" />
              </div>

              <Card.Subtitle className="mb-2 text-muted">
                {element.budget_name}
              </Card.Subtitle>
              <div className="lower_data d-flex  justify-content-between">
                <h5 className="batch">{element.card_type}</h5>
                <span>{element.expiry}</span>
              </div>

              <div className="extra"></div>

              <div className="last_data d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <span className="dot red"></span>
                  {/* <img className="limg" alt="" /> */}
                  <p>Spent</p>
                </div>
                <p>{element.spent.value} SGD</p>
              </div>

              <div className="last_data d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <span className="dot green"></span>
                  {/* <img className="limg" alt="" /> */}
                  <p>Available To Spend</p>
                </div>
                <p>{element.available_to_spend.value} SGD</p>
              </div>
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default Cards;
