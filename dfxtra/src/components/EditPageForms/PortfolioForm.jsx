import { useState } from "react";
import Input from "../../Utils/Input.jsx"

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

    const [formFields, setFormFields] = useState([
        {
            title: "",
            url: "",
            year: "",
            description: "",
        },
    ])

    const addFields = () => {
        let object = {
            title: "",
            url: "",
            year: "",
            description: "",
        }

        setFormFields([...formFields, object])
    }

    const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
    }

    return (
        <div className="flex flex-col px-2 w-full">
            <div className="flex flex-row items-center justify-between">
                <h2 className="pt-2 pb-4">Portfolio:</h2>
                <button
                    className="w-fit h-fit bg-light-grey text-royal-blue font-medium border rounded-md px-4 py-2"
                    onClick={addFields}
                >
                    Add
                </button>
            </div>
            <div className="flex flex-col" id="portfolio-form">
                <form className="flex flex-col items-center">
                    {formFields.map((form, index) => {
                        return (
                            <div className="w-full flex flex-col items-center lg:flex lg:flex-row" key={index}>
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
                                <div className="flex flex-col">
                                    <button
                                        className="bg-red-100 text-red-500 py-1 px-2.5 rounded-md"
                                        type="button"
                                        onClick={() => removeFields(index)}
                                    >
                                        Remove
                                    </button>
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