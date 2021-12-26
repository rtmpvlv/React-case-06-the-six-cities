export const adaptOfferToClient = (offer) => {
  const adaptedData = Object.assign(
      {},
      offer,
      {
        isFavorite: offer.is_favorite,
        isPremium: offer.is_premium,
        maxAdults: offer.max_adults,
        previewImage: offer.preview_image,
      },
      {
        host: {
          ...offer.host,
          avatarUrl: offer.host.avatar_url,
          isPro: offer.host.is_pro,
        },
      },
  );

  delete adaptedData.is_favorite;
  delete adaptedData.is_premium;
  delete adaptedData.max_adults;
  delete adaptedData.host.avatar_url;
  delete adaptedData.host.is_pro;
  return adaptedData;
};

export const adaptOfferToServer = (offer) => {
  const adaptedData = Object.assign(
      {},
      offer,
      {
        'is_favorite': offer.isFavorite,
        'is_premium': offer.isPremium,
        'max_adults': offer.maxAdults,
        'preview_image': offer.previewImage,
      },
      {
        host: {
          ...offer.host,
          'avatar_url': offer.host.avatarUrl,
          'is_pro': offer.host.isPro,
        }
      },
  );

  delete adaptedData.isFavorite;
  delete adaptedData.isPremium;
  delete adaptedData.maxAdults;
  delete adaptedData.previewImage;
  delete adaptedData.host.avatarUrl;
  delete adaptedData.host.isPro;
  return adaptedData;
};

export const adaptReviewToClient = (review) => {
  const adaptedData = Object.assign(
      {},
      review,
      {
        user: {
          ...review.user,
          avatarUrl: review.user.avatar_url,
          isPro: review.user.is_pro,
        },
      },
  );

  delete adaptedData.user.avatar_url;
  delete adaptedData.user.is_pro;
  return adaptedData;
};

export const adaptReviewToServer = (review) => {
  const adaptedData = Object.assign(
      {},
      review,
      {
        user: {
          ...review.user,
          'avatar_url': review.user.avatarUrl,
          'is_pro': review.user.isPro,
        }
      },
  );

  delete adaptedData.user.avatarUrl;
  delete adaptedData.user.isPro;
  return adaptedData;
};

