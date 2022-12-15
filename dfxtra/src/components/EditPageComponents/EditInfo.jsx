import { useState } from "react";

const EditInfo = ({ progress, setProgress, firstName, lastName, pronouns, profilePicture, pEmail, dfEmail, github, linkedin, phone, nationality, personality, setInfo }) => {

    const [selectedImage, setSelectedImage] = useState(null);

    const [profile, setProfile] = useState({
        first: firstName,
        last: lastName,
        pronoun: pronouns.replaceAll("/", "-"),
        photo: profilePicture,
        personalEmail: pEmail,
        workEmail: dfEmail,
        githubAcc: github,
        linkedinAcc: linkedin,
        number: phone,
        country: nationality.toLowerCase(),
        mbti: personality,
    })

    const updateInfoFields = (e) => {
        const { id, value } = e.target
        setProfile({ ...profile, [id]: value })
    }


    const handleSubmit = async (e) => {
        if (progress < 100) {
            setProgress(progress + 40)
        }
        e.preventDefault();

        const name = {
            first: profile.first,
            last: profile.last
        }
        const contactDetails = {
            personalEmail: profile.personalEmail,
            dfEmail: profile.workEmail,
            github: profile.githubAcc,
            linkedIn: profile.linkedinAcc,
            phoneNumber: profile.number

        }
        const sendInfo = {
            name: name, pronoun: profile.pronoun, profilePicture: profile.photo, contactDetails: contactDetails, nationality: profile.country, personality: profile.mbti
        }
        setInfo(sendInfo);


    }

    return (
        <div className="px-12 py-6 m-4 bg-white rounded-2xl">
            <h1 className="pt-2 pb-4 text-xl text-royal-blue">Personal Information</h1>

            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row justify-between md:justify-evenly gap-4 py-3">
                    <div>
                        <div className="w-full max-w-md">
                            <div className="w-full px-3 pb-4">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
                                    First Name
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    name="firstName"
                                    id="first"
                                    type="text"
                                    placeholder="Stressed"
                                    value={profile.first}
                                    onChange={updateInfoFields}
                                    required />
                            </div>
                            <div className="w-full px-3 pb-4">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last-name">
                                    Last Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    name="lastName"
                                    id="last"
                                    type="text"
                                    placeholder="Sloth"
                                    value={profile.last}
                                    onChange={updateInfoFields}
                                    required />
                            </div>
                            <div className="w-full px-3 pb-4">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="personal-email">
                                    Personal Email
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    name="person-email"
                                    id="personalEmail"
                                    type="email"
                                    placeholder="s.sloth@example.com"
                                    value={profile.personalEmail}
                                    onChange={updateInfoFields}
                                    required />
                            </div>
                        </div>
                        <div className="w-full px-3 pb-4">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="df-email">
                                Digital Futures Email
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                name="df-email"
                                id="workEmail"
                                type="email"
                                placeholder="s.sloth@digitalfutures.com"
                                value={profile.workEmail}
                                onChange={updateInfoFields}
                                required />
                        </div>
                        <div className="w-full px-3 pb-4">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="github">
                                GitHub
                            </label>
                            <div className=" flex flex-row">
                                <span className="py-2.5 px-4 border border-gray-200 rounded-l text-mid-grey">www.github.com/</span>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    name="github"
                                    id="githubAcc"
                                    type="text"
                                    placeholder="github username"
                                    value={profile.githubAcc}
                                    onChange={updateInfoFields}
                                    required />
                            </div>
                        </div>
                        <div className="w-full px-3 pb-4">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="linkedin">
                                LinkedIn
                            </label>
                            <div className=" flex flex-row">
                                <span className="py-2.5 px-4 border border-gray-200 rounded-l text-mid-grey">www.linkedin.com/</span>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    name="linkedin"
                                    id="linkedinAcc"
                                    type="text"
                                    placeholder="linkedin username"
                                    value={profile.linkedinAcc}
                                    onChange={updateInfoFields}
                                    required />
                            </div>
                        </div>
                        <div className="w-full px-3 pb-4">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                                Phone
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                name="phone"
                                id="number"
                                type="text"
                                placeholder="phone number"
                                value={profile.number}
                                onChange={updateInfoFields}
                                required />

                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center justify-center gap-14">
                            <select
                                id="pronoun"
                                name="pronoun"
                                className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                value={profile.pronoun}
                                onChange={updateInfoFields}
                            >
                                <option>Your Pronoun</option>
                                <option value="she-her">She/Her</option>
                                <option value="he-him">He/Him</option>
                                <option value="they-them">They/Them</option>
                                <option value="he-they">He/They</option>
                                <option value="she-they">She/They</option>
                            </select>
                            <select
                                id="country"
                                name="country"
                                className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                value={profile.country}
                                onChange={updateInfoFields}
                            >
                                <option>Your Nationality</option>
                                <option value="afghan">Afghan</option>
                                <option value="albanian">Albanian</option>
                                <option value="algerian">Algerian</option>
                                <option value="american">American</option>
                                <option value="andorran">Andorran</option>
                                <option value="angolan">Angolan</option>
                                <option value="antiguans">Antiguans</option>
                                <option value="argentinean">Argentinean</option>
                                <option value="armenian">Armenian</option>
                                <option value="australian">Australian</option>
                                <option value="austrian">Austrian</option>
                                <option value="azerbaijani">Azerbaijani</option>
                                <option value="bahamian">Bahamian</option>
                                <option value="bahraini">Bahraini</option>
                                <option value="bangladeshi">Bangladeshi</option>
                                <option value="barbadian">Barbadian</option>
                                <option value="barbudans">Barbudans</option>
                                <option value="batswana">Batswana</option>
                                <option value="belarusian">Belarusian</option>
                                <option value="belgian">Belgian</option>
                                <option value="belizean">Belizean</option>
                                <option value="beninese">Beninese</option>
                                <option value="bhutanese">Bhutanese</option>
                                <option value="bolivian">Bolivian</option>
                                <option value="bosnian">Bosnian</option>
                                <option value="brazilian">Brazilian</option>
                                <option value="british">British</option>
                                <option value="bruneian">Bruneian</option>
                                <option value="bulgarian">Bulgarian</option>
                                <option value="burkinabe">Burkinabe</option>
                                <option value="burmese">Burmese</option>
                                <option value="burundian">Burundian</option>
                                <option value="cambodian">Cambodian</option>
                                <option value="cameroonian">Cameroonian</option>
                                <option value="canadian">Canadian</option>
                                <option value="cape verdean">Cape Verdean</option>
                                <option value="central african">Central African</option>
                                <option value="chadian">Chadian</option>
                                <option value="chilean">Chilean</option>
                                <option value="chinese">Chinese</option>
                                <option value="colombian">Colombian</option>
                                <option value="comoran">Comoran</option>
                                <option value="congolese">Congolese</option>
                                <option value="costa rican">Costa Rican</option>
                                <option value="croatian">Croatian</option>
                                <option value="cuban">Cuban</option>
                                <option value="cypriot">Cypriot</option>
                                <option value="czech">Czech</option>
                                <option value="danish">Danish</option>
                                <option value="djibouti">Djibouti</option>
                                <option value="dominican">Dominican</option>
                                <option value="dutch">Dutch</option>
                                <option value="east timorese">East Timorese</option>
                                <option value="ecuadorean">Ecuadorean</option>
                                <option value="egyptian">Egyptian</option>
                                <option value="emirian">Emirian</option>
                                <option value="equatorial guinean">Equatorial Guinean</option>
                                <option value="eritrean">Eritrean</option>
                                <option value="estonian">Estonian</option>
                                <option value="ethiopian">Ethiopian</option>
                                <option value="fijian">Fijian</option>
                                <option value="filipino">Filipino</option>
                                <option value="finnish">Finnish</option>
                                <option value="french">French</option>
                                <option value="gabonese">Gabonese</option>
                                <option value="gambian">Gambian</option>
                                <option value="georgian">Georgian</option>
                                <option value="german">German</option>
                                <option value="ghanaian">Ghanaian</option>
                                <option value="greek">Greek</option>
                                <option value="grenadian">Grenadian</option>
                                <option value="guatemalan">Guatemalan</option>
                                <option value="guinea-bissauan">Guinea-Bissauan</option>
                                <option value="guinean">Guinean</option>
                                <option value="guyanese">Guyanese</option>
                                <option value="haitian">Haitian</option>
                                <option value="herzegovinian">Herzegovinian</option>
                                <option value="honduran">Honduran</option>
                                <option value="hungarian">Hungarian</option>
                                <option value="icelander">Icelander</option>
                                <option value="indian">Indian</option>
                                <option value="indonesian">Indonesian</option>
                                <option value="iranian">Iranian</option>
                                <option value="iraqi">Iraqi</option>
                                <option value="irish">Irish</option>
                                <option value="israeli">Israeli</option>
                                <option value="italian">Italian</option>
                                <option value="ivorian">Ivorian</option>
                                <option value="jamaican">Jamaican</option>
                                <option value="japanese">Japanese</option>
                                <option value="jordanian">Jordanian</option>
                                <option value="kazakhstani">Kazakhstani</option>
                                <option value="kenyan">Kenyan</option>
                                <option value="kittian and nevisian">Kittian and Nevisian</option>
                                <option value="kuwaiti">Kuwaiti</option>
                                <option value="kyrgyz">Kyrgyz</option>
                                <option value="laotian">Laotian</option>
                                <option value="latvian">Latvian</option>
                                <option value="lebanese">Lebanese</option>
                                <option value="liberian">Liberian</option>
                                <option value="libyan">Libyan</option>
                                <option value="liechtensteiner">Liechtensteiner</option>
                                <option value="lithuanian">Lithuanian</option>
                                <option value="luxembourger">Luxembourger</option>
                                <option value="macedonian">Macedonian</option>
                                <option value="malagasy">Malagasy</option>
                                <option value="malawian">Malawian</option>
                                <option value="malaysian">Malaysian</option>
                                <option value="maldivan">Maldivan</option>
                                <option value="malian">Malian</option>
                                <option value="maltese">Maltese</option>
                                <option value="marshallese">Marshallese</option>
                                <option value="mauritanian">Mauritanian</option>
                                <option value="mauritian">Mauritian</option>
                                <option value="mexican">Mexican</option>
                                <option value="micronesian">Micronesian</option>
                                <option value="moldovan">Moldovan</option>
                                <option value="monacan">Monacan</option>
                                <option value="mongolian">Mongolian</option>
                                <option value="moroccan">Moroccan</option>
                                <option value="mosotho">Mosotho</option>
                                <option value="motswana">Motswana</option>
                                <option value="mozambican">Mozambican</option>
                                <option value="namibian">Namibian</option>
                                <option value="nauruan">Nauruan</option>
                                <option value="nepalese">Nepalese</option>
                                <option value="new zealander">New Zealander</option>
                                <option value="ni-vanuatu">Ni-Vanuatu</option>
                                <option value="nicaraguan">Nicaraguan</option>
                                <option value="nigerien">Nigerien</option>
                                <option value="north korean">North Korean</option>
                                <option value="northern irish">Northern Irish</option>
                                <option value="norwegian">Norwegian</option>
                                <option value="omani">Omani</option>
                                <option value="pakistani">Pakistani</option>
                                <option value="palauan">Palauan</option>
                                <option value="panamanian">Panamanian</option>
                                <option value="papua new guinean">Papua New Guinean</option>
                                <option value="paraguayan">Paraguayan</option>
                                <option value="peruvian">Peruvian</option>
                                <option value="polish">Polish</option>
                                <option value="portuguese">Portuguese</option>
                                <option value="qatari">Qatari</option>
                                <option value="romanian">Romanian</option>
                                <option value="russian">Russian</option>
                                <option value="rwandan">Rwandan</option>
                                <option value="saint lucian">Saint Lucian</option>
                                <option value="salvadoran">Salvadoran</option>
                                <option value="samoan">Samoan</option>
                                <option value="san marinese">San Marinese</option>
                                <option value="sao tomean">Sao Tomean</option>
                                <option value="saudi">Saudi</option>
                                <option value="scottish">Scottish</option>
                                <option value="senegalese">Senegalese</option>
                                <option value="serbian">Serbian</option>
                                <option value="seychellois">Seychellois</option>
                                <option value="sierra leonean">Sierra Leonean</option>
                                <option value="singaporean">Singaporean</option>
                                <option value="slovakian">Slovakian</option>
                                <option value="slovenian">Slovenian</option>
                                <option value="solomon islander">Solomon Islander</option>
                                <option value="somali">Somali</option>
                                <option value="south african">South African</option>
                                <option value="south korean">South Korean</option>
                                <option value="spanish">Spanish</option>
                                <option value="sri lankan">Sri Lankan</option>
                                <option value="sudanese">Sudanese</option>
                                <option value="surinamer">Surinamer</option>
                                <option value="swazi">Swazi</option>
                                <option value="swedish">Swedish</option>
                                <option value="swiss">Swiss</option>
                                <option value="syrian">Syrian</option>
                                <option value="taiwanese">Taiwanese</option>
                                <option value="tajik">Tajik</option>
                                <option value="tanzanian">Tanzanian</option>
                                <option value="thai">Thai</option>
                                <option value="togolese">Togolese</option>
                                <option value="tongan">Tongan</option>
                                <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                                <option value="tunisian">Tunisian</option>
                                <option value="turkish">Turkish</option>
                                <option value="tuvaluan">Tuvaluan</option>
                                <option value="ugandan">Ugandan</option>
                                <option value="ukrainian">Ukrainian</option>
                                <option value="uruguayan">Uruguayan</option>
                                <option value="uzbekistani">Uzbekistani</option>
                                <option value="venezuelan">Venezuelan</option>
                                <option value="vietnamese">Vietnamese</option>
                                <option value="welsh">Welsh</option>
                                <option value="yemenite">Yemenite</option>
                                <option value="zambian">Zambian</option>
                                <option value="zimbabwean">Zimbabwean</option>
                            </select>
                            <select
                                id="mbti"
                                name="mbti"
                                className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                value={profile.mbti}
                                onChange={updateInfoFields}
                            >
                                <option>Your Personality Type</option>
                                <option value="ISTJ">ISTJ</option>
                                <option value="ESTJ">ESTJ</option>
                                <option value="ISFJ">ISFJ</option>
                                <option value="ESFJ">ESFJ</option>
                                <option value="INFJ">INFJ</option>
                                <option value="ENFJ">ENFJ</option>
                                <option value="INTJ">INTJ</option>
                                <option value="ENTJ">ENTJ</option>
                                <option value="ISTP">ISTP</option>
                                <option value="ESTP">ESTP</option>
                                <option value="ISFP">ISFP</option>
                                <option value="ESFP">ESFP</option>
                                <option value="INFP">INFP</option>
                                <option value="ENFP">ENFP</option>
                                <option value="INTP">INTP</option>
                                <option value="ENTP">ENTP</option>
                            </select>
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                                    <div className="flex flex-col items-center justify-center pb-6">
                                        {selectedImage ? (
                                            <div className="flex flex-col items-center">
                                                <img
                                                    id="photo"
                                                    alt="profile"
                                                    className="border rounded-lg"
                                                    width={"250px"}
                                                    src={URL.createObjectURL(selectedImage)}
                                                />
                                                <br />
                                                <button className="bg-mid-grey rounded px-2 py-1 text-white" onClick={() => setSelectedImage(null)}>Remove</button>
                                            </div>
                                        ) : (
                                            <>
                                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                <p className="mb-2 text-sm text-center text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                                                <p className="text-xs text-center text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                            </>
                                        )
                                        }
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" onChange={(event) => {
                                        console.log(event.target.files[0]);
                                        setSelectedImage(event.target.files[0]);
                                    }} />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="w-9/12 place-self-center border rounded-2xl bg-royal-blue text-white px-4 py-1 sm:py-3 sm:px-5 hover:opacity-70"
                    type="submit"
                >
                    Save
                </button>
            </form >

        </div >
    );
};

export default EditInfo;