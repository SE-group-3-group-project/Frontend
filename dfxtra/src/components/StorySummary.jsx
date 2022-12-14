const StorySummary = ({ story }) => {
    let key;

    const date = (startDate, endDate) => {
        const d = new Date(startDate);
        const ed = new Date(endDate);
        let startMonth = d.toLocaleDateString('en-uk', { month: "long" });
        let startYear = d.getFullYear();
        let endMonth = ed.toLocaleDateString('en-uk', { month: "long" });
        let endYear = ed.getFullYear();
        let period = startMonth + " " + startYear + " - " + endMonth + " " + endYear
        return period
    }

    const allWorkExperience =
        story.workExperiences.map(work => {
            if (story.workExperiences.length > 0) {
                key = Math.random();
                return (
                    <div className="sm:grid sm:grid-cols-4 sm:gap-y-2 sm:gap-x-4 py-2" key={key}>
                        <p>{date(work.startDate, work.endDate)}</p>
                        <p>{work.type}</p>
                        <p>{work.position}</p>
                        <p>{work.employer}</p>
                    </div>
                )
            }
        })

    const allDegree =
        story.degrees.map(degree => {
            if (story.degrees.length > 0) {
                key = Math.random();
                return (
                    <div className="sm:grid sm:grid-cols-4 sm:gap-y-2 sm:gap-x-4 py-2" key={key}>
                        <p>{date(degree.startDate, degree.endDate)}</p>
                        <p>{degree.university}</p>
                        <p>{degree.degreeSubject}</p>
                        <p>{degree.grade}</p>
                    </div>
                )
            }
        })

    const allSchoolQualification =
        story.schoolQualifications.map(qualification => {
            if (story.schoolQualifications.length > 0) {
                key = Math.random();

                return (
                    <div className="sm:grid sm:grid-cols-4 sm:gap-y-2 sm:gap-x-4 py-2" key={key}>
                        <p>{date(qualification.startDate, qualification.endDate)}</p>
                        <div className="flex flex-col">
                            <p>{qualification.school}</p>
                            <p>{qualification.examType}</p>
                        </div>
                        <div className="flex flex-col">
                            {qualification.subject.map(sub => {
                                if (qualification.subject.length > 0) {
                                    return (
                                        <p>{sub}</p>
                                    )
                                }
                            })
                            }
                        </div>
                        <div className="flex flex-col">
                            {qualification.grade.map(g => {
                                if (qualification.grade.length > 0) {
                                    return (
                                        <p>{g}</p>
                                    )
                                }
                            })
                            }
                        </div>
                    </div>
                )
            }
        })

    const allCertification =
        story.certifications.map(certification => {
            if (story.certifications.length > 0) {
                key = Math.random();
                return (
                    <div className="sm:grid sm:grid-cols-4 sm:gap-y-2 sm:gap-x-4 py-2" key={key}>
                        <p className="font-medium">{certification.type}</p>
                        <p>{certification.issuer}</p>
                        <p>{certification.grade}</p>
                        <p>{certification.year}</p>
                    </div>
                )
            }
        })

    const allAchievement =
        story.personalAchievements.map(achievement => {
            if (story.personalAchievements.length > 0) {
                key = Math.random();
                return (
                    <>
                        <div className="flex flex-row gap-6" key={key}>
                            <p className="font-medium">{achievement.achievement}:</p>
                            <p>{achievement.description}, {achievement.year}</p>
                        </div>
                    </>
                )
            }
        })

    const allPortfolio =
        story.portfolio.map(project => {
            if (story.portfolio.length > 0) {
                key = Math.random();
                return (
                    <>
                        <div className="flex flex-row gap-6" key={key}>
                            <p className="font-medium">{project.title}:</p>
                            <p>{project.url}</p>
                            <p>{project.description}</p>
                            <p>{project.year}</p>
                        </div>
                    </>
                )
            }
        })

    return (
        <div className="w-full max-w-4xl md:max-w-6xl py-2">
            <p className="font-semibold uppercase tracking-wide text-gray-700 text-sm font-bold mb-3">Personal Story Summary:</p>
            <div className="border border-light-blue rounded-lg py-1 px-4">
                <div className="my-2 sm:py-2 border-b border-dashed border-mid-grey border-opacity-20">
                    <p className="font-medium">Work experiences:</p>
                    {allWorkExperience}
                </div>
                <div className="my-2 sm:py-2 border-b borer-dashed border-mid-grey border-opacity-20">
                    <p className="font-medium">Degree:</p>
                    {allDegree}
                </div>
                <div className="my-2 sm:py-2 border-b border-dashed border-mid-grey border-opacity-20">
                    <p className="font-medium">School:</p>
                    {allSchoolQualification}
                </div>
                <div className="my-2 sm:py-2 border-b border-dashed border-mid-grey border-opacity-20">
                    <p className="font-medium">Certifications:</p>
                    {allCertification}
                </div>
                <div className="my-2 sm:py-2">
                    <p className="font-medium">Personal Achievements:</p>
                    <div className="sm:grid sm:grid-cols-2 sm:gap-y-2 sm:gap-x-4 py-2">
                        {allAchievement}
                    </div>
                </div>
                <div className="my-2 sm:py-2">
                    <p className="font-medium">Portfolio:</p>
                    <div className="my-2 sm:py-2 border-b border-dashed border-mid-grey border-opacity-20">
                        {allPortfolio}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StorySummary;