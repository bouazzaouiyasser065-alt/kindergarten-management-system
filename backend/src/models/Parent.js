const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema(
  {
    firstName_ar: {
      type: String,
      required: true,
      trim: true,
    },
    lastName_ar: {
      type: String,
      required: true,
      trim: true,
    },
    firstName_en: {
      type: String,
      required: true,
      trim: true,
    },
    lastName_en: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    phone: {
      type: String,
      required: true,
    },
    relationship: {
      type: String,
      enum: ['father', 'mother', 'guardian', 'other'],
      required: true,
    },
    nationalId: {
      type: String,
      unique: true,
      sparse: true,
    },
    occupationAr: String,
    occupationEn: String,
    companyName: String,
    workPhone: String,
    address: String,
    city: String,
    country: String,
    children: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
    preferredLanguage: {
      type: String,
      enum: ['ar', 'en'],
      default: 'ar',
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Parent', parentSchema);
