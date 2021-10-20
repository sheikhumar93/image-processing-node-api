import { Router } from 'express';
import { resizeImage, thumbExists } from '../../utilities/imageProcessing';

const routes = Router();

const fullImagesPath = './images/full';

routes.get('/image', async (req, res): Promise<void> => {
  try {
    const imageName = req.query.imageName as string;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);
    let thumbImage = thumbExists(imageName);
    if (thumbImage != null) {
      res.sendFile(thumbImage);
    } else {
      const resizeResult = await resizeImage(
        imageName,
        fullImagesPath,
        width,
        height
      );
      if (resizeResult.format === undefined) {
        res.send(`${resizeResult}`);
      } else {
        thumbImage = thumbExists(imageName);
        res.sendFile(thumbImage as string);
      }
    }
  } catch (error) {
    res.send(error);
  }
});

export default routes;
