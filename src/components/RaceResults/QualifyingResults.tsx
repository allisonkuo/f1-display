import React from 'react';
import ResultItemVertical from './ResultItemVertical';

type Props = {
  raceId: string;
};

async function getQualifyingResults(raceId: string) {
  const res = await fetch(`http://localhost:3000/api/qualifying/${raceId}`);
  return res.json();
}

const QualifyingResults = async ({
  raceId,
}: Props): Promise<React.ReactNode> => {
  const res = getQualifyingResults(raceId);
  const pole = await Promise.resolve(res);

  return (
    <ResultItemVertical
      position='Pole'
      driverName={pole['Abbreviation']}
      imagePath='/images/drivers/lando-norris-transparent.png'
    />
  );
};

export default QualifyingResults;
