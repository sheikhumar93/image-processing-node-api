import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

export const resizeImage = async (
  imageName: string,
  imagePath: string,
  width: number,
  height: number
): Promise<sharp.OutputInfo> => {
  const image = imagePath + '/' + imageName + '.jpeg';
  const sharpImage = await sharp(image)
    .resize(width, height)
    .toFile(`./images/thumbs/${imageName}-thumb.png`)
    .catch((err) => {
      return err;
    });
  return sharpImage;
};

export const thumbExists = (imageName: string): string | null => {
  const thumbPath = path.join(
    __dirname,
    '../../images',
    `thumbs/${imageName}-thumb.png`
  );
  if (fs.existsSync(thumbPath)) {
    return thumbPath;
  } else {
    return null;
  }
};
