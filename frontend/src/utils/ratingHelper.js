// Compute average rating from list of { rating }
export const computeAverageRating = (ratings) => {
  if (!ratings || ratings.length === 0) return 0;

  const sum = ratings.reduce((acc, r) => acc + Number(r.rating), 0);
  return (sum / ratings.length).toFixed(1);
};

// Format rating to stars (optional helper)
export const createStarDisplay = (rating) => {
  const full = "★".repeat(Math.floor(rating));
  const empty = "☆".repeat(5 - Math.floor(rating));
  return full + empty;
};
