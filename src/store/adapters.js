/*
    id: uuid(),
    pictures: getRandomPictures(3, 10),
    title: getRandomFrom(TITLES),
    description: getRandomFrom(DESCRIPTIONS),
    isPremium: Boolean(getRandomInteger(0, 1)),
    typeHousing: getRandomType(),
    rating: getRandomFloat(1, 5),
    bedroomsNumber: getRandomInteger(1, 5),
    guestsMax: getRandomInteger(1, 3),
    price: getRandomInteger(50, 700),
    householdItems: getRandomPartArray(HOUSEHOLD_ITEMS),
    owner: {avatar, name, isSuper},
    city,
    position: getPosition(coordinates),
    isFavorite: Boolean(getRandomInteger(0, 1)),
 */
/*
+id
+description
+price: 493
+rating: 3.8
+title: "The house among olive "
type: "house" -> typeHousing
bedrooms -> bedroomsNumber
city: {name, location: {latitude, longitude, zoom}}
goods -> householdItems
host: {id, name, avatar_url, is_pro} --> owner:{name, avatar, isSuper}
images: [] -> pictures
-preview_image: ''
is_favorite -> isFavorite
is_premium -> isPremium
location: {latitude, longitude, zoom} -> position
max_adults: 4 -> guestsMax
*/
/*
        {
          typeHousing: offer.type,
          bedroomsNumber: offer.bedrooms,
          householdItems: offer.goods,
          pictures: offer.images,
          isFavorite: offer.is_favorite,
          isPremium: offer.is_premium,
          position: offer.location,
          guestsMax: offer.max_adults,
          city: offer.city.name,
          owner: Offers.getKeysOwnerFrom(offer.host),
        },

            const keysMap = {
      type: typeHousing,
      bedrooms: bedroomsNumber,
      goods: householdItems,
      images: pictures,
      is_favorite: isFavorite,
      is_premium: isPremium,
      location: position,
      max_adults: guestsMax
    } = offer;

*/

const deleteKeys = (obj, keys) => keys.forEach((key) => delete obj[key]);

export class Offers {
  static getKeysOwnerFrom(host) {
    const {id, name, avatar_url: avatar, is_pro: isSuper} = host;
    return {id, name, avatar, isSuper};
  }

  static adaptToClient(offers) {
    return offers.map((offer) => Offers.adaptToClientOffer(offer));
  }

  static adaptToClientOffer(offer) {

    const adapted = Object.assign(
        {},
        offer,
        {
          typeHousing: offer.type,
          bedroomsNumber: offer.bedrooms,
          householdItems: offer.goods,
          pictures: offer.images.map((img, i) => ({src: img, alt: `${offer.title} photo-${i}`})),
          previewImage: offer.preview_image,
          isFavorite: offer.is_favorite,
          isPremium: offer.is_premium,
          position: offer.location,
          guestsMax: offer.max_adults,
          city: offer.city.name,
          owner: Offers.getKeysOwnerFrom(offer.host),
        }
    );

    deleteKeys(adapted, [`type`, `bedrooms`, `goods`, `images`, `preview_image`, `is_favorite`, `is_premium`, `location`, `max_adults`, `host`]);

    return adapted;
  }
}
