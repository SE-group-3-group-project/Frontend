import { useState } from "react";
import Input from "../../Utils/Input.jsx"

const Portfolio = ({ storyProgress, setStoryProgress, inputPortfolio, setPortfolio }) => {
    let portfolioTitle;
    let portfolioURL;
    let portfolioYear;
    let portfolioDescription;

    for (let i = 0; i < inputPortfolio.length; i++) {
        portfolioTitle = inputPortfolio[i].title;
        portfolioURL = inputPortfolio[i].url;
        portfolioYear = inputPortfolio[i].year;
        portfolioDescription = inputPortfolio[i].description;
    }

    const [portfolioProfiles, setPortfolioProfile] = useState([{
        title: portfolioTitle,
        url: portfolioURL,
        year: portfolioYear,
        description: portfolioDescription,
    }])

    const updatePortfolioFields = (index, event) => {
        const values = [...portfolioProfiles];
        values[index][event.target.id] = event.target.value;
        setPortfolioProfile(values)
    }

    const addFields = () => {
        const values = [...portfolioProfiles];
        values.push({
            title: "",
            url: "",
            year: "",
            description: "",
        });
        setPortfolioProfile(values)
    }

    const removeFields = (index) => {
        let data = [...portfolioProfiles];
        data.splice(index, 1)
        setPortfolioProfile(data)
    }

    const handleSave = () => {
        setPortfolio(portfolioProfiles)
        setStoryProgress(storyProgress + 10)
    }

    return (
        <div className="flex flex-col px-2 pb-1 w-full border-b">
            <div className="flex flex-row items-center justify-between">
                <h2 className="pt-2 pb-4">Portfolio:</h2>
                <div className="flex flex-row gap-2">
                    <button
                        className="w-fit h-fit bg-light-blue text-white font-medium rounded-md px-4 py-2 hover:bg-royal-blue"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                    <button
                        className="bg-light-grey text-royal-blue font-medium rounded-md py-1 px-4"
                        type="button"
                        onClick={() => addFields()}
                    >
                        Add
                    </button>
                </div>
            </div>
            <div className="flex flex-col" id="portfolio-form">
                <form className="flex flex-col items-center">
                    {portfolioProfiles.map((portfolioProfile, index) => {
                        return (
                            <div className="w-full flex flex-col items-center lg:flex lg:flex-row" key={index}>
                                <button
                                    className="bg-red-100 text-red-500 text-xl text-center rounded-md py-1 px-3 mt-1.5"
                                    type="button"
                                    onClick={() => removeFields(index)}
                                >
                                    X
                                </button>
                                <div className="w-full px-3 pb-4">
                                    <Input
                                        label="title"
                                        id="title"
                                        type="text"
                                        placeholder="A dad jokes app"
                                        value={portfolioProfile.title}
                                        onChange={event => updatePortfolioFields(index, event)}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <Input
                                        label="url"
                                        id="url"
                                        type="url"
                                        placeholder="https://kxcgu.github.io/dad-jokes"
                                        value={portfolioProfile.url}
                                        onChange={event => updatePortfolioFields(index, event)}
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
                                        value={portfolioProfile.year}
                                        onChange={event => updatePortfolioFields(index, event)}
                                        required />
                                </div>
                                <div className="w-full px-3 pb-4">
                                    <Input
                                        label="description"
                                        id="description"
                                        type="text"
                                        placeholder="An app made to extend React knowledge"
                                        value={portfolioProfile.description}
                                        onChange={event => updatePortfolioFields(index, event)}
                                        required />
                                </div>
                            </div>
                        )
                    })}
                </form>
            </div>
        </div>
    )
}
export default Portfolio;