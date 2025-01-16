import { ButtonProps, Modal } from "@mui/material";
import { Dispatch, FC, SetStateAction, useState } from "react";
import QuickAction from "./QuickAction";

type QuickActionModalProps = ButtonProps & {
    inputLabel?: string;
    buttonLabel: string;
    onClick: any;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

const QuickActionModal: FC<QuickActionModalProps> = (props) => {
    const { open, setOpen, inputLabel, buttonLabel, onClick } = props;

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <QuickAction
                inputLabel={inputLabel}
                buttonLabel={buttonLabel}
                onClick={onClick}
            />
        </Modal>
    );
};

export default QuickActionModal;
