const mongoose = require('mongoose');

const lessonPlanSchema = new mongoose.Schema(
  {
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
      required: true,
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Staff',
      required: true,
    },
    subject_ar: {
      type: String,
      required: true,
    },
    subject_en: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    objectives_ar: [String],
    objectives_en: [String],
    activities_ar: [String],
    activities_en: [String],
    materials: [String],
    duration: {
      type: Number,
      default: 60, // in minutes
    },
    assessmentMethods: [String],
    assessments: [
      {
        description: String,
        date: Date,
        results: String,
      },
    ],
    notes: String,
    resources: [
      {
        name: String,
        type: String,
        url: String,
      },
    ],
    status: {
      type: String,
      enum: ['planned', 'in_progress', 'completed', 'cancelled'],
      default: 'planned',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('LessonPlan', lessonPlanSchema);
