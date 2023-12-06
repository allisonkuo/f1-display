import React from 'react';
import ResultItemVertical from './ResultItemVertical';

type Props = {
  raceId: string;
};

const getQualifyingResults = async (raceId: string) => {
  const res = await fetch(`http://localhost:3000/api/qualifying/${raceId}`);
  return res.json();
};

const QualifyingResults = async ({
  raceId,
}: Props): Promise<React.ReactNode> => {
  const res = getQualifyingResults(raceId);
  const pole = await Promise.resolve(res);

  const isAvailable = pole.Abbreviation != undefined;

  return (
    <ResultItemVertical
      position='Pole'
      driverName={isAvailable ? pole.Abbreviation : 'TBD'}
      imagePath='/images/drivers/lando-norris-transparent.png'
      isAvailable={isAvailable}
    />
  );
};

export default QualifyingResults;
