import React from 'react'
import Image from 'next/image'
import Dash from "./Dash";
interface props{
    img_path: string,
    title: string, 
    description: string,
    width?: number,
    height?: number

}
const Card_ele = ({img_path,title,description, width, height}: props) => {
  return (
    <>
      <div className="w-fit mx-auto self-end">
        <Image
          src={img_path}
          width={width}
          height={height}
          alt="food"
          className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
        />
        <div className="space-y-4">
          <Dash />
          <h2 className="food-medium text-xl">{title}</h2>
          <p className="text-gray-700 text-[14px] xl:text-[16px]">
           {description}
          </p>
        </div>
      </div>
    </>
  );
}
// Shrimp salad
//  Elevate your dining experience with this easy-to-follow recipe,
//             striking the perfect balance between simplicity and gourmet
//             sophistication.
export default Card_ele;
