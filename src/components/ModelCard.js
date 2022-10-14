import React, { useState } from "react";
import "../styles/modelscard.css";

function ModelCard({ currentCard }) {
  return (
    <div className="modelcard">
      <h1 className="modelcard-car">
        {currentCard ? `BUGATTI | ${currentCard.model}` : ""}
      </h1>
      <p className="modelcard-desc">
        {currentCard ? currentCard.description : ""}
      </p>
      <div>
        {currentCard
          ? currentCard.props.map((propriety) => {
              const { type, prop, val } = propriety;
              return (
                <div key={currentCard.props.indexOf(propriety)}>
                  {type == "short" ? (
                    <div className="modelcard-prop-container">
                      <h3 className="modelcard-prop">{prop}</h3>
                      <p
                        className={
                          prop != "Price" ? "modelcard-val" : "modelcard-price"
                        }
                      >
                        {val}
                      </p>
                    </div>
                  ) : (
                    <div className="modelcard-prop-container">
                      <h3 className="modelcard-prop">{prop}</h3>
                      <div className="modelcard-long-val">
                        {val.map((v) => {
                          return (
                            <p key={val.indexOf(v)} className="modelcard-val">
                              {v}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default ModelCard;

// const [currentCard, setCardInfo] = useState({
//   model: "DIVO",
//   description:
//     "The Bugatti Divo is a mid-engine track-focused sports car developed and manufactured by Bugatti Automobiles S.A.S. The car is named after French racing driver Albert Divo, who raced for Bugatti in the 1920s winning the Targa Florio race twice.",

//   props: [
//     { type: "short", prop: "Power", val: "1,479 hp @ 6,900 rpm (1,103 kW)" },
//     {
//       type: "short",
//       prop: "Torque",
//       val: "1,180 lb·ft @ 2,000 – 6,000 rpm (1,600 N·m)",
//     },
//     { type: "short", prop: "Induction", val: "Turbocharged" },
//     { type: "short", prop: "Fuel type", val: "Premium" },
//     { type: "short", prop: "Transmission", val: "7-speed automatic" },
//     { type: "short", prop: "Drivetrain", val: "AWD" },
//     { type: "short", prop: "Assembly", val: "Molsheim, FR" },
//     {
//       type: "long",
//       prop: "Fuel efficiency / Autonomy",
//       val: [
//         "City:	26.8 L/100km",
//         "Highway:	16.6 L/100km",
//         "Combined:	22.2 L/100km",
//         "Autonomy:	450 km",
//         "CO₂ emissions:	522 g/km",
//       ],
//     },
//     {
//       type: "long",
//       prop: "Performance",
//       val: [
//         "Power to weight ratio: 562.7 W/kg",
//         "0-100 km/h:	2.4 s (manufacturer)",
//         "80-120 km/h:	N/A",
//         "Top speed:	380 km/h (236 mph) (manufacturer)",
//         "Braking distance:	N/A",
//       ],
//     },
//     { type: "short", prop: "Price", val: "€5,000,000" },
//   ],
// });
