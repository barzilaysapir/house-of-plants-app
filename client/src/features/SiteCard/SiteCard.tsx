import React, { FC, MouseEventHandler, PropsWithChildren } from "react";
import { CardImageSize } from "shared/types/card";
import Card from "components/Card";
import { Site } from "shared/types/sites";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import DeleteSiteModal from "features/DeleteSiteModal/DeleteSiteModal";
import useSiteCard from "./useSiteCard";

type SiteCardProps = PropsWithChildren & {
    site: Site;
    size?: CardImageSize;
    vertical?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const SiteCard: FC<SiteCardProps> = (props) => {
    const {
        site,
        size = CardImageSize.MEDIUM,
        vertical = false,
        children,
        onClick,
    } = props;

    const { menuOptions, openDeleteModal, setOpenDeleteModal } = useSiteCard();

    const menuProps = menuOptions
        ? {
              id: site.id,
              options: menuOptions,
              Icon: LocationCityOutlinedIcon,
          }
        : undefined;

    return (
        <>
            <Card
                data={site}
                size={size}
                onClick={onClick}
                vertical={vertical}
                menu={menuProps}
                noWrap
            >
                {children}
            </Card>

            <DeleteSiteModal
                siteId={site.id}
                open={openDeleteModal}
                setOpen={setOpenDeleteModal}
            />
        </>
    );
};

export default SiteCard;
