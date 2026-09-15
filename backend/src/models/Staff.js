const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const staffSchema = new mongoose.Schema(
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
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
    nationalId: {
      type: String,
      unique: true,
      sparse: true,
    },
    role: {
      type: String,
      enum: ['admin', 'teacher', 'assistant_teacher', 'staff', 'nutritionist', 'nurse'],
      required: true,
    },
    department: {
      type: String,
      enum: ['education', 'administration', 'health', 'support'],
      required: true,
    },
    qualification: String,
    certifications: [String],
    hireDate: {
      type: Date,
      required: true,
    },
    contractEndDate: Date,
    salary: Number,
    address: String,
    dateOfBirth: Date,
    gender: {
      type: String,
      enum: ['male', 'female'],
    },
    photo: String,
    workSchedule: {
      startTime: String,
      endTime: String,
      workingDays: [String],
    },
    responsibilities: [String],
    classes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },
    lastLogin: Date,
  },
  { timestamps: true }
);

// Hash password before saving
staffSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
staffSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Staff', staffSchema);
