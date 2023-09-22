import { useState } from "react";

type UseToggleDisplayProps = {};

const useToggleDisplay = (props?: UseToggleDisplayProps) => {

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
