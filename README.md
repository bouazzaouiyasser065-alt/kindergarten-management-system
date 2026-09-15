# نظام إدارة الروضة - Kindergarten Management System

نظام شامل وحديث لإدارة تشغيل الروضات بكفاءة عالية.

## الميزات الرئيسية

✅ **إدارة الصفوف والطلاب**
- تسجيل الطلاب والبيانات الشخصية
- تتبع الحضور اليومي
- السجلات الصحية والتطعيمات
- تقارير الأداء الفردية

✅ **الجدولة والتنظيم**
- جداول الحصص والفصول
- تخطيط الأنشطة اليومية
- جداول المعلمين والموظفين
- إدارة الموارد

✅ **التواصل مع الوالدين**
- تقارير التقدم والأداء
- الإشعارات الفورية
- تحديثات الأحداث والفعاليات
- رسائل ثنائية الاتجاه

✅ **تتبع المنهج**
- خطط الدروس اليومية والأسبوعية
- معالم التطور والنمو
- تقييم المهارات
- الأنشطة التعليمية

✅ **إدارة الموظفين**
- جداول العمل
- الأدوار والمسؤوليات
- تقييم الأداء
- إدارة الإجازات

✅ **التتبع المالي**
- إدارة الرسوم الدراسية
- الفواتير والدفعات
- تتبع النفقات
- التقارير المالية

## المتطلبات

- Node.js 16+
- MongoDB 4.4+
- npm أو yarn
- متصفح حديث (Chrome, Firefox, Safari)

## البنية التقنية

```
kindergarten-management-system/
├── backend/
│   ├── src/
│   │   ├── models/          # نماذج قاعدة البيانات
│   │   ├── routes/          # المسارات والـ API
│   │   ├── controllers/     # منطق المعالجة
│   │   ├── middleware/      # البرامج الوسيطة
│   │   └── config/          # الإعدادات
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/      # مكونات React
│   │   ├── pages/           # الصفحات
│   │   ├── services/        # خدمات API
│   │   ├── hooks/           # React Hooks مخصصة
│   │   └── styles/          # الأنماط
│   ├── package.json
│   └── .env.example
└── docs/                    # التوثيق
```

## التكنولوجيات المستخدمة

### Backend
- **Node.js + Express** - خادم الويب
- **MongoDB** - قاعدة البيانات
- **Mongoose** - مكتبة النمذجة
- **JWT** - المصادقة
- **Multer** - رفع الملفات
- **Nodemailer** - إرسال البريد الإلكتروني

### Frontend
- **React.js** - واجهة المستخدم
- **TypeScript** - كود آمن النوع
- **Tailwind CSS** - تنسيق الواجهة
- **Axios** - طلبات HTTP
- **React Router** - التوجيه
- **i18n** - دعم اللغات (عربي/إنجليزي)

## البدء السريع

### 1. تثبيت المتطلبات

```bash
# استنساخ المشروع
git clone https://github.com/yourusername/kindergarten-management-system.git
cd kindergarten-management-system

# تثبيت المكتبات
npm install
```

### 2. إعداد المتغيرات البيئية

```bash
# Backend
cd backend
cp .env.example .env
# ثم قم بتعديل قيم المتغيرات في ملف .env

# Frontend
cd ../frontend
cp .env.example .env
```

### 3. تشغيل قاعدة البيانات

```bash
# تأكد من تشغيل MongoDB
mongod
```

### 4. تشغيل التطبيق

```bash
# في نافذة Terminal منفصلة - تشغيل Backend
cd backend
npm run dev

# في نافذة Terminal أخرى - تشغيل Frontend
cd frontend
npm start
```

التطبيق سيكون متاحاً على: `http://localhost:3000`

## هيكل قاعدة البيانات

### المجموعات الرئيسية

#### 1. Students (الطلاب)
```javascript
{
  _id: ObjectId,
  firstName_ar: String,
  lastName_ar: String,
  firstName_en: String,
  lastName_en: String,
  dateOfBirth: Date,
  gender: String, // 'male', 'female'
  class: ObjectId, // reference to Class
  enrollmentDate: Date,
  healthRecords: [],
  parent: ObjectId, // reference to Parent
  createdAt: Date,
  updatedAt: Date
}
```

#### 2. Classes (الفصول)
```javascript
{
  _id: ObjectId,
  name_ar: String,
  name_en: String,
  gradeLevel: String, // 'KG1', 'KG2', etc.
  capacity: Number,
  teacher: ObjectId, // reference to Staff
  schedule: [],
  curriculum: ObjectId, // reference to Curriculum
  createdAt: Date,
  updatedAt: Date
}
```

