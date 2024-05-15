import React, { Fragment, useEffect, useState } from "react";
import {
  useGetProfileInfo,
  useGetProfileInfoByIndex,
} from "../../services/spells/setUp";
import { getRandomYellowShade } from "../../utils/getRandomColor";
import { useNavigate } from "react-router-dom";
import { addTeams } from "../../slices/saveSlice";
import { useDispatch, useSelector } from "react-redux";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";
import useMessage from "../../hooks/useMessage";

interface Spell {
  index: string;
  name: string;
  url: string;
  items: string;
  text: string;
}

interface DndCreatedData {
  dndData: any[];
}

interface ShowMessageParams {
  content: string;
  type: "success" | "error" | "info" | "warning" | "loading" | undefined;
  className?: string;
}

interface RootState {
  teams: {
    dndData: any[];
  };
}

const ViewSpellLists: React.FC<{ isSaved: boolean }> = ({ isSaved }) => {
  const {
    data: spellData,
    isLoading: spellLoading,
    isError: spellError,
  } = useGetProfileInfo();

  const [resultsData, setResults] = useState<Spell[]>(
    getLocalStorage("list") || []
  );

  const data = useSelector((state: RootState) => state.teams);
  const { contextHolder, showMessage } = useMessage();
  const results: Spell[] | DndCreatedData = isSaved
    ? (getLocalStorage("dndCreated") as DndCreatedData) || []
    : resultsData;

  const dndData = data?.dndData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnclickSpells = (
    e: React.MouseEvent<HTMLDivElement>,
    url: string,
    index: string
  ) => {
    if (url) {
      navigate(`/detailed/${index}`, { state: { url } });
    }
  };

  const handleSaveSpell = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: string,
    name: string,
    url: string
  ) => {
    const finalArr = resultsData?.map((items: Spell) => {
      if (items.index === index) {
        return { ...items, text: "Saved" };
      } else {
        return { ...items };
      }
    });
    setResults(finalArr || []);
    setLocalStorage("list", finalArr);
    if (!dndData.some((item: any) => item.index === index)) {
      const updatedArr = [...dndData, { index, name, url }];
      dispatch(addTeams(updatedArr));
      const params: ShowMessageParams = {
        content: "Dnd Spells have been Successfully Saved",
        type: "info",
      };
      showMessage(params);
    }
  };

  useEffect(() => {
    if (dndData?.length > 0 && !isSaved) {
      setLocalStorage("dndCreated", dndData);
    }
  }, [data?.dndData]);

  useEffect(() => {
    const isEmpty = spellData?.results?.length > 0;
    if (isEmpty) {
      const localStorageList = getLocalStorage("list");
      if (!localStorageList) {
        setResults(spellData?.results);
        setLocalStorage("list", spellData?.results);
      }
    }
  }, [spellData?.results]);

  if (spellLoading)
    return (
      <div
        className="h-[100vh] w-full flex justify-center items-center"
        style={{ background: getRandomYellowShade() }}
      >
        <img src={require("../../assets/Loader.gif")} alt="loader" />
      </div>
    );

  if (spellError) return <div>Error fetching data</div>;

  return (
    <Fragment>
      {contextHolder}
      <div className="grid grid-cols-12 gap-4 p-[50px]">
        {Array.isArray(results) &&
          results.map((spells: Spell) => (
            <div
              key={spells.index}
              className="lg:col-span-3 md:col-span-6 col-span-12 text-center cursor-pointer p-5 font-semibold  border border-[2px] border-black min-h-[10vh] text-center overflow-y-auto flex  flex-col gap-2 justify-center items-center  p-[10px]"
              style={{ background: getRandomYellowShade() }}
            >
              <div
                onClick={(e) =>
                  handleOnclickSpells(e, spells.url, spells.index)
                }
              >
                {spells.name}
              </div>
              {!isSaved && (
                <button
                  className="border border-[2px] border-[black] mt-4 px-2 py-1 rounded-[5px] text-sm tracking-wider bg-[#000] text-[#fff]"
                  onClick={(e) =>
                    handleSaveSpell(e, spells.index, spells.name, spells.url)
                  }
                >
                  {spells?.text || "Save Spell"}
                </button>
              )}
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default ViewSpellLists;
