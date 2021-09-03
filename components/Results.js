import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
  return (
    <FlipMove className="px-4 mt-4 sm:grid md:px-6  md:grid-cols-2 lg:grid-cols-3 3xl:flex 3xl:flex-wrap justify-center   ">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default Results;
