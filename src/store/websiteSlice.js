import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    events: [],
    banners: [],
    bannerSettings: {
        displayMode: 'banner',
        badgeText: 'The Leader in Online Learning',
        badgeIcon: '👤',
        title: 'Build The Skills <br /> To Drive Your Career.',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <strong>Velit officia consequat.</strong>',
        image: ''
    },
    performerSettings: { title: 'Unmatched Performance Excellence', description: 'Delivering exceptional results through cutting-edge solutions and proven methodologies' },
    performers: [],
    faqSettings: { title: 'Frequently Asked Questions', description: 'Find answers to common questions about our services and programs' },
    faqs: [],
    gallery: [],
    posts: [],
    partners: [],
    jobs: [],
    studyMaterials: [],
    affiliations: [],
    sampleCertificates: [],
    counters: [],
    testimonials: [],
    testimonialSettings: { subtitle: 'EDUCATION FOR EVERYONE', title: "People like history education. <br /> No joking - here's the proof!" },
    services: [],
    serviceSettings: { title: 'Learn Online', description: 'Master in-demand tech skills with our industry-leading courses' },
    policies: [
        { id: 'privacy', title: 'Privacy Policy', content: 'Privacy Policy Your privacy policy content here...' },
        { id: 'terms', title: 'Terms & Conditions', content: 'Terms & Conditions Your terms and conditions content here...' },
        { id: 'refund', title: 'Refund Policy', content: 'Refund Policy Your refund policy content here...' }
    ],
    aboutSettings: {
        subtitle: 'Know About Us',
        title: 'Know About Histudy <br /> Learning Platform',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        image1: '',
        image2: '',
        image3: '',
        feature1Icon: 'Heart',
        feature1Title: 'Flexible Classes',
        feature1Desc: 'It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.',
        feature2Icon: 'Book',
        feature2Title: 'Learn From Anywhere',
        feature2Desc: 'Sed distinctio repudiandae eos recusandae laborum eaque non eius iure suscipit laborum eaque non eius iure suscipit.'
    },
    siteSettings: {
        headerType: 'logo',
        logo: 'https://mum-objectstore.e2enetworks.net/hdi-multi-tenant/tncdc.in/website/logo/image_6979ce5039f69.png',
        favicon: '',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.example.app',
        appStoreLink: 'https://www.apple.com/app-store/',
        primaryColor: '#ff5733',
        secondaryColor: '#c70039',
        marqueeEntries: [
            "Welcome to TamilNadu Career Development Council",
            "Join our courses today!",
            "Join our courses today!",
            "Contact us for more info!"
        ]
    },
    missionVisionSettings: {
        bannerBadgeText: 'The Leader in Online Learning',
        bannerBadgeIcon: '👤',
        bannerDesc: 'Dive in and learn React.js from scratch! Learn React.js, Hooks, Redux, React Routing, Animations, Next.js and way more!',
        videoImage: '',
        videoUrl: 'https://www.youtube.com/watch?v=nAIaqp0sPQo',
        visionTitle: 'Know About Histudy <br /> Learning Platform',
        visionDesc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        visionImage1: '',
        visionImage2: '',
        visionImage3: '',
        visionFeature1Icon: 'Heart',
        visionFeature1Title: 'Flexible Classes',
        visionFeature1Desc: 'It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.',
        visionFeature2Icon: 'Book',
        visionFeature2Title: 'Learn From Anywhere',
        visionFeature2Desc: 'Sed distinctio repudiandae eos recusandae laborum eaque non eius iure suscipit. laborum eaque non eius iure suscipit.',
        visionFeature3Icon: 'Monitor',
        visionFeature3Title: "Experienced Teacher's service",
        visionFeature3Desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aliquid mollitia Officia, aliquid mollitia.',
        missionTitle: 'Know About Histudy <br /> Learning Platform',
        missionDesc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        missionImage1: '',
        missionImage2: '',
        missionImage3: '',
        missionFeature1Icon: 'Heart',
        missionFeature1Title: 'Flexible Classes',
        missionFeature1Desc: 'It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.',
        missionFeature2Icon: 'Book',
        missionFeature2Title: 'Learn From Anywhere',
        missionFeature2Desc: 'Sed distinctio repudiandae eos recusandae laborum eaque non eius iure suscipit. laborum eaque non eius iure suscipit.',
        missionFeature3Icon: 'Monitor',
        missionFeature3Title: "Experienced Teacher's service",
        missionFeature3Desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aliquid mollitia Officia, aliquid mollitia.'
    },
    socialMediaSettings: {
        facebook: '',
        x: '',
        instagram: '',
        linkedin: '',
        youtube: ''
    },
    mobileBanners: [],
    teachers: [
        { id: 1, name: 'Priya', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya', designation: 'Python Trainer', phone: '123456', email: 'vcbdvchv@gmail.com', createdAt: '29 Jan, 2026' }
    ],
    contactSettings: {
        title: 'Histudy Course Contact <br> can join with us',
        phone1: '+444 555 666 777',
        phone2: '+222 222 222 333',
        whatsapp: '',
        email1: 'admin@gmail.com',
        location: '5678 Bangla Main Road, cities 580 <br> GBnagla, example 54786',
        mapIframe: ''
    },
    paymentDetails: []
};

