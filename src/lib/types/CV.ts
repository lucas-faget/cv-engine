import type { ContactDetails } from "./ContactDetails";
import type { TimelineItem } from "./TimelineItem";

export type CV = {
    header: {
        bgImage: string;
        bgColor: string;
    };
    aside: {
        bgColor: string;
        contactDetails: ContactDetails;
    };
    body: {
        bgColor: string;
        workExperience: TimelineItem[];
        education: TimelineItem[];
    };
};
