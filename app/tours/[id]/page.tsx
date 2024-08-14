import mapsImg from "@/images/maps.jpg";
import { Irish_Grover } from "next/font/google";
import Image from "next/image";
const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1 className="text-4xl">ID: {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        {/* <div> */}
        {/* origin image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img src="/maps.jpg" alt="maps" />
          <h2>origin image</h2>
        </div> */}
        {/* local image */}
        <div>
          <Image
            className="w-48 h-48 object-cover rounded"
            src={mapsImg}
            priority
            alt="maps"
            width={192}
            height={192}
          />
          <h2>local image</h2>
        </div>
        {/* remote image */}
        <div>
          <Image
            className="w-48 h-48 object-cover rounded"
            src={url}
            alt="tour"
            width={192}
            height={192}
          />
          <h2>remote image</h2>
        </div>
      </section>
    </div>
  );
};
export default page;
