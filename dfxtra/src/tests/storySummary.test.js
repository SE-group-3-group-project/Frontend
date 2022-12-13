import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import StorySummary from "../components/StorySummary";
import mockGradProfile from "../utils/mockGradProfile.json";

describe("Profile testing suite", () => {
	describe("Testing rendering when a profile exists", () => {
		const testProfile = mockGradProfile[0];
		const stories = testProfile.personalStories;
		const degrees = stories.degrees[0];
		const { university, degreeSubject, grade } = degrees;
		const skl = stories.schoolQualifications[0];
		const { school, examType } = skl;
		const workExperiences = stories.workExperiences[0];
		const { type, employer, position } = workExperiences;

		const certifications = stories.certifications[0];
		const { issuer, year } = certifications;
		const certificationGrade = certifications.grade;
		const certificationType = certifications.type;
		const personalAchievements = stories.personalAchievements[0];
		const { achievement, description } = personalAchievements;
		const PYear = personalAchievements.year;
		const portfolio = stories.portfolio[0];
		const { title, url } = portfolio;
		const portfolioDesc = portfolio.description;
		const portfolioYear = portfolio.year;

		beforeEach(() => {
			render(
				<MemoryRouter>
					<StorySummary story={stories} />
				</MemoryRouter>
			);
		});
		it("it should render the main profile information from the second item in the mock profiles", () => {
			const testUniversity = screen.getByText(university);
			const testDegree = screen.getByText(degreeSubject);
			const testGrade = screen.getByText(grade);
			const testSchool = screen.getByText(school);
			const testExamType = screen.getByText(examType);
			const testWorkType = screen.getByText(type);
			const testEmployer = screen.getByText(employer);
			const testPosition = screen.getByText(position);
			const testCertIsssuer = screen.getByText(issuer);
			const testCertYear = screen.getByText(year);
			const testCertType = screen.getByText(certificationType);
			const testCertGrade = screen.getByText(certificationGrade);
			const testpAchievement = screen.getByText(achievement);
			const testpDescription = screen.getByText(description);
			const testpYear = screen.getByText(PYear);
			const testPortTitle = screen.getByText(title);
			const testPortURL = screen.getByText(url);
			const portDesc = screen.getByText(portfolioDesc);
			const portYear = screen.getByText(portfolioYear);
			expect(testUniversity).toBeInTheDocument();
			expect(testDegree).toBeInTheDocument();
			expect(testGrade).toBeInTheDocument();
			expect(testSchool).toBeInTheDocument();
			expect(testExamType).toBeInTheDocument();
			expect(testWorkType).toBeInTheDocument();
			expect(testEmployer).toBeInTheDocument();
			expect(testPosition).toBeInTheDocument();
			expect(testCertIsssuer).toBeInTheDocument();
			expect(testCertYear).toBeInTheDocument();
			expect(testCertType).toBeInTheDocument();
			expect(testCertGrade).toBeInTheDocument();
			expect(testpAchievement).toBeInTheDocument();
			expect(testpDescription).toBeInTheDocument();
			expect(testpYear).toBeInTheDocument();
			expect(testPortTitle).toBeInTheDocument();
			expect(testPortURL).toBeInTheDocument();
			expect(portDesc).toBeInTheDocument();
			expect(portYear).toBeInTheDocument();
		});
	});
});
