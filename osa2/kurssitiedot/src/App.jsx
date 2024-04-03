const Header = (props) => {
  console.log(props.course)
  return (
    <h1>
      {props.course}
    </h1>
  )
}


const Content = (props) => {

  return (
    <div>
        {props.parts.map(value =>
          <Part key={value.id} course={value} />
        )}
    </div>
    )
}


const Part = ({course}) => {
  return (
    <div>
    {course.name} {course.exercises}
    </div>
  )
}

const Total = ({parts}) => { 
  const total = parts.reduce( ( total, part) => {
    return total+part.exercises
  },0)
  
  return (
    <b>
      Total of {total} exercises 
    </b>
  )
}

const Course = ({course}) => {

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <br />
      <Total parts={course.parts}/>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
      ,
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }


  return (
    <div>
    <Course key={course.parts.id} course={course} />
  </div>
  )
}

export default App