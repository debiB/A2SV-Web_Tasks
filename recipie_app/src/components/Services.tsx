import React from 'react'
import Dash from './Dash';
import ServiceCard from './ServiceCard';
const servicesData = [
  {
    img: "/services__1.png",
    title: "Professonal Kitchen",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
  },
  {
    img: "/services__2.png",
    title: "Delivery",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
  },
  {
    img: "/services__3.png",
    title: "Wine List",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
  },
  {
    img: "/services__4.png",
    title: "Free Wifi",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
  },
];
const Services = () => {
  return (
    <div className="container pt-40">
      <div className="space-y w-fit mx-auto text-center">
        <h2 className="text-4xl font-bold">
          Choose Best<span className="text-accent"> Services</span>
        </h2>
        <p className="text-gray-700">
          Unleash your culinary creativity with our diverse collection of
          recipes, curated to satisfy every palate.
          <br />
          From mouthwatering appetizers to decadent desserts, our handpicked
          selection ensures a delightful cooking experience for all food
          enthusiasts.
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>
      <div className= "grid gap-10 md:grid-cols-4 pt-8">
         {servicesData.map((item, index) => <ServiceCard key={index} img={item.img} title={item.title} description={item.desc} />)}
      </div>
    </div>
  );
}

export default Services
