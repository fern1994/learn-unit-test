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
- transform-class-properties และ transform-object-rest-spread ใช้ config ใน babelrc ทำให้ไม่แจ้ง error arrow function เวลา test

## function ต่างๆ
- .tobe() ใช้เช็คค่าที่จะ Test ว่าจะต้องเป็น... ส่วนใหญ่จะเป็น string และ int
- .toEqual() ใช้เช็คค่าว่าเท่า... ใช้ string int object 
- .toMatchSnapShot() ทำ snapshot compoent (เป็นการอ่าน component ที่ทำเก็บ html และ ค่าต่างๆ อยู่ในรูปแบบ json อยากแปลงให้เป็น html ให้ใช้ enzyme-to-json)
- .toHaveBeenLastCalledWith() ใช้ได้หลังจาก mock function แล้วเป็นการทดสอบการเรียกใช้ครั้งล่าสุด history.push เรา push ไปที่ / ครั่งล่าสุด
- .toHaveBeenCalled() ใช้ได้หลังจาก mock function แล้ว เป็นการเช็คว่าจะเรีกใช้ function ที่เราคาดหวังไว้