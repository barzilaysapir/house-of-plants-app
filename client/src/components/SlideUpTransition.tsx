import { Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Ref, forwardRef } from "react";

const SlideUpTransition = forwardRef(function Transition(
    props: TransitionProps & {
        children: JSX.Element;
    },
    ref: Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default SlideUpTransition;
