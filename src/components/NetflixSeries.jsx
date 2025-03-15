import seriesData from '../api/SeriesData.json';
import { SeriesCard } from './SeriesCard';

const NetflixSeries = () => {
  return (
    <ol class="grid grid-three-cols">
      {seriesData.map((currentele) => (
        <SeriesCard key={currentele.id} data={currentele} />
      ))}
    </ol>
  );
};

export default NetflixSeries;
