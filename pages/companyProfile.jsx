import { useState } from "react"
import Link from "next/link"

const companyProfile = () => {
  const [choice, setChoice] = useState(false)

  return (
    <>
      <div className="h-full">
        {/* Card code block start */}
        <div className="bg-white dark:bg-gray-800 shadow rounded">
          <div className="relative">
            <img
              className="h-56 shadow rounded-t w-full object-cover object-center"
              src="https://investir.lesechos.fr/medias/2022/06/14/2021203_1655189740_1838504-1554208987-atos-headquarters-bezons-visual1_1280x768.jpg"
              alt
            />
            <div className="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white">
              <img
                className="w-full h-full overflow-hidden object-cover rounded"
                src="https://media-exp2.licdn.com/dms/image/C4D0BAQEA-7akfn4FzA/company-logo_200_200/0/1638575002083?e=2147483647&v=beta&t=DbjV6hr7WJy9vSsfqW9hc9eoHQikhmXs930iujEDf1o"
                alt
              />
            </div>
          </div>
          <div className="px-5 xl:px-10 pb-10">
            <div className="flex justify-center xl:justify-end w-full pt-16 xl:pt-5"></div>
            <div className="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
              <div className="xl:pr-16 w-full xl:w-2/3">
                <div className="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                  <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                    Developper Web
                  </h2>
                  <div className="text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full">
                    Full-time
                  </div>
                </div>
                <p className="text-center my-3 xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5">
                  HI, I am a direct response copywriter from the US. When you
                  work with me, we have the same goal. Maximizing your ROI
                </p>
                <p className="text-zinc-100 font-bold my-3">Salary : 2500€</p>
                <p className="text-zinc-100 font-bold my-3">Avantges : </p>
                <ol>
                  <li className="text-zinc-100">- 1</li>
                  <li className="text-zinc-100">- 1</li>
                  <li className="text-zinc-100">- 1</li>
                  <li className="text-zinc-100">- 1</li>
                  <li className="text-zinc-100">- 1</li>
                  <li className="text-zinc-100">- 1</li>
                </ol>
                <div className="flex justify-center">
                  {!choice ? (
                    <>
                      <button
                        onClick={() => setChoice(true)}
                        className="mx-2 my-2  bg-green-500 transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-600 rounded border border-indigo-700 text-zinc-100 text-lg font-bold px-10 py-5 "
                      >
                        YES
                      </button>
                      <button className="mx-2 my-2 bg-red-500 transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-600 rounded border border-indigo-700 text-zinc-100 px-10 py-5 text-lg font-bold ">
                        NO
                      </button>
                    </>
                  ) : (
                    <Link href="/chat">
                      <a>
                        <button className="mx-2 my-2 bg-red-500 transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-600 rounded border border-indigo-700 text-zinc-100 px-10 py-5 text-lg font-bold ">
                          CHAT
                        </button>
                      </a>
                    </Link>
                  )}
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        {/* Card code block end */}
      </div>
    </>
  )
}

export default companyProfile
