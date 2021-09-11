import 'jasmine';
import * as Wkt from 'wicket';


describe("Typescript test", () => {
  it("should have Wkt and Wkt.Wkt defined", () => {
      expect(Wkt).toBeDefined()
      expect(Wkt.Wkt).toBeDefined()
  });

  it("should perform wkt.toJson()", () => {
    const wkt = new Wkt.Wkt();
    wkt.read('POINT(30 10)');
    const geoJson = wkt.toJson();
    expect(geoJson).toEqual({ coordinates: [ 30, 10 ], type: 'Point' });
  });
});