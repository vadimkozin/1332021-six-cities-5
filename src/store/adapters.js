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
