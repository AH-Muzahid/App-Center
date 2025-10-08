// Get installed apps from localStorage
const getStoredApps = () => {
    const storedApps = localStorage.getItem('installed-apps');
    if (storedApps) {
        return JSON.parse(storedApps);
    }
    return [];
}

// Add app id to localStorage
const addToDb = (id) => {
    const storedApps = getStoredApps();
    const exists = storedApps.find(appId => appId === id);
    if (!exists) {
        storedApps.push(id);
        localStorage.setItem('installed-apps', JSON.stringify(storedApps));
    }
}

// Check if app is installed
const isInstalled = (id) => {
    const storedApps = getStoredApps();
    return storedApps.includes(id);
}

// Remove app id from localStorage
const removeFromDb = (id) => {
    const storedApps = getStoredApps();
    const updatedApps = storedApps.filter(appId => appId !== id);
    localStorage.setItem('installed-apps', JSON.stringify(updatedApps));
}

export { addToDb, getStoredApps, isInstalled, removeFromDb };