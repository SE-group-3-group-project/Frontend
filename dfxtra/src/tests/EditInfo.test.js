import { MemoryRouter } from "react-router-dom";
import EditInfo from "../components/EditPageComponents/EditInfo.jsx";
import mockGradInfo2 from "../Utils/mockGradInfo2.json";
import { render, screen } from "@testing-library/react";

describe('200Edit info testing', () => {
    describe('200testing rendering when a profile chages', () => {
        const testProfile = mockGradInfo2[0];
        const { first, last } = testProfile.name;
        //const pronouns = testProfile.pronoun.replaceAll("-", "/");
        const profilePicture = testProfile.profilePicture;
        const personalEmail = testProfile.contactDetails.personalEmail;
        const dfEmail = testProfile.contactDetails.dfEmail;
        const github = testProfile.contactDetails.github;
        const linkedIn = testProfile.contactDetails.linkedIn;
        const phone = testProfile.contactDetails.phoneNumber;
        
        

        beforeEach(() => {
            render(
                <MemoryRouter>
                    <EditInfo
                        //name={first + " " + last + " (" + pronouns + ")"}
                        profilePicture={profilePicture}
                        pEmail={personalEmail}
                        dfEmail={dfEmail}
                        github={github}
                        linkedin={linkedIn}
                        phone={phone}
                        
                    />
                </MemoryRouter>
            );
        });
        it("it should render the main profile information from the second item in the mock profiles", () => {
            //const testName = screen.getByText(`${first} ${last} (${pronouns})`);
            const testPEmail = screen.getByText(personalEmail);
            const testDFEmail = screen.getByText(dfEmail);
            const testGithub = screen.getByText(github);
            const testLinkedIn = screen.getByText(linkedIn);
            const testPhone = screen.getByText(phone);
            expect(testName).toBeInTheDocument();
            expect(testPEmail).toBeInTheDocument();
            expect(testDFEmail).toBeInTheDocument();
            expect(testGithub).toBeInTheDocument();
            expect(testLinkedIn).toBeInTheDocument();
            expect(testPhone).toBeInTheDocument();
        });

    });




});
