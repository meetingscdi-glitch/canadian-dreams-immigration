import React, { useState } from 'react';
import SectionWithImage from '../components/SectionWithImage';
import SlilledWorker from '../assets/provincialpathwaysimages/Skilled Worker.jpg';
import Foreign from '../assets/provincialpathwaysimages/Foreign entrepreneurs.jpg';
import Economic from '../assets/provincialpathwaysimages/Economic.jpg';
import BusinessStream from '../assets/provincialpathwaysimages/Business Stream.jpg';
import EmployerDrivenStream from '../assets/provincialpathwaysimages/Employer – Driven Stream.jpg';
import FrancophoneStream from '../assets/provincialpathwaysimages/Francophone Stream.jpg';
import ThroughExpressEntry from '../assets/provincialpathwaysimages/Through Express Entry Only.jpg';
import Permanentimmigrationpilot from '../assets/provincialpathwaysimages/Permanent immigration pilot program for orderlies.jpg';
import Permanentimmigrationpilotfor from '../assets/provincialpathwaysimages/Permanent immigration pilot.jpg';
import Permanentimgpilotpgrmforworkers from '../assets/provincialpathwaysimages/Skilled Worker Program.jpg';
import CanadianExperienceClass from '../assets/federalpathwaysimages/Canadian Experience Class.jpg';
import FederalSkilled from '../assets/federalpathwaysimages/Federal Skilled Trades Program.jpg';
import FederalSkilledWorker from '../assets/federalpathwaysimages/Federal Skilled Worker Program.jpg';
import InternationalGraduate from '../assets/provincialpathwaysimages/International Graduate Entrepreneur category.jpg';
import InternationalInter from '../assets/provincialpathwaysimages/International Entrepreneur category.jpg';
import InternalGraduateCategory from '../assets/provincialpathwaysimages/International Graduate Category.jpg';
import SkilledWorker from '../assets/provincialpathwaysimages/Skilled Worker Category.jpg';
import ExpressSkilled from '../assets/provincialpathwaysimages/Express Entry Skilled Worker Category.jpg';
import InterGraduate from '../assets/provincialpathwaysimages/International Graduates.jpg';
import SkilledWorker2 from '../assets/provincialpathwaysimages/Skilled Workers Outside Canada.jpg';
import SkilledWorkerInPei from '../assets/provincialpathwaysimages/Skilled Workers in PEI.jpg';
import CriticalWorker from '../assets/provincialpathwaysimages/Critical Workers.jpg';
import CriticalWorkerPilotProgram from '../assets/provincialpathwaysimages/Critical Worker Pilot Program.jpg';
import AtlanticImmigration from '../assets/provincialpathwaysimages/Atlantic Immigration Program (AIP).jpg';
import Immigration from '../assets/provincialpathwaysimages/Business Immigration Stream.jpg';
import PrivatePilot from '../assets/provincialpathwaysimages/Private Career College Graduate Pilot Program.jpg';
import Strategic from '../assets/provincialpathwaysimages/Strategic Initiative Stream.jpg';
import HealthCare from '../assets/provincialpathwaysimages/Healthcare Professionals Immigration Pilot.jpg';
import Express2 from '../assets/provincialpathwaysimages/Experience Express Entry.jpg';
import Labour from '../assets/provincialpathwaysimages/Labour Market Priorities.jpg';
import Physician from '../assets/provincialpathwaysimages/Labour Market Priorities for Physicians.jpg';
import Physician2 from '../assets/provincialpathwaysimages/Physician.jpg';
import Enterprenaur from '../assets/provincialpathwaysimages/Entrepreneur.jpg';
import InternationGraduate from '../assets/provincialpathwaysimages/International Graduate Entrepreneur.jpg';
import InternationGraduateInDemand from '../assets/provincialpathwaysimages/International Graduates in Demand.jpg';
import workerPilot from '../assets/provincialpathwaysimages/Critical Construction Worker Pilot.jpg';
import occuputation from '../assets/provincialpathwaysimages/Occupations in Demand.jpg';
import SkilledWorker123 from '../assets/provincialpathwaysimages/SkilledWorker123.jpg';
import FederalSkilled123 from '../assets/provincialpathwaysimages/Federal Immigration Programs.jpg';
import FarmPathWays from '../assets/provincialpathwaysimages/Farm Investor Pathway.jpg';
import PathWay from '../assets/provincialpathwaysimages/Pathway.jpg';
import StudentPilot from '../assets/provincialpathwaysimages/International Student Entrepreneur Pilot.jpg';
import GraduateIntern from '../assets/provincialpathwaysimages/Graduate Internship Pathway.jpg';
import EmploymentPathway from '../assets/provincialpathwaysimages/Career Employment Pathway.jpg';
import WorkerOverSeas from '../assets/provincialpathwaysimages/Skilled Worker Overseas.jpg'
import SkilledWorkerMd from '../assets/provincialpathwaysimages/Skilled Worker in Manitoba.jpg'
import FarmOwnerandOperator from '../assets/provincialpathwaysimages/Skilled Worker in Manitoba.jpg'
import InternationalGraduateEntrepreneurCategory from '../assets/provincialpathwaysimages/International Graduate Entrepreneur Category123.jpg'
import Enterprenaur123 from '../assets/provincialpathwaysimages/Entrepreneur123.jpg'
import TechTalentPathway from '../assets/provincialpathwaysimages/Tech Talent Pathway.jpg'
import HealthTalentPathway from '../assets/provincialpathwaysimages/Health Talent Pathway.jpg'
import InternationalSkilledExpressEntry from '../assets/provincialpathwaysimages/Agriculture Talent Pathway123.jpg'
import InternationSkilledwrk from '../assets/provincialpathwaysimages/International Skilled Worker Occupation In-Demand.jpg'
import Hiring from '../assets/provincialpathwaysimages/International Skilled Worker – Employment Offer.jpg'
import InternationalSkilledWorkerEmploymentOffer from '../assets/provincialpathwaysimages/International Skilled Worker – Employment Offer (2).jpg'
import ForeignGraduateEntrepreneurStream from '../assets/provincialpathwaysimages/Foreign Graduate Entrepreneur Stream.jpg'
import FarmStream from '../assets/provincialpathwaysimages/Farm Stream.jpg'
import GraduateEntrepreneurStream from '../assets/provincialpathwaysimages/Graduate Entrepreneur Stream.jpg'
import RuralEntrepreneurStream from '../assets/provincialpathwaysimages/Rural Entrepreneur Stream.jpg'

