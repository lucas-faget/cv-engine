import type { CV } from "$lib/types/CV";
import { fake } from "$lib/data/fake";

export let cv: CV = $state({
    header: {
        bgImage: fake.header.bgImage,
        bgColor: fake.header.bgColor,
    },
    aside: {
        bgColor: fake.aside.bgColor,
        contactDetails: fake.aside.contactDetails,
    },
    body: {
        bgColor: fake.body.bgColor,
        workExperience: fake.body.workExperience,
        education: fake.body.education,
    },
});
