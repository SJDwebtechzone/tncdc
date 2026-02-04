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
        deleteCourse: (state, action) => {
            state.courses = state.courses.filter(c => c.id !== action.payload);
        },
        // Categories
        addCategory: (state, action) => {
            state.categories.push({ ...action.payload, id: Date.now() });
        },
        // Award Categories
        addAwardCategory: (state, action) => {
            if (!state.awardCategories) state.awardCategories = [];
            state.awardCategories.push({ ...action.payload, id: Date.now() });
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
        // Videos
        addVideo: (state, action) => {
            if (!state.videos) state.videos = [];
            state.videos.push({ ...action.payload, id: Date.now() });
        }
    }
});

export const {
    addCourse, deleteCourse,
    addCategory, addAwardCategory,
    addSubject, deleteSubject,
    addLanguage, deleteLanguage,
    addExamGrade, deleteExamGrade,
    addOnlineClass,
    addReview,
    addNote,
    addVideo
} = courseSlice.actions;

export default courseSlice.reducer;
