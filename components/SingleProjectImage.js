import Image from "next/image";

function SingleProjectImage({singleProject}) {
  return (
    <div className="pics grid auto-cols-fr lg:grid-flow-col gap-8 mt-6">
    {singleProject.detailImage.map((detailUrl) => {
      return (
        <>
          <div key={detailUrl}>
            <Image
              // layout="responsive"
              // objectFit="contain"
              width={1200}
              height={1200}
              alt={singleProject.name}
              src={detailUrl}
            />
          </div>
        </>
      );
    })}
  </div>
  )
}

export default SingleProjectImage