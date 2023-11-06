import React from 'react'


const Course = ({courses}) => {
    return (
        <>
            <ul>
                {courses.map(course =>
                    <li>
                        <h1>{course.name}</h1>
                        {course.parts.map(info => <li>{info.name}: {info.exercises}</li>)}
                        <b>total of {course.parts.reduce((acc, info)=>acc+info.exercises, 0)} exercises</b>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Course