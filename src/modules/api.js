const API = async () => {
  try {
    const apiUrl = 'https://restcountries.com/v3.1/all';
    const response = await apiUrl;
    const data = await response.json();
    console.log(data);
  } catch (error) {
    return error.message;
  }
};
export default API;
