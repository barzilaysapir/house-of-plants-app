import { useState } from "react";

const useToggleDisplay = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return {
        isOpen,
        toggle,
        handleOpen,
        handleClose,
    };
};

export default useToggleDisplay;
