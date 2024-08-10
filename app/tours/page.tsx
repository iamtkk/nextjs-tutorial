import test from "node:test";

const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
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
        return <h2 key={id}>{name}</h2>;
      })}
    </section>
  );
};
export default ToursPage;
