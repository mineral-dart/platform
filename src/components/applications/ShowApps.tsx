import Application from "./Application"
import {useState} from "react"
import useApplication from "../../hooks/applications/useApplication";
import CreateApplication from "./CreateApplication";

const listTest: any [] = [
  {title: 'Lorem 1', description: 'Cras ultricies ligula sed magna dictum porta. Vivamus' +
      ' suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'},
  {title: 'Lorem 2', description: 'Cras ultricies ligula sed magna dictum porta. Vivamus' +
      ' suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'},
]



export default () => {
  const [position, setPosition] = useState(0)
  const {data} = useApplication()
  return (
    <div className="grid grid-cols-5 gap-4">
      { data?.length
        ? <div >
          { data.map((item, index) => (
            <Application data={item} key={index} />
          ))}
        </div>
       : <div className="">
          <CreateApplication />
        </div>
      }
    </div>

  )
}