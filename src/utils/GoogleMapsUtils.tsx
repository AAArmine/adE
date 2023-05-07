export const loadMapApi = () => {
  const mapsURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GMAPS_API_KEY}&libraries=geometry,drawing,places`;
  const scripts = document.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i += 1) {
    if (scripts[i]!.src.indexOf(mapsURL) === 0) {
      return scripts[i];
    }
  }
  // if not, create
  const googleMapScript = document.createElement('script');
  googleMapScript.src = mapsURL;
  googleMapScript.async = true;
  googleMapScript.defer = true;
  window.document.body.appendChild(googleMapScript);
  return googleMapScript;
};
