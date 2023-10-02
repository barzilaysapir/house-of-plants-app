import {
    GridView,
    ViewAgendaOutlined,
    FormatAlignJustify,
} from "@mui/icons-material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import i18n from "config/locales/i18n";
import { FC } from "react";
import { PlantView } from "shared/types/plantCard";

type ViewPickerProps = {
    view: PlantView;
    onChangeView: (
        event: React.MouseEvent<HTMLElement>,
        newView: PlantView
    ) => void;
};

const ViewPicker: FC<ViewPickerProps> = (props) => {
    const { view, onChangeView } = props;

    return (
        <ToggleButtonGroup
            color="primary"
            value={view}
            onChange={onChangeView}
            aria-label={i18n.t("view.toggle")}
            size="small"
            exclusive
        >
            <ToggleButton
                value={PlantView.GRID}
                aria-label={i18n.t("view.grid")}
            >
                <GridView />
            </ToggleButton>
            <ToggleButton
                value={PlantView.CARDS}
                aria-label={i18n.t("view.cards")}
            >
                <ViewAgendaOutlined />
            </ToggleButton>
            <ToggleButton
                value={PlantView.ROWS}
                aria-label={i18n.t("view.rows")}
            >
                <FormatAlignJustify />
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default ViewPicker;
