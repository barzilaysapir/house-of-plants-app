import { Gender, User } from "shared/types/User";
import ProfileImage from "mocks/images/user.jpg";

export const USER: User = {
    id: 1,
    name: "John Doe",
    initials: "JD",
    email: "XXXXXXXXXXXX",
    image: ProfileImage,
    amountOfPlants: 25,
    gender: Gender.FEMALE,
    title: "Plant Lady"
}
