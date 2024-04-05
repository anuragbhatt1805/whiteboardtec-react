import { useEffect } from "react"
import { PageBanner, BannerPropType } from "../../components/banner";
import Newsletter from "../../components/newsletter/Newsletter";
import Estimate from "../../components/estimation/Estimate";

const banner : BannerPropType = {
  header: "Connection Design",
  subheader: "and PE/SE Stamping",
  image: "/src/assets/image/banner-image/pese-banner.jpg"
}

const headSection:string[] = [
  "From the simplest to the most complex connection configurations, our experienced team can interpret and achieve detailed drawings that are accurate and in compliance with the AISC Standards at all times. Our scope of services span across Welded, Bolted, Standard, and Non–Standard Shear Connections to Braces and Trusses and everything in between. Complexities motivate us and we take them head-on!",
  "We’re also the “A” team when it comes to dealing with steel connections that require heavy customizations. Fabricators and Erectors have turned to us to help them navigate through the intricate connection design challenges across a range of industries and projects."
]

function PESEStampig() {
  useEffect(() => {
    document.title = "Connection Design And PE/SE Stamping - Whiteboard Tech"
  })

  return (
    <>
      <PageBanner {...banner} />
      <div className="m-28 my-0 ">
        <section className="rounded-3xl mt-3 border-4 p-2 grid grid-cols-[60%_40%] gap-3 shadow-xl drop-shadow-xl">
          <div className="m-4 leading-loose text-gray-700">
          <div className="text-2xl font-bold my-2 text-[#6abd45]">
          Connection Solutions
            </div>
            {headSection?.map((desc, index) => {
              return (
                <p key={index} className="text-justify text-sm leading-relaxed">
                  {desc}
                </p>
              );
            })}
            <div className="text-lg font-semibold my-2 text-Black">
            Have a complex design project that needs our review? Get in touch with us for a free consultation today
            </div>
          </div>
          <Estimate head="Get your Connection Design and PE/SE Stamping Estimates done for FREE. Yes. You heard us right!" />
        </section>
      </div>

      <div className="bg-gray-100 shadow-lg drop-shadow-lg mb-3">
        <div className="mx-28 pt-3 mt-10">
          <section className="mt-3p-2 grid grid-cols-[65%_35%] gap-3">
            <div className="flex flex-wrap flex-col justify-center">
              <div className="text-[#6abd45] text-2xl font-semibold">
              PE/SE Stamping
              </div>
              <div className="text-sm text-justify my-2 mr-10">
              <p className="my-2">Through a network of Professional Engineers we have the capability of providing full-spectrum PE/SE Stamping services to Fabricators and Erectors in the U.S & Canada.</p>
              <p className="my-2">Our partners are licensed to practice across all 50 states in the U.S and can certify your calculations with paramount accuracy. We undertake PE/SE reviews for all your project documentation and engineering documents.</p>
              <p className="my-2 text-base"><strong>Need your document stamped? Submit your documents on our Project Portal right away</strong></p>
              </div>
            </div>
            <div className="flex flex-wrap item-center justify-center m-5">
              <img src="/src/assets/image/insite-images/connection-design.png" alt="Equal Opportunity"/>
            </div>
          </section>
        </div>
      </div>

      <Newsletter />
    </>
  )
}

export default PESEStampig