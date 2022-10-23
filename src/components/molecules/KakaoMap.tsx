import { forwardRef, useEffect, useState } from 'react';
import {
  CustomOverlayMap,
  Map,
  MapMarker,
  MarkerClusterer,
  ZoomControl,
} from 'react-kakao-maps-sdk';

import PlaceInfoBox from '@molecules/PlaceInfoBox';
import { Address } from '@type/address';

import ControlPosition = kakao.maps.ControlPosition;

interface KakaoMapProps {
  selectedPlace: Address | null;

  setSelectedPlace: (place: Address | null) => void;
  markers: Address[] | null;
}

const KakaoMap = forwardRef(
  (
    {
      selectedPlace,
      setSelectedPlace,

      markers,
    }: KakaoMapProps,
    ref,
  ) => {
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
      if (map && bounds && markers) {
        for (let i = 0; i < markers.length; i++) {
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(markers[i].y, markers[i].x));
        }
        map.setBounds(bounds);
      }
    }, [markers]);
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
          height: 'calc(100vh - 80px)',
        }}
        level={3}
        // @ts-ignore
        onCreate={setMap}
        // @ts-ignore
        ref={ref}
      >
        <ZoomControl position={ControlPosition.BOTTOMRIGHT} />
        <MarkerClusterer
          averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
          minLevel={7} // 클러스터 할 최소 지도 레벨
        >
          {markers &&
            markers.map((marker) => (
              <>
                {selectedPlace &&
                  selectedPlace.place_name === marker.place_name && (
                    <CustomOverlayMap
                      position={{
                        lat: marker.y,
                        lng: marker.x,
                      }}
                      yAnchor={1}
                    >
                      <PlaceInfoBox
                        placeInfo={marker}
                        setInfo={setSelectedPlace}
                      />
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
  },
);
export default KakaoMap;
