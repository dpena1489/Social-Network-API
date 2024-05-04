const { User } = require('../models');
module.exports = {
    // Get all students
    async getUsers(req, res) {
        try {
            const users = await users.find();

            const studentObj = {

                res.json(users);
            } catch (err) {
                console.log(err);
                return res.status(500).json(err);
            }
        },
    // Get a single student
    async getSingleUser(req, res) {
            try {
                const user = await user.findOne({ _id: req.params.userId })
                    .select('-__v');

                if (!user) {
                    return res.status(404).json({ message: 'No user with that ID' })
                }

                res.json({
                    user,

                });
            } catch (err) {
                console.log(err);
                return res.status(500).json(err);
            }
        },
    // create a new student
    async createUser(req, res) {
            try {
                const user = await user.create(req.body);
                res.json(user);
            } catch (err) {
                res.status(500).json(err);
            }
        },
    // // Delete a student and remove them from the course
    // async deleteStudent(req, res) {
    //         try {
    //             const student = await Student.findOneAndDelete({ _id: req.params.studentId });

    //             if (!student) {
    //                 return res.status(404).json({ message: 'No such student exists' });
    //             }

    //             const course = await Course.findOneAndUpdate(
    //                 { students: req.params.studentId },
    //                 { $pull: { students: req.params.studentId } },
    //                 { new: true }
    //             );

    //             if (!course) {
    //                 return res.status(404).json({
    //                     message: 'Student deleted, but no courses found',
    //                 });
    //             }

    //             res.json({ message: 'Student successfully deleted' });
    //         } catch (err) {
    //             console.log(err);
    //             res.status(500).json(err);
            }
        },

   
            try {
                const student = await Student.findOneAndUpdate(
                    { _id: req.params.studentId },
                    { $addToSet: { assignments: req.body } },
                    { runValidators: true, new: true }
                );

                if (!student) {
                    return res
                        .status(404)
                        .json({ message: 'No student found with that ID :(' });
                }

                res.json(student);
            } catch (err) {
                res.status(500).json(err);
            }
        },
    // Remove assignment from a student
    async removeAssignment(req, res) {
            try {
                const student = await Student.findOneAndUpdate(
                    { _id: req.params.studentId },
                    { $pull: { assignment: { assignmentId: req.params.assignmentId } } },
                    { runValidators: true, new: true }
                );

                if (!student) {
                    return res
                        .status(404)
                        .json({ message: 'No student found with that ID :(' });
                }

                res.json(student);
            } catch (err) {
                res.status(500).json(err);
            }
        },
    };