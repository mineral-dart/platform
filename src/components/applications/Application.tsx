import useComponentVisible from "../../hooks/useComponentVisible"
import {AnimatePresence, motion} from 'framer-motion'
import {useEffect} from "react";

type Props = {
  data: {title: string, description: string},
}

export default ({ data }: Props) => {
  const { ref, isVisible, toggle } = useComponentVisible();

  return (
      <div  className="flex flex-col bg-[#F2F3F5] border shadow-sm min-h-[270px] rounded-md overflow-hidden relative group">
        <div className="h-28 overflow-hidden">
          <img src="https://cdn.discordapp.com/attachments/935833137349541918/1018309305017049139/deviceframes_9.png" alt=""/>
        </div>
        <div
          className={`h-8 w-8 bg-white rounded-md border border-gray-200 absolute hidden" +
          " top-[3.7rem] right-0 mr-4 group-hover:flex ${ isVisible ? 'flex' : 'hidden'}`}
          ref={ref}
        >
          <button
            className={`rounded-md flex items-center text-gray-200 w-full h-full`}
            id="menu-button" aria-expanded="true" aria-haspopup="true"
            onClick={() => toggle()}
          >

            <span className="sr-only">Open options</span>
            <svg className="h-5 w-5 text-[#50565F] rotate-90 mx-auto"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                 fill="currentColor" aria-hidden="true">
              <path
                d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
            </svg>
          </button>
          <AnimatePresence>
            {
              isVisible  &&
              <motion.div

                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  ease: [0.5, 0.71, 1, 1.5],
                }}
                exit={{ opacity: 0, scale: 1}}
                initial={{ opacity: 0, scale: 1 }}
                className={`origin-top-right absolute z-50 right-0 mt-9 w-48 rounded-sm shadow-lg bg-white opacity-0
         
            `}>
                <div className="py-1 px-2 flex flex-col gap-1">
                  <div
                    className="flex items-center text-sm text-gray-500 justify-between hover:bg-indigo-500 hover:text-white rounded-sm py-2 px-2">
                    <span className="">Modifier le projet</span>
                    <div className=" h-4 w-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                           className="">
                        <path fill-rule="evenodd"
                              d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                              clip-rule="evenodd"/>
                      </svg>

                    </div>
                  </div>
                </div>
              </motion.div>
            }
          </AnimatePresence>


        </div>
        <div className="flex flex-col p-4 justify-between h-full">
          <div className="flex flex-col">
            <h4 className="text-md text-gray-900 font-medium">{data.title}</h4>
            <p className="text-xs text-gray-500">{data.description}</p>
          </div>

        </div>
      </div>

  )
}