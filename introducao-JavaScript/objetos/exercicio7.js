const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

/* Req 1 */
const positionArray = (position, objct) => {
  const response = objct.lessons[position]
  return response
}

console.log(positionArray(0, school));

/* Req 2 */
const sum = (object) => {
  const course = object.lessons
  let sum = 0

  for (let index = 0; index < course.length; index += 1) {
    sum += course[index].students
  }

  return sum
}

console.log(sum(school));

/* Req 3 */

const verifyKey = (object, key) => {
  const course = object.lessons
  let value = 0
  let verify = ''
  for (let index = 0; index < course.length; index += 1) {
    const keysInObject = Object.keys(course[index])
    if (keysInObject.includes(key)) {
      value += 1
    } else {
      value += 0
    }
  }

  if (course.length === value) {
    return verify = true
  } else {
    return verify = false
  }
}

console.log(verifyKey(school, 'course'));

/* Req 4 */

const changeKey = (obj, course, value) => {

  let findCourse;
  for (let index = 0; index < obj.lessons.length; index += 1) {
    let element = obj.lessons[index];
    if (element.course === course) {
      findCourse = element;
      break;
    }
  }


  if (findCourse !== undefined) {
    findCourse.shift = value;
    return findCourse;
  } else {
    return 'Curso não encontrado.';
  }
};

console.log(changeKey(school, 'Python', 'Noite'));