const websiteSlice = createSlice({
    name: 'website',
    initialState,
    reducers: {
        // Events
        addEvent: (state, action) => {
            state.events.push({ ...action.payload, id: Date.now(), createdAt: new Date().toLocaleDateString() });
        },
        editEvent: (state, action) => {
            const index = state.events.findIndex(e => e.id === action.payload.id);
            if (index !== -1) {
                state.events[index] = { ...state.events[index], ...action.payload };
            }
        },
        deleteEvent: (state, action) => {
            state.events = state.events.filter(e => e.id !== action.payload);
        },
        // Banners
        addBanner: (state, action) => {
            state.banners.push({ ...action.payload, id: Date.now(), createdAt: new Date().toLocaleDateString() });
        },
        deleteBanner: (state, action) => {
            state.banners = state.banners.filter(b => b.id !== action.payload);
        },
        updateBannerSettings: (state, action) => {
            state.bannerSettings = { ...state.bannerSettings, ...action.payload };
        },
        // Performers
        updatePerformerSettings: (state, action) => {
            state.performerSettings = { ...state.performerSettings, ...action.payload };
        },
        addPerformer: (state, action) => {
            state.performers.push({ ...action.payload, id: Date.now(), createdAt: new Date().toLocaleDateString() });
        },
        editPerformer: (state, action) => {
            const index = state.performers.findIndex(p => p.id === action.payload.id);
            if (index !== -1) {
                state.performers[index] = { ...state.performers[index], ...action.payload };
            }
        },
        deletePerformer: (state, action) => {
            state.performers = state.performers.filter(p => p.id !== action.payload);
        },
        // FAQs
        updateFAQSettings: (state, action) => {
            state.faqSettings = { ...state.faqSettings, ...action.payload };
        },
        addFAQ: (state, action) => {
            state.faqs.push({ ...action.payload, id: Date.now(), createdAt: new Date().toLocaleDateString() });
        },
        editFAQ: (state, action) => {
            const index = state.faqs.findIndex(f => f.id === action.payload.id);
            if (index !== -1) {
                state.faqs[index] = { ...state.faqs[index], ...action.payload };
            }
        },
        deleteFAQ: (state, action) => {
            state.faqs = state.faqs.filter(f => f.id !== action.payload);
        },
        // Gallery
        addGalleryItem: (state, action) => {
            state.gallery.push({ ...action.payload, id: Date.now(), createdAt: new Date().toLocaleDateString() });
        },
        editGalleryItem: (state, action) => {
            const index = state.gallery.findIndex(g => g.id === action.payload.id);
            if (index !== -1) {
                state.gallery[index] = { ...state.gallery[index], ...action.payload };
            }
        },
        deleteGalleryItem: (state, action) => {
            state.gallery = state.gallery.filter(g => g.id !== action.payload);
        },
        // Posts
        addPost: (state, action) => {
            state.posts.push({ ...action.payload, id: Date.now(), createdAt: new Date().toLocaleDateString() });
        },
        editPost: (state, action) => {
            const index = state.posts.findIndex(p => p.id === action.payload.id);
            if (index !== -1) {
                state.posts[index] = { ...state.posts[index], ...action.payload };
            }
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(p => p.id !== action.payload);
        },
        // Partners
        addPartner: (state, action) => {
            state.partners.push({ ...action.payload, id: Date.now(), createdAt: new Date().toLocaleDateString() });
        },
        editPartner: (state, action) => {
            const index = state.partners.findIndex(p => p.id === action.payload.id);
            if (index !== -1) {
                state.partners[index] = { ...state.partners[index], ...action.payload };
            }
        },
        deletePartner: (state, action) => {
            state.partners = state.partners.filter(p => p.id !== action.payload);
        },
        // Jobs
        addJob: (state, action) => {
            state.jobs.push({ ...action.payload, id: Date.now(), createdAt: new Date().toLocaleDateString() });
        },
        editJob: (state, action) => {
            const index = state.jobs.findIndex(j => j.id === action.payload.id);
            if (index !== -1) {
                state.jobs[index] = { ...state.jobs[index], ...action.payload };
            }
        },
        deleteJob: (state, action) => {
            state.jobs = state.jobs.filter(j => j.id !== action.payload);
        },
        // Study Materials
        addStudyMaterial: (state, action) => {
            state.studyMaterials.push({ ...action.payload, id: Date.now(), createdAt: new Date().toLocaleDateString() });
        },
        editStudyMaterial: (state, action) => {
            const index = state.studyMaterials.findIndex(m => m.id === action.payload.id);
            if (index !== -1) {
                state.studyMaterials[index] = { ...state.studyMaterials[index], ...action.payload };
            }
        },
        deleteStudyMaterial: (state, action) => {
            state.studyMaterials = state.studyMaterials.filter(s => s.id !== action.payload);
        },
        // Affiliations
        addAffiliation: (state, action) => {
            state.affiliations.push({ ...action.payload, id: Date.now(), createdAt: new Date().toLocaleDateString() });
        },
        editAffiliation: (state, action) => {
            const index = state.affiliations.findIndex(a => a.id === action.payload.id);
            if (index !== -1) {
                state.affiliations[index] = { ...state.affiliations[index], ...action.payload };
            }
        },
        deleteAffiliation: (state, action) => {
            state.affiliations = state.affiliations.filter(a => a.id !== action.payload);
        },
        // Sample Certificates
        addSampleCertificate: (state, action) => {
            state.sampleCertificates.push({ ...action.payload, id: Date.now(), createdAt: new Date().toLocaleDateString() });
        },
        editSampleCertificate: (state, action) => {
            const index = state.sampleCertificates.findIndex(s => s.id === action.payload.id);
            if (index !== -1) {
                state.sampleCertificates[index] = { ...state.sampleCertificates[index], ...action.payload };
            }
        },
        deleteSampleCertificate: (state, action) => {
            state.sampleCertificates = state.sampleCertificates.filter(s => s.id !== action.payload);
        },
        // Counters
        addCounter: (state, action) => {
            state.counters.push({ ...action.payload, id: Date.now(), createdAt: new Date().toLocaleDateString() });
        },
        editCounter: (state, action) => {
            const index = state.counters.findIndex(c => c.id === action.payload.id);
            if (index !== -1) {
                state.counters[index] = { ...state.counters[index], ...action.payload };
            }
        },
        deleteCounter: (state, action) => {
            state.counters = state.counters.filter(c => c.id !== action.payload);
        },
        // Payment Details
        addPaymentDetail: (state, action) => {
            state.paymentDetails.push({ ...action.payload, id: Date.now(), createdAt: new Date().toLocaleDateString() });
        },
        editPaymentDetail: (state, action) => {
            const index = state.paymentDetails.findIndex(p => p.id === action.payload.id);
            if (index !== -1) {
                state.paymentDetails[index] = { ...state.paymentDetails[index], ...action.payload };
            }
        },
        deletePaymentDetail: (state, action) => {
            state.paymentDetails = state.paymentDetails.filter(p => p.id !== action.payload);
        },
        // Testimonials
        updateTestimonialSettings: (state, action) => {
            state.testimonialSettings = { ...state.testimonialSettings, ...action.payload };
        },
        addTestimonial: (state, action) => {
            state.testimonials.push({ ...action.payload, id: Date.now(), createdAt: new Date().toLocaleDateString() });
        },
        editTestimonial: (state, action) => {
            const index = state.testimonials.findIndex(t => t.id === action.payload.id);
            if (index !== -1) {
                state.testimonials[index] = { ...state.testimonials[index], ...action.payload };
            }
        },
        deleteTestimonial: (state, action) => {
            state.testimonials = state.testimonials.filter(t => t.id !== action.payload);
        },
        // Services
        updateServiceSettings: (state, action) => {
            state.serviceSettings = { ...state.serviceSettings, ...action.payload };
        },
        addService: (state, action) => {
            state.services.push({ ...action.payload, id: Date.now(), createdAt: new Date().toLocaleDateString() });
        },
        editService: (state, action) => {
            const index = state.services.findIndex(s => s.id === action.payload.id);
            if (index !== -1) {
                state.services[index] = { ...state.services[index], ...action.payload };
            }
        },
        deleteService: (state, action) => {
            state.services = state.services.filter(s => s.id !== action.payload);
        },
        // Policies
        updatePolicy: (state, action) => {
            const index = state.policies.findIndex(p => p.id === action.payload.id);
            if (index !== -1) {
                state.policies[index] = { ...state.policies[index], ...action.payload };
            }
        },
        updateAboutSettings: (state, action) => {
            state.aboutSettings = { ...state.aboutSettings, ...action.payload };
        },
        updateSiteSettings: (state, action) => {
            state.siteSettings = { ...state.siteSettings, ...action.payload };
        },
        updateMissionVisionSettings: (state, action) => {
            state.missionVisionSettings = { ...state.missionVisionSettings, ...action.payload };
        },
        updateSocialMediaSettings: (state, action) => {
            state.socialMediaSettings = { ...state.socialMediaSettings, ...action.payload };
        },
        addMobileBanner: (state, action) => {
            state.mobileBanners.push({ ...action.payload, id: Date.now(), createdAt: new Date().toLocaleDateString() });
        },
        editMobileBanner: (state, action) => {
            const index = state.mobileBanners.findIndex(b => b.id === action.payload.id);
            if (index !== -1) {
                state.mobileBanners[index] = { ...state.mobileBanners[index], ...action.payload };
            }
        },
        deleteMobileBanner: (state, action) => {
            state.mobileBanners = state.mobileBanners.filter(b => b.id !== action.payload);
        },
        addTeacher: (state, action) => {
            state.teachers.push({ ...action.payload, id: Date.now(), createdAt: new Date().toLocaleDateString() });
        },
        editTeacher: (state, action) => {
            const index = state.teachers.findIndex(t => t.id === action.payload.id);
            if (index !== -1) {
                state.teachers[index] = { ...state.teachers[index], ...action.payload };
            }
        },
        deleteTeacher: (state, action) => {
            state.teachers = state.teachers.filter(t => t.id !== action.payload);
        },
        updateContactSettings: (state, action) => {
            state.contactSettings = { ...state.contactSettings, ...action.payload };
        }
    }
});

