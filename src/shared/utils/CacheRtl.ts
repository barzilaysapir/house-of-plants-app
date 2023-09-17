import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

// const emptyCache = createCache({
//     key: "meaningless-key",
// });

// <CacheProvider value={ direction === "rtl" ? cacheRtl : emptyCache }>

export default cacheRtl;
