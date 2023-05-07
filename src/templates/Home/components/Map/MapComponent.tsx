/* eslint-disable */

import styles from './index.module.scss';

import type { FC } from 'react';
import { memo, useEffect, useRef, useState } from 'react';

import type { CompanyMap } from '@/lib/graphql/types';
import { loadMapApi } from '@/utils/GoogleMapsUtils';
import google from 'google';

interface MapComponentProps {
  companies: CompanyMap[];
  onSelectCompany: (company: CompanyMap) => void;
}

const defaultZoomLevel = 6;

const getIconAttribute = (iconColor: string) => {
  return {
    path: 'M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z',
    scale: 0.8,
    fillColor: iconColor,
    fillOpacity: 1,
    strokeColor: iconColor,
  };
};

export const MapComponent: FC<MapComponentProps> = memo(
  ({ companies, onSelectCompany }) => {
    const mapNodeRef = useRef<HTMLDivElement>(null);

    const [scriptLoaded, setScriptLoaded] = useState(false);
    useEffect(() => {
      const googleMapScript = loadMapApi();
      const onScriptLoaded = () => setScriptLoaded(true);
      googleMapScript!.addEventListener('load', onScriptLoaded);

      // on component unmount
      return () => {
        googleMapScript!.removeEventListener('load', onScriptLoaded);
      };
    }, [scriptLoaded]);

    if (scriptLoaded && mapNodeRef.current) {
      // eslint-disable-next-line
      const mapCenter = new google.maps.LatLng(56.2639, 9.5018);
      const gMap = new google.maps.Map(mapNodeRef.current, {
        zoom: defaultZoomLevel,
        center: mapCenter,
        zoomControl: true,
      });

      const isValidCompany = (company: CompanyMap): boolean =>
        !!company.latitude && !!company.longitude;

      const addMarker = (company: CompanyMap): void => {
        const location = new google.maps.LatLng(
          company.latitude!,
          company.longitude!
        );
        const marker = new google.maps.Marker({
          position: location,
          map: gMap,
          icon: getIconAttribute('#eb2c33'),
        });
        // make marker clickable and get id to display details
        marker.addListener('click', () => onSelectCompany(company));
      };

      companies.filter(isValidCompany).forEach(addMarker);
    }

    return (
      <div className={styles["map-container"]}>
        <div className={styles["map"]} ref={mapNodeRef}></div>
      </div>
    );
  }
);
MapComponent.displayName = 'MapComponent';
