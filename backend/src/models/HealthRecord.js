const mongoose = require('mongoose');

const healthRecordSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
      unique: true,
    },
    bloodType: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      default: null,
    },
    allergies: [
      {
        name: String,
        severity: {
          type: String,
          enum: ['mild', 'moderate', 'severe'],
        },
        notes: String,
      },
    ],
    vaccinations: [
      {
        name: String,
        date: Date,
        nextDueDate: Date,
        notes: String,
      },
    ],
    medicalConditions: [
      {
        condition: String,
        description: String,
        treatment: String,
      },
    ],
    medications: [
      {
        name: String,
        dosage: String,
        frequency: String,
        prescribedDate: Date,
      },
    ],
    emergencyContact: {
      name: String,
      phone: String,
      relationship: String,
    },
    lastCheckup: {
      date: Date,
      doctor: String,
      findings: String,
    },
    insuranceInfo: {
      provider: String,
      policyNumber: String,
      expiryDate: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('HealthRecord', healthRecordSchema);
