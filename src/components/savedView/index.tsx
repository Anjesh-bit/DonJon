import ViewSpellLists from "../home/ViewList";

const SavedView = () => {
  return (
    <>
      <div className="px-[50px] pt-[15px] text-lg font-semibold">
        Saved Spell List : 
      </div>
      <ViewSpellLists isSaved={true} />
    </>
  );
};
export default SavedView;
