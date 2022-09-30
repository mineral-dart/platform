import {useState} from "react";
import useComponentVisible from "../../hooks/useComponentVisible";
import {AnimatePresence, motion} from "framer-motion";

const Modal = ({data}: any) => {

  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-[99] inset-0 bg-black bg-opacity-75"
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.2,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        exit={{ opacity: 0}}
        initial={{ opacity: 0}}
      >
        <div ref={data} className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-96 p-8 bg-white border border-gray-200 rounded-lg shadow-2xl">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2">
              <h3 className="font-title text-2xl text-[#565a90] font-medium">Create Application</h3>
              <h4 className="text-xs text-gray-500">You can configure your application once created</h4>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <form action="" className="text-gray-600 flex flex-col gap-4">
                <div className="">
                  <label htmlFor="name">Name of application</label>
                  <div className="mt-1">
                    <input type="text" name={"name"} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                  </div>
                </div>
                <div>
                  <label htmlFor="description">Description of application</label>
                  <div className="mt-1">
                    <input type="text" name={"description"} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <button className="absolute top-0 right-0 m-4 bg-slate-100 shadow-sm rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>

          </button>
        </div>
      </motion.div>
    </AnimatePresence>

  )
}

export default () => {
  const { ref, isVisible, toggle, setIsVisible} = useComponentVisible()
  return (
    <div className="">
      <button
        type={"button"}
        onClick={toggle}
        className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-8 text-center hover:border-gray-400"
      >
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No projects</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by creating a new project.</p>
          <div className="mt-6">
            <button
              type="button"

              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
              </svg>

              New Project
            </button>
          </div>
        </div>
      </button>
      { isVisible &&
        <Modal data={ref} />
      }
    </div>
  )
}