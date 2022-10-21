import PlaceInfoBox from '@molecules/PlaceInfoBox';
import { State } from '@store/userLocationStore';
import { Address } from '@type/address';
import { useEffect, useState } from 'react';
import {
  CustomOverlayMap,
  Map,
  MapMarker,
  MarkerClusterer,
} from 'react-kakao-maps-sdk';

interface KakaoMapProps {
  search: string | null;
  selectedPlace: Address | null;
  currentLocation: State | null;
  setSelectedPlace: (place: Address | null) => void;
  markers: Address[];
  extendBounds: kakao.maps.LatLng | undefined;
}

function KakaoMap({
  selectedPlace,
  setSelectedPlace,
  currentLocation,
  markers,
  extendBounds,
}: KakaoMapProps) {
  const [map, setMap] = useState<kakao.maps.Map>();
  const [center, setCenter] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: 37.566826,
    lng: 126.9786567,
  });

  useEffect(() => {
    const bounds = new kakao.maps.LatLngBounds();
    if (map && extendBounds) {
      bounds.extend(extendBounds);
      map.setBounds(bounds);
    }
  }, [extendBounds]);
  useEffect(() => {
    if (selectedPlace) {
      setCenter({
        lat: selectedPlace.y,
        lng: selectedPlace.x,
      });
    }
  }, [selectedPlace]);

  return (
    <Map
      center={center}
      isPanto={true}
      style={{
        width: '100%',
        height: '100%',
      }}
      level={3}
      // @ts-ignore
      onCreate={setMap}
    >
      <MarkerClusterer
        averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel={10} // 클러스터 할 최소 지도 레벨
      >
        {markers &&
          markers.map((marker) => (
            <>
              {selectedPlace && selectedPlace.place_name === marker.place_name && (
                <CustomOverlayMap
                  position={{
                    lat: marker.y,
                    lng: marker.x,
                  }}
                  yAnchor={1}
                >
                  <PlaceInfoBox placeInfo={marker} setInfo={setSelectedPlace} />
                </CustomOverlayMap>
              )}
              <MapMarker
                key={`marker-${marker.place_name}-${marker.x},${marker.y}`}
                position={{ lat: marker.y, lng: marker.x }}
                onClick={() => setSelectedPlace(marker)}
              />
            </>
          ))}
      </MarkerClusterer>
    </Map>
  );
}
export default KakaoMap;
