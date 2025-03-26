import NavBar from "sharedComponents/NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as plantService from "services/plant";
import LoadingSpinner from "pages/LoadingSpinner";
import PlantInfoSection from "pages/PlantShowPage/PlantInfoSection";

const PlantShowPage = () => {
  const [plant, setPlant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { plantId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await plantService.getPlantById({ id: plantId });
      const data = await response.json();
      setPlant(data);
      setIsLoading(false);
    })();
  }, [plantId]);

  return (
    <>
      <NavBar />
      <div className="flex justify-center bg-green-50 min-h-screen font-lato">
        <div className="w-full max-w-5xl px-8 py-24">
          {isLoading ? <LoadingSpinner /> : <PlantInfoSection plant={plant} />}
        </div>
      </div>
    </>
  );
};
export default PlantShowPage;
