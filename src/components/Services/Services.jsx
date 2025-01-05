import React from "react";
import {FaHouseDamage, FaWallet } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { GiBrickWall } from "react-icons/gi";
import Heading from "../Shared/Heading";

const serviceData = [
  {
    id: 1,
    icon: <FaHouseDamage className="text-4xl md:text-5xl text-primary" />,
    title: "Apartement Rental",
    description: "bulid and rente aprtement",
  },
  {
    id: 2,
    icon: <GiBrickWall className="text-4xl md:text-5xl text-primary" />,
    title: "Construction",
    description: "Constraction consultancy",
  },
  {
    id: 3,
    icon: <FaCarSide  className="text-4xl md:text-5xl text-primary" />,
    title: "Transportation",
    description:
      "Rante",
  },
  {
    id: 4,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Money",
    description:
      "30 days Money back",
  },
];


const Services = () => {
  return (
    <div>
      <Heading title={"Our Services"}/>
        <div className="container my-14 md:my-20"> 
        <div className="grid grid-cols-2 lg:grid-cols-4  gap-4 gap-y-8">
            
            {
                serviceData.map((data)=>(
            <div className="flex flex-col items-start sm:flex-row gap-4" key={data.id}>
                {
                    data.icon
                }
                <div>
                    <h1 className="lg:text-xl font-bold">{data.title}</h1>
                    <h1>{data.description}</h1>
                </div>
            </div>
                ))
            }

        </div>
    </div>

    </div>
  )
}

export default Services