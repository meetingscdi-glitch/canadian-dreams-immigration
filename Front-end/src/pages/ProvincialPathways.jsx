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
    <div className="container mx-auto pt-5 pb-12">
      <SectionWithImage />

      <div className="mt-10 grid lg:grid-cols-3 lg:gap-10 xl:grid-cols-4 xl:gap-x-10 gap-y-12 px-6 xl:px-0">
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
          className={`px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Previous Page
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded bg-[#006AAB] text-white hover:bg-[#064268] transition ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ProvincialPathways;
