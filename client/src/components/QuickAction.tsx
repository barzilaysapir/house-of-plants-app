import { Button, ButtonProps, Stack, TextField } from "@mui/material";
import { FC, useState } from "react";

export type CallToAction = ButtonProps & {
    inputLabel: string;
    buttonLabel: string;
    onClick: any;
};

type QuickActionProps = {
    callToAction: CallToAction;
};

const QuickAction: FC<QuickActionProps> = (props) => {
    const { callToAction } = props;

    const [text, setText] = useState("");

    const submit = () => {
        callToAction.onClick(text);
    };

    return (
        <Stack
            spacing={1}
            alignItems="center"
            justifyContent="center"
            flex={1}
            sx={{
                justifyContent: "center",
                backgroundColor: "ThreeDFace",
            }}
        >
            <Stack spacing={2}>
                <TextField
                    label={callToAction.inputLabel}
                    variant="standard"
                    onChange={(e) => setText(e.target.value)}
                    autoFocus
                    onKeyDown={(e) => {
                        console.log(e.key);

                        if (e.key === "Enter") {
                            submit();
                        }
                    }}
                />
                <Button variant="contained" color="primary" onClick={submit}>
                    {callToAction.buttonLabel}
                </Button>
            </Stack>
        </Stack>
    );
};

export default QuickAction;
