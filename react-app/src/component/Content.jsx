import Cover from "./Cover"
import About from "./About"
import MayKnow from "./MayKnow"
import Post from "./Post"
import Active from "./Active"
import { useParams } from 'react-router-dom';

function Content() {
  const { view } = useParams();

  return (
    <>
      <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow px-6 py-2">
              <Cover/>
              <div className="flex flex-wrap mt-6">
                  <About />  
                <div className="w-full lg:w-1/4 mt-12 lg:mt-0 lg:order-last">
                  <MayKnow />
                  {view === 'owner' && <Active />}
                </div>
                  <Post />
              </div>
          </main>
      </div>
    </>
  )
}

export default Content