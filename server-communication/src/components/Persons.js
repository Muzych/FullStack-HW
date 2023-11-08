import React  from "react";


const Persons = ({persons, filter}) => {
    return persons.map(person => {
        return filter === '' ? (
            <li key={person.id}>{person.name} {person.number}</li>
        ) : (
            person.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 && (
                <li key={person.id}>{person.name} {person.number}</li>
            )
        )
    })
}

export default Persons;