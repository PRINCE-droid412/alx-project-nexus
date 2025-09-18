import Link from "next/link"
import Button from "../commons/Button"

const Header: React.FC = () => {
  return (
    <header className="h-28 flex items-center bg-[#50a2e6] px-4 md:px-16 lg:px-44 text-white shadow-md shadow-black/30">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl md:text-4xl font-semibold">Online Poll<span className="text-[#E2D609]">App</span></h2>
         <nav>
        {/* View Poll Results button */}
        <Link href="/demo">
          <Button title="View Poll Results" action={() => {}} />
        </Link>
      </nav>
      </div>
    </header>

  )
}

export default Header