import React from 'react'
import SectionWithImage from '../components/SectionWithImage'
import Eco from '../assets/federalpathwaysimages/Economic.jpg'
import FranceCo from '../assets/federalpathwaysimages/FranceCo.jpg'
import RuralAnd from '../assets/federalpathwaysimages/RuralAnd.jpg'
import StartUp from '../assets/federalpathwaysimages/Start-up Visa.jpg'
import HomeCare from '../assets/federalpathwaysimages/Home Care Worker.jpg'
import SponsorParents from '../assets/federalpathwaysimages/Sponsor your parents.jpg'
import SponsorRelative from '../assets/federalpathwaysimages/Sponsor your relatives.jpg'
import SponsorAdopChild from '../assets/federalpathwaysimages/Sponsor your adopted child.jpg'
import SponsorSpouse from '../assets/federalpathwaysimages/Sponsor your spouse, partner or child.jpg'
import CategoryBAseSelection from '../assets/federalpathwaysimages/Category based selection.jpg'
import CanadianExperienceClass from '../assets/federalpathwaysimages/Canadian Experience Class.jpg'
import FederalSkilled  from '../assets/federalpathwaysimages/Federal Skilled Trades Program.jpg'
import FederalSkilledWorker  from '../assets/federalpathwaysimages/Federal Skilled Worker Program.jpg'
import FadeInOnScroll from './FadeInOnScroll'
const Federal = () => {
    const Cardsdata = [
        {
            Img: Eco,
            Link: 'Economic Mobility Pathways Pilot',
            BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/economic-mobility-pathways-pilot.html'
        },
        {
            Img: FranceCo,
            Link: 'Francophone community outside Quebec',
            BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/campaigns/francophone-immigration-outside-quebec.html'
        },
        {
            Img: RuralAnd,
            Link: 'Rural and Francophone Community Immigration pilots',
            BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots.html'
        },
        {
            Img: StartUp,
            Link: 'Start-up Visa Program',
            BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/start-visa.html'
        },
        {
            Img: HomeCare,
            Link: 'Home Care Worker Immigration Pilots (YET TO OPEN)',
            BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/caregivers.html'
        },
        {
            Img: SponsorParents,
            Link: 'Sponsor your parents and grandparents',
            BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents.html'
        },
        {
            Img: SponsorRelative,
            Link: 'Sponsor your relatives',
            BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/other-relatives.html'
        },
        {
            Img: SponsorAdopChild,
            Link: 'Sponsor your adopted child',
            BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadians/adopt-child-abroad/processes/choose-process/immigration.html'
        },
        {
            Img: SponsorSpouse,
            Link: 'Sponsor your spouse, partner or child',
            BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/spouse-partner-children.html'
        },
        {
            Img: CategoryBAseSelection,
            Link: 'Category based selection',
            BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html'
        },
          {
            Img: CanadianExperienceClass,
            Link: 'Canadian Experience Class',
            BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/canadian-experience-class.html'
        },
          {
            Img: FederalSkilled,
            Link: 'Federal Skilled Trades Program',
            BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-trades.html'
        },
          {
            Img: FederalSkilledWorker,
            Link: 'Federal Skilled Worker Program',
            BtnLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html'
        },

    ];

    return (
       <div>
         <SectionWithImage />
         <div className='container mx-auto pt-5 pb-12'>
            <div className="mt-5 sm:mt-10 mx-auto w-fit grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4 xl:gap-x-10 gap-y-12 md:px-6 px-3 xl:px-0">
                {Cardsdata.map((items, index) => (
                   <FadeInOnScroll>
                     <div key={index} className="max-w-sm bg-white rounded-lg shadow-md flex flex-col overflow-hidden cursor-pointer hover:scale-110 transition duration-500">
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
                                className="bg-[#006AAB] inline-block text-white text-sm px-4 py-2 rounded-lg hover:bg-[#064268] transition-colors duration-200 mt-3 w-fit"
                            >
                                Explore Program
                            </a>
                        </div>
                    </div>
                   </FadeInOnScroll>
                ))}
            </div>

        </div>
       </div>
    )
}

export default Federal