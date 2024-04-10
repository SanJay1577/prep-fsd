/* eslint-disable react/prop-types */
import SideDrawer from "./SideDrawer";
import Content from "./Content";
import NavigationList from "./NavigationList";

const MainComp = ({ children }) => {
  return (
    <div className="flex ">
      <div className="w-15 rounded-lg">
        <SideDrawer>
          <NavigationList></NavigationList>
        </SideDrawer>
      </div>
      <div className="w-4/5">
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default MainComp;
