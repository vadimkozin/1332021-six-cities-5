export const offerAdapter = {
  getKeysOwnerFrom(host) {
    const {id, name, avatar_url: avatar, is_pro: isSuper} = host;
    return {id, name, avatar, isSuper};
  },

  adaptToClient(offers) {
    return offers.map((offer) => this.adaptToClientOffer(offer));
  },

  adaptToClientOffer(offer) {
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
      owner: this.getKeysOwnerFrom(offer.host),
      pictures: offer.images.map((img, i) => ({src: img, alt: `${offer.title} photo-${i}`})),
    };
  }
};

export const userAdapter = {
  adaptToClient(user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      isPro: user.is_pro,
      avatarUrl: user.avatar_url,
    };
  }
};

export const commentAdapter = {
  adaptToClient(comments) {
    return comments.map((comment) => this.adaptToClientComment(comment));
  },

  adaptToClientComment(comment) {
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
};
