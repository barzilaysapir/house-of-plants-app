import { FC, useEffect } from "react";
import PageTitle from "components/PageTitle/PageTitle";

type FindPlantsProps = {};

const FindPlants: FC<FindPlantsProps> = props => {

    const getPlants = async () => {
        const response = await fetch('https://trefle.io/api/v1/plants?token=0rb0D_osH3J27ZVWN8CWNrpv1o-2zKP_aPfXtnq0mgY', {
            headers: {
                'content-type': 'text/plain',
            }
        });
        const plants = await response.json();
        console.log(plants);

    };

    useEffect(() => {
        getPlants();
    }, [])

    return (
        <PageTitle title="Find Plants" subtitle="Find any plant" />
    )
}

export default FindPlants;
