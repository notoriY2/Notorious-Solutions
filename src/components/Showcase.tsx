import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  X, 
  Github, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  Terminal, 
  Code2, 
  Layers, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

type Category = 'all' | 'apps' | 'websites' | 'branding';

interface DocSection {
  heading: string;
  content: string[];
}

interface Project {
  id: string;
  title: string;
  category: 'apps' | 'websites' | 'branding';
  description: string;
  details: string;
  images: string[];
  tags: string[];
  github?: string;
  liveUrl?: string;
  gridSpan?: 'small' | 'medium' | 'large';
  documentation: {
    overview: string;
    sections: DocSection[];
  };
}

const PROJECTS: Project[] = [
  // ==========================================
  // WIX WEBSITES (7 TOTAL)
  // ==========================================
  {
    id: 'notorious-y2',
    title: 'Notorious Y2: E-Commerce Streetwear Archive',
    category: 'websites',
    description: 'High-contrast digital storefront for a premium urban streetwear label.',
    details: 'A polished, high-conversion streetwear storefront engineered around premium visual assets and modern layout design. The platform showcases asymmetric dynamic lookbooks, responsive shopping bags, and localized, secure checkouts built for frictionless retail workflows.',
    images: ['18.png', '17.png', '16.png', '15.png' ,'14.png'],
    tags: ['E-Commerce UI', 'Checkout Flow', 'Streetwear Branding'],
    liveUrl: 'https://notorious-store.netlify.app/',
    gridSpan: 'large', // Swapped from medium to large
    documentation: {
      overview: 'An experience-led retail portal built to bridge heavy urban design trends with fluid user conversion pathways. Features stylized high-contrast components, currency configuration structures, and complete transparent transactional infrastructure.',
      sections: [
        {
          heading: '1. Brand Kit & Visual Assets',
          content: [
            'Adopted a warm, high-contrast urban visual profile combining solid dark canvas components with minimalist text arrangements.',
            'Integrated the primary visual mark using file 48.jpg, which preserves the brand circle asset: a textured gold-ochre disc featuring a clean geometric smile contour framing central "Y2" block lettering.',
            'Mapped interface presentation frames chronologically across active portal layers: file 17.jpg tracks the main landing lookbook set to local South African currency (ZAR), and file 18.jpg captures the alternative global catalog view set to United States Dollars (USD).',
            'Allocated functional operational states for data tracking: file 14.png logs the secure express checkout interface layout, file 15.jpg preserves the interactive slide-out sliding cart drawer module, and file 16.jpg details the main product presentation single view template.'
          ]
        },
        {
          heading: '2. Interface Architecture & Currency Matrices',
          content: [
            'Engineered a floating header layout managing secondary controls: Sign In, Wishlist/Heart toggle, and Shopping Bag counters, paired with a currency routing switch allowing instant toggling between ZAR and USD metrics.',
            'Asymmetric Showcase Mosaic: Structured an editorial landing section presenting scattered, angled garment displays showcasing original graphic tees, localized patch hoodies, and multi-toned cut-and-sew variants.',
            'Product Detail Template: Implemented a split-screen product detail layout displaying detailed twin garment close-ups alongside technical descriptions, sizing parameters (Small, Medium, Large), color pickers, and explicit asset tags ("100% Cotton", "Regular Fit", "Machine Washable", "Imported").'
          ]
        },
        {
          heading: '3. Cart Logic & Transactional Intake Pipelines',
          content: [
            'Interactive Drawer Management: Implemented a responsive slide-out web drawer ("Your Cart") supporting asynchronous quantity increments, dynamic item removals, and an automated localized subtotals engine.',
            'Express Integration Systems: Configured immediate conversion channels highlighting dedicated "shop Pay" and "G Pay" alternative routing lanes to bypass manual input forms.',
            'Client Information Ingestion: Built structured dual-column data collection forms grouping clear identification rows (Email field, Delivery Region drop-down, First name, Last name, and Address matching tracking).'
          ]
        },
        {
          heading: '4. Footers, Trust Systems & Localized Infrastructure',
          content: [
            'Community Sign-up Funnel: Positioned a persistent bottom newsletter container ("JOIN OUR MAIL LIST") with standalone input fields and a high-contrast subscription toggle.',
            'Payment Gateway Verification: Integrated visual trust logos confirming regional and global processing channels including Visa, Mastercard, American Express, PayPal, and digital configurations.',
            'Support Network Layout: Anchored help panels linking to physical support addresses (support@notorious.y2.com), localized customer telephone routing options (063 503 5882), Help Centers, Size Guides, Returns Policies, and dedicated platform FAQs.'
          ]
        }
      ]
    }
  },
  {
    id: 'sunset-bites',
    title: 'Sunset Bites: Casual Dining Portal',
    category: 'websites',
    description: 'Warm, high-conversion restaurant site with integrated booking.',
    details: 'A casual dining portal built to bridge traditional comfort food with a modern South African atmosphere. The site features category-based menu navigation, reservation workflows, and a heavy focus on culinary storytelling.',
    images: ['29.png', '28.png', '27.png', '26.png', '25.png'],
    tags: ['Restaurant UI', 'Reservation Flow', 'Culinary Branding'],
    liveUrl: 'https://mosapotsane700.wixsite.com/sunsetbites',
    gridSpan: 'small',
    documentation: {
      overview: 'Experience-focused layout design aimed at maximizing table bookings and highlighting seasonal menus. Integrates rich culinary narratives, dynamic contact captures, and structured brand assets designed around an elevated casual dining theme.',
      sections: [
        {
          heading: '1. Brand Kit & Visual Identification',
          content: [
            'Adopted a custom visual profile balancing contemporary hospitality design with highly readable typographic structures tailored to premium diner aesthetics.',
            'Integrated an organic color scheme combining a soothing Cream Beige backdrop with bold Dark Chocolate layout elements and structural text features.',
            'Mapped primary corporate logo assets: file 12.png stores the circular insignia graphic consisting of a high-contrast dark green disc overlaid with an elegant gold crest and customized "S" lettering.',
            'Assigned layout preview images across administrative content fields: file 29.jpg records the master hero section configuration, file 27.jpg highlights the curated multi-column digital photo gallery layout, file 28.png tracks the dark-accented localized brand footer container, file 26.jpg preserves the structured responsive category catalog view, and file 25.jpg logs the split-screen community registration form.'
          ]
        },
        {
          heading: '2. Site Architecture & Content Layout Routing',
          content: [
            'Engineered an intuitive 6-tier header navigation menu directing platform visitors across structural pages: Home, About, Menu, Gallery, Reservations, and Contact, paired with an integrated accent-colored "Book a Table" anchor link.',
            'Home / Hero Unit: Combines high-impact welcoming typography ("Delicious Food. Beautiful Atmosphere.") with descriptive messaging focusing on traditional Americana and timeless diner themes.',
            'Our Story Module: Establishes emotional connections with patrons by documenting the brand history (founded in 2024) and their core mission to marry the warmth of the South African sun with elevated comfort food solutions.',
            'Biographical Profile: Houses a dedicated editorial profile for Executive Chef Thabo Mokoena, spotlighting 15 years of industry culinary experience across elite Cape Town fine-dining environments.'
          ]
        },
        {
          heading: '3. Menu Architecture & Culinary Storytelling',
          content: [
            'Implemented category-based menu blocks (Starters, Main Meals, Desserts, Drinks) for intuitive user navigation.',
            'Structured visual hierarchy to highlight signature dishes like the "250g Grilled Steak" and "Cheesecake".',
            'Culinary Specialization Section: Elaborates on the signature "Modern Comfort" preparation philosophy, explicitly emphasizing bold seasonal profiles, scratch-made pasta arrays, and perfectly seared ribeye selections designed around local farm produce.'
          ]
        },
        {
          heading: '4. Conversion, Trust, Intake Pipelines & Footers',
          content: [
            'Designed a multi-step reservation funnel directly accessible from the hero section.',
            'Integrated client testimonial carousels to build social proof and establish local trust, presenting verified feedback from regional patrons including Lerato Nkosi, Daniel Petersen, and Aisha Khan.',
            'Asynchronous Contact Matrix: Configured a localized user data ingestion pipeline gathering critical communication fields: First name*, Last name*, Email*, Phone, and Message.',
            'Regional Infrastructure Layout: Anchored the bottom design with a standardized global layout featuring a physical operational location at 32 Kerk St, Colesberg, 9795, phone routing lines at (063)-503-5882, central digital mail loops to info@sunsetbites.com, clear opening schedules (Mon-Fri: 10am-10pm; Sat-Sun: 09am-11pm), and compliance links for Privacy Policy, Accessibility Statement, Terms & Conditions, and Refund Policy.'
          ]
        }
      ]
    }
},
  
  {
    id: 'capture-moments',
    title: 'Capture Moments Photography',
    category: 'websites',
    description: 'Professional high-fidelity urban street art documentation & archive platform.',
    details: 'Capture Moments is a premier photography studio dedicated to documenting the raw energy of urban street art and cityscapes. We provide high-resolution mural archiving, urban texture series, and live-action documentation of the creative process, transforming fleeting public expressions into lasting visual legacies.',
    images: ['24.png', '23.png', '22.png'], // Ensure '10.png' is in your assets folder
    tags: ['Photography', 'High-Fidelity', 'Urban Art'],
    liveUrl: 'https://mosapotsane700.wixsite.com/capture-moments',
    gridSpan: 'medium',
    documentation: {
      overview: 'Digital asset management system for high-resolution mural archiving and urban texture collections[cite: 4]. Designed for technical clarity, cultural preservation, and rapid local lead generation.',
      sections: [
        {
          heading: '1. Brand Identity & High-Contrast Visual Standards',
          content: [
            'Established a bold, industrial, high-contrast design language tailored around a primary Deep Charcoal/True Black (#111111) canvas typography framework.',
            'Integrated Vibrant Signal Orange (#FF5500) as the exclusive interactive color token for functional button highlights, system call-to-actions, and accent layers.',
            'Maintained crisp background contrast ratios utilizing Pure Gallery White (#FFFFFF) and Minimal Soft Grey (#FAFAFA) to allow multi-colored architectural artwork to stand out without background interference.',
            'Configured master branding asset maps explicitly: 49.png serves as the master locked-signature wordmark, while 10.png breaks out the standalone lens graphic emblem for avatar usage and watermarking layouts.'
          ]
        },
        {
          heading: '2. Multi-Page Information Architecture & Content Schema',
          content: [
            'Engineered a structured five-node web navigation system comprising Home, Services, About, Portfolio, and Contact anchors to map user journeys cleanly.',
            'Configured the Home arena around prominent text assets ("Preserving the fleeting art of the streets") paired with immediate visual call-to-actions like "Explore the Streets" to drive collection discovery.',
            'Organized specific portfolio sub-compartments to spotlight separate photography focus pipelines: City Soul Portraits, The Texture Series, and Urban Perspectives.'
          ]
        },
        {
          heading: '3. Functional Archiving & Service Delivery Matrices',
          content: [
            'Architected high-fidelity display grids optimized for ultra-high-resolution mural captures[cite: 4].',
            'Implemented service-based layout blocks to categorize archiving, texture series, and live-action coverage[cite: 4].',
            'Detailed specific workflows for Mural Documentation & Archiving (preserving permanent digital records of temporary murals), Urban Texture & Architectural Series (brick/concrete canvas textures for interior design use), and Live-Action Street Art Coverage (behind-the-scenes creation documentation).'
          ]
        },
        {
          heading: '4. Asynchronous Intake Infrastructure & Localized Footers',
          content: [
            'Deployed a secure client inquiry form requiring strict database-level validation rules across five distinct targets: first_name, last_name, email (RFC 5322 standard), optional phone input, and text message body.',
            'Embedded localized footer modules mapping physical operations directly back to regional metadata anchors: 300 Church Str. Colesberg 9795, phone routing via 063-503-5882, and hello targets to mosapotsane700@gmail.com.',
            'Maintained platform compliance bindings by including explicit anchors for the studio Privacy Policy and WCAG 2.1 AA Conformant Accessibility Statements.'
          ]
        }
      ]
    }
},
  {
    id: 'education-for-all',
    title: 'Education For All: Impact Platform',
    category: 'websites',
    description: 'Non-profit impact-driven portal for educational equity.',
    details: 'A mission-oriented platform dedicated to dismantling educational barriers. Features donor management, impact metrics visualization (2025 in numbers), and project-specific initiatives including the Annual Tech Challenge and Student Adoption programs.',
    images: ['43.png', '42.png'], 
    tags: ['Non-Profit', 'Impact Metrics', 'Donor UI'],
    liveUrl: 'https://mosapotsane700.wixsite.com/education-for-all',
    gridSpan: 'large',  
    documentation: {
      overview: 'Strategic layout focused on trust-building, donor conversion, and social proof. Integrates verifiable impact metrics, multi-tier operational goals, community volunteer intake pipelines, and clean regional compliance mapping.',
      sections: [
        {
          heading: '1. Brand Kit & Master Visual Assets',
          content: [
            'Adopted a vibrant, trust-inducing corporate sky blue and white visual profile paired with high-contrast text hierarchies to ensure maximum accessibility and readability.',
            'Integrated custom illustrative emblems featuring a stylized blue pencil with physical heart-shaped wings to explicitly anchor the dual concept of technical education and community empathy.',
            'Mapped master graphical brand assets across configuration repositories: file 6.png preserves the core standalone vector brand identity logo alongside the primary "Education For All: Choose Equality" typography layout lockup.',
            'Assigned layout screenshots for administrative catalog tracking: file 43.jpg captures the hero section featuring the main classroom visual layout banner ("Knowledge builds futures."), while file 42.png logs the dual-column Contact and system Newsletter subscription module.'
          ]
        },
        {
          heading: '2. Multi-Page Architecture & Information Routing',
          content: [
            'Engineered a balanced 6-node navigation grid routing target users across core engagement zones: Home, About, Projects, Donate, Events, and Contact, supplemented by an asynchronous secure user portal ("Log In").',
            'Hero Section Architecture: Combines powerful thematic phrasing ("EMPOWERING THE NEXT GENERATION") with explicit behavioral calls-to-action ("Make Impact") to immediate conversion funnels.',
            'About ChoosEquality Module: Documents organizational foundations centered around dismantling systemic educational barriers across Africa through sustainable infrastructure development, learning materials distribution, and teacher mentorship.',
            'Strategic Milestone Alignment: Explicitly maps institutional goals into transparent public-facing matrices detailing empathy cultivation, geographical expansion (increasing donations across 24 countries), and high school graduation metrics.'
          ]
        },
        {
          heading: '3. Impact Visualization & Project Portfolios',
          content: [
            'Implemented high-visibility data counters for "2025 in Numbers" to drive donor engagement.',
            'Structured project-specific landing cards to detail individual initiatives from construction to literacy.',
            'Programmatic Track Breakdown: Configured clean presentation blocks for the Annual Tech Challenge (STEM scholarships and coding workshops), Adopt a Student (covering tuition, supplies, and daily meals), Transportation for Youth (safe transit in remote locations), and English for All (language training for global workforce preparation).',
            'Quantified Impact Matrix: Embedded an analytical data module archiving baseline annual performance metrics, verifying 400K Rands Raised, 8K Graduate Students empowered, and 120 Technology Centers deployed.'
          ]
        },
        {
          heading: '4. Community Integration, Intake & Local Footers',
          content: [
            'Engineered event-based volunteer sign-up funnels and newsletter subscription blocks.',
            'Optimized testimonial displays to establish community trust through verified personal stories, prominently highlighting raw feedback from localized program beneficiaries (e.g., Busisiwe Qulu, Grade 8 learner).',
            'Newsletter Ingestion Engine: Integrated an asynchronous single-field data input module requiring strict email validation matching RFC requirements alongside an explicit checkbox verification block ("Yes, subscribe me to your newsletter.*").',
            'Localized Operational Grid: Anchored global page layouts with a unified footer mapping physical operations to 6 Charl Cilliers Street, Colesberg, 9795, phone channels via (063)-503-5882, and core hello routing to mosapotsane700@gmail.com, wrapped inside strict compliance menus for Terms & Conditions, Privacy Policy, and Refund Policy under production signatures assigned to Notorious Y2.'
          ]
        }
      ]
    }
},
  {
    id: 'wix-bakery',
    title: 'Sweet Delights Bakery Showcase',
    category: 'websites',
    description: 'Custom Wix platform for a local bakery featuring online ordering, catering, and artisan craft showcases.',
    details: 'Welcome to Sweet Delights Bakery, where every treat is made with love and care. From our small-oven origins to your table, we provide soft breads, flaky pastries, and rich, handcrafted cakes daily. We are dedicated to bringing comfort and joy to our community through fresh baking, custom special-event treats, and interactive baking classes.',
    images: ['34.png', '33.png', '32.png', '31.png', '30.png'],
    tags: ['Wix Pro', 'Velo Datasets', 'Branding Kit'],
    liveUrl: 'https://mosapotsane700.wixsite.com/sweet-delights',
    gridSpan: 'medium',
    documentation: {
      overview: 'Full-stack boutique e-commerce integration built on the Wix platform featuring custom Velo dynamic database sets, automated store checkout pipelines, multi-channel user submission funnels, and localized search presence mappings.',
      sections: [
        {
          heading: '1. Brand Kit, Visual Language & Assets',
          content: [
            'Implemented an appetizing, soft pastry-inspired visual aesthetic relying on a creamy soft pastel yellow backdrop (#FFF9C4 style) balanced by deep strawberry pink structural headers, text branding nodes, and system action rules.',
            'Bound typography to modern, accessible rounded sans-serif system type scales to retain high scannability across dense pricing menus and dynamic desktop product cards.',
            'Configured core digital brand assets: the primary round Sweet Delights Bakery insignia illustration containing styled gateau treats is locked up via image 9.png.',
            'Assigned structural layout images across administrative data indexes: 34.jpg maps the master Home / Hero landscape, 33.png stores the upcoming Events dashboard layout, 32.jpg anchors the multi-field Contact interface container, 31.jpg holds the curated historical About overview canvas, and 30.jpg manages the comprehensive dynamic catalog grid.'
          ]
        },
        {
          heading: '2. Site Architecture & Content Layout Routing',
          content: [
            'Engineered a high-conversion 6-tier navigation network mapping structural routing directly across discrete data views: Home, About, Products, Events, Contact, and My Orders.',
            'Home / Canvas Module: Combines a layered bold message header ("Freshly Baked Happiness") with a descriptive introduction paragraph and an immediate landing button ("Discover") to pull traffic straight into retail pipelines.',
            'About Us Module: Hosts deep editorial narratives split into "From a Small Oven to Your Table" and "Baked With Purpose" text blocks detailing artisanal dedication, small-batch sourcing guidelines, and specialized pastry class programming.',
            'Why Choose Us Section: Deployed an automated value presentation matrix organizing company strengths into distinct highlight sections focusing on Fresh, Quality Ingredients, Handcrafted With Care, and Customer Service Excellence.'
          ]
        },
        {
          heading: '3. Dynamic Categories & Velo Product Catalogs',
          content: [
            'Separated visual inventory into dedicated rows optimized for instant query processing.',
            'Configured strict asset scaling parameters to preserve typographic proportions.',
            'Engineered a comprehensive browse infrastructure cataloging a total of 17 active store products across dynamically filtered collections like Brownies & Chocolate Treats, Our Artisanal Cupcakes, Signature Cakes, and generic catalog classes.',
            'Integrated an interactive user marketing ribbon displaying time-sensitive e-commerce conversion triggers, explicitly featuring the limited-time custom promotional incentive banner: "Buy 1 cake slice, get 1 cupcake free!".'
          ]
        },
        {
          heading: '4. Lead Management, Systems Checkout & Localized Footers',
          content: [
            'Deployed an embedded real-time asynchronous data ingestion contact and registration form containing strict validation constraints across five key target nodes: First name*, Last name*, Phone*, Email*, and freeform text field Your message.',
            'Configured secure end-to-end shopping cart infrastructure with integrated state monitoring linked directly back to a native client portal ("My Orders") for immediate delivery fulfillment, event custom order inquiries, and baking masterclass registration.',
            'Anchored the global layout with a uniform, comprehensive pink-toned localized brand footer displaying regional compliance links for Privacy Policy, Accessibility Statement, Shipping Policy, Terms & Conditions, and Refund Policy.',
            'Embedded physical operational indicators directly inside global templates to support local regional search relevance: phone communication gateway at +27 63 503 5882, physical corporate address node at 500 Church Str, Colesberg, 9795, and master digital mail routing to mosapotsane700@gmail.com, finalized with a production signature tracking ownership directly to Notorious Y2.'
          ]
        }
      ]
    }
},

  {
    id: 'spu-sportswear',
    title: 'SPU UTD: Fan Merchandise Portal',
    category: 'websites',
    description: 'High-contrast e-commerce storefront for sports merchandise and casual fan apparel.',
    details: 'A specialized lifestyle retail portal matching digital storefront mechanics with sports culture aesthetics. The site incorporates high-impact sports hero imagery, a clean responsive product grid with interactive cart shortcuts, and unified club branding.',
    images: ['55.png', '54.png'],
    tags: ['E-Commerce Grid', 'Merchandise UI', 'Sports Branding'],
    liveUrl: 'https://spu-united.netlify.app/',
    gridSpan: 'small', // Swapped from medium to small
    documentation: {
      overview: 'A conversion-focused merchandise layout built to capture fan engagement and translate club loyalty into retail sales. Combines striking atmospheric branding with a highly legible catalog structure.',
      sections: [
        {
          heading: '1. Brand Kit & Identity Deployment',
          content: [
            'Adopted a bold corporate layout featuring a solid black header menu container paired with high-visibility crimson red navigation links.',
            'Integrated the primary team emblem lockup across all views, displaying a high-contrast shield graphic that encloses a stylized athlete silhouette against an orange and yellow sunset gradient.',
            'Mapped layout interface configurations directly from design files: file 55.jpg records the immersive landing hero display featuring a crowded stadium backdrop and bold orange typography ("You\'ll Never Walk Alone").',
            'Allocated active e-commerce storefront tracking via file 54.jpg, preserving the structured product collection view and card interface components.'
          ]
        },
        {
          heading: '2. Site Architecture & Navigation Paths',
          content: [
            'Engineered a lightweight 5-tier header menu system directing traffic to core modules: Home, Shop, Matches, About, and Contact.',
            'Integrated an isolated shopping bag icon utility at the right side of the navigation bar to allow rapid access to active customer carts.',
            'Structured an editorial lifestyle presentation that connects team identity directly with the apparel catalog to drive higher cross-selling opportunities.'
          ]
        },
        {
          heading: '3. Product Grid & Retail Mechanics',
          content: [
            'Implemented a highly structured 4-column responsive product card grid optimized for desktop and mobile displays.',
            'Configured unified metadata layouts for individual catalog items displaying stock keeping descriptors ("SPU"), explicit item names, aggregate 5-star customer review rating rows, and high-visibility price tags fixed at R700.',
            'Mapped specific active merchandise variants across the main storefront catalog: "White Hug Dealer", "Black Hug Dealer", "Navy T-Shirt.v1", and "Black T-Shirt.v2".',
            'Deployed individual, floating blue-accented shopping cart button triggers on every product card to facilitate quick, single-click additions without forcing page redirection.'
          ]
        }
      ]
    }
  },
  
  {
  id: 'bright-future-academy',
  title: 'Bright Future Academy: Educational Portal',
  category: 'websites',
  description: 'Clean, modern, and accessible academic platform for students and parents.',
  details: 'A comprehensive institutional website built on Wix Harmony. It features structured academic routing, detailed curriculum maps, dedicated teacher profiles, and an integrated admissions pathway designed to optimize community engagement.',
  images: ['70.png', '71.png'],
  tags: ['Education', 'Academic Portal', 'Wix Harmony'],
  liveUrl: 'https://mosapotsane700.wixsite.com/bright-future-acad',
  gridSpan: 'large',  
  documentation: {
    overview: 'This documentation outlines the UI/UX architecture, visual hierarchy, and media asset deployment for the Bright Future Academy Wix website platform. The interface is structured to serve as a clean, welcoming, and high-contrast educational portal optimized for prospective parents, current students, and administrative stakeholders.',
    sections: [
      {
        heading: '1. Visual Overview & Design Paradigm',
        content: [
          'Design Paradigm: Engineered to be clean, modern, professional, and accessible across all device form factors.',
          'Core Color Palette: Built utilizing a trust-inducing deep blue (representing education and stability), clean white layouts, and vibrant success gold/yellow accents to highlight key milestones and actions.',
          'Media Asset Tracking: Logged core system screenshots into production assets: file 70.jpg captures the full-bleed hero entry configuration, while file 71.jpg tracks the structured three-column programs module.'
        ]
      },
      {
        heading: '2. Global Navigation & Layout Architecture',
        content: [
          'Header UI Component: Main locked, high-scannability configuration across all internal nodes to ensure friction-free navigation and user consistency.',
          'Brand Lockup (Left Alignment): Prominently nests the official circular Bright Future Academy shield emblem alongside stacked high-contrast typography.',
          'Navigation Menu (Center Alignment): Hosts sleek, standard text links managing core routing pathways: Home, About, Subjects & Programs, Teacher, Admissions, News & Events, and Contact.',
          'High-Impact Call to Action (Right Alignment): Features a bright, high-contrast gold/yellow rectangular button labeled "Apply Now" to maintain an instant, permanent conversion funnel for prospective families.'
        ]
      },
      {
        heading: '3. Media Suite & Section Breakdowns',
        content: [
          'Hero Splash Banner (Home Page - 70.jpg): Implements a balanced split-banner configuration. The left half houses a bold blue block with white text and active buttons ("Explore Programs", "Apply Now"), while the right showcases a high-resolution aerial view of a modern school campus.',
          'Our Programs / Curricular Grid (71.jpg): Deploys a modular three-column card container layout separating distinct academic categories.',
          'Primary Education Segment: Features a clean visual of an interactive classroom setting with an educator actively assisting young learners.',
          'High School Studies Segment: Showcases an advanced student setting working inside a modern science laboratory equipped with a microscope.',
          'Extracurricular Activities Segment: Highlights a dynamic image of students engaged in a competitive team sports soccer match on an outdoor school field.'
        ]
      },
      {
        heading: '4. Content Strategy & Component Blueprinting',
        content: [
          'Primary Education Card Hierarchy: Displays a clear deep blue header ("Primary Education") backed by a core foundational syllabus description (Mathematics, English, Science, Life Skills) and concludes with a gold-accented "Explore Primary Education" link.',
          'High School Studies Card Hierarchy: Implements the specialized header "High School Studies" over descriptive copy highlighting university entrance preparation and direct career routing, ending with an "Explore High School" anchor.',
          'Extracurricular Activities Card Hierarchy: Mounts the holistic header "Extracurricular Activities" outlining diverse development clubs (Sports, Coding, Drama, Science) paired with an active "Explore Activities" link.',
          'Text Scannability Guidelines: Enforces strict adherence to web accessibility standards by keeping a minimum contrast ratio of 4.5:1, passing white text over the deep blue banner and deep charcoal text over white backgrounds.',
          'Wix Harmony Optimization: Configures the multi-column programmatic grid to automatically collapse into a single vertical stack on mobile viewport sizes, preserving large, touch-safe link zones.'
        ]
      }
    ]
  }
},
  {
    id: 'lafrique-cleaning',
    title: 'Lafrique Imagine: Eco-Cleaning Portal',
    category: 'websites',
    description: 'Premium eco-friendly residential & commercial cleaning services platform.',
    details: 'A high-conversion service platform designed for the Cape Town market. Features include dynamic service-tier selection, transparent scheduling funnels, and a strong emphasis on brand values like sustainability and professional integrity.',
    images: ['37.png', '36.png', '35.png'], 
    tags: ['Service UI', 'Local SEO', 'Eco-Conscious'],
    liveUrl: 'https://mosapotsane700.wixsite.com/lafrique-imagine',
    gridSpan: 'medium',
    documentation: {
      overview: 'Service-driven architecture optimized for conversion and trust-building in the competitive cleaning sector. Integrates clear client registration pathways, multi-industry service modules, quantified environmental milestones, and a cohesive corporate identity[cite: 5].',
      sections: [
        {
          heading: '1. Brand Kit, Visual Design & Assets',
          content: [
            'Adopted a highly professional, eco-conscious color scheme designed to convey clinical cleanliness and environmental reliability[cite: 5].',
            'Integrated the primary brand palette utilizing Teal Blue (#0F6E8C) for layout subtitles, Deep Teal (#084C61) for prominent page structural headers, Light Blue Accent (#2DAFD6) for visual highlights, and Fresh Green (#22C55E) for conversion button backgrounds[cite: 5].',
            'Mapped formal digital brand logo files explicitly: image 4.png hosts the clean standalone circular geometric emblem featuring contrasting blue sail-shaped vertical elements, while image 5.png captures the full identity lockup combining the emblem, the "LAFRIQUE" text branding, and the tagline "With you all the way!"[cite: 5].',
            'Assigned platform interface layout tracking captures: images 37.png, 36.png, and 35.png preserve localized operational panels including the dynamic service options, the multi-industry workplace standards grid, and the client quote acquisition screens.'
          ]
        },
        {
          heading: '2. Site Architecture & Content Layout Routing',
          content: [
            'Engineered a scannable 5-tier header navigation network routing site users across core informational zones: Home, About, Gallery, Services, and Contact, paired with an anchor link for a client submission node ("Get a Free Quote") and a secure portal login ("Log In").',
            'Home / Hero Unit: Combines an immediate value proposition headline ("Spotless Spaces. Stress-Free Living.") with explicit localized target text pointing directly to homes and businesses in Cape Town.',
            'Our Story Module: Establishes strong professional branding by detailing the origin of the business, explaining how the name "Lafrique" honors regional roots and highlights their pledge to provide premium services without compromising human or environmental health.',
            'Core Performance Indicators: Integrates verified public milestones tracking historical business accomplishments, explicitly noting 500+ Homes & Offices Cleaned alongside a 100% Satisfaction Guarantee policy.'
          ]
        },
        {
          heading: '3. Specialized Services & Workplace Standards',
          content: [
            'Structured a modular service catalog dividing business capabilities into distinct, high-impact consumer tiers: Residential, Commercial, Carpet, and Construction cleaning solutions[cite: 5].',
            'Residential Cleaning Options: Explicitly segments domestic cleaning solutions into Weekly/Bi-weekly Maintenance (Regular), Grime-focused deep scrubbing (Deep Cleaning), and tenant transitions (Move-In / Move-Out).',
            'Commercial & Workplace Standards: Outlines distinct sanitization playbooks across core corporate verticals (Offices, Retail, Education, Medical) with transparent checkboxes detailing disinfection guidelines for Workstations, Floor Care, Common Areas, and Waste Management.',
            'Sustainability Framework: Articulates the operational green pillars of the business, documenting an exclusive reliance on non-toxic plant-derived solutions, advanced water conservation methods, and minimized plastic waste via reusable microfiber technologies.'
          ]
        },
        {
          heading: '4. Conversion Funnels, Trust & Regional Infrastructure',
          content: [
            'Engineered clear Call-to-Action (CTA) blocks ("Get Free Quote") strategically placed for mobile users to capture local commercial and residential incoming leads efficiently.',
            'Social Proof Systems: Deployed a visible customer testimonial bar at the top of the homepage displaying verified feedback from regional clients including Sarah J., Mark T., and Linda W.',
            'Staff Profiles Module: Includes a dedicated humanizing section introducing the core team members behind daily operations: Thabo Mokoena (Lead Cleaner), Sarah Jenkins (Operations Manager), Zanele Dlamini (Customer Support), and Pieter de Beer (Logistics Coordinator).',
            'Localized Footers & Global Layouts: Anchored the interface with a standardized template displaying communication lines at 063 877 8775 or 067 772 1297, direct email pathways to info@lafrique.co.za, and explicit local service designations for Cape Town and surrounding areas.'
          ]
        }
      ]
    }
},
  {
    id: 'codewave-it',
    title: 'CodeWave IT Solutions Portal',
    category: 'websites',
    description: 'B2B digital transformation & managed IT services platform.',
    details: 'A robust corporate portal designed for IT consultancy. Features include structured service tiers for managed support, cloud solutions, and cybersecurity, combined with a high-performance e-commerce architecture for business scaling.',
    images: ['40.png', '39.png', '38.png'],
    tags: ['IT Infrastructure', 'Cybersecurity', 'Corporate SaaS'],
    liveUrl: 'https://mosapotsane700.wixsite.com/codewave-it-solution',
    gridSpan: 'small', // Swapped: Now using small container
    documentation: {
      overview: 'Service-oriented architecture designed for lead conversion, modern corporate tech branding alignment, and high-clarity infrastructure positioning.',
      sections: [
        {
          heading: '1. Brand Identity & Visual Style Alignment',
          content: [
            'Implemented a highly professional corporate tech palette utilizing Deep Tech Navy as the core layout color token to anchor master typographic headings, structural footers, and primary visual sections.',
            'Integrated Electric Cyan as an energetic visual accent and interactive call-to-action (CTA) color to represent system health, live monitoring, and active user touchpoints.',
            'Maintained a modern sans-serif typographic scale over clean Pure White and neutral Slate Grey background elements to guarantee optimal contrast ratios, scanability, and high-performance technical clarity.',
            'Configured exact brand asset layout bindings: 1.png isolates the high-resolution minimalist gradient cyan wave visual emblem, while 2.png provides the finalized stacked signature mark containing the graphic and wordmark for unified application identity.'
          ]
        },
        {
          heading: '2. Multi-Page Information Architecture',
          content: [
            'Engineered a comprehensive 5-page directory setup comprising Home, About Us, IT Services, Web Development, and IT Consulting nodes to divide distinct technical divisions seamlessly.',
            'Mapped the Home node around prominent value statements ("Empowering Businesses Through Smart Technology") paired with instant consultation forms, interactive contact points, and dedicated social proof arrays.',
            'Structured dedicated page routes to break down complex B2B pipelines, including managed support tiers (system monitoring, proactive maintenance, 24/7 helpdesk), web infrastructure, cloud migrations, and tech audits.'
          ]
        },
        {
          heading: '3. Service Architecture & Trust Signals',
          content: [
            'Categorized complex IT service offerings into distinct, actionable modules (Managed Support, Cloud, Cybersecurity).',
            'Integrated high-impact data matrices and client-retention "Trust Signals" directly onto the interface canvas, highlighting a 98% client retention rate, 24/7 support availability, and 100% secure infrastructure metrics.'
          ]
        },
        {
          heading: '4. Lead Capture & Communication Pathways',
          content: [
            'Deployed secure asynchronous data intake channels through specialized "Request a Consultation" forms routing straight to internal sales databases.',
            'Embedded active synchronous communication vectors, mapping clear click-to-action handlers for hello@codewave.com, telephone lines (+1 (555) 010-8888), and floating real-time chat modules like WhatsApp to reduce initial customer response times.'
          ]
        },
        {
          heading: '5. Performance & Mobile UI Calibration',
          content: [
            'Configured responsive, mobile-first design frameworks using clean container padding, flexible grid grids, and optimized asset scaling to ensure lightning-fast loading across all devices.',
            'Architected secure payment and hosting pathways tailored for scalable business growth while fine-tuning localized maps and contact sections targeting modern enterprise operations.'
          ]
        }
      ]
    }
},

  // ==========================================
  // SOFTWARE SYSTEMS WITH DATABASES (3 TOTAL)
  // ==========================================
  {
    id: 'match-up',
    title: 'Match Up (In Progress) - Local Sports Management App',
    category: 'apps',
    description: 'A comprehensive local sports hub connecting teams, players, coaches, and fans.',
    details: 'A multi-role cross-platform hub tailored for local sports ecosystems. Features real-time match event notifications, automated tournament bracket scheduling, live player statistic reporting, localized team discovery, dedicated team communication channels, and secure offline data caching.',
    images: ['66.png'],
    tags: ['Flutter', 'Django', 'PostgreSQL', 'WebSockets', 'Hive/SQLite', 'In Progress'],
    github: 'https://github.com',
    gridSpan: 'medium',
    documentation: {
      overview: 'System architectural details regarding multi-role user flows, cross-platform UI/UX frameworks, real-time WebSocket communication pipelines, and localized monetization layers.',
      sections: [
        {
          heading: '1. Concept Overview & Tailored User Roles',
          content: [
            'Engineered a centralized ecosystem connecting local teams, players, and fans to automate match scheduling, group communication, and live performance tracking.',
            'Configured custom user layouts for 4 core personas: Fans (follow teams/standings), Coaches (roster/tournament management), Players (personal stats/schedules), and Admins (platform governance).'
          ]
        },
        {
          heading: '2. Functional Enhancements & Core Features',
          content: [
            'Deploys interactive league leaderboards, live match animations, automated bracket generation modules, and voting pipelines for schedule updates.',
            'Incorporates high-utility features including a built-in sports gear marketplace, dark mode customizable templates, local business ad spaces, and AI-powered pre-match analytics.'
          ]
        },
        {
          heading: '3. Full Stack Architecture & Third-Party Tech Integration',
          content: [
            'Front-End: Developed using Flutter (Dart) and Flutter Web combined with Material Design and Cupertino UI layers for cross-platform performance.',
            'Back-End & Pipeline: Implemented a Python Django core architecture alongside optional Node.js (Express.js) nodes for real-time WebSocket synchronizations via Django Channels or Socket.io.',
            'Storage & Auth: Linked PostgreSQL relational databases with high-speed Redis caching networks, secured via Firebase Auth, Google/Apple OAuth, and AWS S3/Firebase media storage engines.'
          ]
        },
        {
          heading: '4. User Flow Patterns & Responsive UI/UX Elements',
          content: [
            'Map navigation layers integrated using the Google Maps API to offer geographical location-scanning for immediate team discovery.',
            'Optimized clarity through color-coded schedule modules (e.g., blue for training, red for matches) and interactive layout grids for complex bracket hierarchies.'
          ]
        },
        {
          heading: '5. Monetization Strategies & Scalability Models',
          content: [
            'Designed around a flexible freemium utility framework offering entry-level tools at zero cost while gatekeeping deep data analysis metrics for premium profiles.',
            'Capitalizes on localized digital advertisement pipelines, in-app tournament event ticketing, and integrated club merchandise e-commerce platforms.'
          ]
        }
      ]
    }
  },

  // ==========================================
  // STATIC WEBSITES / SOFTWARE SYSTEMS (2 TOTAL)
  // ==========================================
  {
  "id": "trackademy",
  "title": "Trackademy: Full-Stack Academic Management Platform",
  "category": "apps",
  "description": "Comprehensive student academic performance, course management, and automated exam eligibility system[cite: 1].",
  "details": "A sophisticated, lightweight SaaS platform designed for tertiary institutions to eliminate administrative silos[cite: 1]. It centralizes student registration, grade book entries, automated exam eligibility calculations against a strict 50% performance benchmark, and secure role-based dashboard metrics[cite: 1].",
  "images": ["60.png", "72.png", "73.png", "74.png", "75.png", "76.png", "77.png", "78.png", "79.png", "80.png"],
  "tags": ["React", "Supabase", "TypeScript", "Academic SaaS"],
  "liveUrl": "https://trackademy-omega.vercel.app",
  "gridSpan": "medium",
  "documentation": {
    "overview": "Trackademy is a single-page client application powered by a Supabase backend and a Postgres database layer. The platform automates data synchronization across institutional hierarchies—encompassing faculties, departments, and programs—while securely handling academic records, transcript generation, and role-based permissions.",
    "sections": [
      {
        "heading": "1. Technical Architecture & Database Framework",
        "content": [
          "Frontend Architecture: Built on React 18, TypeScript 5, Vite 5, and styled with Tailwind CSS 3.4 for responsive, high-density dashboard layouts.",
          "Backend Cloud Platform: Utilizes Supabase (Postgres) to natively manage database relations, application authentication, storage buckets, and serverless edge functions.",
          "Relational Data Schema: Structured tables map critical dependencies across profiles, students, lecturers, courses, course schedules, assessment types, student enrollments, and raw marks.",
          "Real-time & Storage Pipelines: Leverages Supabase real-time subscriptions for instant grade and announcement updates, with secure storage buckets hosting file resources and transcript PDFs.",
          "Local Deployment Controls: Maintained via standard node package workflows, executing production previews natively through 'npm run build' and 'npm run preview' cycles."
        ]
      },
      {
        "heading": "2. Role-Based Access Control (RBAC) & Portals",
        "content": [
          "Granular Security Layer: Implements strict role classifications linked directly to Supabase Auth profiles, establishing clear data boundaries for four targeted institutional access levels.",
          "Administrator Interface: Full master system access to register students, configure courses, set up academic structures (faculties/departments), assign lecturers, track system-wide trends, and export records.",
          "Lecturer Dashboard: Streamlined academic workspaces allowing professors to create dynamic assessment weights, manage class materials, execute bulk grade updates, and generate performance reports.",
          "Student Portal: Empowering student views to track enrollment coursework totals, check ongoing eligibility status, view weekly class schedules, set personal study goals, and download official transcript PDFs.",
          "Exam Officer Configuration: Specialized workspace permissions designed to perform automated eligibility audits, audit compliance tracks, and manage final exam session schedules."
        ]
      },
      {
        "heading": "3. Academic Automation Logic & Eligibility Engines",
        "content": [
          "50% Eligibility Threshold: Features a built-in automated verification calculation engine that checks semester assessment averages against the mandatory 50% institution benchmark required for final exam qualification.",
          "Weighted Score System: Automatically processes disparate weights across multiple assessment types—such as quizzes, assignments, tests, and research projects—to yield accurate real-time coursework totals.",
          "Centralized Data Sync: Eliminates paper silos through instantaneous data sync, ensuring that updates to marks or attendance sheets instantly adjust a student's standing and GPA across portals.",
          "Serverless Export Engine: Utilizes the client-side environment and server-side secret keys to dynamically assemble and render administrative data matrices into clean, downloadable CSV or PDF documents."
        ]
      }
    ]
  }
},
  {
  "id": "campus-care",
  "title": "Campus Care: Institutional Healthcare Management Platform",
  "category": "apps",
  "description": "Comprehensive full-stack clinical administration, patient data pipelines, and campus healthcare coordination system.",
  "details": "A sophisticated digital health platform designed specifically for educational institutions to streamline medical services for both students and staff. It unifies appointment scheduling, digital medical records, patient vitals tracking, and role-based administrative analytics into a secure, single-page dashboard application.",
  "images": [
    "57.png",
    "81.png",
    "82.png",
    "83.png",
    "84.png",
    "84.png",
    "85.png",
    "86.png",
    "87.png",
    "88.png",
    "56.png"
  ],
  "tags": [
    "React",
    "Supabase",
    "TypeScript",
    "Healthcare SaaS"
  ],
  "liveUrl": "https://campus-care.page.gd/",
  "gridSpan": "large",
  "documentation": {
    "overview": "Campus Care provides an integrated web ecosystem for campus clinics, streamlining clinical administration, optimizing patient data pipelines, and bridging communication gaps between campus patients and institutional healthcare providers.",
    "sections": [
      {
        "heading": "1. Technical Architecture & Database Framework",
        "content": [
          "Frontend Architecture: Built on React, TypeScript, and styled with Tailwind CSS for highly scannable, responsive dashboard layouts featuring instant theme toggling (Light/Dark mode).",
          "Backend Cloud Platform: Utilizes a relational database layer (Supabase/Postgres) to securely manage patient records, operational auditing, and real-time dashboard analytics updating.",
          "Dynamic Schema Management: Features a built-in Database Management utility enabling administrators to construct system tables, define unique column inputs, assign data types (e.g., INT, VARCHAR), set field sizing, and enforce auto-incrementing primary keys directly from the client interface."
        ]
      },
      {
        "heading": "2. Role-Based Access Control (RBAC) & Portal Views",
        "content": [
          "Granular Security Layer: Implements strict role classifications linked directly to authenticated accounts, establishing clear compliance boundaries for clinical data privacy.",
          "Administrator Interface: Offers complete institutional oversight with a master metrics console mapping total platform users, active healthcare staff distributions, comprehensive system logs, and quick actions to onboard staff or register users.",
          "Healthcare Staff Workspace: Features advanced clinical tracking panels allowing medical professionals to manage incoming patient queues, process professional medical referrals, issue medical prescriptions, and review treatment history.",
          "Student & Staff Patient View: Provides a secure, confidential environment for campus members to book medical appointments, access health resources, configure personal profile information, and monitor ongoing historical logs."
        ]
      },
      {
        "heading": "3. Clinical Performance Logic & Medical Analytics",
        "content": [
          "Vitals Tracking Engine: Houses a dynamic data collection component designed to document and track vital signs over time, logging physical parameters including height (cm), weight (kg), blood pressure (mmHg), heart rate/pulse (BPM), and body temperature (°C).",
          "Patient Identity Mapping: Relies on an integrated mapping matrix that perfectly binds clinical medical logs, historical prescriptions, and past consulting visits to unique institutional Staff or Student Numbers.",
          "Centralized Practice Management: Coordinates critical healthcare sub-systems—including Patient Management, Appointment Scheduling, Medical Records tracking, Referral routing, and Medical Inventory Management—into a single, consolidated platform."
        ]
      }
    ]
  }
},
  {
  "id": "buddy",
  "title": "Buddy: Campus Social & Academic Management Ecosystem",
  "category": "apps",
  "description": "A comprehensive one-stop web platform blending institutional academic tracking with integrated student community social layers.",
  "details": "A dynamic full-stack SaaS solution engineered for universities to manage academic lifecycles and peer interactions concurrently. The system unifies student and staff registration, course and department administration, real-time classroom attendance logging, grading metrics computation, and a rich social networking ecosystem featuring posts, groups, and real-time interaction feeds.",
  "images": [
    "59.png",
    "89.png",
    "90.png",
    "91.png",
    "92.png",
    "58.png",
    "93.png",
    "94.png",
    "95.png"
  ],
  "tags": [
    "React",
    "Node.js",
    "SQL/PostgreSQL",
    "Tailwind CSS",
    "Academic SaaS"
  ],
  "liveUrl": "https://buddysocials.page.gd/",
  "gridSpan": "medium",
  "documentation": {
    "overview": "Buddy bridges the gap between cold administrative systems and active student life by running dual operational hubs—an Academics Management Portal and an interactive Social Media Feed—served from a centralized database architecture to ensure unified user profiles across all interfaces.",
    "sections": [
      {
        "heading": "1. Landing Interface & Public Gateway",
        "content": [
          "Brand Concept: The platform acts as a consolidated digital ecosystem with the foundational motto: 'It's not just Social Media, It's Buddy'.",
          "Public Portal Access: Features clear routing split pathways designed to separate standard student workflows from dedicated administrative/faculty system gateways.",
          "Custom Theme Brand Assets: Showcases a high-contrast design containing contextual brand variations and dynamic asset configurations built around a distinct owl mascot emblem."
        ]
      },
      {
        "heading": "2. Social Media Network & Community Layer",
        "content": [
          "Interactive Social Feed: The interface provides students with a personal social space to publish media-rich updates, share thoughts, and communicate with peers.",
          "Peer Relations Engine: Incorporates a comprehensive network request pipeline enabling mutual friend discoveries, profile updates, and inbound connection approvals or declines.",
          "Group & Sub-Community Spaces: Empowers campus members to form dedicated collaborative spaces, manage independent group page feeds, join interests (e.g., 'Red Devils'), and share chronological timeline stories."
        ]
      },
      {
        "heading": "3. Faculty & Student Management Dashboards",
        "content": [
          "Master Administrative View: The master metrics console displays aggregate institutional KPIs—including Total Users, active Students, Staff members, running Courses, and created Departments.",
          "Course Directory Logs: Offers a scaled dashboard matrix tracking course distribution parameters across standard internal structural branches.",
          "Dynamic Directory Registries: Houses searchable tabular structures mapping verified student parameters—encompassing full legal names, assigned student numbers, academic levels, registered faculties, and department majors (e.g., Advanced ICT Diploma, Data Science, Applications Development)."
        ]
      },
      {
        "heading": "4. Academic Automation & Analytics Tools",
        "content": [
          "Automated GPA Compute Engine: Contains a specialized processing panel that filters specific academic years, program sessions, levels, and faculties to compute clean cumulative grade point averages directly.",
          "Official Grade Book Transcripts: Generates historical semester score matrices mapping course codes (e.g., NAAA732), academic weights, achieved raw scores, letter grades, and total grade point computations.",
          "Real-Time Attendance Monitoring: Integrates an automated classroom attendance tracker displaying graphical donut chart distributions that break down percentage ratios of 'Present' versus 'Absent' status.",
          "Institutional Scheduling System: Features an interactive monthly calendar framework tied to a custom schedule form where users input class titles, descriptors, and accurate start/end timestamps."
        ]
      }
    ]
  }
},
  {
    id: 'catering-wix',
    title: 'Golden Plate Catering Website',
    category: 'websites',
    description: 'Modern Wix multi-page digital menu & booking setup',
    details: 'A premium, high-converting 5-page digital showcase designed for Golden Plate Catering. Built on Wix, it features an interactive menu system handled via content datasets, responsive visual layouts with strip structures, custom quote request workflows, and instant-access WhatsApp chat integration to maximize local client lead generation.',
    images: ['21.png', '20.png', '19.png'], 
    tags: ['Wix Platform', 'Velo Code', 'UI/UX Design', 'Wix Content Manager'],
    liveUrl: 'https://mosapotsane700.wixsite.com/golden-plate-caterin',
    gridSpan: 'medium', // Swapped from large to medium
    documentation: {
      overview: 'Comprehensive configuration breakdown detailing the 5-page information architecture, Wix Content Manager schema definitions, corporate design language, and embedded communication integration pipelines.',
      sections: [
        {
          heading: '1. Brand Identity & Color Palette Specification',
          content: [
            'Established an elegant, hospitality-focused color profile utilizing a Warm Ivory base (#FDFBF7) for page canvas backgrounds and high contrast text readability.',
            'Integrated a deep, premium Burgundy (#803C44) as the primary brand accent color, applied strictly to interactive call-to-action buttons, key graphical anchors, and core brand components.',
            'Utilized high-contrast Charcoal (#221E1F) for structural body typography, header elements, pricing displays, and clear navigation paths to optimize visual hierarchy.',
            'Referenced master asset files verbatim within the system footprint: 8.png displays the master centered branding layout with the signature typography, and 13.png isolates the clean burgundy apple visual element for multi-scale asset reuse.'
          ]
        },
        {
          heading: '2. Wix Core Architecture & 5-Page Information Schema',
          content: [
            'Structured a clean, high-impact 5-page interface layout comprising Home, About Us, Services, Menu, and Contact Us nodes.',
            'Leveraged full-width Wix strip layouts for immersive food imagery, integrated slider elements for customer testimonials, and configured responsive repeater matrices to cleanly showcase team members and services.'
          ]
        },
        {
          heading: '3. Dynamic Menu Management via Content Manager',
          content: [
            'Constructed an interactive menu configuration hooked directly into the Wix Content Manager database backend to organize categorized culinary packages dynamically.',
            'Optimized visual display blocks and asset fields to present corporate (R 1 500), wedding (R 2 000), and private event (R 1 800) packages cleanly without interactive site lag.'
          ]
        },
        {
          heading: '4. Lead Capture Engineering & Conversion Elements',
          content: [
            'Deploys secure, optimized Wix Forms data-capture pipelines engineered specifically around a prominent "Request a Quote" call-to-action layout.',
            'Embedded seamless floating WhatsApp communication vectors alongside an opt-in newsletter submission module to facilitate instant, frictionless customer booking inquiries directly from mobile devices.'
          ]
        },
        {
          heading: '5. Mobile Optimization & UX Calibration',
          content: [
            'Tailored all layouts using the Wix Mobile Editor to ensure text hierarchies, tap targets, and image grids scale flawlessly across smartphone viewports.',
            'Calibrated site headers, contact forms, and localized map markers targeting event planners and local clients searching for catering services in the Cape Town area.'
          ]
        }
      ]
    }
  },
  
  // ==========================================
  // POSTERS (3 TOTAL)
  // ==========================================
  {
  id: 'streetwear-chill',
  title: '"CHILL MODE" Apparel Lookbook',
  category: 'branding',
  description: 'Streetwear collection marketing asset posters.',
  details: 'Visual asset design guidelines for an urban apparel brand launch. Encompasses bold vector text configurations, clothing hang-tag print specifications, social media video cover files, and lookbook visual assets tailored around local youth subcultures.',
  images: ['52.png'], 
  tags: ['Vector Graphics', 'Apparel Production', 'Digital Layouts', 'Posters'],
  gridSpan: 'medium',
  documentation: {
    overview: 'This asset functions as a bold, personal marketing poster and professional card designed to establish an immediate visual identity for a creative practitioner. It utilizes a high-contrast layout that interweaves rigid, heavy typography with organic illustrative elements and fluid script overlays to balance a modern tech aesthetic with artistic expression.',
    sections: [
      {
        heading: '1. Design Language & Composition',
        content: [
          'Primary Identity Header: The top of the canvas features the name "MOSA POTSANE" in a dense, heavy-weight, uppercase sans-serif font to prioritize extreme legibility and anchor the visual structure.',
          'Script Interface Overlay: Layered dynamically over the primary name header is an elegant, thin-stroked cursive script reading "Graphic Designer", introducing an expressive blue texture that contrasts with the rigid block lettering underneath.',
          'Actionable Call-to-Action: Positioned prominently on the lower right, the phrase "HIRE ME:" is set in a tall, compressed uppercase sans-serif font, pulling the reader\'s eye toward the primary contact funnel and branding mark.',
          'Graphic Elements & Texture: Features a large, winding, organic blue path curving horizontally across the center of the canvas with a fine, speckled, distressed texture referencing urban grit and spray-paint characteristics.',
          'Integrated Visual Mark: Places a textured gold-ochre circular disc badge at the lower right, framing a clean geometric smile contour around central "Y2" block lettering.',
          'Canvas Base: Built over a textured, crinkled off-white paper backdrop to give the digital layout a tangible, physical poster quality.'
        ]
      },
      {
        heading: '2. Structural Content & Professional Matrix',
        content: [
          'Design Software Matrix: Documents core structural mastery over foundational digital creation tools within the professional capability grid.',
          'Branding & Identity Design Pillar: Outlines specialized expertise in building unified visual kits and corporate brand structures.',
          'UI/UX & Web Design Pillar: Details mechanics for structuring interactive user interfaces, digital menus, and digital storefront workflows.',
          'Direct Contact Route: Integrates dedicated telephonic routing configurations explicitly mapped to PHONE: (063)-503-5882.',
          'Accreditation Module: Highlights educational backing under a high-visibility blue header label reading CERTIFICATES: @GRAPHIC DESIGN 1 CERTIFICATE.',
          'Corporate Identity Anchor: Formally signs off the lower right corner layout boundary with the technical text attribution BY TECHWAYS.'
        ]
      },
      {
        heading: '3. Technical Intent & Practical Application',
        content: [
          'Multi-Purpose Layout Engineering: Formatted as a high-contrast vertical asset optimized for immediate digital use as a portfolio introduction page, mobile splash screen, or LinkedIn social graphic.',
          'Cross-Platform Adaptation: Preserves the required visual weight and clean edge boundaries to ensure flawless reproduction when translated into real-world physical print flyers or street posters.'
        ]
      }
    ]
  }
},
  {
  id: 'brunch-party-invitation',
  title: 'Neo-Retro Brunch Party Invitation',
  category: 'branding',
  description: 'High-contrast modern event invitation card blending neo-retro and Y2K minimalist styles.',
  details: 'A premium digital event invitation engineered around a warm, minimalist color palette. Features high-visibility geometric framing, layered typographic contrast combining heavy block lettering with elegant script overlays, and an isolated central metadata container referencing a clean digital-receipt aesthetic.',
  images: ['53.png'],
  tags: ['Event Invitation', 'Typography Layout', 'Vector Assets'],
  gridSpan: 'small',
  documentation: {
    overview: 'This asset is a high-contrast, modern event invitation card that seamlessly blends contemporary typography trends with retro aesthetic elements. Designed around a warm, minimalist color palette, the asset maximizes scannability and structural hierarchy to present event logistics clearly while establishing a distinct stylistic theme.',
    sections: [
      {
        heading: '1. Design Language & Composition',
        content: [
          'Background Typography: Features large, heavy-weight block lettering in uppercase sans-serif formatting spelling out "BRUNCH" at the top and "PARTY" at the bottom. This text is set in a muted gold/ochre tone and acts as a graphic structural frame, partially bleeding off the edges.',
          'Script Overlays: Elegant, thin-stroked cursive text overlays the block lettering ("Brunch" at the top and "Party" at the bottom), introducing an organic, fluid contrast to the rigid geometry of the background.',
          'Core Information Container: A perfectly balanced, large central circle acts as the primary content focal point, isolating critical event metadata from the graphic background elements.',
          'Logistics Typography: Inside the circle, a clean, monospaced tech-style font is utilized for event logistics, ensuring maximum readability and referencing a stylized digital-receipt aesthetic.'
        ]
      },
      {
        heading: '2. Color Palette',
        content: [
          'Canvas Base: Warm Cream/Off-White (#F4EFE6) providing a soft, premium background texture.',
          'Primary Accent: Muted Gold/Ochre (#D9A74A) applied to structural block lettering and metadata category banners.',
          'Contrast Elements: Solid Black (#000000) reserved strictly for critical reader data fields and thin structural division lines.'
        ]
      },
      {
        heading: '3. Structural Content & Layout Routing',
        content: [
          'Personalized Header: A welcoming greeting positioned at the top curve of the badge: "HELLO, AVERY! YOU ARE INVITED TO OUR BRUNCH PARTY".',
          'Date Block: Features a "DATE" header in white text over a solid gold rectangular container, paired with the underlined data field "26 DEC 2026".',
          'Address Block: Features an "ADDRESS" header paired with the underlined data field "39 BOMELA STREET KHAYELITSHA".',
          'Dress Code Block: Features a "DRESS CODE" header paired with the underlined data field "Y2K STYLE".',
          'Response Canal (RSVP): Anchored along the bottom inner border curve of the circle for clean contextual placement: RSVP TO TEDDY (063-503-5882).'
        ]
      },
      {
        heading: '4. Technical Intent & Production Use Case',
        content: [
          'Scalable Template Adaptation: Built with scalable framing, allowing the design to adapt responsively across physical print flyers, digital social media stories, and web banners.',
          'Metadata Isolation: By housing fluid event data inside a rigid, geometric circular boundary, the composition preserves perfect visual symmetry regardless of length variations in attendee names or location addresses.'
        ]
      }
    ]
  }
},
  {
  id: 'poster-exhibition',
  title: 'Afro-Anime Art Expo Poster',
  category: 'branding',
  description: 'Creative promotional lookbook poster asset',
  details: 'A high-impact conceptual design blending contemporary street layouts with specialized character illustration vectors to promote local gallery events.',
  images: ['51.png'],
  tags: ['Character Design', 'Aesthetic Print', 'Visual Composition'],
  gridSpan: 'medium',
  documentation: {
    overview: 'This asset serves as a high-impact digital event invitation and promotional flyer that integrates core street-brand identity with clean logistical mapping. Featuring a warm, high-contrast urban visual profile, the design relies on prominent graphic overlays, asymmetric structural framing, and a tech-style monospaced font layout to establish an experiential invitation format.',
    sections: [
      {
        heading: '1. Design Language & Composition',
        content: [
          'Background Branding Typography: Massive, heavy-weight block lettering in an uppercase sans-serif format anchors the poster framing, spelling out "NOTORIOUS" at the top margin and "Y2" at the bottom margin, designed to sit beneath the foreground layout in a muted gold/ochre tone.',
          'Script Interface Overlays: Elegant, thin-stroked cursive white text overlays the central graphic mark, reading "Grand" across the upper half and "Opening" across the lower half to inject an organic artistic layer.',
          'Logistics Typography: Core transactional and event metadata uses a clean, high-visibility monospaced tech font, mimicking digital invoice structures for maximum legibility.'
        ]
      },
      {
        heading: '2. Primary Brand Mark Integration',
        content: [
          'The entire composition is centered around a massive deployment of the primary brand identity mark.',
          'This asset preserves the specialized brand circle: a textured gold-ochre disc featuring a bold red inner-ring accent, a clean geometric smile contour, and central "Y2" block lettering.'
        ]
      },
      {
        heading: '3. Color Palette & Material Texture',
        content: [
          'Canvas Base: Smooth, warm off-white canvas substrate providing high-contrast text readability.',
          'Primary Accent System: Warm ochre/gold paired with a deep burnt orange/red tone applied to graphic elements, brand iconography, and structured metadata labels.',
          'Contrast Elements: Solid black reserved explicitly for logistical text lines to maximize scannability.'
        ]
      },
      {
        heading: '4. Structural Content & Layout Routing',
        content: [
          'Personalized Invitation Header: Positioned directly along the upper arc of the central circle emblem reading "HELLO, MOSA, YOU ARE INVITED TO Y2 GRAND OPENING".',
          'Date Block: Organizes scheduling using a bold, burnt-orange rectangular header tag labeled "DATE" paired with the data field "26 DEC 2026".',
          'Address Block: Displays event mapping via an "ADDRESS" header tag alongside the data field "39 BOMELA STREET KHAYELITSHA".',
          'Dress Code Block: Outlines guest expectations through a "DRESS CODE" header tag paired with the data field "Y2K STYLE".',
          'Support Routing Channel (RSVP): Anchored firmly along the bottom inner curvature of the main circular mark for seamless contact ingestion: RSVP TO TEDDY (063-503-5882).'
        ]
      },
      {
        heading: '5. Technical Intent & Production Workflow',
        content: [
          'This asset acts as an experience-led digital portal translated to print media.',
          'By pairing standardized, blocky information architecture panels with expressive street-art visual elements, the layout balances immediate brand equity promotion with seamless, error-free consumption of transactional event data.'
        ]
      }
    ]
  }
},

  // ==========================================
  // LOGO DESIGNS (12 TOTAL)
  // ==========================================
  {
  id: 'matchup-branding',
  title: 'MatchUp Sports Brand Identity',
  category: 'branding',
  description: 'Minimalist corporate logo suite and league automation asset guide.',
  details: 'A unified identity system designed for a sports organization and league management platform. Encompasses conceptual geometric bracket marks, clean horizontal typography lockups, structured corporate slogans, and responsive multi-environment layout variants.',
  images: ['66.png', '65.png', '67.png', '68.png'],
  tags: ['Figma Design', 'Brand Identity', 'Product Mockups', 'Logos'],
  gridSpan: 'medium',
  documentation: {
    overview: 'This asset suite establishes a unified, minimalist corporate visual identity for MatchUp, a sports organization and league management platform. The logo design utilizes a geometric tournament bracket layout combined with clean, modern sans-serif typography to instantly communicate structured organization, competition, and technological utility.',
    sections: [
      {
        heading: '1. Design Language & Anatomy',
        content: [
          'Iconography (The Bracket Mark): The primary brand emblem consists of a stylized, symmetrical tournament elimination bracket.',
          'Bracket Node Architecture: Arranged with four rectangular nodes on the left and four on the right, converging inward through structured connectors to simulate tournament progression.',
          'Central Negative Space: The geometry forms a subtle structural "H" shape in the central negative space, providing a strong anchoring point for the visual hierarchy.',
          'Primary Brand Name Wordmark: The wordmark "MatchUp" is rendered in a highly legible, clean sans-serif typeface, using intentional capitalization of the "M" and "U" to establish clear structural division without requiring a physical space.',
          'Horizontal Separator Element: A solid, uniform horizontal rule divides the graphic bracket mark from the primary wordmark, giving the overall composition a balanced, balanced layout.',
          'Brand Slogan Typographic Contrast: Positioned neatly at the base, the corporate tagline reads: "Elevate Your Game, Simplify Your League", rendered in a bold serif font to create a professional and authoritative typographic contrast.'
        ]
      },
      {
        heading: '2. Suite Variations & Color Matrices',
        content: [
          'File 65.png (Dark Mode / Canvas Black): Solid white assets over a pitch-black background. Designed for premium screen layouts, mobile splash screens, and dark web interfaces.',
          'File 66.png (Field Green Edition): Solid white assets over a rich, athletic field green background (#4C7D43). Optimized for sports merchandise, club portals, and event branding.',
          'File 67.png (Light Mode / High Contrast): Solid black assets over a crisp white background. Engineered for physical documentation, formal invoices, corporate stationary, and light-themed web design.',
          'File 68.png (Isolated Composition / Macro Asset): High-resolution white-on-black composition with tighter cropping around the main brand components. Tailored for application icons, avatar templates, and square social banners.'
        ]
      },
      {
        heading: '3. Production Implementation Guidelines',
        content: [
          'Vector Scalability Metrics: Geometric shapes and clean text paths are engineered to retain crisp fidelity and edge sharpness whether scaled down onto mobile headers or blown up onto stadium banners.',
          'Responsive Placement: The modular layout allows the top bracket icon to be detached and used independently as a favicon, profile image mark, or app icon where canvas space is limited.',
          'Contrast Preservation Standards: For maximum brand protection, enforce the use of file 67.png on lighter content frames and file 65.png on darker canvas backdrops to avoid visual muddying and maintain a high-contrast aesthetic.'
        ]
      }
    ]
  }
},
  {
  id: 'notorious-solutions-logo',
  title: 'Notorious Solutions Logo Suite',
  category: 'branding',
  description: 'Geometric tech infrastructure wordmark and symbol',
  details: 'A clean, geometric logo suite and full brand lockup system built for a software development and ICT services platform. Features a responsive modular badge combining custom central typography with clean layout variants.',
  images: ['3.png', 'logo2_black_background.png', 'logo3.png', 'logo2.png'],
  tags: ['Logo Design', 'Vector Systems', 'Brutalism Design'],
  gridSpan: 'small',
  documentation: {
    overview: 'This asset suite details the evolution and structured deployment of the corporate visual identity for Notorious Solutions (alternatively functioning under your "Y2" umbrella branding). The logo suite utilizes a playful yet hyper-clean geometric icon—combining a protective outer circle, an abstract smile arc, and central typographic branding—to establish a modern tech and digital development presence.',
    sections: [
      {
        heading: '1. Design Anatomy & Symbolism',
        content: [
          'Core Typography: The center of the mark features a clean, uppercase sans-serif rendering of "Y2", acting as a bold, recognizable shorthand for your brand ecosystem.',
          'Geometric Smile Arc: Anchored directly beneath the text is a smooth, upward-curving arc serving a dual purpose: it forms a welcoming smile while mimicking the lower half of an inner crest or shield.',
          'Structural Frame: A crisp, uniform outer circle encloses the elements, ensuring the asset reads as a self-contained badge that maintains its visual weight across different layout configurations.',
          'Primary Corporate Wordmark: Rendered in a bold, uppercase sans-serif typeface, NOTORIOUS SOLUTIONS commands strong visual authority, prioritizing readability at a distance.',
          'Secondary Sub-Header: Positioned symmetrically at the base, the descriptor SOFTWARE DEVELOPMENT is set in a lighter, tracked-out sans-serif font, creating a professional typographic hierarchy that defines your core operational niche.'
        ]
      },
      {
        heading: '2. Suite Variations & Technical Configurations',
        content: [
          'File logo2.png (Flat Matte / Light Mode): A solid, earthy moss-green line art composition over a transparent or crisp white background. Ideal for light-themed web interfaces, formal PDF documentation, and minimal header branding.',
          'File logo2 black background.png (Flat Matte / Dark Mode): The same moss-green flat vector icon optimized against a deep black canvas. Engineered for dark-mode UI designs, source-code documentation portals, and mobile app splash screens.',
          'File logo3.png (High-Visibility Neon Outline): Features a lighter, vibrant mint/neon-green hue with dual-line structural outlines over a black backdrop. Perfect for digital media, video production intros, or high-contrast screen formats.',
          'File 63.png (Premium Embossed Full Lockup): The definitive master brand lockup. It integrates the icon with the full company wordmarks over a textured, matte black canvas using an elegant, granular embossed/3D texture with subtle drop shadows.'
        ]
      },
      {
        heading: '3. Implementation & Responsive Framework',
        content: [
          'Detachable Brand Icon: The "Y2 Smile" circular badge is entirely modular. It can be detached from the full wordmark in file 63.png to serve as a standalone profile avatar, favicon, or app store icon.',
          'High-Contrast Preservation: To prevent visual bleeding or loss of detail, use the flat matte versions (logo2.png / logo2 black background.png) for ultra-small scales (such as website headers or footers), and reserve the textured rendering (63.png) for hero sections or prominent landing banners.'
        ]
      }
    ]
  }
},
  {
  id: 'sweet-delights-bakery-logo',
  title: 'Sweet Delights Artisanal Badge',
  category: 'branding',
  description: 'Warm, playful circular badge framework combining confectionery illustration with rounded typography.',
  details: 'A cohesive identity system built for an artisanal pastry brand. Features an isometric pastry trio centerpiece, a decorative scalloped frame structure, a curved handwritten-style wordmark, and a warm, indulgent confectionery color palette tailored for multi-surface packaging.',
  images: ['50.png'],
  tags: ['Iconography', 'Lettering Layout', 'Brand Badge'],
  gridSpan: 'small',
  documentation: {
    overview: 'This asset establishes a charming, cohesive corporate visual identity for Sweet Delights Bakery. The logo utilizes a warm, playful circular badge framework that combines illustrated confectionery elements with soft, rounded typography to communicate a premium, comforting, and artisanal baking brand.',
    sections: [
      {
        heading: '1. Design Language & Anatomy',
        content: [
          'Iconography & Illustration: The centerpiece of the logo features three isometric, elegantly decorated petit fours or cake slices showcasing intricate layers, striped icing textures, and gourmet toppings like a realistic raspberry and a frosted cream dollop capped with a single cherry.',
          'Accent Sparkles: Delicate, thin-lined diamond sparkles float around the pastries, injecting a sense of magic, high-quality freshness, and premium care.',
          'Scalloped Frame: The upper half of the inner circle is framed by a soft pink, scalloped archway dotted with uniform white cream circles, mimicking the decorative edging of traditional baking molds, doilies, or cake piping.',
          'Typography & Wordmark Alignment: The corporate wordmark "Sweet Delights Bakery" is wrapped smoothly along the lower arc of the circular badge.',
          'Typographic Style: Rendered in an organic, stylized, handwritten sans-serif font with soft edges and playful alignment to communicate approachability and handcrafted dedication while maintaining excellent readability.',
          'Structural Anchors: Two small, stylized solid white hearts flank the typography on the left and right, acting as visual anchors that seamlessly connect the text curve with the scalloped upper layout.'
        ]
      },
      {
        heading: '2. Color Palette & Aesthetics',
        content: [
          'Deep Berry Pink (#D54B73): The primary outer ring color, giving the logo strong structural definition and weight.',
          'Soft Rose Pink (#F3A3B9): Used for the structural scalloped framing and inner accent ring to add gentle contrast.',
          'Warm Cream/Ivory (#FFF5E1): The central background base color, ensuring the pastry illustrations pop cleanly without relying on a stark white canvas.',
          'Rich Pastry Accents: A mixture of deep chocolate brown, soft peach, and warm tan/caramel tones gives the central cake illustrations a realistic, delicious depth.'
        ]
      },
      {
        heading: '3. Production & Implementation Guidelines',
        content: [
          'Modular Packaging Adaptation: The self-contained circular badge shape makes this logo highly versatile. It is optimized for immediate application across physical brand assets, such as circular box labels, clear window stickers, coffee cup sleeves, and custom product hanging tags.',
          'Digital Branding Flex: The square container and centered focal point allow the asset to scale perfectly into digital avatar slots, including Instagram, Facebook, and WhatsApp Business profile pictures.',
          'Substrate Compatibility: Because it relies on clear color blocking and solid vector-style outlines, the logo retains high visual fidelity across different printing methods—whether stamped onto brown kraft paper packaging or printed onto glossy vinyl signage.'
        ]
      }
    ]
  }
},
  {
  id: 'logo-apparel',
  title: 'Average Gamers Y2',
  category: 'branding',
  description: 'High-impact kinetic typographic logo design',
  details: 'A heavy metal, cyber-inspired logotype layout engineered for urban subculture fashion. Utilizes chrome gradients and razor-sharp typographic borders.',
  images: ['64.jpeg'],
  tags: ['Streetwear Concept', 'Chrome Layout', 'Logotype'],
  gridSpan: 'medium',
  documentation: {
    overview: 'This asset details a specific high-contrast color profile for the Average Gamers visual identity, functioning under your broader "Y2" umbrella branding. The logo combines minimalist geometry, casual street symbolism, and a rich, granular leather-like material texture to create a distinct brand emblem tailored for streaming platforms, gaming communities, and casual apparel.',
    sections: [
      {
        heading: '1. Design Anatomy & Symbolism',
        content: [
          'Core Typography: The heart of the badge features a clean, solid, uppercase sans-serif rendering of Y2, serving as the primary signature mark for your creative ecosystem.',
          'The Minimalist Smile: Positioned symmetrically beneath the typography is a bold, smooth, upward-curving crescent arc to soften the blocky tech structure of the characters and introduce a playful, relatable demeanor.',
          'Enclosing Ring: A perfectly uniform circular boundary wraps around the entire icon, binding the typography and smile arc into a compact, self-contained stamp.',
          'Texture & Tactile Overlay: Features a deep, heavy, noise-infused granular texture overlaying the entire canvas, emulating pressed leather, heavy cardstock, or textured stucco to provide a physical quality that responds excellently to screen rendering.'
        ]
      },
      {
        heading: '2. Color Palette Specification',
        content: [
          'Canvas Base (Teal/Muted Cyan): The background canvas is a deep, rich teal/cyan-green hue, providing a balanced, low-glare backdrop that enhances long-term viewing comfort on digital displays.',
          'Primary Accent (Deep Plum/Magenta): The entire icon framework—including the outer ring, the central text, and the smile arc—is rendered in a highly contrasting, deep plum or berry-magenta hue.'
        ]
      },
      {
        heading: '3. Implementation & Platform Guidelines',
        content: [
          'Social & Streaming Avatars: Engineered with a 1:1 square ratio and perfectly centered layout, making this configuration ideal for immediate use as an avatar or profile picture on gaming platforms such as Twitch, YouTube, Discord, and Kick.',
          'Community Merchandise: The bold, simplified nature of the vector pathing allows the logo to be seamlessly adapted for community merch pipelines, such as embroidery on beanies, silkscreen printing on hoodies, or custom vinyl stickers.',
          'Responsive Framework: At ultra-small scales like a web browser favicon, the outer circle and inner text maintain strong structural legibility due to the stark, intentional contrast between the plum accent and the teal backdrop.'
        ]
      }
    ]
  }
},
  {
  id: 'logo-finance',
  title: 'Prism Capital Monogram',
  category: 'branding',
  description: 'Corporate high-end investment tier corporate mark',
  details: 'A clean interlocking typographic luxury corporate identity constructed with balanced optical weights to convey reliability, authority, and forward performance vector curves.',
  images: ['49.png', '10.png'],
  tags: ['Corporate Monogram', 'Minimalist Grid', 'Executive Identity'],
  gridSpan: 'small',
  documentation: {
    overview: 'This asset suite establishes the formal visual identity for Capture Moments Photography, a brand built around urban perspectives and visual storytelling. The logo design combines an artistic character illustration with a clean structural framing element and a balanced typographic layout to project a modern, creative, and professional identity.',
    sections: [
      {
        heading: '1. Design Language & Anatomy',
        content: [
          'Central Character Illustration: The core graphic features a detailed line-art portrait of a photographer holding a classic, mechanical rangefinder or SLR camera up to their eye, ready to capture a shot. The figure wears round, retro-styled sunglasses, adding a creative edge to the character design.',
          'Structural Frame: The lower portion of the portrait is anchored inside a bold, clean circular outline, cleanly framing the subject and containing the visual energy of the logo.',
          'Negative Space & Contrast: The artwork relies heavily on high-contrast black line-art transitions against a crisp canvas, ensuring immediate scannability and structural definition at any scale.'
        ]
      },
      {
        heading: '2. Typography & Wordmark Hierarchy',
        content: [
          'Primary Action Wordmark: The word CAPTURE is placed at the top tier in a tall, bold, uppercase sans-serif typeface, pulling immediate visual focus.',
          'Functional Sub-Header: The descriptor PHOTOGRAPHY acts as the bridge layer, rendered in a smaller, tracked-out, lightweight uppercase sans-serif font using an accent color zone.',
          'Core Brand Identity: The word MOMENTS anchors the entire typographic block at the base, utilizing the same tall, heavy corporate sans-serif font as the top tier to create a perfectly balanced visual block.'
        ]
      },
      {
        heading: '3. Suite Variations & Layout Configurations',
        content: [
          'File 10_2.png (Isolated Brand Icon): The standalone character emblem isolated on a clean white canvas without text elements. Engineered for high-density layouts such as browser favicons, social platform profile avatars (Instagram, WhatsApp Business), application shortcut icons, or physical camera lens caps.',
          'File 49_2.png (Master Corporate Lockup): The complete brand layout containing the portrait emblem stacked over the full corporate typography. Tailored as the central branding asset for website hero sections, printed business cards, portfolio landing pages, studio signage, and formal client documentation headers.'
        ]
      },
      {
        heading: '4. Color Palette & Production Guidelines',
        content: [
          'Deep Slate Blue/Midnight (#0A1D2E): The primary structural color used for the line-art illustration and the words CAPTURE and MOMENTS, providing a softer, more premium contrast than a generic pitch black.',
          'Coral Pink/Salmon (#FF6F61): Applied exclusively to the word PHOTOGRAPHY, injecting an energetic, artistic pop of color that breaks up the deep corporate blues.',
          'Clean Canvas White (#FFFFFF): The default crisp backdrop that maximizes layout breathing room and guarantees sharp edge definition.',
          'Watermarking Flexibility: The line-art emblem from 10_2.png can be extracted and reduced in opacity to serve as a clean, non-intrusive transparent watermark signature in the bottom corner of client gallery proofs.',
          'Responsive Scaling: The bold layout paths ensure that if the full lockup (49_2.png) is scaled down onto mobile navigation frames, the textual hierarchy prevents the sub-header from bleeding or becoming unreadable.'
        ]
      }
    ]
  }
},
  {
  id: 'notorious-y2-logo',
  title: 'Notorious Y2 Master Producer Logomark',
  category: 'branding',
  description: 'Clean botanical typography signature layout',
  details: 'The core master brand identity mark for an active music production ecosystem operating under the tag Notorious Y2. Features a minimalist geometry that bridges old-school streetwear stamps with modern digital asset profiles.',
  images: ['48.png'],
  tags: ['Wordmark System', 'Organic Styling', 'Packaging Kit'],
  gridSpan: 'small',
  documentation: {
    overview: 'This asset establishes the core master brand identity mark for your active music production ecosystem, operating under the tag Notorious Y2. The design leverages an iconic, minimalist geometry that bridges old-school streetwear stamps with modern digital asset profiles, making it instantly recognizable across media formats.',
    sections: [
      {
        heading: '1. Design Language & Anatomy',
        content: [
          'Core Typography: The focal point of the badge features a clean, solid, uppercase sans-serif rendering of Y2, acting as the main typographic identifier for the brand ecosystem.',
          'Geometric Smile Arc: Anchored symmetrically below the text is a smooth, thick, upward-curving crescent arc, adding an expressive, playful edge to the logo and softening the geometric rigidity of the characters.',
          'Inner Definition Ring: A perfectly uniform circular line runs parallel to the outer boundary, enclosing the central text and smile arc to give the graphic elements a contained, stamped structure.',
          'Outer Circular Substrate: The entire asset is cut into a perfect circle, optimizing the logo to function as an independent sticker, badge, or profile icon.',
          'Material Texture: The entire graphic utilizes a subtle, fine-grained matte overlay to give the digital artwork a tactile, vinyl or heavy cardstock feel, favoring an organic, premium material finish.'
        ]
      },
      {
        heading: '2. Color Palette Specifications',
        content: [
          'Gold-Ochre Substrate: The primary circular background is rendered in a rich, warm gold-ochre/mustard yellow tone, providing an inviting, retro-cool foundation that stands out sharply against dark backgrounds.',
          'Deep Red-Orange Accents: The core graphic components—including the outer framing ring, the central "Y2" lettering, and the smile arc—are executed in a highly contrasting, deep burnt red-orange color zone to ensure vibrant visibility.'
        ]
      },
      {
        heading: '3. Production & Ecosystem Implementation',
        content: [
          'Producer Tag Audiovisual Sync: The clean, striking simplicity of the mark makes it an ideal central visual anchor for your music production channel, easily animated to pulse or react to audio frequencies during beat videos, visualizers, or background loops.',
          'Physical Street Merchandise: The bold, stamp-like layout is highly optimized for physical merchandise production pipelines, translating flawlessly to screen printing on streetwear apparel (hoodies, t-shirts), embroidery on beanies, or custom-cut vinyl stickers.',
          'Digital Streaming Footprint: With its 1:1 circular alignment, this asset scales perfectly for immediate deployment across digital distribution and streaming services—serving as an excellent avatar or profile picture for platforms like Soundcloud, YouTube, Spotify, and social media handles.'
        ]
      }
    ]
  }
},
  {
  "id": "logo-bright-future",
  "title": "Bright Future Academy Logo Suite",
  "category": "branding",
  "description": "Educational institution logo suite and brand lockups.",
  "details": "A formal visual identity system designed for an educational institution. Combines a bold, globally-focused emblem featuring a graduation cap and global map with a balanced three-tier typographic layout to communicate professional, modern academic standards.",
  "images": ["69.png", "47.png"],
  "tags": ["Esports Branding", "Vector Mascot", "Dynamic Identity"],
  "gridSpan": "medium",
  "documentation": {
    "overview": "This asset suite establishes the formal visual identity for Bright Future Academy. The logo system combines a bold, globally-focused emblem with clean typography to communicate a professional, modern, and accessible educational institution dedicated to global academic excellence.",
    "sections": [
      {
        "heading": "1. Design Language & Anatomy",
        "content": [
          "The Graduation Cap: The upper half of the inner icon features a crisp, white silhouette of a traditional mortarboard (graduation cap) complete with a hanging tassel to serve as an immediate visual shorthand for academic success.",
          "The Global Map: Nestled seamlessly beneath the arc of the graduation cap is a stylized depiction of the global map, highlighting continents in negative space to symbolize a global curriculum and interconnected learning.",
          "The Circular Boundary: A solid, rich blue circular canvas binds the graphic elements together, providing a balanced and heavy visual weight that functions perfectly as a self-contained stamp.",
          "Stacked Hierarchy Typography: In the full configuration, the corporate typography is positioned horizontally adjacent to the circular emblem, breaking the name into three distinct, left-aligned vertical tiers: Bright, Future, and Academy.",
          "Typographic Style: The text utilizes a highly legible, modern sans-serif typeface with rounded terminal accents (most noticeable on the 'y' in Academy) to balance institutional authority with a welcoming aesthetic."
        ]
      },
      {
        "heading": "2. Suite Variations & Layout Configurations",
        "content": [
          "File 47.png (Isolated Brand Icon / Logomark): The standalone circular academic globe emblem centered on a transparent or white background. Optimized for high-density square or circular spaces, including website favicons, social media profile avatars, mobile app icons, and school blazer embroidery templates.",
          "File 69.png (Master Horizontal Lockup): The complete corporate logo system featuring the emblem positioned to the left of the stacked three-tier wordmark. This is the definitive asset for website navigation headers, official school letterheads, outdoor signage, diplomas, and prospectus cover pages."
        ]
      },
      {
        "heading": "3. Color Palette & Production Guidelines",
        "content": [
          "Classic Corporate Blue (#004C99): The single primary brand color used for the solid circular badge and the accompanying typography, representing trust, intelligence, stability, and professional academic standards.",
          "High-Contrast White (#FFFFFF): The negative space color that forms the graduation cap and global landmasses, maximizing readability at a distance.",
          "Responsive Framework: When scaling down the master lockup (69.png) for responsive mobile headers, ensure the text block maintains its padding relative to the circular badge to avoid cluttering.",
          "Substrate Versatility: The solid, flat vector architecture of the design ensures it prints cleanly without losing detail on a variety of mediums, from digital screens and glossy paper to screen-printed banners and embossed graduation certificates."
        ]
      }
    ]
  }
},
  {
  "id": "logo-realestate",
  "title": "Community Care & Guidance Emblem",
  "category": "branding",
  "description": "Powerful, human-centric corporate visual identity.",
  "details": "A minimalist corporate emblem combining abstract human figures nestled within a protective hand framework. Engineered to project themes of community care, social support, collaborative growth, and professional guidance across digital and physical substrates.",
  "images": ["46.png"],
  "tags": ["Isometric Grid", "Architectural Logo", "Property Branding"],
  "gridSpan": "small",
  "documentation": {
    "overview": "This asset establishes a powerful, human-centric corporate visual identity. The logo utilizes a minimalist icon combining abstract human figures nestled within a protective hand framework to communicate core themes of community care, social support, collaborative growth, and professional guidance.",
    "sections": [
      {
        "heading": "1. Design Language & Anatomy",
        "content": [
          "The Protective Hands: The lower half of the emblem is defined by two stylized, dark blue open hands curving upward, meeting symmetrically at the base to create an embrace or cradle that forms a strong structural foundation.",
          "The Community Collective: Emerging from within the hands is an abstract group of human figures, represented by rounded bars topped with circular heads, arranged in a tiered, ascending pyramid structure to symbolize teamwork and unity.",
          "Negative Space Framing: A uniform path of white negative space separates the hands from the central figures, ensuring each graphic component retains sharp definition even when viewed from a distance."
        ]
      },
      {
        "heading": "2. Color Palette & Aesthetics",
        "content": [
          "Deep Navy Blue: The color of the protective hands, providing a stable, secure, and professional foundation.",
          "Coral Red: The primary color used for the central, tallest figure and the surrounding background silhouettes, injecting energy, passion, and vitality into the collective group.",
          "Warm Amber/Orange: Applied to the secondary flanking figures, offering a soft color contrast that brightens the internal composition.",
          "Soft Cream Background: The crisp off-white canvas enhances visual warmth, steering clear of a clinical pure white backdrop to emphasize a welcoming, human touch."
        ]
      },
      {
        "heading": "3. Production & Implementation Guidelines",
        "content": [
          "Digital Branding Adaptability: The square container and centered focal point make this asset perfectly optimized to slot into digital profile avatars across corporate portals, LinkedIn profiles, and social messaging networks.",
          "Vector Scalability: Because the emblem relies on flat colors and clean, geometric vector-style paths, it can be easily scaled down to function as a compact website header icon or blown up for large-scale office signage without loss of fidelity.",
          "Substrate Versatility: The solid shapes translate cleanly to physical media, making it straightforward to deploy across uniform embroidery, screen-printed merchandise, corporate stationery, or community event flyers."
        ]
      }
    ]
  }
},
  {
  "id": "logo-media",
  "title": "Sunset Bites Brand Identity",
  "category": "branding",
  "description": "Premium corporate visual identity for Sunset Bites, an upscale hospitality and dining establishment.",
  "details": "A unified identity system designed for a fine dining restaurant. Encompasses a regal heraldic crest containing a cursive monogram and gold sunburst, flanked by ornate baroque scrollwork and crowned with a five-pointed sovereign coronet, balanced against a high-contrast modern sans-serif wordmark.",
  "images": ["12.png", "44.jpg"],
  "tags": ["Digital Media Icon", "Gradient Vectors", "App Icon UI"],
  "gridSpan": "small",
  "documentation": {
    "overview": "This asset suite details the premium corporate visual identity for Sunset Bites, an upscale hospitality and dining establishment. The design system leverages a traditional, regal crest combined with clean modern layouts to position the establishment as an elegant, high-end destination that balances heritage aesthetics with a contemporary culinary focus.",
    "sections": [
      {
        "heading": "1. Design Language & Anatomy",
        "content": [
          "Central Monogram: The focal core of the emblem features an elegant, stylized cursive uppercase 'S' rendered in a warm ivory cream, representing the master signature of the establishment.",
          "Radiant Sunburst: Radiating outward from the central monogram is a fine-lined, gold geometric sunburst or starburst motif that subtly echoes the 'Sunset' concept, casting an illuminating visual texture across the center of the badge.",
          "The Heraldic Shield: The monogram and sunburst are housed within a classic heraldic shield outline, projecting defense, excellence, and time-honored tradition.",
          "Ornate Filigree & Crown: The shield is flanked by symmetrical, flowing baroque scrollwork and flourishes, and is crowned at its apex by an elegant five-pointed sovereign coronet.",
          "Primary Corporate Wordmark: Positioned neatly beneath the circular badge in the full lockup configuration, the text reads 'Sunset Bites'.",
          "Typographic Style: The name is rendered in a solid, high-contrast, modern sans-serif typeface, creating a balanced visual layout suitable for modern digital systems."
        ]
      },
      {
        "heading": "2. Suite Variations & Color Matrices",
        "content": [
          "File 12_2.png (Master Corporate Lockup): The complete brand layout featuring the circular crest centered over the bold 'Sunset Bites' wordmark against a soft cream backdrop. Engineered as the primary branding asset for website landing heroes, digital menu board configurations, and formal print media.",
          "File 44.jpg (Isolated Brand Crest / Logomark): The standalone heraldic crest cropped tightly within its circular canvas, featuring a fine, vibrant mint-green outer boundary accent line. Optimized for restaurant social media avatars, web favicons, stamped cocktail coasters, or custom physical wax seals on menus."
        ]
      },
      {
        "heading": "3. Production & Substrate Implementation",
        "content": [
          "Premium Menu Integration: The isolated emblem (44.jpg) is designed to function elegantly as a decorative accent or watermark separating course headers (e.g., Appetizers, Main Course) on physical leather-bound menus.",
          "High-Contrast Canvas Advantage: The rich, forest-green backdrop naturally commands visual presence. For physical application, it translates exceptionally well to embossed gold foil stamping on matte cardboard containers, dark wood signage, or frosted glass windows.",
          "Responsive Scalability: At ultra-small breakpoints (such as mobile browser nav-bars), the text block from 12_2.png can be safely omitted, allowing the striking geometry of the shield and crown to carry the full weight of the brand footprint."
        ]
      }
    ]
  }
},
  {
  "id": "logo-golden-apple",
  "title": "Golden Plate Catering Brand Identity",
  "category": "branding",
  "description": "Ultra-minimalist, organic corporate visual identity for Golden Plate Catering.",
  "details": "A comprehensive brand identity system designed for a premium culinary service. Combines an abstract geometric fruit silhouette and symmetrical leaf canopy with a light, spacious two-tier typographic layout to project high-end elegance across physical packaging and digital menus.",
  "images": ["8.png", "13.png"],
  "tags": ["Logistics Identity", "Typography System", "Industrial Brand"],
  "gridSpan": "medium",
  "documentation": {
    "overview": "This asset suite establishes the corporate visual identity for Golden Plate Catering. The brand design relies on an ultra-minimalist, organic silhouette combined with a light, spacious typographic layout to project an elegant, clean, and high-end culinary presence.",
    "sections": [
      {
        "heading": "1. Design Language & Anatomy",
        "content": [
          "Abstract Fruit Silhouette: The core graphic features a simplified, geometric rendering of a piece of fruit resembling an apple or a pear, keeping the emblem organic through smooth lines and a curved base.",
          "Symmetrical Leaf Canopy: Hovering directly above the central stem are two clean, identical teardrop-shaped leaves that arch upward symmetrically to complete the minimal nature-inspired motif.",
          "Negative Space Framing: A crisp line of empty canvas cuts vertically between the two leaves down to the top indentation of the fruit, balancing the weight of the icon with strategic breathing room.",
          "Primary Brand Wordmark: In the full configuration, the text is split into a balanced two-tier vertical stack positioned beneath the icon, reading 'Golden Plate' in a light, high-contrast sans-serif font.",
          "Functional Sub-Header: The descriptor 'Catering' anchors the typography block using the same elegant, thin-line sans-serif typeface to maintain a delicate and professional corporate signature."
        ]
      },
      {
        "heading": "2. Suite Variations & Configurations",
        "content": [
          "File 8_2.png (Master Corporate Lockup): The complete brand layout featuring the organic icon centered vertically over the two-tier typography block. This configuration is the primary asset for website landing heroes, business cards, formal culinary proposals, and front-of-house signage.",
          "File 13_2.png (Isolated Brand Icon / Logomark): The standalone fruit emblem cropped tightly on a soft cream canvas without text elements. Engineered for high-density layouts such as app favicons, digital profile pictures, uniform embroidery patches, or custom-printed menu watermarks."
        ]
      },
      {
        "heading": "3. Color Palette & Production Guidelines",
        "content": [
          "Muted Burgundy / Marsala: The sole accent color used for the icon and text paths. This refined, deep wine-red hue communicates premium quality, warmth, and culinary sophistication.",
          "Soft Ivory Cream: The background canvas relies on a warm, smooth off-white base to soften the overall design, avoiding a sterile, clinical pure white to emphasize comfort and premium hospitality.",
          "Packaging Customization: The flat vector shapes of the isolated icon (13_2.png) are highly optimized for custom packaging stamps, making it easy to press onto brown paper delivery bags, bakery boxes, or napkin rings.",
          "Responsive Media Flex: The light weight of the sans-serif typography requires ample background contrast. For small digital screen menus, utilizing the isolated mark for section indicators ensures the brand identity remains clear and uncluttered."
        ]
      }
    ]
  }
},
  {
  "id": "logo-efa",
  "title": "Education For All Logo Suite",
  "category": "branding",
  "description": "Corporate visual identity system centered around advocacy, accessible learning, and social impact.",
  "details": "An approachable, empathetic brand identity lockup designed for educational advocacy and non-profits. Combines a dynamic, chunky pencil logomark with symmetrical heart wings and a crisp, modern, multi-tiered typography layout optimized for digital platforms and grassroots campaigns.",
  "images": ["6.png", "7.png"],
  "tags": ["Luxury Monogram", "Fashion Layout", "Hairline Serif"],
  "gridSpan": "small",
  "documentation": {
    "overview": "This asset suite details the corporate visual identity system centered around advocacy, accessible learning, and social impact. The logo utilizes a playful, illustrative emblem—combining a classic writing tool with an organic heart motif—to establish an approachable, empathetic, and highly motivating brand presence.",
    "sections": [
      {
        "heading": "1. Design Language & Anatomy",
        "content": [
          "The Pencil Core: The primary icon features a stylized, chunky cartoon pencil angled dynamically upward to the right, suggesting progress, growth, and forward movement.",
          "Anatomy Construction: It is constructed out of clean, flat geometric color zones representing the lead tip, wooden collar, primary lacquered body, metal ferrule, and rubber eraser.",
          "The Heart Wings: Sprouting symmetrically from the center of the blue pencil body is a soft, light blue heart shape acting as a pair of wings to symbolize freedom and empowerment.",
          "Stylized Simplification: The entire logomark completely relies on bold, solid vector curves and high-contrast color boundaries without gradients or complex shading, optimizing its scannability.",
          "Primary Campaign Headline: The top typographic tier reads 'Education For All' in a bold, condensed, uppercase sans-serif typeface that maximizes immediate visual impact and authority.",
          "Call-to-Action Sub-Header: Anchoring the base, the supportive phrase 'Choose Equality' is set in a lighter, geometric, wide-set sans-serif font to establish a modern, professional, and readable framework."
        ]
      },
      {
        "heading": "2. Suite Variations & Layout Configurations",
        "content": [
          "File 7.png (Isolated Brand Icon / Logomark): The standalone pencil-heart illustration isolated on a crisp white backdrop without typography. Specially optimized for high-density square configurations, including mobile application favicons, institutional social media profile pictures, web portal navigation accents, and enamel pin merchandise templates.",
          "File 6_2.png (Master Vertical Lockup): The complete brand alignment featuring the pencil illustration stacked vertically above the two-tier typography block. This is the definitive master configuration for campaign landing pages, print posters, event banners, and front-cover presentation decks."
        ]
      },
      {
        "heading": "3. Color Palette & Production Guidelines",
        "content": [
          "Vibrant Electric Blue (#1E88E5): The primary color used for the main body of the pencil and the headline text, communicating trust, stability, and focus.",
          "Sky Blue (#90CAF9): Applied to the heart wing overlay, offering a gentle, soft-contrast accent that reinforces themes of care and positivity.",
          "Soft Peach & Coral: Used for the exposed wood shaft and eraser elements to introduce warm, humanizing tones into the palette.",
          "Solid Black (#000000): Anchors the pencil tip and ferrule band, providing strong graphic focal points.",
          "Grassroots Merchandise Flex: The clean, solid paths of the isolated mark (7.png) make it exceptionally easy to translate onto physical media—including screen-printed canvas tote bags, custom sticker sheets, or volunteer t-shirt apparel.",
          "Responsive Scaling: The strong color separation between the electric blue text and the white canvas ensures that even when the lockup (6_2.png) is reduced onto mobile screens, the supporting call-to-action remains perfectly legible."
        ]
      }
    ]
  }
},
  {
  "id": "logo-lafrique",
  "title": "Lafrique Corporate Identity",
  "category": "branding",
  "description": "Sleek, geometric emblem blending marine, aviation, or forward-pointing architectural silhouettes within a sharp circular framework.",
  "details": "A formal visual identity system designed for transport, global logistics, freight forwarding, maritime services, or pan-African enterprise. Encompasses an ascending prow logomark, a stylized split circular compass ring, and an elegant geometric uppercase sans-serif wordmark.",
  "images": ["5.png", "4.png"],
  "tags": ["Institutional Rebrand", "Vector Crest", "Shield Layout"],
  "gridSpan": "small",
  "documentation": {
    "overview": "This asset suite establishes the formal corporate identity for Lafrique. The design system features a sleek, geometric emblem that seamlessly blends marine, aviation, or forward-pointing architectural silhouettes within a sharp circular framework. It projects a modern, professional image rooted in logistics, navigation, global trade, or pan-African enterprise.",
    "sections": [
      {
        "heading": "1. Design Language & Anatomy",
        "content": [
          "The Ascending Prow / Arrow: The core of the icon features a stylized, towering triangular structure split symmetrically down the center. This graphic duals as the prow of a vessel cutting through water or a supersonic aircraft nose cone pointing directly upward, symbolizing momentum, direction, and market ascension.",
          "The Horizon Lines: Stepped horizontal lines curve upward along the base of the triangle. These mimic water ripples, speed waves, or geographic contours, providing a steady structural foundation.",
          "The Circular Compass: A split circular ring encloses the upper half of the composition, anchoring the graphic elements into a cohesive, high-contrast medallion that acts as an stylized compass or global emblem.",
          "Corporate Wordmark: In the full layout configuration, a clean, high-contrast text block is positioned horizontally centered underneath the primary emblem, rendering the brand name cleanly as LAFRIQUE.",
          "Typographic Style: The text utilizes an elegant, geometric, uppercase sans-serif typeface. The consistent stroke weight and generous tracking (letter-spacing) deliver excellent legibility, balancing institutional security with modern design sensibilities."
        ]
      },
      {
        "heading": "2. Suite Variations & Layout Configurations",
        "content": [
          "File 4_2.png (Isolated Brand Icon / Logomark): The standalone geometric navigation emblem centered cleanly on a crisp white backdrop. Engineered for high-density circular and square footprints—such as browser favicons, internal software application shortcuts, uniform sleeve embroidery, or social media avatars.",
          "File 5_2.png (Master Vertical Lockup): The complete brand alignment featuring the navigation icon stacked symmetrically above the 'LAFRIQUE' corporate wordmark. This is the definitive asset for official corporate letterheads, website headers, presentation cover decks, business cards, and office facility signage."
        ]
      },
      {
        "heading": "3. Color Palette & Production Guidelines",
        "content": [
          "Deep Ocean Blue: Applied to the left hemisphere of the emblem, providing a grounding, heavyweight anchor tone that brings depth to the geometric split.",
          "Vibrant Sky Blue: Used on the right hemisphere of the emblem and across the entirety of the 'LAFRIQUE' wordmark, introducing energy, modern technical innovation, and clarity.",
          "High-Contrast White Base: The neutral canvas allows the blue vector paths to maximize edge-definition across varying screen resolutions.",
          "Responsive Application: The geometric clarity of the isolated emblem from 4_2.png ensures that it retains its structural fidelity even when scaled down significantly onto mobile application nav-bars or micro-footers.",
          "Substrate Compatibility: Because the design features flat color execution without gradients, it can be easily translated onto tricky real-world substrates. It is highly optimized for vinyl vehicle wraps on transport fleets, metallic foil stamping, or stencil cuts on cargo shipping container walls."
        ]
      }
    ]
  }
},
  ,
  {
  "id": "logo-spu-utd",
  "title": "Sol Plaatje University Sports Identity",
  "category": "branding",
  "description": "Dynamic heraldic sports crest featuring a stylized football player silhouette and radiant geometric background.",
  "details": "A comprehensive athletic brand identity system built around an institutional shield template. Combines a high-contrast soccer athlete silhouette and geometric sunburst backdrop with a structured two-tier vertical wordmark to project athletic excellence, pride, and collegiate team unity.",
  "images": ["72.jpeg", "73.jpeg"],
  "tags": ["Logistics Identity", "Typography System", "Industrial Brand"],
  "gridSpan": "medium",
  "documentation": {
    "overview": "This asset suite establishes the formal athletic visual identity system for Sol Plaatje University. The design system features a striking, high-contrast sports emblem designed to project energy, competitive movement, and institutional pride across digital media platforms and physical sports uniforms.",
    "sections": [
      {
        "heading": "1. Design Language & Anatomy",
        "content": [
          "The Athlete Silhouette: The focal core of the emblem features a solid black silhouette of a football player captured mid-motion dribbling a soccer ball, projecting action, skill, and forward momentum.",
          "The Heraldic Shield: The entire graphic composition is housed inside a classic red institutional shield outline featuring a crisp inner white border line, conveying structure, heritage, and defense.",
          "Radiant Sunburst Backdrop: Radiating behind the player silhouette is a bright, multi-shaded orange and yellow geometric sunburst motif that creates layered contrast and brings exceptional depth to the center of the crest.",
          "Primary University Wordmark: Positioned directly beneath the shield badge in the full lockup configuration, the text reads 'SOL PLAATJE' in a bold, clean, uppercase sans-serif font.",
          "Institutional Sub-Header: The word 'UNIVERSITY' anchors the vertical typography layout, using a slightly thinner variant of the same modern sans-serif typeface to maintain a clean corporate and academic signature."
        ]
      },
      {
        "heading": "2. Suite Variations & Layout Configurations",
        "content": [
          "File 72.jpeg (Master Athletic Lockup): The complete team brand layout featuring the heraldic sports shield stacked symmetrically over the two-tier 'Sol Plaatje University' wordmark. This configuration is the primary asset for sports program websites, tournament posters, official press releases, and campus facility banners.",
          "File 73.jpeg (Isolated Team Crest / Logomark): The standalone athletic shield emblem cropped tightly within a solid dark canvas without the typographic elements. Specially engineered for high-density placements, including digital match-day graphics, social media avatars, mobile app icons, and direct uniform embroidery patches."
        ]
      },
      {
        "heading": "3. Color Palette & Production Guidelines",
        "content": [
          "Athletic Crimson Red: The dominant framing color used for the outer shield body, delivering an aggressive, high-energy boundary that commands immediate visual presence.",
          "Solar Orange & Yellow Matrix: A warm, multi-toned gradient background system within the crest that maximizes edge-definition against the black silhouette.",
          "Solid Black & White Accents: Utilized for the main player silhouette and soccer ball detailing to guarantee structural readability at ultra-small sizes.",
          "Kit Embroidery & Substrates: The flat color fields and definitive vector boundaries make the isolated badge (73.jpeg) highly optimized for complex physical printing procedures, including screen printing on team jerseys, embossing on tracksuits, or vinyl decals on athletic equipment."
        ]
      }
    ]
  }
},
  {
  "id": "logo-code-wave",
  "title": "CodeWave IT Solutions Brand Identity",
  "category": "branding",
  "description": "Dynamic, multi-layered wave emblem paired with structured corporate typography.",
  "details": "A master corporate visual identity system designed for information technology, software development, cloud architecture, and ICT consultancy sectors. Features an abstract cresting wave constructed from cascading ribbon layers with high-contrast gradient transitions, anchored by a strong, geometric two-tier wordmark.",
  "images": ["2.png", "1.png"],
  "tags": ["Institutional Rebrand", "Vector Crest", "Shield Layout"],
  "gridSpan": "small",
  "documentation": {
    "overview": "This asset suite establishes the master corporate visual identity for CodeWave IT Solutions. The design features a dynamic, multi-layered wave emblem paired with structured corporate typography. It projects an image of modern technical innovation, fluid digital integration, and reliable infrastructure, tailored perfectly for software development, cloud computing, and ICT consultation sectors.",
    "sections": [
      {
        "heading": "1. Design Language & Anatomy",
        "content": [
          "The Cresting Motion: The primary icon features an abstract, stylized ocean wave cresting toward the right, representing momentum, forward-thinking innovation, and continuous technological advancement.",
          "Layered Geometry: The wave is built using three distinct cascading ribbon layers separated by clean white negative space lines, mimicking data streams, signal waves, or layered network protocols.",
          "Dimensional Gradients: The curves utilize a smooth, high-contrast gradient transit blending from a deep shadow at the base up to a brilliant neon highlight at the crest, providing depth, motion, and digital energy.",
          "Primary Brand Identifier: The top typographic tier features the word CodeWave in a heavy, bold weight, using capitalized 'C' and 'W' for structural clarity.",
          "Core Capability Tag: The base tier reads IT Solutions in a matching font weight, perfectly squaring off the text block and anchoring the brand name with a professional finish.",
          "Typographic Style: The wordmark utilizes a clean, geometric, high-contrast sans-serif typeface with thick, uniform strokes projecting security, reliability, and institutional trust."
        ]
      },
      {
        "heading": "2. Suite Variations & Layout Configurations",
        "content": [
          "File 1_2.png (Isolated Brand Icon / Logomark): The standalone gradient wave emblem centered cleanly on a crisp white backdrop. Engineered for high-density environments—such as website favicons, software application launcher shortcuts, cloud interface loading matrices, and profile avatars.",
          "File 2_2.png (Master Vertical Lockup): The complete corporate brand asset featuring the wave illustration stacked symmetrically above the two-tier text block. This is the definitive asset for website landing page heroes, company letterheads, invoices, presentation cover decks, and physical office reception signage."
        ]
      },
      {
        "heading": "3. Color Palette & Production Guidelines",
        "content": [
          "Cyber Cyan / Electric Teal: The dominant highlight tone at the crest of the waves, bringing an energetic, illuminated feel to the digital canvas.",
          "Deep Navy / Midnight Blue: The dark anchoring gradient base of the waves and the solid color block applied to the typography, projecting corporate security, technical depth, and professionalism.",
          "High-Contrast White Base: The neutral background allows the rich gradients of the wave paths to maximize edge-definition across modern high-density screen arrays.",
          "Digital Interface Scalability: The geometric pathing of the isolated mark from 1_2.png ensures that it retains its distinct visual signature even when scaled down to a 16x16 pixel browser favicon.",
          "Media Versatility: While the gradient curves shine beautifully on back-lit digital screens, they can be adapted for traditional physical media—such as monochromatic laser etching on corporate tech merchandise (USB drives, laptops) or high-gloss printing on corporate presentation folders."
        ]
      }
    ]
  }
}
];

