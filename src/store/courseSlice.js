import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    courses: [],
    categories: [],
    subjects: [],
    languages: [],
    examGrades: [],
    videos: [],
    notes: [],
    reviews: [],
    awardCategories: [],
    onlineClasses: []
};

const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        // Courses
        addCourse: (state, action) => {
            state.courses.push({ ...action.payload, id: Date.now() });
        },
        updateCourse: (state, action) => {
            const index = state.courses.findIndex(c => c.id === action.payload.id);
            if (index !== -1) {
                state.courses[index] = action.payload;
            }
        },
        toggleCourseStatus: (state, action) => {
            const index = state.courses.findIndex(c => c.id === action.payload);
            if (index !== -1) {
                state.courses[index].status = !state.courses[index].status;
            }
        },
        deleteCourse: (state, action) => {
            state.courses = state.courses.filter(c => c.id !== action.payload);
        },
        // Categories
        addCategory: (state, action) => {
            state.categories.push({ ...action.payload, id: Date.now() });
        },
        updateCategory: (state, action) => {
            const index = state.categories.findIndex(c => c.id === action.payload.id);
            if (index !== -1) {
                state.categories[index] = action.payload;
            }
        },
        toggleCategoryStatus: (state, action) => {
            const index = state.categories.findIndex(c => c.id === action.payload);
            if (index !== -1) {
                state.categories[index].status = !state.categories[index].status;
            }
        },
        // Award Categories
        addAwardCategory: (state, action) => {
            if (!state.awardCategories) state.awardCategories = [];
            state.awardCategories.push({ ...action.payload, id: Date.now() });
        },
        updateAwardCategory: (state, action) => {
            const index = state.awardCategories.findIndex(c => c.id === action.payload.id);
            if (index !== -1) {
                state.awardCategories[index] = action.payload;
            }
        },
        toggleAwardCategoryStatus: (state, action) => {
            const index = state.awardCategories.findIndex(c => c.id === action.payload);
            if (index !== -1) {
                state.awardCategories[index].status = !state.awardCategories[index].status;
            }
        },
        // Subjects
        addSubject: (state, action) => {
            state.subjects.push({ ...action.payload, id: Date.now() });
        },
        deleteSubject: (state, action) => {
            state.subjects = state.subjects.filter(s => s.id !== action.payload);
        },
        // Languages
        addLanguage: (state, action) => {
            state.languages.push({ ...action.payload, id: Date.now() });
        },
        updateLanguage: (state, action) => {
            const index = state.languages.findIndex(l => l.id === action.payload.id);
            if (index !== -1) {
                state.languages[index] = action.payload;
            }
        },
        toggleLanguageStatus: (state, action) => {
            const index = state.languages.findIndex(l => l.id === action.payload);
            if (index !== -1) {
                state.languages[index].status = !state.languages[index].status;
            }
        },
        deleteLanguage: (state, action) => {
            state.languages = state.languages.filter(l => l.id !== action.payload);
        },
        // Exam Grades
        addExamGrade: (state, action) => {
            state.examGrades.push({ ...action.payload, id: Date.now() });
        },
        deleteExamGrade: (state, action) => {
            state.examGrades = state.examGrades.filter(g => g.id !== action.payload);
        },
        // Online Classes
        addOnlineClass: (state, action) => {
            if (!state.onlineClasses) state.onlineClasses = [];
            state.onlineClasses.push({ ...action.payload, id: Date.now() });
        },
        updateOnlineClass: (state, action) => {
            const index = state.onlineClasses.findIndex(c => c.id === action.payload.id);
            if (index !== -1) {
                state.onlineClasses[index] = action.payload;
            }
        },
        toggleOnlineClassStatus: (state, action) => {
            const index = state.onlineClasses.findIndex(c => c.id === action.payload);
            if (index !== -1) {
                state.onlineClasses[index].status = !state.onlineClasses[index].status;
            }
        },
        // Reviews
        addReview: (state, action) => {
            if (!state.reviews) state.reviews = [];
            state.reviews.push({ ...action.payload, id: Date.now() });
        },
        // Notes
        addNote: (state, action) => {
            if (!state.notes) state.notes = [];
            state.notes.push({ ...action.payload, id: Date.now() });
        },
        updateNote: (state, action) => {
            const index = state.notes.findIndex(n => n.id === action.payload.id);
            if (index !== -1) {
                state.notes[index] = action.payload;
            }
        },
        // Videos
        addVideo: (state, action) => {
            if (!state.videos) state.videos = [];
            state.videos.push({ ...action.payload, id: Date.now() });
        },
        updateVideo: (state, action) => {
            const index = state.videos.findIndex(v => v.id === action.payload.id);
            if (index !== -1) {
                state.videos[index] = action.payload;
            }
        }
    }
});

export const {
    addCourse, deleteCourse, updateCourse, toggleCourseStatus,
    addCategory, updateCategory, toggleCategoryStatus,
    addAwardCategory, updateAwardCategory, toggleAwardCategoryStatus,
    addSubject, deleteSubject,
    addLanguage, updateLanguage, toggleLanguageStatus, deleteLanguage,
    addExamGrade, deleteExamGrade,
    addOnlineClass, updateOnlineClass, toggleOnlineClassStatus,
    addReview,
    addNote, updateNote,
    addVideo, updateVideo
} = courseSlice.actions;

export default courseSlice.reducer;
