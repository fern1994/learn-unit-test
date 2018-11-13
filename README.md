This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## คำสั่งต่างๆ

- yarn test 
คือ สั่งให้ทำการ test รอบเดียว

- yarn test -u 
คือ การสั่งให้ update snapshot ของเราเมื่อเราต้องการแก้ไข component นั้นๆ

- yanr test -- --watch
คือ การรัน test ซ้ำๆ เมื่อเรามีการแก้ไข test นั้นๆ จนกว่าจะออก q

## ไฟล์เหล่านี้ใช้ทำอะไร

- .babelrc
ใช้ congif ให้ใช้ Jest กับ react ที่เป็น ES6 ได้

- jest.config.json 
ใช้อ้างอิง config enzyme Adapter จากไฟล์ setupTest.js เพื่อให้ใช้ enzyme ได้ ถ้าเราจะให้ใช้ config นี้ทุกไฟล์เราต้องตั้งค่าไว้ที่ package.jscon

{
  test: jest --config=jest.config.json
}

## package ตัวช่วย
- jest ตัวหลักในการใช้ test
- babel-preset-env และ babel-preset-react ทำให้ใช้ jest ร่วมกับ react ได้
- enzyme ตัวช่วยในการ test แบบ DOM 
- enzyme-adapter-react-16 ตัวช่วยให้ใช้ enzyme ได้ใน react^16
- enzyme-to-json ช่วยแปลงไฟล์ snapshot ของเราจาก json เป็น html

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
