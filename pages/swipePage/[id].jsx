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
    jobs: "Developper Web",
    skills: [
      "java",
      "python",
      "SQL",
      "PHP",
      "Node js",
      "React js",
      "fullstack",
      "python",
      "SQL",
      "PHP",
      "Node js",
      "React js",
    ],
  },
  {
    id: faker.datatype.number(),
    icon: "/bigdata_icon.png",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: "DATA ANALYST",
    skills: [
      "AMAZON AWS",
      "Hadoop",
      "LINUX",
      "cloud",
      "Firewalls",
      "SCRUM",
      "SQL",
      "PHP",
      "php",
      "SQL",
      "cloud ",
    ],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    icon: "/dev_icon.png",
    lastName: faker.name.lastName(),
    jobs: "Developper FULLSTACK",
    numberExp: faker.datatype.number(),
    skills: [
      "java",
      "TYPESCRIPT",
      "SQL",
      "PHP",
      "cloud",
      "Firewalls",
      "SCRUM",
      "SQL",
      "PHP",
      "SYMFONY",
      "React js",
    ],
  },
  {
    id: faker.datatype.number(),
    icon: "/reseaux_icon.png",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: "ADMIN SYS",
    jobs: faker.name.jobTitle(),
    skills: [
      "Cisco",
      "DNS",
      "SQL",
      "cisco routers",
      "SDWAN",
      "PPOE",
      "cloud",
      "Firewalls",
      "SCRUM",
    ],
  },
  {
    id: faker.datatype.number(),
    icon: "/bigdata_icon.png",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: "DATA ANALYST",
    skills: [
      "Hadoop",
      "php",
      "SQL",
      "cloud ",
      "JIRA",
      "DATAVIS",
      "SQL",
      "cisco routers",
      "SDWAN",
      "PPOE",
    ],
  },
  {
    id: faker.datatype.number(),
    icon: "/reseaux_icon.png",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: "ADMIN SYS",
    skills: [
      "Wifi",
      "Switch",
      "Script",
      "linux",
      "java",
      "TYPESCRIPT",
      "SQL",
      "PHP",
      "Fortinet",
      "GPO",
    ],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    icon: "/dev_icon.png",
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: "Developper FULLSTACK",
    skills: [
      "java",
      "python",
      "SQL",
      "PHP",
      "Node js",
      "React js",
      "SQL",
      "PHP",
      "cloud",
      "Firewalls",
      "SCRUM",
      "SQL",
    ],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    icon: "/reseaux_icon.png",
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: "ADMIN SYS",
    skills: [
      "java",
      "python",
      "SQL",
      "PHP",
      "Node js",
      "React js",
      "SQL",
      "PHP",
      "cloud",
      "Firewalls",
      "SCRUM",
      "SQL",
    ],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    icon: "/reseaux_icon.png",
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: "ADMIN SYS",
    skills: [
      "java",
      "python",
      "SQL",
      "PHP",
      "Node js",
      "React js",
      "PHP",
      "Node js",
      "React js",
      "python",
      "SQL",
      "PHP",
      "Node js",
      "React js",
    ],
  },
  {
    id: faker.datatype.number(),
    icon: "/cyber_icon.png",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: "Cybersecurity Engineer",
    skills: [
      "java",
      "python",
      "SQL",
      "PHP",
      "Node js",
      "React js",
      "fullstack",
      "python",
      "SQL",
      "PHP",
      "Node js",
      "React js",
    ],
  },
  {
    id: faker.datatype.number(),
    icon: "/dev_icon.png",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: "Developper Web",
    skills: [
      "java",
      "python",
      "SQL",
      "PHP",
      "Node js",
      "React js",
      "fullstack",
      "python",
      "SQL",
      "PHP",
      "Node js",
      "React js",
    ],
  },
  {
    id: faker.datatype.number(),
    icon: "/bigdata_icon.png",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    numberExp: faker.datatype.number(),
    jobs: "DATA ANALYST",
    skills: [
      "AMAZON AWS",
      "Hadoop",
      "LINUX",
      "cloud",
      "Firewalls",
      "SCRUM",
      "SQL",
      "PHP",
      "php",
      "SQL",
      "cloud ",
    ],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    icon: "/dev_icon.png",
    lastName: faker.name.lastName(),
    jobs: "Developper FULLSTACK",
    numberExp: faker.datatype.number(),
    skills: [
      "java",
      "TYPESCRIPT",
      "SQL",
      "PHP",
      "cloud",
      "Firewalls",
      "SCRUM",
      "SQL",
      "PHP",
      "SYMFONY",
      "React js",
    ],
  },
]

const id = () => {
  const [lastDirection, setLastDirection] = useState()

  const onSwipe = (direction) => {
    setLastDirection(direction)
  }

  return (
    <div className="flex  justify-center">
      {candidates.map(
        ({ firstName, lastName, numberExp, icon, skills, jobs }, index) => (
          <TinderCard className="swipe" key={candidates.name} onSwipe={onSwipe}>
            <div className="grid grid-cols-1 gap-4  py-5 max-w-sm rounded overflow-hidden shadow-lg bg-orange-400">
              <img
                className="justify-self-center"
                src={icon}
                width={150}
                height={150}
              />
              <div className="px-6 py-4 justify-self-center">
                <div className="font-bold text-4xl mb-2 text-center">
                  {firstName} {lastName}
                </div>
                <p className="text-gray-700 text-center text-xl font-bold">
                  {jobs}
                </p>
                <p className="text-gray-700 text-center ">Full-time, Paris</p>
              </div>
              <div className="px-6 pt-4 pb-2 ">
                {skills.map((item) => (
                  <span className="inline-block bg-indigo-100 rounded-full px-3 py-1 text-md text-center font-semibold text-gray-700 mr-2 mb-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </TinderCard>
        )
      )}
    </div>
  )
}

export default id
