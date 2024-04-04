import { PageBanner } from "../../components/banner"
import { ResourcePropType } from ".";

const props: ResourcePropType = {
  banner: {
    header: "Our Stories",
    image: "/src/assets/image/banner-image/resource.jpg",
  },
  context: {
    desc: "Real-life stories of how we’ve helped our clients navigate through intricate design challenges. How we’ve impacted their businesses. Stories that continue to test our abilities, drive sustainable outcomes and push us towards newer frontiers of innovation. We are Whiteboardtec and we open our journey’s milestones to you."
  },
  posts: {
    title: "Case Studies",
    desc: "Stories of our successes"
  }
}

function CaseStudies() {
    return (
      <>
        <PageBanner {...props.banner} />
        <div className="w-ful bg-gray-100">
        <section className="m-28 mt-0 mb-10 p-2 grid grid-cols-[70%_30%] gap-4">
          <div>
            <div className="text-3xl font-bold text-black mb-4">{props.context?.head}</div>
            <div className="text-lg leading-loose text-gray-900">{props.context?.desc}</div>
          </div>

          <div>
            <div className="bg-[#6abd45] rounded-md h-fit m-3 p-4 -mt-1 text-white">
            <div className="text-xl font-bold  mb-4 ">{props.posts?.title}</div>
            <div className="text-sm">{props.posts?.desc}</div>
            </div>
          </div>
        </section>
        </div>
      </>
    )
  }

export default CaseStudies