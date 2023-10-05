import { CARE } from "mocks/MyPlants";
import { Plant } from "shared/types/plants";

type UseAddUsersPlantProps = {
    userId: string;
    onAddComplete: () => void;
};

const useAddUsersPlant = ({ userId, onAddComplete }: UseAddUsersPlantProps) => {
    const fetchAddPlant = async (plant: Plant) => {
        try {
            await fetch(
                `${process.env.REACT_APP_API}/users/${userId}/addPlant`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ plant: { ...plant, care: CARE } }),
                }
            ).then((res) => res.json());
            onAddComplete();
        } catch (error) {
            console.error(error);
        }
    };

    return {
        fetchAddPlant,
    };
};

export default useAddUsersPlant;
