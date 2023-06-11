import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const visitedCountry = [
  "Thailand",
  "Japan",
  "Myanmar",
  "United States of America",
  "Bhutan",
  "India",
];

const markers = [
  {
    markerOffset: -30,
    name: "Thailand",
    coordinates: [101, 165],
  },
];

export default function Map() {
  return (
    <section className="font-lato bg-white md:container md:mt-5 md:px-10 md:pt-10 md:text-center md:mx-auto border-t-3 border-t-lime-900">
      <h1 className="text-2xl font-bold md:text-6xl">Mint Go Abroad</h1>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const fill = visitedCountry.includes(geo.properties.name)
                ? "#98FB98"
                : "#EAEAEC";
              return <Geography key={geo.rsmKey} geography={geo} fill={fill} />;
            })
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <g
              fill="none"
              stroke="#FF5533"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </section>
  );
}