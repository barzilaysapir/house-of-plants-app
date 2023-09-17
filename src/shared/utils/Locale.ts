import LocalizedStrings from 'react-localization';

const LOCALE = new LocalizedStrings({
    en: {
        direction: 'ltr',
        myPlants: {
            title: "My Plants",
            subtitle: "{0} plants in my collection",
            searchPlaceholder: "Search in your plants",

        }
    },
    he: {
        direction: 'rtl',
        myPlants: {
            title: "הצמחים שלי",
            subtitle: "{0} צמחים באוסף שלי",
            searchPlaceholder: "חיפוש צמח",
        }
    }
});

export default LOCALE;
