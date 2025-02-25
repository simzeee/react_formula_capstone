import NavBar from "sharedComponents/NavBar";
import RedirectToIfSignedInIfSignedOut from "sharedComponents/RedirectToSignInIfSignedOut";

const PlantListPage = () => {
  return (
    <RedirectToIfSignedInIfSignedOut>
      < NavBar />
    </RedirectToIfSignedInIfSignedOut>
  );
};

export default PlantListPage;
