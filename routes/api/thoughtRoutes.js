const router = require('express').Router();
// const {
//   getCourses,
//   getSingleCourse,
//   createCourse,
//   updateCourse,
//   deleteCourse,
// } = require('../../controllers/courseController.js');

// /api/courses
router.route('/').get().post();

// /api/courses/:courseId
router
  .route('/:thoughtID')
  .get()
  .put()
  .delete();

module.exports = router;
