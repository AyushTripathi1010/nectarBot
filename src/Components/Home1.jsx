
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import MainContent from './MainContent'
const Home1 = () => {
  return (
    <div className="h-screen flex flex-col mt-[30px]">
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar />
        <div className="flex flex-1 overflow-hidden">
          <MainContent />
        </div>
        <RightSidebar />
      </div>
    </div>
  )
}

export default Home1