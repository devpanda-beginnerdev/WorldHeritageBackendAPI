import Place from './place';

export const index = (req, res, next) => {
  // 世界遺産データを返す
  Place.find().lean().exec((err, places) => res.json(
    // 各データを反復
    { places: places.map(place => ({
      ...place,
    }))}
  ));
};
