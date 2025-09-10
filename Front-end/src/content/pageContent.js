// Page-specific content for Canadian Dreams Immigration Website

export const pageContent = {
  // Home Page Content
  homePage: {
    hero: {
      title: "Make Canada Your Home",
      subtitle: "Professional Immigration Services That Deliver Results",
      description: "From Express Entry to family reunification, we guide you through every step of your Canadian immigration journey with expertise you can trust.",
      stats: [
        { number: "5000+", label: "Successful Cases" },
        { number: "95%", label: "Success Rate" },
        { number: "15+", label: "Years Experience" },
        { number: "50+", label: "Countries Served" }
      ]
    },
    
    newsCards: [
      {
        id: "01",
        title: "EXPRESS ENTRY DRAW #342",
        description: "In the latest Provincial Nominee Program (PNP) specific draw, 825 candidates were invited with a minimum CRS score of 764.",
        link: "/blog"
      },
      {
        id: "02", 
        title: "B.C. PNP NOTICE #April 14, 2025",
        description: "British Columbia will accept only 1,100 new PNP applications this year, with a strict focus on high-demand roles like doctors,",
        link: "/blog"
      },
      {
        id: "03",
        title: "Join 500K + Strong Community!!!",
        description: "A strong community of over half a million aspiring immigrants across various social media groups…..",
        link: "/contact-us"
      }
    ],

    serviceCards: [
      {
        icon: "aeroplane",
        title: "Student Visa",
        description: "Planning to study in Canada? We assist international students in obtaining the right study permits...",
        link: "/our-services"
      },
      {
        icon: "notebook",
        title: "Express Entry", 
        description: "The application process for skilled immigrants seeking permanent residency in Canada...",
        link: "/our-services"
      },
      {
        icon: "handshake",
        title: "Family Sponsorship",
        description: "Your relatives can live, study, and work in Canada once they become permanent residents.",
        link: "/our-services"
      }
    ],

    employerSection: {
      employer: {
        title: "I AM AN EMPLOYER",
        subtitle: "Global Talent, Canadian Ease.",
        description: "Partner with Ask Kubeir Immigration Services to simplify Canadian Immigration for your global workforce with expert, end to end support.",
        ctaText: "Discover More",
        link: "/employer"
      },
      aspirant: {
        title: "I AM AN ASPIRANT", 
        subtitle: "Canada on your Mind?",
        description: "Ask Kubeir offers sharp, custom-fit advice to zip through immigration routes and plant your roots here. With proven expertise, we'll pave your way to Canada—one breezy step at a time.",
        ctaText: "Start Your Journey",
        link: "/contact-us"
      }
    }
  },

  // About Page Content
  aboutPage: {
    hero: {
      title: "About Canadian Dreams Immigration",
      subtitle: "Your Trusted Partner in Canadian Immigration",
      description: "With years of experience and thousands of successful cases, we are committed to making your Canadian dream a reality."
    },
    
    story: {
      title: "Our Story",
      content: "Founded with a vision to bridge dreams and reality, Canadian Dreams Immigration & Worldwide Services Ltd. has been at the forefront of Canadian immigration services. Our journey began with a simple belief: everyone deserves a chance to build a better future in Canada. Today, we stand as one of Canada's most trusted immigration consultancies, having helped thousands of individuals and families from around the world make Canada their new home."
    },
    
    team: {
      title: "Meet Our Expert Team",
      description: "Our team of licensed immigration consultants brings together decades of experience, deep knowledge of Canadian immigration law, and a genuine passion for helping people achieve their dreams.",
      members: [
        {
          name: "Harpreet Begga",
          position: "Senior Immigration Consultant",
          credentials: "RCIC, CICC Licensed",
          experience: "10+ years experience",
          specialization: "Express Entry, PNP Programs"
        },
        {
          name: "Kanishka Sharma", 
          position: "Immigration Consultant",
          credentials: "RCIC, CICC Licensed",
          experience: "8+ years experience",
          specialization: "Student Visas, Work Permits"
        },
        {
          name: "Rashmeen Kaur",
          position: "Family Immigration Specialist",
          credentials: "RCIC, CICC Licensed", 
          experience: "7+ years experience",
          specialization: "Family Sponsorship, Visitor Visas"
        }
      ]
    },
    
    achievements: [
      "Over 5,000 successful immigration cases",
      "95% application approval rate",
      "Licensed by College of Immigration and Citizenship Consultants",
      "Serving clients from 50+ countries",
      "15+ years of combined team experience",
      "Multilingual support in 10+ languages"
    ]
  },

  // Services Page Content
  servicesPage: {
    hero: {
      title: "Comprehensive Immigration Services",
      subtitle: "Your Pathway to Canada Starts Here",
      description: "We offer a full range of immigration services designed to meet your unique needs and circumstances."
    },
    
    mainServices: [
      {
        category: "Permanent Residency",
        services: [
          {
            title: "Express Entry System",
            description: "Navigate the Federal Skilled Worker Program, Canadian Experience Class, and Federal Skilled Trades Program with expert guidance.",
            features: ["CRS Score Optimization", "Document Preparation", "Application Submission", "Post-ITA Support"],
            processingTime: "6-8 months",
            eligibility: "Skilled workers with relevant experience"
          },
          {
            title: "Provincial Nominee Program (PNP)",
            description: "Explore provincial immigration programs tailored to specific regional needs and occupations.",
            features: ["Province Selection", "Nomination Process", "Express Entry Integration", "Settlement Support"],
            processingTime: "12-18 months",
            eligibility: "Varies by province and stream"
          },
          {
            title: "Quebec Immigration",
            description: "Specialized services for Quebec's unique immigration system and requirements.",
            features: ["Quebec Selection Certificate", "French Language Support", "Quebec Values Test", "Settlement Planning"],
            processingTime: "12-20 months", 
            eligibility: "French proficiency preferred"
          }
        ]
      },
      {
        category: "Temporary Residence",
        services: [
          {
            title: "Work Permits",
            description: "Secure authorization to work in Canada through various work permit categories.",
            features: ["LMIA Applications", "International Mobility Program", "Spouse Work Permits", "Extension Services"],
            processingTime: "2-6 months",
            eligibility: "Job offer or qualifying circumstances"
          },
          {
            title: "Study Permits",
            description: "Complete support for international students pursuing education in Canada.",
            features: ["Institution Selection", "Study Permit Application", "Co-op Work Permits", "Post-Graduation Work Permits"],
            processingTime: "4-12 weeks",
            eligibility: "Acceptance from designated learning institution"
          },
          {
            title: "Visitor Visas",
            description: "Assistance with temporary resident visas for tourism, business, or family visits.",
            features: ["Single/Multiple Entry", "Super Visa for Parents", "Business Visitor Permits", "Extension Applications"],
            processingTime: "2-8 weeks",
            eligibility: "Temporary visit purposes"
          }
        ]
      },
      {
        category: "Family Immigration",
        services: [
          {
            title: "Spousal Sponsorship",
            description: "Reunite with your spouse or common-law partner through family class immigration.",
            features: ["Inland/Outland Applications", "Relationship Documentation", "Interview Preparation", "Appeal Services"],
            processingTime: "12-24 months",
            eligibility: "Canadian citizen or permanent resident sponsor"
          },
          {
            title: "Parent & Grandparent Program",
            description: "Sponsor your parents and grandparents for permanent residency in Canada.",
            features: ["Income Requirements", "Lottery System Navigation", "Super Visa Alternative", "Undertaking Support"],
            processingTime: "24-36 months",
            eligibility: "Meet income thresholds and lottery selection"
          },
          {
            title: "Dependent Children",
            description: "Include dependent children in your immigration application or sponsor them separately.",
            features: ["Age Requirements", "Dependency Proof", "Educational Documentation", "Medical Examinations"],
            processingTime: "8-16 months",
            eligibility: "Under 22 years old or dependent due to condition"
          }
        ]
      }
    ]
  },

  // Contact Page Content
  contactPage: {
    hero: {
      title: "Get in Touch",
      subtitle: "Ready to Start Your Canadian Journey?",
      description: "Contact our expert team for personalized immigration advice and solutions."
    },
    
    contactMethods: [
      {
        type: "Office Visit",
        title: "Visit Our Office",
        description: "Meet with our consultants in person for detailed consultation.",
        details: "123 Main Street, Suite 456, Brampton, ON L6T 1A2",
        hours: "Monday - Friday: 9:00 AM - 6:00 PM EST"
      },
      {
        type: "Phone Call",
        title: "Call Us",
        description: "Speak directly with our immigration experts.",
        details: "+1 (905) 123-4567",
        hours: "Available during business hours"
      },
      {
        type: "Email",
        title: "Email Us", 
        description: "Send us your questions and we'll respond within 24 hours.",
        details: "info@canadiandreamsimmigration.com",
        hours: "Response within 24 hours"
      }
    ],
    
    consultationTypes: [
      {
        type: "Free Initial Consultation",
        duration: "30 minutes",
        description: "Get basic information about your immigration options and our services.",
        price: "Free",
        includes: ["Eligibility overview", "Program recommendations", "Next steps guidance"]
      },
      {
        type: "Comprehensive Assessment",
        duration: "60 minutes", 
        description: "Detailed evaluation of your profile with personalized immigration strategy.",
        price: "$150 CAD",
        includes: ["Complete eligibility assessment", "Document checklist", "Timeline and cost breakdown", "Written summary report"]
      },
      {
        type: "Document Review",
        duration: "45 minutes",
        description: "Professional review of your immigration documents before submission.",
        price: "$100 CAD", 
        includes: ["Document completeness check", "Quality review", "Improvement recommendations", "Submission readiness confirmation"]
      }
    ]
  },

  // Blog Page Content
  blogPage: {
    hero: {
      title: "Immigration News & Insights",
      subtitle: "Stay Updated with Latest Immigration Information",
      description: "Get the latest news, updates, and expert insights on Canadian immigration."
    },
    
    categories: [
      "All Posts",
      "Express Entry",
      "Provincial Programs", 
      "Student Immigration",
      "Family Sponsorship",
      "Work Permits",
      "Immigration News",
      "Success Stories"
    ],
    
    featuredPosts: [
      {
        title: "Complete Guide to Express Entry 2024",
        excerpt: "Everything you need to know about Canada's Express Entry system, including recent changes and how to maximize your CRS score.",
        category: "Express Entry",
        author: "Harpreet Begga",
        date: "March 20, 2024",
        readTime: "12 min read",
        featured: true
      },
      {
        title: "Provincial Nominee Program Updates: What's New in 2024",
        excerpt: "Latest updates from provincial nominee programs across Canada and how they affect your immigration strategy.",
        category: "Provincial Programs",
        author: "Kanishka Sharma", 
        date: "March 18, 2024",
        readTime: "8 min read",
        featured: true
      }
    ]
  }
};

// Export individual page content for easier imports
export const {
  homePage,
  aboutPage,
  servicesPage,
  contactPage,
  blogPage
} = pageContent;