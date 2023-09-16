import { FC } from "react";

type PageTitleProps = {
    title: string;
    subtitle?: string;
};

const PageTitle: FC<PageTitleProps> = props => {
    const { title, subtitle } = props;
    return (
        <div>
            <h1>{title}</h1>
            <span>{subtitle}</span>
        </div>
    );
}

export default PageTitle;
