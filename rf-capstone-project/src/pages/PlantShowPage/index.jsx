import NavBar from "sharedComponents/NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as plantService from "services/plant";
import LoadingSpinner from "pages/LoadingSpinner";

const PlantShowPage = () => {
  const [plant, setPlant] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { plantId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await plantService.getPlantById({ id: plantId });
      const data = await response.json();
      setPlant(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex justify-center bg-green-50 min-h-screen">
        <div className="w-full max-w-5xl px-8 py-24">
          {isLoading ? <LoadingSpinner /> : <div>show page</div>}
        </div>
      </div>
    </>
  );
};
export default PlantShowPage;
