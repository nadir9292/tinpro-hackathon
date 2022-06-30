import faker from "faker"
import Link from "next/link"
import Text from "../src/components/Text"
import Button from "../src/components/Button"

const profiles = [
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    expYears: 2,
    jobs: "Developper Web",
    skills: [
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
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    expYears: 9,
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
    lastName: faker.name.lastName(),
    expYears: 4,
    jobs: "Developper FULLSTACK",
    skills: ["java", "TYPESCRIPT", "SQL", "PHP"],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    expYears: 0,
    jobs: "ADMIN SYS",
    skills: ["Cisco", "DNS", "SQL", "cisco routers", "SDWAN", "PPOE", "cloud"],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    expYears: 2,
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
    ],
  },
  {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    expYears: 1,
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
]

const manageProfile = () => {
  return (
    <div className="py-8 w-full ">
      {profiles.map(
        ({ id, firstName, lastName, expYears, jobs, skills }, index) => (
          <Link
            href={{
              pathname: `./swipePage/${id}`,
            }}
          >
            <a>
              <div
                key={index}
                className="lg:flex items-center justify-center w-full mb-5 "
              >
                <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 rounded shadow-lg">
                  <div className="flex items-center border-b border-gray-200 pb-6">
                    <div className="flex items-start justify-between w-full">
                      <div className="pl-3 w-full">
                        <Text variant="profile_text" size="sm">
                          Profile n°{index}
                        </Text>
                        <p className="text-xl font-medium mt-2 leading-5 text-gray-800">
                          <span className="text-2xl font-bold">{jobs}</span>
                        </p>
                        <p className="text-sm leading-normal pt-2 text-gray-500">
                          {expYears} exp years
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="grid grid-rows-3 grid-flow-col gap-2">
                      {skills.map((item) => (
                        <div className="py-2 px-4 text-center font-bold mt-2 text-center  text-xs  text-indigo-800 rounded-full bg-indigo-100">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        )
      )}
      <Button variant="btnAdd" size="lg">
        ➕
      </Button>
    </div>
  )
}

export default manageProfile
