# CanvasRenderingContext2d

## Canvas2D

- Default size of canvas: 300x150

- `devicePixelRatio` -> how many real device pixel for rendering 1 CSS px

### Difference between `CSS px-unit` and `Attribute unit`

```markdown
 When resizing the canvas using CSS you are stretching (or squishing) pixels until the original drawing fits inside the new CSS dimensions. Think of that as a T-shirt with logo. If you stretch the shirt the logo will deform by stretching ... same with canvas drawings -- they stretch and shrink. On the other hand changing the canvas element width/height (canvas.width=400) you are actually adding or removing pixels to the canvas drawing surface 
```

```
The height and width attributes define the intrinsic size of the canvas (the coordinate space). By default, it will also be rendered at that size.

If you change the CSS width and height, the canvas will be rendered at that new size, but the coordinate space will not change. So the same contents will be scaled to fit the rendered size of the canvas.
```

### Supersampling

Ép độ phân giải cao về độ phân giải thấp

> Game: Kĩ thuật render hình ảnh ở độ phân giải cao hơn mức màn hình hỗ trợ, sau đó nén lại bằng với độ phân giải màn hình

Retina: 2 real device pixel -> render 1 CSS px
-> Draw 100px in Canvas (thực tế chỉ vẽ 50px theo Retina => nhòe) => Kéo size của canvas về đúng `real size` của màn hình, xong dùng CSS scale lại

```javascript
const CANVAS_WIDTH = 512;
const CANVAS_HEIGHT = 512;

const canvas = document.querySelector('#canvas');

// fit with device pixel ratio
canvas.width = CANVAS_WIDTH * devicePixelRatio;
canvas.height = CANVAS_HEIGHT * devicePixelRatio;

// use CSS to scale to fit the size
canvas.setAttribute('style', `width:${CANVAS_WIDTH}px; height:${CANVAS_HEIGHT}px`);
```

## Deployment

Run `./public` in live server

```shell
npm run dev
```

Build files from `./src` and `./public` to `./dist` for production

```shell
npm run build:prod
```
