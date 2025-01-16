import { Button, ButtonProps, Stack, TextField } from "@mui/material";
import { FC, useState } from "react";

type QuickActionProps = ButtonProps & {
    inputLabel?: string;
    buttonLabel: string;
    onClick: (text: string) => void;
};

const QuickAction: FC<QuickActionProps> = (props) => {
    const { inputLabel, buttonLabel, onClick } = props;

    const [text, setText] = useState("");

    const submit = () => {
        onClick(text);
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
                {inputLabel && (
                    <TextField
                        label={inputLabel}
                        variant="standard"
                        onChange={(e) => setText(e.target.value)}
                        autoFocus
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                submit();
                            }
                        }}
                    />
                )}

                <Button variant="contained" color="primary" onClick={submit}>
                    {buttonLabel}
                </Button>
            </Stack>
        </Stack>
    );
};

export default QuickAction;
