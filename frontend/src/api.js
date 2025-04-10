import axios from "axios";

const API_URL = "http://localhost:3000/api";

// Récupérer la liste des employés
export const getEmployes = async () => {
  const response = await axios.get(`${API_URL}/employes`);
  return response.data;
};

// Calculer les heures supplémentaires
export const calculerHeuresSup = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/heuresSups/calculer`, data);
    return response.data;  // Return the successful response
  } catch (error) {
    if (error.response) {
      // The request was made, but the server responded with a status code out of the 2xx range
      console.error('Erreur Axios:', error.response.data);
      return error.response.data;  // Return the error response from the server
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Erreur de requête:', error.request);
      return { success: false, message: "Erreur de réseau, veuillez réessayer." };
    } else {
      // Something happened while setting up the request that triggered an error
      console.error('Erreur générale:', error.message);
      return { success: false, message: "Une erreur inattendue s'est produite." };
    }
  }
};
