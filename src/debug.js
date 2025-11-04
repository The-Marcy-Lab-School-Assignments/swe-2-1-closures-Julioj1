// Oops! This factory function exposes the students array.
// Can you make it private using closure?

const createCourse = (topic, instructor) => {
  const students = [];
  const course = {
    topic,
    instructor,
    getStudents() {
      return [...students];
    },
    addStudent(name) {
      students.push(name);
    },
    removeStudent(name) {
      students.splice(students.indexOf(name), 1);
    },
  }
  return course;
};

module.exports = {
  createCourse,
};
