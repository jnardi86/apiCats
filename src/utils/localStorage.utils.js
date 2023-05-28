export const addToLocalStorage = (key, item) => {
    localStorage.setItem(key, JSON.stringify (item));
};

export const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

export const removeFromLocalStorage = (key) => localStorage.removeItem(key);

export const removeItemFromLocalStorage = (key, item) => {
    const items = getFromLocalStorage(key);
    const filteredItemes = items.filter((i) => i !== item);
    addToLocalStorage(key, filteredItemes);
}

export const cleanLocalStorage = () => localStorage.clear();