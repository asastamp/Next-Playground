import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function Map() {
  return (
    <section className="font-lato bg-white md:container md:mt-5 md:px-10 md:pt-10 md:text-center md:mx-auto border-t-3 border-t-lime-900">
      <h1 className="text-2xl font-bold md:text-6xl">Mint Go Abroad</h1>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <Geography key={geo.rsmKey} geography={geo} fill="#EAEAEC" />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </section>
  );
}
