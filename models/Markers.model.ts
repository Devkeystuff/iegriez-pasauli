import L from "leaflet";
import iconCorrect from "../public/icons/dot-correct.svg";
import iconIncorrect from "../public/icons/dot-incorrect.svg";
import iconNeutral from "../public/icons/dot-neutral.svg";

export const dotCorrect = new L.Icon({
  iconUrl: iconCorrect,
  iconAnchor: [0, 0],
  popupAnchor: [22.5, 22.5],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(45, 45),
})

export const dotIncorrect = new L.Icon({
  iconUrl: iconIncorrect,
  iconAnchor: [0, 0],
  popupAnchor: [22.5, 22.5],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(45, 45),
})


export const dotNeutral = new L.Icon({
  iconUrl: iconNeutral,
  iconAnchor: [0, 0],
  popupAnchor: [22.5, 22.5],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(45, 45),
})

// export const iconTourism = new L.Icon({
//   iconUrl: tourism,
//   iconAnchor: [0, 0],
//   popupAnchor: [30, 20],
//   shadowUrl: null,
//   shadowSize: null,
//   shadowAnchor: null,
//   iconSize: new L.Point(50, 50),
// })

// export const iconWaste = new L.Icon({
//   iconUrl: waste,
//   iconAnchor: [0, 0],
//   popupAnchor: [30, 20],
//   shadowUrl: null,
//   shadowSize: null,
//   shadowAnchor: null,
//   iconSize: new L.Point(50, 50),
// })