#### 3. Staff (الموظفون)
```javascript
{
  _id: ObjectId,
  firstName_ar: String,
  lastName_ar: String,
  email: String,
  phone: String,
  role: String, // 'teacher', 'admin', 'staff'
  department: String,
  hireDate: Date,
  schedule: [],
  responsibilities: [],
  createdAt: Date,
  updatedAt: Date
}
```

#### 4. Attendance (الحضور)
```javascript
{
  _id: ObjectId,
  student: ObjectId, // reference to Student
  date: Date,
  status: String, // 'present', 'absent', 'late', 'excused'
  notes: String,
  recordedBy: ObjectId, // reference to Staff
  createdAt: Date
}
```

#### 5. Parents (أولياء الأمور)
```javascript
{
  _id: ObjectId,
  firstName_ar: String,
  lastName_ar: String,
  email: String,
  phone: String,
  relationship: String, // 'father', 'mother', 'guardian'
  children: [ObjectId], // references to Students
  createdAt: Date,
  updatedAt: Date
}
```

#### 6. HealthRecords (السجلات الصحية)
```javascript
{
  _id: ObjectId,
  student: ObjectId, // reference to Student
  bloodType: String,
  allergies: [String],
  vaccinations: [],
  medicalConditions: [String],
  emergencyContact: String,
  emergencyPhone: String,
  lastCheckup: Date,
  createdAt: Date,
  updatedAt: Date
}
```

#### 7. LessonPlans (خطط الدروس)
```javascript
{
  _id: ObjectId,
  class: ObjectId, // reference to Class
  teacher: ObjectId, // reference to Staff
  subject: String,
  date: Date,
  objectives: [String],
  activities: [String],
  materials: [String],
  assessments: [String],
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

#### 8. Fees (الرسوم والفواتير)
```javascript
{
  _id: ObjectId,
  student: ObjectId, // reference to Student
  amount: Number,
  dueDate: Date,
  paidDate: Date,
  status: String, // 'pending', 'paid', 'overdue'
  invoiceNumber: String,
  description: String,
  createdAt: Date,
  updatedAt: Date
}
```

#### 9. Notifications (الإشعارات)
```javascript
{
  _id: ObjectId,
  recipient: ObjectId, // reference to Parent or Staff
  title_ar: String,
  title_en: String,
  message_ar: String,
  message_en: String,
  type: String, // 'attendance', 'event', 'fee', 'progress'
  isRead: Boolean,
  createdAt: Date
}
```

#### 10. Events (الفعاليات)
```javascript
{
  _id: ObjectId,
  title_ar: String,
  title_en: String,
  description_ar: String,
  description_en: String,
  date: Date,
  location: String,
  targetAudience: String, // 'students', 'parents', 'all'
  attachments: [],
  createdAt: Date,
  updatedAt: Date
}
```

## API Endpoints الأساسية

### المصادقة
- `POST /api/auth/login` - تسجيل الدخول
- `POST /api/auth/register` - إنشاء حساب
- `POST /api/auth/logout` - تسجيل الخروج
- `POST /api/auth/refresh` - تحديث التوكن

### إدارة الطلاب
- `GET /api/students` - قائمة الطلاب
- `GET /api/students/:id` - تفاصيل الطالب
- `POST /api/students` - إضافة طالب
- `PUT /api/students/:id` - تحديث الطالب
- `DELETE /api/students/:id` - حذف الطالب

### الحضور
- `GET /api/attendance` - قائمة الحضور
- `POST /api/attendance` - تسجيل حضور
- `PUT /api/attendance/:id` - تحديث الحضور
- `GET /api/attendance/student/:studentId` - حضور الطالب

### الرسوم والفواتير
- `GET /api/fees` - قائمة الرسوم
- `POST /api/fees` - إضافة رسم
- `PUT /api/fees/:id` - تحديث الرسم
- `GET /api/fees/student/:studentId` - رسوم الطالب

### الإشعارات
- `GET /api/notifications` - قائمة الإشعارات
- `POST /api/notifications` - إرسال إشعار
- `PUT /api/notifications/:id/read` - تحديد الإشعار كمقروء

## المساهمة

نرحب بمساهماتك! يرجى:
1. عمل Fork للمشروع
2. إنشاء فرع للميزة (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push الفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

## الترخيص

هذا المشروع مرخص تحت MIT License - انظر ملف LICENSE للتفاصيل.

## الدعم والتواصل

للأسئلة والدعم، يرجى فتح Issue أو التواصل معنا.

---

**تم التطوير بـ ❤️ لإدارة الروضات بكفاءة عالية**
