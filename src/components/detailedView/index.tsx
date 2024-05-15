import React from "react";
import { useLocation } from "react-router-dom";
import { useGetProfileInfoByIndex } from "../../services/spells/setUp";
import DamagedType from "./DamagedType";
import Cards from "../common/Cards";
import { getRandomYellowShade } from "../../utils/getRandomColor";
import { setLocalStorage } from "../../utils/localStorage";

interface Classes {
  name: string;
  index: string;
}

interface SubClass {
  name: string;
}

const DetailedView: React.FC = () => {
  const location = useLocation();
  const {
    data: singleSpell,
    isLoading,
    isError,
  } = useGetProfileInfoByIndex(location?.state?.url);

  if (isLoading)
    return (
      <div
        className="h-[100vh] w-full flex justify-center items-center"
        style={{ background: getRandomYellowShade() }}
      >
        <img src={require("../../assets/Loader.gif")} alt="loader" />
      </div>
    );
  if (isError) return <div>Error fetching data</div>;

  return (
    <Cards
      className="m-[50px] p-[50px]"
      style={{ background: getRandomYellowShade() }}
    >
      <div className="grid grid-cols-12 gap-4">
        <div className="custom-card">
          <span className="font-semibold">Attack Type : </span>
          <div className="text-sm">{singleSpell?.attack_type || "N/A"}</div>
        </div>
        <div className="custom-card">
          <span className="font-semibold">Casting Time: </span>
          <div className="text-sm">{singleSpell?.casting_time || "N/A"}</div>
        </div>
        <div className="custom-card">
          <span className="font-semibold">DND Classes:</span>
          {singleSpell?.classes.map(({ name, index }: Classes) => (
            <div key={index} className="text-sm">
              {name}
            </div>
          ))}
        </div>
        <div className="custom-card">
          <span className="font-semibold">Components:</span>
          {singleSpell?.components.map((component: string, index: number) => (
            <div key={index} className="text-sm">
              {component}
            </div>
          ))}
        </div>
        <div className="custom-card">
          <DamagedType singleSpell={singleSpell} />
        </div>
        <div className="custom-card">
          <span className="font-semibold">Description:</span>
          {singleSpell?.desc.map((desc: string, index: number) => (
            <div key={index} className="text-sm">
              {desc}
            </div>
          ))}
        </div>
        <div className="custom-card">
          <span className="font-semibold">Duration: </span>
          {singleSpell?.duration}
        </div>
        <div className="custom-card">
          <span className="font-semibold">Higher Level:</span>
          <div>
            {singleSpell?.higher_level.map((level: string, index: number) => (
              <div key={index} className="text-sm">
                {level}
              </div>
            ))}
          </div>
        </div>
        <div className="custom-card">
          <span className="font-semibold">Level: </span>
          <div className="text-sm">{singleSpell?.level || "N/A"}</div>
        </div>
        <div className="custom-card">
          <span className="font-semibold">Material: </span>
          <div className="text-sm">{singleSpell?.material || "N/A"}</div>
        </div>
        <div className="custom-card">
          <span className="font-semibold">Name: </span>
          <div className="text-sm"> {singleSpell?.name || "N/A"}</div>
        </div>
        <div className="custom-card">
          <span className="font-semibold">Range: </span>
          <div className="text-sm">{singleSpell?.range || "N/A"}</div>
        </div>
        <div className="custom-card">
          <span className="font-semibold">Range: </span>{" "}
          <div className="text-sm">{singleSpell?.school?.name || "N/A"}</div>
        </div>
        <div className="custom-card">
          <span className="font-semibold">Subclass:</span>
          {singleSpell?.length > 0
            ? singleSpell?.subclasses.map(
                ({ name }: SubClass, index: number) => (
                  <div key={index} className="text-sm">
                    {name}
                  </div>
                )
              )
            : "N/A"}
        </div>
      </div>
    </Cards>
  );
};

export default DetailedView;
