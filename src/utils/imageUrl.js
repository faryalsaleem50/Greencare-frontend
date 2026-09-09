const getImageUrl = (image) => {
  if (!image) return "";

  if (image.startsWith("http")) {
    return image;
  }

  return `${import.meta.env.VITE_API_URL}${image}`;
};

export default getImageUrl;