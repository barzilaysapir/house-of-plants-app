import { SWRConfiguration } from "swr";

const SWR_CONFIG: SWRConfiguration = {
    errorRetryCount: 3,
    focusThrottleInterval: 5000,
};

export default SWR_CONFIG;
