import axios from "axios";
import CryptoJS from "crypto-js";

const API_URL = import.meta.env.VITE_SMARTGATEWAY;
const SECRET = import.meta.env.VITE_SMARTGATEWAY_SECRET_KEY;

// Generate token
const generateToken = () => {
  const payload = {
    ts: Math.floor(Date.now() / 1000),
    source: "claude-mcp",
  };

  const json = JSON.stringify(payload);

  const signature = CryptoJS.HmacSHA256(json, SECRET).toString(
    CryptoJS.enc.Hex,
  );

  return btoa(`${json}||${signature}`);
};

// ⭐ Generic fetch function
export const fetchData = async ({ module, filters = {}, page, perPage }) => {
  const body = {
    action: "fetch",
    module,
  };

  // Add filters only if needed
  if (Object.keys(filters).length > 0) {
    body.filters = filters;
  }

  if (page) {
    body.page = page;
  }

  if (perPage) {
    body.per_page = perPage;
  }

  const response = await axios.post(API_URL, body, {
    headers: {
      "x-api-token": generateToken(),
      "Content-Type": "application/json",
    },
  });
  console.log("API Response:", response.data); // Log the entire response data
  return response.data;
};
