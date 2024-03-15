const ROOT_URL = "https://";

export const getApiData = async (apiUrl) => {
  const url = `${ROOT_URL}${apiUrl}`;
  const response = await fetch(url);
  try {
    return await response.json();
  } catch (error) {
    return error;
  }
};
