A simple Express API which resizes images using the sharp library

Uses:
1. Typescript
2. Jasmine
3. Sharp

Usage:
1. Download or use images in the ./images/full dir.
2. Compile Typescript using "npm run build"
3. Execute "node dist/index"
4. Go to "http://localhost:5000/api/image?imageName=image_name_without_ext&width=required_width&height=required_height"
5. The resized image will be placed in the ./images/thumb dir