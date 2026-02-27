// Type declarations for image files with uppercase extensions.
// Next.js only declares lowercase variants (*.png, *.jpg, etc.)

declare module "*.PNG" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.JPG" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.JPEG" {
  const content: import("next/image").StaticImageData;
  export default content;
}
