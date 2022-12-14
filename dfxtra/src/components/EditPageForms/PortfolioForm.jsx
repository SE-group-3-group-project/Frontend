import { useState } from "react";
import Input from "../../utils/Input"

const Portfolio = ({ portfolio }) => {
    let title;
    let url;
    let year;
    let description;

    for (let i = 0; i < portfolio.length; i++) {
        title = portfolio[i].title;
        url = portfolio[i].url;
        year = portfolio[i].year;
        description = portfolio[i].description;
    }

    const [portfolioProfile, setPortfolioProfile] = useState({
        portfolioTitle: title,
        portfolioURL: url,
        portfolioYear: year,
        portfolioDescription: description,
    })

    const updatePortfolioFields = (e) => {
        const { id, value } = e.target
        setPortfolioProfile({ ...portfolioProfile, [id]: value })
    }

    return (
        <div className="flex flex-col px-2 w-full">
            <div className="flex flex-row items-center justify-between">
                <h2 className="pt-2 pb-4">Portfolio:</h2>
            </div>
            <div className="flex flex-col" id="portfolio-form">
                <form className="lg:flex lg:flex-row lg:items-center">
                    <div className="w-full px-3 pb-4">
                        <Input
                            label="title"
                            id="portfolioTitle"
                            type="text"
                            placeholder="A dad jokes app"
                            value={portfolioProfile.portfolioTitle}
                            onChange={updatePortfolioFields}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <Input
                            label="url"
                            id="url"
                            type="url"
                            placeholder="https://kxcgu.github.io/dad-jokes"
                            value={portfolioProfile.portfolioURL}
                            onChange={updatePortfolioFields}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <Input
                            label="year"
                            id="year"
                            type="number"
                            min="1800"
                            max="2022"
                            placeholder="2022"
                            value={portfolioProfile.portfolioYear}
                            onChange={updatePortfolioFields}
                            required />
                    </div>
                    <div className="w-full px-3 pb-4">
                        <Input
                            label="description"
                            id="description"
                            type="text"
                            placeholder="An app made to extend React knowledge"
                            value={portfolioProfile.portfolioDescription}
                            onChange={updatePortfolioFields}
                            required />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Portfolio;