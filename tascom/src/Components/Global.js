import React from "react";
import useFormatDate from "../Hooks/useFormatDate";

function Global({ globalData }) {
  const { formatedDate } = useFormatDate(globalData.Date);

  return (
    <section className="flex flex-wrap w-full mt-5 border border-solid border-subtitleGreen rounded-lg border-opacity-50">
      <div className="global-item">
        <p className=" mb-4 title-medium font-montserrat">
          LAST UPDATED :<span className="text-subtitleGreen"> {formatedDate}</span>
        </p>
        <h1 className="title text-2xl" data-number>
          {globalData.TotalConfirmed}
        </h1>
        <p className="subtitle mt-2 font-medium">CONFIRMED CASES</p>
        <h1 className="title text-2xl mt-7" data-number>
          {globalData.TotalDeaths}
        </h1>
        <p className="subtitle mt-2 font-medium">CASES OF DEATH</p>
      </div>
      <div className="global-item lg:mx-0 flex flex-col gap-2">
        <h1 className="title text-xl font-medium" data-number>
          {globalData.NewDeaths}
        </h1>
        <p className="subtitle title-medium">NEW DEATHS</p>
        <h1 className="title text-xl font-medium" data-number>
          {globalData.NewConfirmed}
        </h1>
        <p className="subtitle title-medium">NEW CONFIRMED</p>
        <h1 className="title text-xl font-medium" data-number>
          {globalData.NewRecovered}
        </h1>
        <p className="subtitle title-medium">NEW RECOVERED</p>
        <h1 className="title text-xl font-medium" data-number>
          {globalData.TotalRecovered}
        </h1>
        <p className="subtitle title-medium">TOTAL RECOVERED</p>
      </div>
    </section>
  );
}

export default Global;
