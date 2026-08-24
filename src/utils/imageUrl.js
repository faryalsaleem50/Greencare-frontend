const getImageUrl = (image) => {
  if (!image) return "";

  if (image.startsWith("http")) {
    return image;
  }

  return `https://greencare-backend.vercel.app${image}`;
};

export default getImageUrl;