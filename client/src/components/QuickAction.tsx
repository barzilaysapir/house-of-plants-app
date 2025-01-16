import { Box, Button, ButtonProps, Stack, TextField } from "@mui/material";
import { FC, useState } from "react";

type QuickActionProps = ButtonProps & {
    inputLabel?: string;
    buttonLabel: string;
    onClick: (text: string) => void;
};

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const QuickAction: FC<QuickActionProps> = (props) => {
    const { inputLabel, buttonLabel, onClick } = props;

    const [text, setText] = useState("");

    const submit = () => {
        onClick(text);
    };

    return (
        <Box sx={style}>
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
        </Box>
    );
};

export default QuickAction;