export const {
    addEvent, editEvent, deleteEvent,
    addBanner, deleteBanner, updateBannerSettings,
    updatePerformerSettings, addPerformer, editPerformer, deletePerformer,
    updateFAQSettings, addFAQ, editFAQ, deleteFAQ,
    addGalleryItem, editGalleryItem, deleteGalleryItem,
    addPost, editPost, deletePost,
    addPartner, editPartner, deletePartner,
    addJob, editJob, deleteJob,
    addStudyMaterial, editStudyMaterial, deleteStudyMaterial,
    addAffiliation, editAffiliation, deleteAffiliation,
    addSampleCertificate, editSampleCertificate, deleteSampleCertificate,
    addCounter, editCounter, deleteCounter,
    addPaymentDetail, editPaymentDetail, deletePaymentDetail,
    updateTestimonialSettings, addTestimonial, editTestimonial, deleteTestimonial,
    updateServiceSettings, addService, editService, deleteService,
    updatePolicy, updateAboutSettings, updateSiteSettings, updateMissionVisionSettings, updateSocialMediaSettings,
    addMobileBanner, editMobileBanner, deleteMobileBanner,
    addTeacher, editTeacher, deleteTeacher,
    updateContactSettings
} = websiteSlice.actions;

export default websiteSlice.reducer;
