import fs from 'fs';
import path from 'path';
import supertest from 'supertest';

import app from '../index';
import { resizeImage, thumbExists } from '../utilities/imageProcessing';

describe('image dimensions utilities tests', () => {
  const imagePath = path.join(__dirname, '../../images', 'full');
  it('expects resizeImage(fjord, 200) to have width equal to 200', async () => {
    expect((await resizeImage('fjord', imagePath, 200, 200)).width).toEqual(
      200
    );
  });
  it('expects resizeImage(fjord, 200) to have height equal to 200', async () => {
    expect((await resizeImage('fjord', imagePath, 200, 200)).width).toEqual(
      200
    );
  });
});

const request = supertest(app);
describe('test image dimensions endpoint', () => {
  it('gets resized image for a new image which does not exist', async () => {
    // delete the image if already exists
    const thumbImage = thumbExists('fjord', 200, 200);
    if (thumbImage != null) {
      fs.unlinkSync(thumbImage);
    }
    const response = await request.get(
      '/api/image?imageName=fjord&width=200&height=200'
    );
    expect(response.headers['content-type']).toEqual('image/png');
  });
});
