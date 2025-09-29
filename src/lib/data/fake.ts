import type { CV } from "$lib/types/CV";
import { faker } from "@faker-js/faker";

export const fake: CV = {
    header: {
        // bgImage: faker.image.urlPicsumPhotos({ width: 800, height: 200 }),
        bgImage: "",
        bgColor: faker.color.rgb(),
    },
    aside: {
        bgColor: "",
        contactDetails: {
            fullName: faker.person.fullName(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            address: faker.location.streetAddress({ useFullAddress: true }),
            linkedIn: `linkedin.com/in/${faker.internet.username().toLowerCase()}`,
            github: `github.com/${faker.internet.username().toLowerCase()}`,
            website: faker.internet.domainName(),
        },
    },
    body: {
        bgColor: "",
        workExperience: [
            {
                title: faker.person.jobTitle(),
                meta: [
                    {
                        icon: "lucide:calendar",
                        label: `${faker.date.month()} ${faker.date.past({ years: 1 }).getFullYear()} - now`,
                    },
                    {
                        icon: "lucide:building-2",
                        label: faker.company.name(),
                    },
                    {
                        icon: "lucide:map-pin",
                        label: `${faker.location.city()}, ${faker.location.country()}`,
                    },
                ],
                description: faker.lorem.sentences(2),
            },
            {
                title: faker.person.jobTitle(),
                meta: [
                    {
                        icon: "lucide:calendar",
                        label: `${faker.date.month()} ${faker.date.past({ years: 3 }).getFullYear()} - ${faker.date.month()} ${faker.date.past({ years: 2 }).getFullYear()}`,
                    },
                    {
                        icon: "lucide:building-2",
                        label: faker.company.name(),
                    },
                    {
                        icon: "lucide:map-pin",
                        label: `${faker.location.city()}, ${faker.location.country()}`,
                    },
                ],
                description: faker.lorem.sentences(2),
            },
        ],
        education: [
            {
                title: `${faker.person.jobArea()} Degree`,
                meta: [
                    {
                        icon: "lucide:calendar",
                        label: `${faker.date.month()} ${faker.date.past({ years: 5 }).getFullYear()} - ${faker.date.month()} ${faker.date.past({ years: 4 }).getFullYear()}`,
                    },
                    {
                        icon: "lucide:school",
                        label: faker.company.name() + " University",
                    },
                    {
                        icon: "lucide:map-pin",
                        label: `${faker.location.city()}, ${faker.location.country()}`,
                    },
                ],
                description: faker.lorem.sentences(2),
                icon: "lucide:graduation-cap",
            },
            {
                title: `${faker.person.jobArea()} Diploma`,
                icon: "lucide:graduation-cap",
            },
        ],
    },
};
