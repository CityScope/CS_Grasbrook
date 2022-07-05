import axios from "axios";
import settings from "../settings/settings.json";

/**
 * convert rgb to hex
 */
export function rgbToHex(r, g, b) {
  function valToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  return "#" + valToHex(r) + valToHex(g) + valToHex(b);
}

/**
 * convert hex to rgb array
 */
export function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
}

/**
 *
 * @param {string} hexString test if vaild 3->6 HEX color
 */
export const testHex = (hexString) => {
  let isHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i.test(hexString);
  return isHex;
};

/**
 * checks if edits are done (toggled off)
 * than returns a redux state
 * with grid edits payload
 */
export const postMapEditsToCityIO = (data, tableName, endPoint) => {
  let postURL = settings.cityIO.baseURL + tableName + endPoint;

  const options = {
    method: "post",
    url: postURL,
    data: data,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  axios(options)
    .then((res) => {
      if (res.data.status === "ok") {
        console.log(`--> cityIO endpoint ${postURL} was updated <--`);
      }
    })
    .catch((error) => {
      console.log("ERROR:", error);
    });
};