const ProvincialPathways = () => {
  const Cardsdata = [
    {
      Img: SlilledWorker,
      Link: 'Skilled Worker',
      BtnLink: 'https://yukon.ca/en/immigration/employers/hire-foreign-worker-employer-eligibility-and-responsibilities',
    },
    {
      Img: Foreign,
      Link: 'Foreign entrepreneurs',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/campaigns/francophone-immigration-outside-quebec.html',
    },
    {
      Img: Economic,
      Link: 'Economic Mobility Pathways Pilot',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots.html',
    },
    {
      Img: FrancophoneStream,
      Link: 'Francophone Stream ',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/start-visa.html',
    },
    {
      Img: BusinessStream,
      Link: 'Business Stream',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/caregivers.html',
    },
    {
      Img: EmployerDrivenStream,
      Link: 'Employer – Driven Stream',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents.html',
    },
    {
      Img: ThroughExpressEntry,
      Link: 'Through Express Entry Only',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/other-relatives.html',
    },
    {
      Img: Permanentimmigrationpilot,
      Link: 'Permanent immigration pilot program for workers in the AI, I.T and visual effects sectors',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadians/adopt-child-abroad/processes/choose-process/immigration.html',
    },
    {
      Img: Permanentimmigrationpilotfor,
      Link: 'Permanent immigration pilot program for orderlies',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/spouse-partner-children.html',
    },
    {
      Img: Permanentimgpilotpgrmforworkers,
      Link: 'Permanent immigration pilot program for workers in food processing',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html',
    },
    {
      Img: CanadianExperienceClass,
      Link: 'Quebec Experience Program',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/canadian-experience-class.html',
    },
    {
      Img: FederalSkilled,
      Link: 'Regular Skilled Worker Program',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-trades.html',
    },
    {
      Img: FederalSkilledWorker,
      Link: 'Skilled Worker Program',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: InternationalGraduate,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: InternationalInter,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: InternalGraduateCategory,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: SkilledWorker,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: ExpressSkilled,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: InterGraduate,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: SkilledWorker2,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: SkilledWorkerInPei,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: CriticalWorker,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: CriticalWorkerPilotProgram,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: AtlanticImmigration,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: Immigration,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: PrivatePilot,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: SkilledWorker2,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: Strategic,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: ExpressSkilled,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: HealthCare,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: Express2,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: Labour,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: Physician,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: Physician2,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: Enterprenaur,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: InternationGraduate,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: InternationGraduateInDemand,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: workerPilot,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: occuputation,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: SkilledWorker123,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: FederalSkilled123,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: FarmPathWays,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: PathWay,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: StudentPilot,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: GraduateIntern,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: EmploymentPathway,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: WorkerOverSeas,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: SkilledWorkerMd,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: FarmOwnerandOperator,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: InternationalGraduateEntrepreneurCategory,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: Enterprenaur123,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
      {
      Img: TechTalentPathway,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: HealthTalentPathway,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: InternationalSkilledExpressEntry,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: InternationSkilledwrk,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: Hiring,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: InternationalSkilledWorkerEmploymentOffer,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: ForeignGraduateEntrepreneurStream,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: FarmStream,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: GraduateEntrepreneurStream,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },
    {
      Img: RuralEntrepreneurStream,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    },



  ];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(Cardsdata.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCards = Cardsdata.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <SectionWithImage />
      <div className="container mx-auto pt-5 pb-12">
        <div className="mt-5 sm:mt-10 mx-auto w-fit grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4 xl:gap-x-10 gap-y-12 md:px-6 px-3 xl:px-0">
          {currentCards.map((items, index) => (
            <div key={index} className="max-w-sm bg-white rounded-lg shadow-md flex flex-col overflow-hidden">
              <img
                src={items.Img}
                alt="Program Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col justify-between flex-grow">
                <h2 className="text-lg font-semibold text-gray-800">
                  {items.Link}
                </h2>
                <a
                  href={items.BtnLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#006AAB] inline-block text-white text-sm px-4 py-2 rounded-lg hover:bg-[#064268] transition-colors duration-200 mt-3 w-fit font-bold"
                >
                  Explore Program
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-10 gap-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition  ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            Previous Page
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded bg-[#006AAB] text-white hover:bg-[#064268] transition cursor-pointer ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProvincialPathways;
