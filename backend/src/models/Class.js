const mongoose = require('mongoose');

const classSchema = new mongoose.Schema(
  {
    name_ar: {
      type: String,
      required: true,
      trim: true,
    },
    name_en: {
      type: String,
      required: true,
      trim: true,
    },
    gradeLevel: {
      type: String,
      enum: ['KG1', 'KG2', 'KG3'],
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
      min: 1,
      max: 50,
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Staff',
      required: true,
    },
    assistantTeacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Staff',
      default: null,
    },
    room: {
      type: String,
      default: '',
    },
    schedule: {
      startTime: String, // 'HH:mm'
      endTime: String,   // 'HH:mm'
      days: [String],    // ['Saturday', 'Sunday', ...]
    },
    curriculum: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Curriculum',
      default: null,
    },
    academicYear: {
      type: String,
      default: new Date().getFullYear().toString(),
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Class', classSchema);
