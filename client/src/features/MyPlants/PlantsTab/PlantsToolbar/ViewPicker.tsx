import {
    GridView,
    ViewAgendaOutlined,
    FormatAlignJustify,
} from "@mui/icons-material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import i18n from "config/locales/i18n";
import { FC } from "react";
import { CardView } from "shared/types/card";

type ViewPickerProps = {
    view: CardView;
    onChangeView: (
        event: React.MouseEvent<HTMLElement>,
        newView: CardView
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
                value={CardView.GRID}
                aria-label={i18n.t("view.grid")}
            >
                <GridView />
            </ToggleButton>
            <ToggleButton
                value={CardView.CARDS}
                aria-label={i18n.t("view.cards")}
            >
                <ViewAgendaOutlined />
            </ToggleButton>
            <ToggleButton
                value={CardView.ROWS}
                aria-label={i18n.t("view.rows")}
            >
                <FormatAlignJustify />
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default ViewPicker;
