import { useState } from "react";

const useToggleDisplay = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOpen = () => {
        setIsOpen(true);
    };

    return {
        isOpen,
        toggle,
        handleOpen,
        handleClose,
    }
};

export default useToggleDisplay;
