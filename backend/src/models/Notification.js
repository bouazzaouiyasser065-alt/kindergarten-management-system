const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
  {
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Parent',
      required: true,
    },
    title_ar: {
      type: String,
      required: true,
    },
    title_en: {
      type: String,
      required: true,
    },
    message_ar: {
      type: String,
      required: true,
    },
    message_en: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['attendance', 'event', 'fee', 'progress', 'general', 'emergency'],
      required: true,
    },
    relatedEntity: {
      type: {
        type: String,
        enum: ['student', 'event', 'fee', 'announcement'],
      },
      id: mongoose.Schema.Types.ObjectId,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    readAt: Date,
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    deliveryMethod: {
      type: String,
      enum: ['in_app', 'email', 'sms', 'push'],
      default: 'in_app',
    },
    deliveryStatus: {
      type: String,
      enum: ['pending', 'sent', 'failed'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Notification', notificationSchema);
