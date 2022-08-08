import CityIO from "../../Components/CityIO";
import { useSelector } from "react-redux";
import MenuContainer from "./MenuContainer";
import DeckGLMap from "./DeckglMap";
import VisContainer from "./VisContainer";
import AnimationComponent from "../../Components/AnimationComponent";
import LoadingModules from "../../Components/LoadingModules";

export default function CityScopeJS() {
  const cityIOisDone = useSelector(
    (state) => state.cityIOdataState.cityIOisDone
  );
  const tableName = useSelector(
    (state) => state.cityIOdataState.cityIOtableName
  );

  return (
    <>
      {!cityIOisDone && <LoadingModules loadingModules={[tableName]} />}
      {/* if we got a cityIO table name, start cityIO module */}
      {tableName && <CityIO tableName={tableName} />}
      {/* if cityIO module is done loading, start the CSjs app */}
      {cityIOisDone && (
        <>
          <AnimationComponent />
          <DeckGLMap />
          <MenuContainer />
          <VisContainer />
        </>
      )}
    </>
  );
}
