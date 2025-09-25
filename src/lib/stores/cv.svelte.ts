import type { CV } from "$lib/types/CV";

export let cv = $state<CV>({
    header: {
        bgImage: "",
        bgColor: "",
    },
    aside: {
        bgColor: "",
    },
    body: {
        bgColor: "",
    },
});
