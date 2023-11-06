import React from "react";
import { TitleUnderline, Title, Button } from "./index";
const data = [
  { title: "30+", text: "Breakfast Options" },
  { title: "50", text: "Dinner Options" },
  { title: "20+", text: "Tables Available" },
  { title: "10+", text: "Years Of Experience" },
];
const Stats = () => {
  return (
    <div className='px-7 py-40  bg-zinc-900'>
      <div className='container grid sm:grid-cols-2 lg:grid-cols-4 gap-10'>
        {data.map((stat, id) => (
          <div key={id} className='flex flex-col gap-3 items-center'>
            <Title color='amber-200' size='6xl'>
              {stat.title}
              <TitleUnderline
                position='center'
                customStyle={{ transform: "scale(0.7)", marginTop: "5px" }}
              />
            </Title>
            <p className='text-white text-2xl'>{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
