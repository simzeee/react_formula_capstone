import NavBar from "sharedComponents/NavBar";
import RedirectToIfSignedInIfSignedOut from "sharedComponents/RedirectToSignInIfSignedOut";
import { useEffect, useState } from "react";
import * as plantService from "services/plant";
import PlantItem from "./PlantItem";

const PlantListPage = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await plantService.getPlants();
      const data = await response.json();
      setPlants(data);
      setLoading(false);
    })();
  }, []);

  return (
    <RedirectToIfSignedInIfSignedOut>
      <NavBar />
      <div className="min-h-screen bg-green-50 ">
        {loading ? (
          <div className="flex justify-center pt-40">
            <div className="text-3xl fa-duotone fa-spinner-third text-emerald-600 animate-spin"></div>
          </div>
        ) : (
          <div className="flex justify-center py-24">
            <div className="w-full max-w-5xl">
              {" "}
              <div className="font-playfair text-4xl text-emerald-800 mb-6 px-4">
                Plants In Stock
              </div>
              <div className="flex flex-wrap justify-center">
                {plants.map((plant) => (
                  <PlantItem key={plant.id} plant={plant} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </RedirectToIfSignedInIfSignedOut>
  );
};

export default PlantListPage;
