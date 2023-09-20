import { MY_PLANTS } from "../../mocks/MyPlants";

const getMyPlants = async () => {
    // const response = await fetch('/api/user');
    // const data = await response.json();
    const data = MY_PLANTS;
    // await new Promise(resolve => setTimeout(resolve, 3000));
    return data;
}

export const myPlantsLoader = async () => {
    return await getMyPlants();
};
