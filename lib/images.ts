const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const getImagePath = (path: string) => {
  const cleanPath = path.replace(/^\/+/, "");
  return `${basePath}/${cleanPath}`;
};
