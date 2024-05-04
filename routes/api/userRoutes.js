const router = require('express').Router();
const {
  getStudents,
  getSingleStudent,
  createStudent,
  deleteStudent,
  addAssignment,
  removeAssignment,
} = require('../../controllers/studentController');

// /api/students
router.route('/').get().post();

// /api/students/:studentId
router.route('/:userID').get().delete();

// /api/students/:studentId/assignments
router.route('/:userID/friend').post();



module.exports = router;
