// Single source of truth for the office location used across the site.
export const OFFICE_ADDRESS =
  "BlueLync Tech Solutions India Pvt Ltd, 4th Floor, Srinivasa Heights, 302, Kousalya Colony, Bachupally, Hyderabad, Telangana 500118";

const encodedAddress = encodeURIComponent(OFFICE_ADDRESS);

// Opens the location in Google Maps.
export const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

// Keyless Google Maps embed for iframes.
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodedAddress}&z=15&output=embed`;

// Opens Google Maps directions to the office.
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
