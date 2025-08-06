export const mapPaths = {
  // Pulau Breueh - Zona Perikanan
  breueh: {
    fisheries: '/assets/maps/Peta Zona Perikanan - Breueh.jpg'
  },
  
  // Gampong Blang Situngkoh - Pertanian
  blangSitungkoh: {
    agriculture: '/assets/maps/Peta Persebaran Pertanian - Blang Situngkoh.jpg'
  },
  
  // Gampong Gugop - Land Use
  gugop: {
    landUse: '/assets/maps/Klasifikasi Penggunaan Lahan - Gugop.jpg'
  },
  
  // Gampong Paloh - Multiple Maps
  paloh: {
    lampu: '/images/maps/paloh/peta-persebaran-lampu-paloh.jpg',
    air: '/images/maps/paloh/peta-persebaran-sumber-air-paloh.jpg',
    tutupanLahan: '/images/maps/paloh/peta-tutupan-lahan-paloh.jpg',
    evakuasi: '/images/maps/paloh/peta-jalur-evakuasi-paloh.jpg',
    model3d: '/images/maps/paloh/peta-model-3d-paloh.jpg'
  }
};

// Helper function untuk check apakah image ada
export const checkImageExists = async (imagePath) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = imagePath;
  });
};

// Function untuk get map status
export const getMapStatus = async (location, mapType = null) => {
  try {
    if (mapType) {
      // Untuk maps dengan sub-types (seperti Paloh)
      const imagePath = mapPaths[location]?.[mapType];
      if (imagePath) {
        const exists = await checkImageExists(imagePath);
        return { exists, path: imagePath };
      }
    } else {
      // Untuk maps dengan single type
      const locationMaps = mapPaths[location];
      if (locationMaps) {
        const mapKey = Object.keys(locationMaps)[0];
        const imagePath = locationMaps[mapKey];
        const exists = await checkImageExists(imagePath);
        return { exists, path: imagePath };
      }
    }
    return { exists: false, path: null };
  } catch (error) {
    console.error('Error checking map status:', error);
    return { exists: false, path: null };
  }
};