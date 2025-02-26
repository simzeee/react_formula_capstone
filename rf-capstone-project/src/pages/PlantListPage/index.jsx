import NavBar from "sharedComponents/NavBar";
import RedirectToIfSignedInIfSignedOut from "sharedComponents/RedirectToSignInIfSignedOut";
import { useEffect } from "react";
import * as plantService from "services/plant";

const PlantListPage = () => {
  useEffect(() => {
    (async () => {
      const response = await plantService.getPlants();
      const data = await response.json();
      console.log(data)
    })();
  }, []);
  return (
    <RedirectToIfSignedInIfSignedOut>
      <NavBar />
    </RedirectToIfSignedInIfSignedOut>
  );
};

export default PlantListPage;
