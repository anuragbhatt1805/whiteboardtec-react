import { useEffect } from "react"
import { PageBanner, BannerPropType } from "../../components/banner";
import Newsletter from "../../components/newsletter/Newsletter";
import Estimate from "../../components/estimation/Estimate";

const banner : BannerPropType = {
  header: "Architectural",
  subheader: "BIM services",
  image: "/src/assets/image/banner-image/bim-banner.jpg"
}

const headSection:string[] = [
  "As one of the early adopters of the Building Information Modeling (BIM) system we understand how an elaborate 3D architectural design can set a conceptual project to life. As a matter of fact, our virtual models are so detailed that you can actually assess the feasibility and performance of a design even before the project execution. Putting to work the most up to date BIM tools combined with a design-thinking perspective, we generate stunning visual prototypes that count!",
  "As BIM continues to revolutionise the construction industry, we continue to innovate the construction ecosystem with visuals that are enriched with technical clarity. Is it possible to validate the minuscule details with enhanced visualisations? YES, it is. And our portfolio speaks for us."
]

const BIMDetailing:string[] = [
  "3D, 4D & 5D Architectural Modeling & Design",
  "3D Modeling",
  "Shop Drawings / BIM Construction Plan",
  "3Clash Detection",
  "Renders and other associated Visuals",
  "Cost Estimation Services",
]

function ArchitecturalBIM() {
  useEffect(() => {
    document.title = "Architectural BIM Services - Whiteboard Tech";
  })

  return (
    <>
      <PageBanner {...banner} />
      <div className="m-28 my-0 ">
        <section className="rounded-3xl mt-3 border-4 p-2 grid grid-cols-[60%_40%] gap-3 shadow-xl drop-shadow-xl">
          <div className="m-4 leading-loose text-gray-700">
            {headSection?.map((desc, index) => {
              return (
                <p key={index} className="text-justify text-sm leading-relaxed">
                  {desc}
                </p>
              );
            })}
            <div className="text-lg font-semibold my-2 text-Black">
            Collaborate seamlessly with all stakeholders at every touch point, mitigate risks and impact overall revenues.
            </div>
          </div>
          <Estimate head="Get your Architectural BIM Estimates done for FREE. Yes. You heard us right!" />
        </section>
      </div>

      <div className="bg-gray-100">
        <div className="mx-28 pt-3 my-10 pb-7">
          <div className="text-2xl font-semibold my-2 text-[#6abd45] mt-5">
          Our BIM Architectural Service Offerings
          </div>
          <section className="mt-3 p-2 grid grid-cols-1 md:gap-x-10 md:grid-cols-2">
            {BIMDetailing.map((detail, index) => {
              return (
                <div
                  key={index}
                  className="py-1 md:py-2 flex flex-wrap flex-row items-center"
                >
                  <svg
                    className="h-4 w-4 text-[#6abd45] inline-flex"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path
                      d="M18 15l-6-6l-6 6h12"
                      transform="rotate(90 12 12)"
                    />
                  </svg>
                  <p className="text-sm inline-flex">{detail}</p>
                </div>
              );
            })}
          </section>
        </div>
      </div>

      <Newsletter />
    </>
  )
}

export default ArchitecturalBIM