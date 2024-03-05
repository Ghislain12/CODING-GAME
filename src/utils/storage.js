export const getLocalStorage = async (key) => {
  try {
    const arrayString = localStorage.getItem(key);
    if (arrayString) {
      const array = JSON.parse(arrayString);
      return array;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveLocalStorage = async (key, array) => {
  try {
    const arrayString = JSON.stringify(array);
    localStorage.setItem(key, arrayString);
  } catch (error) {
    console.error("Error saving array to local storage:", error);
  }
};
