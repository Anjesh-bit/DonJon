const getLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item) as T;
  }
  return null;
};

const setLocalStorage = <T>(key: string, value: T): void => {
  const stringifyValue = JSON.stringify(value);
  localStorage.setItem(key, stringifyValue);
};

const deleteLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export { getLocalStorage, setLocalStorage, deleteLocalStorage };
