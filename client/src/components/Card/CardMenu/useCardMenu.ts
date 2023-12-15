import { MouseEvent, useState } from "react";
import useToggleDisplay from "shared/hooks/useToggleDisplay";
import useActiveDevice from "shared/hooks/useActiveDevice";

const useCardMenu = () => {
    const { isMobile } = useActiveDevice();

    const {
        isOpen: isOpenMobile,
        handleOpen: handleOpenMobile,
        handleClose: handleCloseMobile,
    } = useToggleDisplay();

    const [desktopAnchor, setDesktopAnchor] = useState<HTMLElement | null>(
        null
    );

    const handleCloseDesktop = () => {
        setDesktopAnchor(null);
    };

    const onOpenClick = (e: MouseEvent<HTMLElement>) => {
        if (isMobile) handleOpenMobile();
        else setDesktopAnchor(e.currentTarget);
    };

    return {
        onOpenClick,
        handleCloseDesktop,
        handleCloseMobile,
        isOpenMobile,
        desktopAnchor,
    };
};

export default useCardMenu;
