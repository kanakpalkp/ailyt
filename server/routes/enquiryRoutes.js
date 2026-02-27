const express = require('express');
const { body, param, query, validationResult } = require('express-validator');
const Enquiry = require('../models/Enquiry');
const asyncHandler = require('../middleware/asyncHandler');

const router = express.Router();

const courseInterestOptions = [
  'spoken-english',
  'confidence-building',
  'interview-skills',
  'ccc',
  'o-level',
  'basic-computers',
  'excel',
  'python',
  'data-analytics',
  'tableau',
];

const learningModeOptions = ['classroom', 'hybrid', 'online-support'];
const startPlanOptions = ['immediately', 'within-2-weeks', 'within-1-month', 'just-exploring'];
const statusOptions = ['new', 'contacted', 'enrolled', 'closed'];

const validate = (rules) => [
  ...rules,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }
    return next();
  },
];

router.post(
  '/',
  validate([
    body('fullName').trim().notEmpty().withMessage('Full name is required').isLength({ max: 120 }),
    body('phone').trim().notEmpty().withMessage('Phone number is required').isLength({ max: 25 }),
    body('email').trim().isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('courseInterest')
      .isIn(courseInterestOptions)
      .withMessage('Invalid course interest'),
    body('learningMode').isIn(learningModeOptions).withMessage('Invalid learning mode'),
    body('startPlan').isIn(startPlanOptions).withMessage('Invalid start timeline'),
    body('qualification')
      .trim()
      .notEmpty()
      .withMessage('Qualification is required')
      .isLength({ max: 180 }),
    body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 2000 }),
    body('consent').custom((value) => value === true).withMessage('Consent is required'),
  ]),
  asyncHandler(async (req, res) => {
    const {
      fullName,
      phone,
      email,
      courseInterest,
      learningMode,
      startPlan,
      qualification,
      message,
      consent,
    } = req.body;

    const enquiry = await Enquiry.create({
      fullName,
      phone,
      email,
      courseInterest,
      learningMode,
      startPlan,
      qualification,
      message,
      consent,
      source: 'learning-contact',
      status: 'new',
    });

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully',
      data: {
        enquiryId: enquiry._id,
        createdAt: enquiry.createdAt,
      },
    });
  })
);

router.get(
  '/',
  validate([
    query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
    query('limit')
      .optional()
      .isInt({ min: 1, max: 100 })
      .withMessage('Limit must be between 1 and 100'),
    query('status').optional().isIn(statusOptions).withMessage('Invalid status'),
  ]),
  asyncHandler(async (req, res) => {
    const page = Number.parseInt(req.query.page || '1', 10);
    const limit = Number.parseInt(req.query.limit || '25', 10);
    const skip = (page - 1) * limit;

    const filter = {};
    if (req.query.status) {
      filter.status = req.query.status;
    }

    const [enquiries, total] = await Promise.all([
      Enquiry.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Enquiry.countDocuments(filter),
    ]);

    res.status(200).json({
      success: true,
      message: 'Enquiries fetched successfully',
      data: enquiries,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / limit)),
      },
    });
  })
);

router.patch(
  '/:id/status',
  validate([
    param('id').isMongoId().withMessage('Invalid enquiry id'),
    body('status').isIn(statusOptions).withMessage('Invalid status'),
  ]),
  asyncHandler(async (req, res) => {
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Enquiry status updated successfully',
      data: enquiry,
    });
  })
);

module.exports = router;
