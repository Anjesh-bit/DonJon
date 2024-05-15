import { Fragment } from "react/jsx-runtime";
import ViewSpellLists from "./ViewList";
import { useNavigate } from "react-router-dom";
import { getRandomYellowShade } from "../../utils/getRandomColor";

const DonJonHome = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/detailed/saved");
  };
  return (
    <Fragment>
      <button
        className="border border-[2px] border-[black] mt-4 px-4 py-3 rounded-[5px] text-sm tracking-wider font-semibold mx-[50px]"
        onClick={handleOnClick}
        style={{ background: getRandomYellowShade() }}
      >
        View Saved List
      </button>
      <ViewSpellLists isSaved={false} />
    </Fragment>
  );
};

export default DonJonHome;
