
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      {children}
    </main>
  )
}

export default Layout