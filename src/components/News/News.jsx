import React from "react";
import Heading from "../Shared/Heading";
import Img1 from '../../assets/blogs/blog-1.jpg'
import Img2 from '../../assets/blogs/blog-2.jpg'
import Img3 from '../../assets/blogs/blog-3.jpg'
const newsData = [
  {
    title: "Technology",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam, reprehenderit quam molestias quo sit esse est? Fugit dolor consectetur ut neque maxime rem? Repudiandae eos autem modi quibusdam excepturi?",
      published:"Jan 10,2025 by Mr.x",
      image:Img1,
  },
  {
    title: "Technology1",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam, reprehenderit quam molestias quo sit esse est? Fugit dolor consectetur ut neque maxime rem? Repudiandae eos autem modi quibusdam excepturi?",
      published:"Jan 10,2025 by Mr.x",
      image:Img2,
  },
  {
    title: "Technology2",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam, reprehenderit quam molestias quo sit esse est? Fugit dolor consectetur ut neque maxime rem? Repudiandae eos autem modi quibusdam excepturi?",
      published:"Jan 10,2025 by Mr.x",
      image:Img3,
  },
];
const News = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* heading */}
        <Heading title={"Recent News"} subtitle={"Explore Our News"} />
        {/* news section  */}
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
            {
                newsData.map((data,index)=>(
                    <div key={index} className="bg-white dark:bg-gray-900">
                        {/* img section  */}
                        <div className="overflow-hidden rounded-2xl mb-2">
                            <img src={data.image} alt="" className="w-full h-[220px] object-cover rounded-2xl hover:scale-150 duration-500"/>

                        </div>
                        <div className="space-y-2">
                            <p className="text-xs text-gray-500">{data.published}</p>
                            <p className="font-bold line-clamp-1">{data.title}</p>
                            <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.subtitle}</p>
                        </div>
                    </div>
                ))


            }

        </div>
       
        
      </div>
    </div>
  );
};

export default News;
