export enum CardView {
    GRID = "grid",
    CARDS = "cards",
    ROWS = "rows",
}

export enum CardImageSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
}

export type CardData = {
    id: string;
    name: string;
    description?: string;
    image: string;
};
