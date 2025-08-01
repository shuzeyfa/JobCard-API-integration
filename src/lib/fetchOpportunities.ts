// lib/fetchOpportunities.ts

const BASE_URL = "https://akil-backend.onrender.com";

export async function fetchOpportunities() {
  try {
    const res = await fetch(`${BASE_URL}/opportunities/search`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (!data?.data || typeof data.data !== "object") {
      throw new Error("Invalid data format received from API");
    }

    return data.data;
  } catch (error) {
    console.error("Failed to fetch opportunities:", error);
    return []; // Return an empty array to avoid crashing the app
  }
}


export async function fetchOpportunitiesbyid(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/opportunities/${id}`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (!data?.data || typeof data.data !== "object") {
      throw new Error("Invalid data format received from API");
    }

    return data.data;
  } catch (error) {
    console.error("Failed to fetch opportunities:", error);
    return []; // Return an empty array to avoid crashing the app
  }
}
