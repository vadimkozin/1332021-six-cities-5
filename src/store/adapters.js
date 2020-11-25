export class Offers {
  static getKeysOwnerFrom(host) {
    const {id, name, avatar_url: avatar, is_pro: isSuper} = host;
    return {id, name, avatar, isSuper};
  }

  static adaptToClient(offers) {
    return offers.map((offer) => Offers.adaptToClientOffer(offer));
  }

  static adaptToClientOffer(offer) {
    return {
      id: offer.id,
      title: offer.title,
      description: offer.description,
      city: offer.city.name,
      typeHousing: offer.type,
      bedroomsNumber: offer.bedrooms,
      householdItems: offer.goods,
      isPremium: offer.is_premium,
      isFavorite: offer.is_favorite,
      rating: offer.rating,
      guestsMax: offer.max_adults,
      price: offer.price,
      position: offer.location,
      previewImage: offer.preview_image,
      owner: Offers.getKeysOwnerFrom(offer.host),
      pictures: offer.images.map((img, i) => ({src: img, alt: `${offer.title} photo-${i}`})),
    };
  }
}

export class User {
  static adaptToClient(user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      isPro: user.is_pro,
      avatarUrl: user.avatar_url,
    };
  }
}

export class Comments {
  static adaptToClients(comments) {
    return comments.map((comment) => Comments.adaptToClientComment(comment));
  }

  static adaptToClientComment(comment) {
    return {
      id: comment.id,
      text: comment.comment,
      date: new Date(comment.date),
      rating: comment.rating,
      user: {
        id: comment.user.id,
        name: comment.user.name,
        avatarUrl: comment.user.avatar_url,
        isPro: comment.user.is_pro,
      }
    };
  }
}
