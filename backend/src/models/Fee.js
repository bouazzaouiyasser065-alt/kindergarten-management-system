const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    academicYear: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    type: {
      type: String,
      enum: ['tuition', 'activity', 'transportation', 'meals', 'uniform', 'other'],
      default: 'tuition',
    },
    dueDate: {
      type: Date,
      required: true,
    },
    paidDate: Date,
    paidAmount: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['pending', 'partial', 'paid', 'overdue', 'cancelled'],
      default: 'pending',
    },
    invoiceNumber: {
      type: String,
      unique: true,
      sparse: true,
    },
    description: String,
    notes: String,
    paymentMethod: {
      type: String,
      enum: ['cash', 'check', 'bank_transfer', 'credit_card', 'online'],
      default: null,
    },
    referenceNumber: String,
    reminderSent: {
      type: Boolean,
      default: false,
    },
    reminderCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Fee', feeSchema);
