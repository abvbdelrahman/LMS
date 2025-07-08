const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    comment: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    }
}, {
    timestamps: true
});

reviewSchema.index({ user_id: 1, course_id: 1 }, { unique: true });

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
