import { Modal } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";
import QuickAction, { QuickActionProps } from "./QuickAction";

type QuickActionModalProps = QuickActionProps & {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

const QuickActionModal: FC<QuickActionModalProps> = (props) => {
    const { open, setOpen, submit, submitLabel, ...rest } = props;

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <QuickAction submit={submit} submitLabel={submitLabel} {...rest} />
        </Modal>
    );
};

export default QuickActionModal;
