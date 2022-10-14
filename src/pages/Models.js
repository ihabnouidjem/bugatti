import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Mininav from "../components/Mininav";
import ModelCard from "../components/ModelCard";
import ModelsBanner from "../components/ModelsBanner";

function Models({ fmodels }) {
  const [currentCard, setCurrentCard] = useState();
  useEffect(() => {
    if (fmodels && !currentCard) {
      setCurrentCard(fmodels[0]);
    }
  });

  return (
    <div className="models-page">
      <Header page={"Models"} />
      <ModelsBanner imgsrc={currentCard ? currentCard.imgsrc : ""} />
      <ModelCard currentCard={currentCard} />
      <Mininav
        cardIndex={fmodels.indexOf(currentCard)}
        fmodels={fmodels}
        setCurrentCard={setCurrentCard}
      />
    </div>
  );
}

export default Models;

// const [cardList, setCardList] = useState([
//   {
//     imgsrc:
//       "https://billionairetoys.com/wp-content/uploads/bugatti-divo-left-side-profile.jpg",
//     model: "DIVO",
//     description:
//       "The Bugatti Divo is a mid-engine track-focused sports car developed and manufactured by Bugatti Automobiles S.A.S. The car is named after French racing driver Albert Divo, who raced for Bugatti in the 1920s winning the Targa Florio race twice.",

//     props: [
//       {
//         type: "short",
//         prop: "Power",
//         val: "1,479 hp @ 6,900 rpm (1,103 kW)",
//       },
//       {
//         type: "short",
//         prop: "Torque",
//         val: "1,180 lb·ft @ 2,000 – 6,000 rpm (1,600 N·m)",
//       },
//       { type: "short", prop: "Induction", val: "Turbocharged" },
//       { type: "short", prop: "Fuel type", val: "Premium" },
//       { type: "short", prop: "Transmission", val: "7-speed automatic" },
//       { type: "short", prop: "Drivetrain", val: "AWD" },
//       { type: "short", prop: "Assembly", val: "Molsheim, FR" },
//       {
//         type: "long",
//         prop: "Fuel efficiency / Autonomy",
//         val: [
//           "City:	26.8 L/100km",
//           "Highway:	16.6 L/100km",
//           "Combined:	22.2 L/100km",
//           "Autonomy:	450 km",
//           "CO₂ emissions:	522 g/km",
//         ],
//       },
//       {
//         type: "long",
//         prop: "Performance",
//         val: [
//           "Power to weight ratio: 562.7 W/kg",
//           "0-100 km/h:	2.4 s (manufacturer)",
//           "80-120 km/h:	N/A",
//           "Top speed:	380 km/h (236 mph) (manufacturer)",
//           "Braking distance:	N/A",
//         ],
//       },
//       { type: "short", prop: "Price", val: "€5,000,000" },
//     ],
//   },
//   {
//     imgsrc:
//       "https://www.tuningblog.eu/wp-content/uploads/2020/02/2020-Bugatti-Chiron-Sport-Edition-Noire-Sportive-Tuning-2.jpg",

//     model: "DIVO",
//     description:
//       "The Bugatti Divo is a mid-engine track-focused sports car developed and manufactured by Bugatti Automobiles S.A.S. The car is named after French racing driver Albert Divo, who raced for Bugatti in the 1920s winning the Targa Florio race twice.",

//     props: [
//       { type: "short", prop: "Power", val: "W)" },
//       {
//         type: "short",
//         prop: "Torque",
//         val: "m)",
//       },
//       { type: "short", prop: "Induction", val: "ed" },
//       { type: "short", prop: "Fuel type", val: "m" },
//       { type: "short", prop: "Transmission", val: "7-speed automatic" },
//       { type: "short", prop: "Drivetrain", val: "AWD" },
//       { type: "short", prop: "Assembly", val: "Molsheim, FR" },
//       {
//         type: "long",
//         prop: "Fuel efficiency / Autonomy",
//         val: [
//           "City:	26.8 L/100km",
//           "Highway:	16.6 L/100km",
//           "Combined:	22.2 L/100km",
//           "Autonomy:	450 km",
//           "CO₂ emissions:	522 g/km",
//         ],
//       },
//       {
//         type: "long",
//         prop: "Performance",
//         val: [
//           "Power to weight ratio: 562.7 W/kg",
//           "0-100 km/h:	2.4 s (manufacturer)",
//           "80-120 km/h:	N/A",
//           "Top speed:	380 km/h (236 mph) (manufacturer)",
//           "Braking distance:	N/A",
//         ],
//       },
//       { type: "short", prop: "Price", val: "€5,000,000" },
//     ],
//   },
// ]);
