import faker from "faker"
import { useState } from "react"
import TinderCard from "react-tinder-card"

const candidates = [
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: faker.name.jobTitle(),
    skills: ["java", "python", "SQL", "PHP", "Node js", "React js"],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: faker.name.jobTitle(),
    skills: ["java", "python", "SQL", "PHP", "Node js", "React js"],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    jobs: faker.name.jobTitle(),
    numberExp: faker.datatype.number(),
    skills: ["java", "python", "SQL", "PHP", "Node js", "React js"],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: faker.name.jobTitle(),
    skills: ["java", "python", "SQL", "PHP", "Node js", "React js"],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: faker.name.jobTitle(),
    skills: ["java", "python", "SQL", "PHP", "Node js", "React js"],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: faker.name.jobTitle(),
    skills: ["java", "python", "SQL", "PHP", "Node js", "React js"],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: faker.name.jobTitle(),
    skills: ["java", "python", "SQL", "PHP", "Node js", "React js"],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: faker.name.jobTitle(),
    skills: ["java", "python", "SQL", "PHP", "Node js", "React js"],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: faker.name.jobTitle(),
    skills: ["java", "python", "SQL", "PHP", "Node js", "React js"],
  },
]

const Id = () => {
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen!")
  }

  return (
    <>
      <div className="cardContainer">
        {candidates.map(
          ({ firstName, lastName, numberExp, skills, jobs }, index) => (
            <TinderCard
              className="swipe"
              key={candidates.name}
              onSwipe={(dir) => swiped(dir, candidates.name)}
              onCardLeftScreen={() => outOfFrame(candidates.name)}
            >
              <div className="grid grid-cols-1 gap-4 max-w-sm rounded overflow-hidden shadow-lg bg-blue-100">
                <img
                  className="justify-self-center"
                  src="/iconProfile.png"
                  width={150}
                  height={150}
                />
                <div className="px-6 py-4 justify-self-center">
                  <div className="font-bold text-xl mb-2 text-center">
                    {firstName} {lastName}
                  </div>
                  <p className="text-gray-700 text-base font-bold">{jobs}</p>
                  <p className="text-gray-700 text-center ">Full-time, Paris</p>
                </div>
                <div className="px-6 pt-4 pb-2 ">
                  {skills.map((item) => (
                    <span className="inline-block bg-indigo-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </TinderCard>
          )
        )}
      </div>
    </>
  )
}

export default Id
