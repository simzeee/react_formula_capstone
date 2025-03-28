import NavBar from "sharedComponents/NavBar";
import RedirectToIfSignedInIfSignedOut from "sharedComponents/RedirectToSignInIfSignedOut";
import { useEffect, useState } from "react";
import * as plantService from "services/plant";
import PlantItem from "./PlantItem";
import LoadingSpinner from "pages/LoadingSpinner";
import { motion } from "framer-motion";

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
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <div className="flex justify-center py-24">
            <div className="w-full max-w-5xl">
              {" "}
              <div className="font-playfair text-4xl text-emerald-800 mb-6 px-4">
                Plants In Stock
              </div>
              <div className="flex flex-wrap justify-center">
                {plants.map((plant, idx) => (
                  <motion.div
                    key={plant.id}
                    initial={{ opacity: 0, translateY: "20px" }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (idx % 3) * 0.2, duration: 0.4 }}
                  >
                    <PlantItem plant={plant} />
                  </motion.div>
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
