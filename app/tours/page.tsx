import Image from "next/image";
import Link from "next/link";

const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
};

const ToursPage = async () => {
  // const response = await fetch(url);
  // const data: Tour[] = await response.json();
  const data = await fetchTours();
  return (
    <section>
      <h1 className="text-3xl mb-4">Tours</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {data.map(({ id, name, image }) => {
          return (
            <Link
              className="hover:text-blue-500"
              key={id}
              href={`/tours/${id}`}
            >
              <div className="relative h-48 mb-2">
                <Image
                  className="object-cover rounded"
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <h2>{name}</h2>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default ToursPage;
