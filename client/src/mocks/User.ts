import { Gender, User } from "shared/types/users";
import ProfileImage from "mocks/images/user.jpg";

export const USER: User = {
    id: 1,
    name: "John Doe",
    email: "XXXXXXXXXXXX",
    picture: ProfileImage,
    gender: Gender.FEMALE,
    plants: [],
    sites: [],
};
