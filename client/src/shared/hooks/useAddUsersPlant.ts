import { CARE } from "mocks/MyPlants";
import { Plant } from "shared/types/plants";

type UseAddUsersPlantProps = {
    userId: string;
    onAddComplete: () => void;
};

const useAddUsersPlant = ({ userId, onAddComplete }: UseAddUsersPlantProps) => {
    // const { mutate } = useSWRConfig();

    const fetchAddPlant = async (plant: Plant) => {
        // const { trigger } = useMutateData({
        //     url: `/users/${JSON.parse(user!).id}/addPlant/`,
        // });

        try {
            // await trigger({ args: plantId.toString() });
            // await mutate(
            //     `${process.env.REACT_APP_API}/users/${
            //         JSON.parse(user!).id
            //     }/addPlant/${plantId}`,
            //     { revalidate: false }
            // );

            const res = await fetch(
                `${process.env.REACT_APP_API}/users/${userId}/addPlant`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ plant: { ...plant, care: CARE } }),
                }
            ).then((res) => res.json());
            console.log(res);
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
