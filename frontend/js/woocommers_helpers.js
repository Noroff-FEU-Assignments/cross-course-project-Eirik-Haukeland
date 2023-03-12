// if rating 0.xx then math.floor returns 0 whish is false so 1
export const starRating = (rating) => `images/icons/stars_${Math.floor(rating) || 1}-star-rank.svg`;