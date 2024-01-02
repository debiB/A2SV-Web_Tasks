import React from 'react'
import Dash from './Dash';
import Image from 'next/image'; 
import Card_ele from "./card";
const Feature = () => {
  return (
    <>
      <div className="container pt-40">
        <h2 className="text-6xl font-bold">Our</h2>
        <h2 className="text-6xl font-bold pt-2">
          Featured<span className="text-accent"> Food</span>
        </h2>
        <p className="max-w-[550px] pt-10 text-gray-700">
          Savor the blend of vibrant flavors in this easy-to-follow recipe, a
          delightful symphony of fresh ingredients that promises to delight your
          palate with every bite
        </p>
        <Dash />

        <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
          <Card_ele
            img_path="/grid__2.png"
            title="Shrimp salad"
            description="Elevate your dining experience with this easy-to-follow recipe, striking the perfect balance between simplicity and gourmet sophistication."
            width={300}
            height={600}
          />
          <Card_ele
            img_path="/grid__1.png"
            title="Baked apples"
            description="Elevate your dining experience with this easy-to-follow recipe, striking the perfect balance between simplicity and gourmet sophistication."
            width={500}
            height={900}
          />
          <Card_ele
            img_path="/grid__3.png"
            title="Cherries chicken"
            description="Elevate your dining experience with this easy-to-follow recipe, striking the perfect balance between simplicity and gourmet sophistication."
            width={500}
            height={900}
          />
        </div>
      </div>
    </>
  );
}

export default Feature