const TABS: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Apps & SoftwareSystems', value: 'apps' },
  { label: 'Websites', value: 'websites' },
  { label: 'Branding', value: 'branding' },
];

export default function Showcase() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [documentationProject, setDocumentationProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showAll, setShowAll] = useState<boolean>(false);
  // Track whether the expanded lightbox view is open
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProject]);

  // Reset pagination view back to limited count when changing filter tabs
  useEffect(() => {
    setShowAll(false);
  }, [activeTab]);

  const getAssetUrl = (filename: string) => {
    return new URL(`../assets/${filename}`, import.meta.url).href;
  };

  const filteredProjects = activeTab === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === activeTab);
  const INITIAL_COUNT = 6;
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_COUNT);

  const getGridClass = (span?: string) => {
    if (span === 'large') return 'col-span-1 md:col-span-2 lg:col-span-3 row-span-2 md:row-span-2';
    if (span === 'medium') return 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2 md:row-span-1';
    return 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1';
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section 
      id="showcase" 
      className="pt-20 sm:pt-28 lg:pt-32 pb-20 transition-colors duration-300" 
      style={{ backgroundColor: isDark ? '#000000' : '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p 
            className="text-sm tracking-widest uppercase text-[#6CB065] mb-4" 
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            // CASE STUDIES
          </p>
          <h2 
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-950'}`} 
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Featured Showcase
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12 flex justify-center flex-wrap gap-3">
          {TABS.map(tab => (
            <button 
              key={tab.value} 
              onClick={() => setActiveTab(tab.value)} 
              className={`px-6 py-2.5 rounded text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeTab === tab.value 
                  ? 'bg-[#6CB065] text-black shadow-[0_0_20px_rgba(108,176,101,0.4)]' 
                  : isDark 
                    ? 'bg-transparent border border-[#6CB065]/40 text-gray-300 hover:border-[#6CB065]/70 hover:text-[#6CB065]' 
                    : 'bg-transparent border border-[#6CB065]/40 text-gray-600 hover:border-[#6CB065]/70 hover:text-[#6CB065]'
              }`}
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-max gap-4 lg:gap-6">
  {visibleProjects.map(project => {
    // Dynamically assign aspect ratio based on category
    const aspectClass = project.category === 'websites' ? 'aspect-video' : 'aspect-square';

    return (
      <div 
        key={project.id} 
        className={`group relative overflow-hidden cursor-pointer transition-all duration-300 rounded-xl hover:shadow-[0_0_30px_rgba(108,176,101,0.3)] hover:-translate-y-1 ${getGridClass(project.gridSpan)} ${aspectClass}`} 
        onClick={() => setSelectedProject(project)} 
        style={{ backgroundColor: isDark ? '#121212' : '#ffffff' }} 
      >
        <img 
          src={getAssetUrl(project.images[0])} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        
        {/* Hover Overlay Text */}
{/* Determine if the container is small to apply tighter styling */}
<div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end ${project.gridSpan === 'small' ? 'p-3' : 'p-6'}`}>
  
  <p className={`font-mono text-[#6CB065] uppercase tracking-[0.2em] ${project.gridSpan === 'small' ? 'text-[8px] mb-0.5' : 'text-[10px] mb-2'}`}>
    // {project.category}
  </p>
  
  <h3 className={`font-bold text-white leading-tight ${project.gridSpan === 'small' ? 'text-xs mb-1' : 'text-lg mb-2'}`} style={{ fontFamily: "'Courier New', monospace" }}>
    {project.title}
  </h3>
  
  {/* Only show the description if the container is not 'small' to prevent overflow */}
  {project.gridSpan !== 'small' && (
    <p className="text-xs text-gray-300 leading-snug line-clamp-2">
      {project.description}
    </p>
  )}
</div>
      </div>
    );
  })}
</div>

        {/* Pagination Trigger */}
        {filteredProjects.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => setShowAll(!showAll)} 
              className={`px-8 py-3 rounded text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                isDark 
                  ? 'bg-transparent border border-[#6CB065] text-[#6CB065] hover:bg-[#6CB065] hover:text-black shadow-[0_0_15px_rgba(108,176,101,0.1)]' 
                  : 'bg-transparent border border-[#6CB065] text-gray-950 hover:bg-[#6CB065] hover:text-white'
              }`}
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              {showAll ? '// VIEW LESS' : '// VIEW ALL CONTRACTS'}
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Popover Modal */}
{selectedProject && (
  <>
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl transition-all duration-300"
        style={{ backgroundColor: isDark ? '#0a0a0a' : '#ffffff' }}
      >
        {/* Header Control Panel */}
        <div 
          className="sticky top-0 z-10 px-6 py-4 flex justify-between items-center"
          style={{ backgroundColor: isDark ? '#0d0d0d' : '#f9f9f9' }}
        >
          <h3 
            className="text-md font-bold uppercase tracking-wider flex items-center gap-2"
            style={{ fontFamily: "'Courier New', monospace", color: isDark ? '#6CB065' : '#45823e' }}
          >
            <Terminal size={16} /> COMPONENT_PREVIEW // {selectedProject.id}
          </h3>
          <button 
            onClick={() => setSelectedProject(null)}
            className={`p-1.5 rounded-full transition-colors cursor-pointer ${isDark ? 'text-gray-400 hover:bg-gray-900 hover:text-white' : 'text-gray-600 hover:bg-gray-200 hover:text-black'}`}
          >
            <X size={20} />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-72px)] p-6 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Immersive Image Rotator Container */}
            <div className="space-y-3">
              <div 
                className="relative rounded-xl overflow-hidden flex items-center justify-center w-full cursor-pointer group"
                style={{ backgroundColor: isDark ? '#121212' : '#ffffff' }}
                onClick={() => setIsLightboxOpen(true)}
              >
                <img 
                  src={getAssetUrl(selectedProject.images[currentImageIndex])} 
                  alt={`${selectedProject.title} view`} 
                  className="w-full h-auto object-contain" 
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <span className="text-white text-xs font-mono bg-black/50 px-3 py-1 rounded">CLICK TO EXPAND</span>
                </div>
                
                {selectedProject.images.length > 1 && (
                  <>
                    <button 
                      // FIX: Passing 'e' to the handler
                      onClick={(e) => handlePrevImage(e)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 text-white hover:bg-[#6CB065] hover:text-black transition-all cursor-pointer"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button 
                      // FIX: Passing 'e' to the handler
                      onClick={(e) => handleNextImage(e)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 text-white hover:bg-[#6CB065] hover:text-black transition-all cursor-pointer"
                    >
                      <ChevronRight size={16} />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-black/80 text-[10px] font-mono text-gray-300 tracking-widest">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {selectedProject.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto py-1">
                  {selectedProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 transition-all ${currentImageIndex === idx ? 'ring-2 ring-[#6CB065] scale-95' : 'opacity-60 hover:opacity-100'}`}
                      style={{ backgroundColor: isDark ? '#121212' : '#ffffff' }}
                    >
                      <img src={getAssetUrl(img)} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details Panel */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#6CB065]">[{selectedProject.category}]</span>
                <h4 className="text-2xl font-bold tracking-tight mt-1" style={{ fontFamily: "'Courier New', monospace", color: isDark ? '#ffffff' : '#000000' }}>
                  {selectedProject.title}
                </h4>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: isDark ? '#d1d5db' : '#222222' }}>{selectedProject.details}</p>
              
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded" style={{ backgroundColor: isDark ? 'rgba(108, 176, 101, 0.08)' : 'rgba(108, 176, 101, 0.12)', color: isDark ? '#6CB065' : '#3d7837' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                {selectedProject.liveUrl && (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded bg-[#6CB065] text-black hover:shadow-[0_0_15px_rgba(108,176,101,0.4)] transition-all font-mono">
                    <ExternalLink size={14} /> Launch Live Site
                  </a>
                )}
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded transition-all font-mono ${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                    <Github size={14} /> Source Repository
                  </a>
                )}
                <button
                  onClick={() => { setDocumentationProject(selectedProject); setSelectedProject(null); }}
                  className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded transition-all font-mono cursor-pointer ${isDark ? 'text-[#6CB065] hover:bg-[#6CB065]/10' : 'text-[#3d7837] hover:bg-[#6CB065]/10'}`}
                >
                  <FileText size={14} /> Read Blueprint Docs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Lightbox Overlay */}
    {isLightboxOpen && (
      <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setIsLightboxOpen(false)}>
        <button className="absolute top-6 right-6 text-white p-2 hover:text-[#6CB065] z-10" onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}>
          <X size={32} />
        </button>

        {/* Lightbox Navigation */}
        {selectedProject.images.length > 1 && (
          <>
            <button 
              onClick={(e) => handlePrevImage(e)}
              className="absolute left-4 p-3 rounded-full bg-white/10 text-white hover:bg-[#6CB065] hover:text-black transition-all z-10"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={(e) => handleNextImage(e)}
              className="absolute right-4 p-3 rounded-full bg-white/10 text-white hover:bg-[#6CB065] hover:text-black transition-all z-10"
            >
              <ChevronRight size={32} />
            </button>
            <div className="absolute bottom-6 text-white font-mono text-sm bg-black/50 px-4 py-2 rounded-full pointer-events-none">
              {currentImageIndex + 1} / {selectedProject.images.length}
            </div>
          </>
        )}

        <img 
          key={currentImageIndex}
          src={getAssetUrl(selectedProject.images[currentImageIndex])} 
          alt="Expanded view" 
          className="max-w-full max-h-[90vh] object-contain shadow-2xl transition-all duration-300 rounded-2xl"
          onClick={(e) => e.stopPropagation()} 
        />
      </div>
    )}
  </>
)}

      {/* Structural Infrastructure System Documentation Overlay Sheet */}
      {documentationProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div 
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-lg shadow-2xl transition-all duration-300"
            style={{ 
              backgroundColor: isDark ? '#080808' : '#ffffff',
              border: `1px solid ${isDark ? 'rgba(108, 176, 101, 0.25)' : 'rgba(108, 176, 101, 0.4)'}`
            }}
          >
            {/* Modal Documentation Header Bar */}
            <div 
              className="sticky top-0 z-10 px-6 py-4 flex justify-between items-center border-b"
              style={{ 
                backgroundColor: isDark ? '#0c0c0c' : '#f9f9f9',
                borderColor: isDark ? 'rgba(108, 176, 101, 0.15)' : 'rgba(108, 176, 101, 0.25)'
              }}
            >
              <div className="flex items-center gap-2">
                <Code2 size={16} className="text-[#6CB065]" />
                <h3 
                  className="text-xs font-bold uppercase tracking-widest font-mono"
                  style={{ color: isDark ? '#ffffff' : '#000000' }}
                >
                  SYSTEM_DOCUMENTATION // {documentationProject.id}
                </h3>
              </div>
              <button 
                onClick={() => setDocumentationProject(null)}
                className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                  isDark ? 'text-gray-400 hover:bg-gray-900 hover:text-white' : 'text-gray-600 hover:bg-gray-200 hover:text-black'
                }`}
              >
                <X size={18} />
              </button>
            </div>

            {/* Document Content Block */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 
                  className="text-xl font-bold tracking-tight mb-2"
                  style={{ color: isDark ? '#ffffff' : '#000000' }}
                >
                  Architectural Overview
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: isDark ? '#9ca3af' : '#222222' }}>
                  {documentationProject.documentation.overview}
                </p>
              </div>

              {/* Sequential Details Split Iterations */}
              <div className="space-y-4 pt-4 border-t border-dashed border-gray-800 dark:border-gray-800/40">
                {documentationProject.documentation.sections.map((section, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded border space-y-3"
                    style={{ 
                      backgroundColor: isDark ? '#0e0e0e' : '#fcfcfc',
                      borderColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.06)'
                    }}
                  >
                    <h4 
                      className="text-sm font-bold tracking-wide font-mono flex items-center gap-2"
                      style={{ 
                        fontFamily: "'Courier New', monospace",
                        color: isDark ? '#ffffff' : '#000000'
                      }}
                    >
                      <Layers size={14} className="text-[#6CB065]" />
                      {section.heading}
                    </h4>
                    <ul className="space-y-2 pl-5 list-disc text-sm leading-relaxed" style={{ color: isDark ? '#d1d5db' : '#222222' }}>
                      {section.content.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Window Footer Control Bar */}
            <div 
              className="px-6 py-4 flex justify-end"
              style={{ 
                backgroundColor: isDark ? '#0d0d0d' : '#f9f9f9',
                borderTop: `1px solid ${isDark ? 'rgba(108, 176, 101, 0.15)' : 'rgba(108, 176, 101, 0.3)'}`
              }}
            >
              <button
                onClick={() => setDocumentationProject(null)}
                className="px-5 py-2 rounded font-bold text-xs uppercase tracking-wider text-black bg-[#6CB065] hover:shadow-[0_0_15px_rgba(108,176,101,0.3)] transition-all cursor-pointer font-mono"
              >
                Close Documentation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
