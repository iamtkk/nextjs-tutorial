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
  await new Promise((resolve) => setTimeout(resolve, 1500));
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
      {data.map(({ id, name }) => {
        return (
          <Link className="hover:text-blue-500" key={id} href={`/tours/${id}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </section>
  );
};
export default ToursPage;
