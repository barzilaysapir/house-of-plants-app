import { Button, ButtonProps, Paper, Stack } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export type QuickActionProps = PropsWithChildren<
    ButtonProps & {
        submit: () => void;
        submitLabel: string;
    } & (
            | {
                  cancel: () => void;
                  cancelLabel: string;
              }
            | {
                  cancel?: never;
                  cancelLabel?: never;
              }
        )
>;

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 300,
    p: 4,
};

const QuickAction: FC<QuickActionProps> = (props) => {
    const { submit, submitLabel, cancel, cancelLabel, children } = props;

    return (
        <Paper sx={style}>
            <Stack spacing={3}>
                {children}

                <Stack direction="row" spacing={1}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={submit}
                        fullWidth
                    >
                        {submitLabel}
                    </Button>

                    {cancel && (
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={cancel}
                            fullWidth
                        >
                            {cancelLabel}
                        </Button>
                    )}
                </Stack>
            </Stack>
        </Paper>
    );
};

export default QuickAction;
