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
import ruralrenewalstream from '../assets/provincialpathwaysimages/Rural Renewal Stream.jpg'
import DedicatedHealthCarePathway from '../assets/provincialpathwaysimages/Dedicated Health Care Pathway – Alberta Express Entry Stream.jpg'
import AlbertaExpressEntryStream from '../assets/provincialpathwaysimages/AlbertaExpressEntryStream.jpg'
import AlbertaOpportunityStream from '../assets/provincialpathwaysimages/Alberta Opportunity Stream.jpg'
import TourismandHospitalityStream from '../assets/provincialpathwaysimages/Tourism and Hospitality Stream.jpg'
import Technology from '../assets/provincialpathwaysimages/Technology.jpg'
import Construction from '../assets/provincialpathwaysimages/Construction.jpg'
import Veterinarycare from '../assets/provincialpathwaysimages/Veterinary care.jpg'
import Healthcare from '../assets/provincialpathwaysimages/Healthcare.jpg'
import Childcare from '../assets/provincialpathwaysimages/Childcare.jpg'
import StrategicProjectsEntrepreneurs from '../assets/provincialpathwaysimages/Strategic Initiative Stream.jpg'
import RegionalStreamEntrepreneurs from '../assets/provincialpathwaysimages/Regional Stream – Entrepreneurs.jpg'
import BaseStreamEntrepreneurs from '../assets/provincialpathwaysimages/Base Stream- Entrepreneurs.jpg'
import InternationalPostGraduate from '../assets/provincialpathwaysimages/InternationalPostGraduate.jpg'
import InternationalGraduate123 from '../assets/provincialpathwaysimages/International Graduate.jpg'
import EntryLevelandSemiSkilled from '../assets/provincialpathwaysimages/Entry Level and Semi-Skilled (ELSS).jpg'
import HealthAuthority from '../assets/provincialpathwaysimages/Health Authority.jpg'
import SkilledWorker1234 from '../assets/provincialpathwaysimages/Skilled Worker1234.jpg'
import OntariosExpressEntryFrenchSpeakingSkilledWorkerstream from '../assets/provincialpathwaysimages/Ontario’s Express Entry- French-Speaking Skilled Worker stream.jpg'
import OntariosExpressEntrySkilledTradesstream from '../assets/provincialpathwaysimages/Ontario’s Express Entry-Skilled Trades stream.jpg'
import OntariosExpressEntryHumanCapitalPrioritiesstream from '../assets/provincialpathwaysimages/Ontario’s Express Entry-Human Capital Priorities stream.jpg'
import PhDGraduatestream from '../assets/provincialpathwaysimages/PhD Graduate stream.jpg'
import MastersGraduatestream from '../assets/provincialpathwaysimages/Masters Graduate stream.jpg'
import EmployerJobOfferInDemandSkillsstream from '../assets/provincialpathwaysimages/Employer Job Offer In-Demand Skills stream.jpg'
import EmployerJobOfferInternationalStudentstream from '../assets/provincialpathwaysimages/Employer Job Offer International Student stream.jpg'
import EmployerJobOfferForeignWorkerstream from '../assets/provincialpathwaysimages/Employer Job Offer Foreign Worker stream.jpg'

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
      BtnLink: 'https://yukon.ca/en/immigration/yukon-business-nominee-program/apply-run-your-own-business-yukon-foreign-entrepreneurs',
    },
    {
      Img: Economic,
      Link: 'Economic Mobility Pathways Pilot',
      BtnLink: 'https://www.immigratenwt.ca/economic-mobility-pathways-pilot',
    },
    {
      Img: FrancophoneStream,
      Link: 'Francophone Stream ',
      BtnLink: 'https://www.immigratenwt.ca/francophone-stream',
    },
    {
      Img: BusinessStream,
      Link: 'Business Stream',
      BtnLink: 'https://www.immigratenwt.ca/business-stream',
    },
    {
      Img: EmployerDrivenStream,
      Link: 'Employer – Driven Stream',
      BtnLink: 'https://www.immigratenwt.ca/employer-driven-stream',
    },
    {
      Img: ThroughExpressEntry,
      Link: 'Through Express Entry Only',
      BtnLink: 'https://www.askkubeir.com/',
    },
    {
      Img: Permanentimmigrationpilot,
      Link: 'Permanent immigration pilot program for workers in the AI, I.T and visual effects sectors',
      BtnLink: 'https://www.quebec.ca/en/immigration/permanent/skilled-workers/artificial-intelligence',
    },
    {
      Img: Permanentimmigrationpilotfor,
      Link: 'Permanent immigration pilot program for orderlies',
      BtnLink: 'https://www.quebec.ca/en/immigration/permanent/skilled-workers/orderlies',
    },
    {
      Img: Permanentimgpilotpgrmforworkers,
      Link: 'Permanent immigration pilot program for workers in food processing',
      BtnLink: 'https://www.quebec.ca/en/immigration/permanent/skilled-workers/food-processing',
    },
    // 1 Page completed
    {
      Img: CanadianExperienceClass,
      Link: 'Quebec Experience Program',
      BtnLink: 'https://www.quebec.ca/en/immigration/permanent/skilled-workers/quebec-experience-program',
    },
    {
      Img: FederalSkilled,
      Link: 'Regular Skilled Worker Program',
      BtnLink: 'https://www.quebec.ca/en/immigration/permanent/skilled-workers/regular-skilled-worker-program',
    },
    {
      Img: FederalSkilledWorker,
      Link: 'Skilled Worker Program',
      BtnLink: 'https://www.quebec.ca/en/immigration/permanent/skilled-workers/skilled-worker-selection-program',
    },
    {
      Img: InternationalGraduate,
      Link: 'International Graduate Entrepreneur category',
      BtnLink: 'https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/provincial-nominee-program/entrepreneurs/international-graduate-entrepreneur/eligibility-criteria/',
    },
    {
      Img: InternationalInter,
      Link: 'International Entrepreneur category',
      BtnLink: 'https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/provincial-nominee-program/entrepreneurs/international-entrepreneur/eligibility-criteria/',
    },
    {
      Img: InternalGraduateCategory,
      Link: 'International Graduate Category',
      BtnLink: 'https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/provincial-nominee-program/applicants/international-graduate/',
    },
    {
      Img: SkilledWorker,
      Link: 'Skilled Worker Category',
      BtnLink: 'https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/provincial-nominee-program/applicants/international-graduate/',
    },
    {
      Img: ExpressSkilled,
      Link: 'Express Entry Skilled Worker Category',
      BtnLink: 'https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/provincial-nominee-program/applicants/express-entry-skilled-worker/',
    },
    {
      Img: InterGraduate,
      Link: 'International Graduates',
      BtnLink: 'https://www.princeedwardisland.ca/en/information/office-of-immigration/international-graduates',
    },
    {
      Img: SkilledWorker2,
      Link: 'Skilled Workers Outside Canada',
      BtnLink: 'https://www.princeedwardisland.ca/en/information/office-of-immigration/skilled-workers-outside-canada',
    },
    // 2 Page Completed
    {
      Img: SkilledWorkerInPei,
      Link: 'Skilled Workers in PEI',
      BtnLink: 'https://www.princeedwardisland.ca/en/information/office-of-immigration/skilled-workers-in-pei',
    },
    {
      Img: CriticalWorker,
      Link: 'Critical Workers',
      BtnLink: 'https://www.princeedwardisland.ca/en/information/office-of-immigration/critical-workers',
    },
    {
      Img: CriticalWorkerPilotProgram,
      Link: 'Critical Worker Pilot Program',
      BtnLink: 'https://www2.gnb.ca/content/gnb/en/corporate/promo/immigration/immigrating-to-nb/nb-critical-workers-pilot.html',
    },
    {
      Img: AtlanticImmigration,
      Link: 'Atlantic Immigration Program (AIP)',
      BtnLink: 'https://www2.gnb.ca/content/gnb/en/corporate/promo/immigration/immigrating-to-nb/atlantic-immigration-program.html',
    },
    {
      Img: Immigration,
      Link: 'Business Immigration Stream',
      BtnLink: 'https://www2.gnb.ca/content/gnb/en/corporate/promo/immigration/immigrating-to-nb/nb-business-immigration-stream.html',
    },
    {
      Img: PrivatePilot,
      Link: 'Private Career College Graduate Pilot Program',
      BtnLink: 'https://www2.gnb.ca/content/gnb/en/corporate/promo/immigration/immigrating-to-nb/private-career-college-graduate-pilot-program.html',
    },
    {
      Img: SkilledWorker2,
      Link: 'Skilled Worker Stream',
      BtnLink: 'https://www2.gnb.ca/content/gnb/en/corporate/promo/immigration/immigrating-to-nb/nb-skilled-worker-stream.html',
    },
    {
      Img: Strategic,
      Link: 'Strategic Initiative Stream',
      BtnLink: 'https://www2.gnb.ca/content/gnb/en/corporate/promo/immigration/immigrating-to-nb/nb-strategic-initiative-stream.html',
    },
    {
      Img: ExpressSkilled,
      Link: 'Express Entry Stream',
      BtnLink: 'https://www2.gnb.ca/content/gnb/en/corporate/promo/immigration/immigrating-to-nb/nb-express-entry-stream.html',
    },
    {
      Img: HealthCare,
      Link: 'Healthcare Professionals Immigration Pilot (Letter of Interest)',
      BtnLink: 'https://liveinnovascotia.com/nova-scotia-nominee-program#tab-10',
    },
    // Third Page Completed
    {
      Img: Express2,
      Link: 'Experience: Express Entry',
      BtnLink: 'https://liveinnovascotia.com/nova-scotia-nominee-program#tab-9',
    },
    {
      Img: Labour,
      Link: 'Labour Market Priorities',
      BtnLink: 'https://liveinnovascotia.com/nova-scotia-nominee-program#tab-8',
    },
    {
      Img: Physician,
      Link: 'Labour Market Priorities for Physicians',
      BtnLink: 'https://liveinnovascotia.com/nova-scotia-nominee-program#tab-7',
    },
    {
      Img: Physician2,
      Link: 'Physician',
      BtnLink: 'https://liveinnovascotia.com/nova-scotia-nominee-program#tab-6',
    },
    {
      Img: Enterprenaur,
      Link: 'Entrepreneur',
      BtnLink: 'https://liveinnovascotia.com/nova-scotia-nominee-program#tab-5',
    },
    {
      Img: InternationGraduate,
      Link: 'International Graduate Entrepreneur',
      BtnLink: 'https://liveinnovascotia.com/nova-scotia-nominee-program#tab-4',
    },
    {
      Img: InternationGraduateInDemand,
      Link: 'International Graduates in Demand',
      BtnLink: 'https://liveinnovascotia.com/nova-scotia-nominee-program#tab-3',
    },
    {
      Img: workerPilot,
      Link: 'Critical Construction Worker Pilot',
      BtnLink: 'https://liveinnovascotia.com/nova-scotia-nominee-program#tab-2',
    },
    {
      Img: occuputation,
      Link: 'Occupations in Demand',
      BtnLink: 'https://liveinnovascotia.com/nova-scotia-nominee-program#tab-1',
    },
    {
      Img: SkilledWorker123,
      Link: 'Skilled Worker',
      BtnLink: 'https://liveinnovascotia.com/nova-scotia-nominee-program',
    },
    {
      Img: FederalSkilled123,
      Link: 'Federal Immigration Programs',
      BtnLink: 'https://immigratemanitoba.com/immigrate/federal/',
    },
    {
      Img: FarmPathWays,
      Link: 'Farm Investor Pathway',
      BtnLink: 'https://immigratemanitoba.com/immigrate/bis/fip/',
    },
    {
      Img: PathWay,
      Link: 'Entrepreneur Pathway',
      BtnLink: 'https://immigratemanitoba.com/immigrate/bis/entrepreneur/',
    },
    {
      Img: StudentPilot,
      Link: 'International Student Entrepreneur Pilot',
      BtnLink: 'https://immigratemanitoba.com/immigrate/ies/isep/',
    },
    {
      Img: GraduateIntern,
      Link: 'Graduate Internship Pathway',
      BtnLink: 'https://immigratemanitoba.com/immigrate/ies/graduate-internship/',
    },
    {
      Img: EmploymentPathway,
      Link: 'Career Employment Pathway',
      BtnLink: 'https://immigratemanitoba.com/immigrate/ies/cep/',
    },
    {
      Img: WorkerOverSeas,
      Link: 'Skilled Worker Overseas',
      BtnLink: 'https://immigratemanitoba.com/immigrate/skilled-worker/swo/',
    },
    {
      Img: SkilledWorkerMd,
      Link: 'Skilled Worker in Manitoba',
      BtnLink: 'https://immigratemanitoba.com/immigrate/skilled-worker/swm/',
    },
    {
      Img: FarmOwnerandOperator,
      Link: 'Farm Owner and Operator',
      BtnLink: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/farm-owner-and-operator/applicants-farm-owners-and-operators',
    },
    {
      Img: InternationalGraduateEntrepreneurCategory,
      Link: 'International Graduate Entrepreneur Category',
      BtnLink: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/entrepreneur/international-graduate-entrepreneur-category',
    },
    // 5 Page completed
    {
      Img: Enterprenaur123,
      Link: 'Entrepreneur',
      BtnLink: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/entrepreneur/applicants-entrepreneurs',
    },
    {
      Img: TechTalentPathway,
      Link: 'Tech Talent Pathway',
      BtnLink: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/sinp-tech-talent-pathway',
    },
    {
      Img: HealthTalentPathway,
      Link: 'Health Talent Pathway',
      BtnLink: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/health-talent-pathway',
    },
    {
      Img: InternationalSkilledExpressEntry,
      Link: 'Agriculture Talent Pathway',
      BtnLink: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/agriculture-talent-pathway',
    },
    {
      Img: InternationSkilledwrk,
      Link: 'International Skilled Worker: Saskatchewan Express Entry',
      BtnLink: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/international-skilled-worker-saskatchewan-express-entry',
    },
    {
      Img: Hiring,
      Link: 'International Skilled Worker: Occupation In-Demand',
      BtnLink: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/international-skilled-worker-occupations-in-demand',
    },
    {
      Img: InternationalSkilledWorkerEmploymentOffer,
      Link: 'International Skilled Worker – Employment Offer',
      BtnLink: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/international-skilled-worker-with-employment-offer',
    },
    {
      Img: ForeignGraduateEntrepreneurStream,
      Link: 'Foreign Graduate Entrepreneur Stream',
      BtnLink: 'https://www.alberta.ca/aaip-foreign-graduate-entrepreneur-stream',
    },
    {
      Img: FarmStream,
      Link: 'Farm Stream',
      BtnLink: 'https://www.alberta.ca/aaip-farm-stream',
    },
    {
      Img: GraduateEntrepreneurStream,
      Link: 'Graduate Entrepreneur Stream',
      BtnLink: 'https://www.alberta.ca/aaip-graduate-entrepreneur-stream',
    },
    // 6 Page Completed
    {
      Img: RuralEntrepreneurStream,
      Link: 'Rural Entrepreneur Stream',
      BtnLink: 'https://www.alberta.ca/aaip-rural-entrepreneur-stream',
    },
    {
      Img: ruralrenewalstream,
      Link: 'Rural Renewal Stream',
      BtnLink: 'https://www.alberta.ca/aaip-rural-renewal-stream',
    },
    {
      Img: DedicatedHealthCarePathway,
      Link: 'Dedicated Health Care Pathway – Alberta Express Entry Stream',
      BtnLink: 'https://www.alberta.ca/dedicated-health-care-pathway',
    },
    {
      Img: AlbertaExpressEntryStream,
      Link: 'Alberta Express Entry Stream',
      BtnLink: 'https://www.alberta.ca/aaip-alberta-express-entry-stream',
    },
    {
      Img: AlbertaOpportunityStream,
      Link: 'Alberta Opportunity Stream',
      BtnLink: 'https://www.alberta.ca/aaip-alberta-opportunity-stream',
    },
    {
      Img: TourismandHospitalityStream,
      Link: 'Tourism and Hospitality Stream',
      BtnLink: 'https://www.alberta.ca/tourism-and-hospitality-stream',
    },
    {
      Img: Technology,
      Link: 'Technology',
      BtnLink: 'https://www.welcomebc.ca/immigrate-to-b-c/for-workers#Tech',
    },
    {
      Img: Construction,
      Link: 'Construction',
      BtnLink: 'https://www.welcomebc.ca/immigrate-to-b-c/for-workers#Priorities',
    },
    {
      Img: Veterinarycare,
      Link: 'Veterinary care',
      BtnLink: 'https://www.welcomebc.ca/immigrate-to-b-c/for-workers#Veterinary',
    },
    {
      Img: Healthcare,
      Link: 'Healthcare',
      BtnLink: 'https://www.welcomebc.ca/immigrate-to-b-c/for-workers#Healthcare',
    },
    // 7 Page Done Here
    {
      Img: Childcare,
      Link: 'Childcare',
      BtnLink: 'https://www.welcomebc.ca/immigrate-to-b-c/for-workers#Childcare',
    },
    {
      Img: StrategicProjectsEntrepreneurs,
      Link: 'Strategic Projects – Entrepreneurs',
      BtnLink: 'https://www.welcomebc.ca/immigrate-to-b-c/for-entrepreneurs-and-businesses#StrategicProjects',
    },
    {
      Img: RegionalStreamEntrepreneurs,
      Link: 'Regional Stream – Entrepreneurs',
      BtnLink: 'https://www.welcomebc.ca/immigrate-to-b-c/for-entrepreneurs-and-businesses#RegionalPilot',
    },
    {
      Img: BaseStreamEntrepreneurs,
      Link: 'Base Stream- Entrepreneurs',
      BtnLink: 'https://www.welcomebc.ca/immigrate-to-b-c/for-entrepreneurs-and-businesses#base%20category',
    },
    {
      Img: InternationalPostGraduate,
      Link: 'International Post-Graduate',
      BtnLink: 'https://www.welcomebc.ca/immigrate-to-b-c/for-workers#IPG',
    },
    {
      Img: InternationalGraduate123,
      Link: 'International Graduate',
      BtnLink: 'https://www.welcomebc.ca/immigrate-to-b-c/for-workers#IG',
    },
    {
      Img: EntryLevelandSemiSkilled,
      Link: 'Entry Level and Semi-Skilled (ELSS)',
      BtnLink: 'https://www.welcomebc.ca/immigrate-to-b-c/for-workers#ELSS',
    },
    {
      Img: HealthAuthority,
      Link: 'Health Authority',
      BtnLink: 'https://www.welcomebc.ca/immigrate-to-b-c/for-workers#HealthAuthority',
    },
    {
      Img: SkilledWorker1234,
      Link: 'Skilled Worker',
      BtnLink: 'https://www.welcomebc.ca/immigrate-to-b-c/for-workers#SkilledWorker',
    },
    {
      Img: OntariosExpressEntryFrenchSpeakingSkilledWorkerstream,
      Link: 'Ontario’s Express Entry- French-Speaking Skilled Worker stream',
      BtnLink: 'https://www.ontario.ca/page/ontarios-express-entry-french-speaking-skilled-worker-stream',
    },
    // 8 Page done
    {
      Img: OntariosExpressEntrySkilledTradesstream,
      Link: 'Ontario’s Express Entry-Skilled Trades stream',
      BtnLink: 'https://www.ontario.ca/page/ontarios-express-entry-skilled-trades-stream',
    },
    {
      Img: OntariosExpressEntryHumanCapitalPrioritiesstream,
      Link: 'Ontario’s Express Entry-Human Capital Priorities stream',
      BtnLink: 'https://www.ontario.ca/page/ontarios-express-entry-human-capital-priorities-stream',
    },
    {
      Img: PhDGraduatestream,
      Link: 'PhD Graduate stream',
      BtnLink: 'https://www.ontario.ca/page/oinp-phd-graduate-stream',
    },
    {
      Img: MastersGraduatestream,
      Link: 'Masters Graduate stream',
      BtnLink: 'https://www.ontario.ca/page/oinp-masters-graduate-stream',
    },
    {
      Img: EmployerJobOfferInDemandSkillsstream,
      Link: 'Employer Job Offer: In-Demand Skills stream',
      BtnLink: 'https://www.ontario.ca/page/oinp-employer-job-offer-demand-skills-stream',
    },
    {
      Img: EmployerJobOfferInternationalStudentstream,
      Link: 'Employer Job Offer: International Student stream',
      BtnLink: 'https://www.ontario.ca/page/oinp-employer-job-offer-international-student-stream',
    },
    {
      Img: EmployerJobOfferForeignWorkerstream,
      Link: 'Employer Job Offer: Foreign Worker stream',
      BtnLink: 'https://www.ontario.ca/page/oinp-employer-job-offer-foreign-worker-stream',
    },
  ];

  const itemsPerPage = 12;
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
