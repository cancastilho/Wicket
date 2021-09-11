import * as Wkt from '../wicket';

const wkt = new Wkt.Wkt();
wkt.read('POINT(30 10)');
const geoJson = wkt.toJson();
