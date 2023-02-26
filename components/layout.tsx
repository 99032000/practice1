type LayoutProps = {
  children: React.ReactNode;
  props?: Array<string>;
};
import SideBar from "./sideBar";
import BottomBar from "./bottomBar";
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-end md:flex-row md:justify-start overflow-hidden">
      <div className="flex-none z-10 hidden md:block">
        <SideBar />
      </div>
      <div className=" w-full">{children}</div>
      <div className="md:hidden w-full">
        <BottomBar />
      </div>
    </div>
  );
}
