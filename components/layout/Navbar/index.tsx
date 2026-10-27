import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-60 w-full">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
}
