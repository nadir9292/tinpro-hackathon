import faker from "faker"
import React, { useState, useMemo, useRef } from "react"
import TinderCard from "react-tinder-card"
import Text from "../../src/components/Text"

const candidates = [
  {
    id: faker.datatype.number(),
    icon: "/dev_icon.png",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: faker.name.jobTitle(),
    skills: [
      "java",
      "python",
      "SQL",
      "PHP",
      "Node js",
      "React js",
      "fullstack",
    ],
  },
  {
    id: faker.datatype.number(),
    icon: "/bigdata_icon.png",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: faker.name.jobTitle(),
    skills: ["java", "python", "SQL", "PHP", "Node js", "React js"],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    icon: "/dev_icon.png",
    lastName: faker.name.lastName(),
    jobs: faker.name.jobTitle(),
    numberExp: faker.datatype.number(),
    skills: ["java", "python", "SQL", "PHP", "Node js", "React js"],
  },
  {
    id: faker.datatype.number(),
    icon: "/reseaux_icon.png",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: faker.name.jobTitle(),
    skills: ["java", "python", "SQL", "PHP", "Node js", "React js"],
  },
  {
    id: faker.datatype.number(),
    icon: "/bigdata_icon.png",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: faker.name.jobTitle(),
    skills: ["java", "python", "SQL", "PHP", "Node js", "React js"],
  },
  {
    id: faker.datatype.number(),
    icon: "/reseaux_icon.png",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: faker.name.jobTitle(),
    skills: ["java", "python", "SQL", "PHP", "Node js", "React js"],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    icon: "/dev_icon.png",
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: faker.name.jobTitle(),
    skills: ["java", "python", "SQL", "PHP", "Node js", "React js"],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    icon: "/reseaux_icon.png",
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: faker.name.jobTitle(),
    skills: ["java", "python", "SQL", "PHP", "Node js", "React js"],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    icon: "/reseaux_icon.png",
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: faker.name.jobTitle(),
    skills: ["java", "python", "SQL", "PHP", "Node js", "React js"],
  },
]

const id = () => {
  const [currentIndex, setCurrentIndex] = useState(candidates.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(candidates.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < candidates.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < candidates.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <div className="bg-red-500 h-screen flex justify-center">
      <div>
        {candidates.map(
          (firstName, lastName, numberExp, jobs, skills, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={candidates.firstname}
              onSwipe={(dir) => swiped(dir, candidates.firstname, index)}
              onCardLeftScreen={() => outOfFrame(candidates.firstname, index)}
            >
              <div className="bg-green-500 rounded">
                <h1>Job</h1>
                <h1>Nom Prenom</h1>
                <h1>Contrat</h1>
                <h1>TOTOT</h1>
                <h1>TOTOT</h1>
                <h1>TOTOT</h1>
              </div>
            </TinderCard>
          )
        )}
      </div>

      <div className="self-end">
        {lastDirection ? (
          <h2 key={lastDirection} className="bg-blue-200 ">
            You swiped {lastDirection}
          </h2>
        ) : (
          <h2 className="">
            Swipe a card or press a button to get Restore Card button visible!
          </h2>
        )}
      </div>
    </div>
  )
}

export default id
