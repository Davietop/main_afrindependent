import { PublicationSearch, } from "@/components/publication-dialog"
import { IBM_Plex_Sans } from "next/font/google";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function Page() {
  return (
    <div className={`${ibmPlexSans.className} flex  items-center justify-center`}>
      <PublicationSearch />
    </div>
  )
}
