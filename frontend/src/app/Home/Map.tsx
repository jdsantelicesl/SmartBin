"use client";

import { useState, useEffect, useRef } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Loader } from "@googlemaps/js-api-loader";
import Image from "next/image";

const mapContainerStyle = {
  width: "85%",
  height: "500px",
  borderRadius: "30px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

export default function MapComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const autocompleteService =
    useRef<google.maps.places.AutocompleteService | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchLocation, setSearchLocation] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [currentPosition, setCurrentPosition] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [smartBins, setSmartBins] = useState<google.maps.LatLngLiteral[]>([]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"],
  });

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
      version: "weekly",
      libraries: ["places"],
    });

    loader.load().then(() => {
      autocompleteService.current =
        new google.maps.places.AutocompleteService();
    });
  }, []);

  useEffect(() => {
    if (searchQuery && autocompleteService.current) {
      autocompleteService.current.getPlacePredictions(
        { input: searchQuery },
        (predictions, status) => {
          if (
            status === google.maps.places.PlacesServiceStatus.OK &&
            predictions
          ) {
            setSuggestions(predictions);
          } else {
            setSuggestions([]);
          }
        }
      );
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleSuggestionClick = (
    suggestion: google.maps.places.AutocompletePrediction
  ) => {
    setSearchQuery(suggestion.description);
    setSuggestions([]);
    performSearch(suggestion.description);
  };

  const performSearch = (query: string) => {
    if (query.trim() === "") return;

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: query }, (results, status) => {
      if (status === "OK" && results && results[0]) {
        const { lat, lng } = results[0].geometry.location;
        setSearchLocation({ lat: lat(), lng: lng() });
        setSuggestions([]);
      } else {
        console.error(
          "Geocode was not successful for the following reason: " + status
        );
      }
    });
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    performSearch(searchQuery);
    setSuggestions([]);
  };

  const mapOptions = {
    // styles: [{ stylers: [{ invert_lightness: true }] }],
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCurrentPosition(pos);
          setSearchLocation(pos);
        },
        () => {
          console.error("Error: The Geolocation service failed.");
        }
      );
    } else {
      console.error("Error: Your browser doesn't support geolocation.");
    }
  }, []);

  // Mock data for SmartBins nearby
  const mockSmartBins = [
    { lat: 37.7845, lng: -122.4095 },
    { lat: 37.7852, lng: -122.4087 },
    { lat: 37.7838, lng: -122.4103 },
    { lat: 37.7861, lng: -122.4098 },
    { lat: 37.7833, lng: -122.4089 },
    { lat: 37.7857, lng: -122.4112 },
    { lat: 37.7841, lng: -122.4076 },
    { lat: 37.7869, lng: -122.4091 },
    { lat: 37.7829, lng: -122.4108 },
    { lat: 37.7848, lng: -122.4121 },
  ];

  useEffect(() => {
    // Use mock data for testing
    setSmartBins(mockSmartBins);

    // Commented out fetch request for future use
    /*
    const fetchSmartBins = async () => {
      try {
        const response = await fetch('/api/smartbins');
        const data = await response.json();
        setSmartBins(data);
      } catch (error) {
        console.error("Error fetching SmartBin locations:", error);
      }
    };

    fetchSmartBins();
    */
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  const currentPositionIcon = {
    url: "/assets/Navigation.png",
    scaledSize: new google.maps.Size(32, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(16, 16),
  };

  const smartBinIcon = {
    url: "/assets/SmartBin.png",
    scaledSize: new google.maps.Size(32, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(16, 16),
  };

  return (
    <div className="">
      <form
        onSubmit={handleSearch}
        className="flex pb-5 justify-center items-center"
      >
        <div className="w-[85%] relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Image
              src="/assets/Location.png"
              alt="Location icon"
              width={20}
              height={20}
            />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Location..."
            className="border p-3 pl-12 pr-10 text-black w-full rounded-full placeholder:font-semibold placeholder:text-green-700 shadow-md"
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <Image
              src="/assets/Search.png"
              alt="Search icon"
              width={20}
              height={20}
            />
          </button>
          {suggestions.length > 0 && (
            <ul className="absolute z-10 bg-white border border-gray-300 w-[100%] mt-1 text-black rounded-lg">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.place_id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {suggestion.description}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
      <div className="flex justify-center overflow-hidden">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={searchLocation || currentPosition || center}
          zoom={16}
          options={mapOptions}
        >
          {currentPosition && (
            <Marker position={currentPosition} icon={currentPositionIcon} />
          )}
          {searchLocation && searchLocation !== currentPosition && (
            <Marker position={searchLocation} />
          )}
          {smartBins.map((bin, index) => (
            <Marker
              key={index}
              position={bin}
              icon={smartBinIcon}
              title="SmartBin"
            />
          ))}
        </GoogleMap>
      </div>
    </div>
  );
}
