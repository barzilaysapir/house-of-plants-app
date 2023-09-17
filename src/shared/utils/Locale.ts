import LocalizedStrings from 'react-localization';

const LOCALE = new LocalizedStrings({
    en: {
        direction: 'ltr',
        userHeader: {
            greeting: 'Hi {0}!',
            avatarAlt: "Profile Picture",
        },
        myPlants: {
            title: "My Plants",
            subtitle: "{0} plants in my collection",
            searchPlaceholder: "Search in your plants",

        }
    },
    he: {
        direction: 'rtl',
        userHeader: {
            greeting: 'Hi {0}!',
            avatarAlt: "תמונת פרופיל",
        },
        myPlants: {
            title: "הצמחים שלי",
            subtitle: "{0} צמחים באוסף שלי",
            searchPlaceholder: "חיפוש צמח",
        }
    }
});

export default LOCALE;
