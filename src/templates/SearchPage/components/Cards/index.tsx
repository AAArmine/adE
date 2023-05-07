import type { FC } from 'react';
import React, { useState } from 'react';

// import Carousel from 'react-elastic-carousel';
import secondarySparePart1 from '@/assets/images/spare-part-1.jpg';
import secondarySparePart2 from '@/assets/images/spare-part-2.jpg';
// import mainSparePart from '@/assets/images/spare-part-main.jpg';
import { MainButton } from '@/components/custom/buttons/MainButton';
import { Pagination } from '@/components/custom/Pagination';

import styles from './index.module.scss';

interface SparePartItem {
  id: number;
  // mainImage: any;
  images: any[];
  title: string;
  description?: string;
  price?: number;
}
type SparePartsData = SparePartItem[];

export const Cards: FC = () => {
  const sparePartData: SparePartsData = [
    {
      id: 1,
      // mainImage: mainSparePart,
      images: [
        secondarySparePart1,
        secondarySparePart2,
        secondarySparePart1,
        secondarySparePart2,
        secondarySparePart1,
      ],
      title: 'Name of the item lorem ipsum Car Parts and Accessories',
      description:
        'You can do it all with parts and accessories from us Unlike some on-line aftermarket vendors that have repair parts but can’t help',
      price: 150,
    },
    {
      id: 2,
      // mainImage: mainSparePart,
      images: [
        secondarySparePart1,
        secondarySparePart2,
        secondarySparePart1,
        secondarySparePart2,
        secondarySparePart1,
      ],
      title: 'Name of the item lorem ipsum Car Parts and Accessories2',
      description:
        '2You can do it all with parts and accessories from us Unlike some on-line aftermarket vendors that have repair parts but can’t help',
      price: 250,
    },
    {
      id: 3,
      // mainImage: mainSparePart,
      images: [secondarySparePart1],
      title: '3Name of the item lorem ipsum Car Parts and Accessories',
      description:
        '3You can do it all with parts and accessories from us Unlike some on-line aftermarket vendors that have repair parts but can’t help',
      price: 350,
    },
    {
      id: 4,
      // mainImage: mainSparePart,
      images: [secondarySparePart1],
      title: '4Name of the item lorem ipsum Car Parts and Accessories',
      description:
        '4You can do it all with parts and accessories from us Unlike some on-line aftermarket vendors that have repair parts but can’t help',
      price: 350,
    },
    {
      id: 5,
      // mainImage: mainSparePart,
      images: [secondarySparePart1],
      title: '5Name of the item lorem ipsum Car Parts and Accessories',
      description:
        '5You can do it all with parts and accessories from us Unlike some on-line aftermarket vendors that have repair parts but can’t help',
      price: 550,
    },
    {
      id: 6,
      // mainImage: mainSparePart,
      images: [secondarySparePart1],
      title: '6Name of the item lorem ipsum Car Parts and Accessories',
      description:
        '6You can do it all with parts and accessories from us Unlike some on-line aftermarket vendors that have repair parts but can’t help',
      price: 650,
    },
    {
      id: 7,
      // mainImage: mainSparePart,
      images: [secondarySparePart1],
      title: '7Name of the item lorem ipsum Car Parts and Accessories',
      description:
        '7You can do it all with parts and accessories from us Unlike some on-line aftermarket vendors that have repair parts but can’t help',
      price: 750,
    },
    {
      id: 8,
      // mainImage: mainSparePart,
      images: [secondarySparePart1],
      title: '8Name of the item lorem ipsum Car Parts and Accessories',
      description:
        '8You can do it all with parts and accessories from us Unlike some on-line aftermarket vendors that have repair parts but can’t help',
      price: 850,
    },
    {
      id: 9,
      // mainImage: mainSparePart,
      images: [secondarySparePart1],
      title: '9Name of the item lorem ipsum Car Parts and Accessories',
      description:
        '9You can do it all with parts and accessories from us Unlike some on-line aftermarket vendors that have repair parts but can’t help',
      price: 950,
    },
    {
      id: 10,
      // mainImage: mainSparePart,
      images: [secondarySparePart1],
      title: '10Name of the item lorem ipsum Car Parts and Accessories',
      description:
        '10You can do it all with parts and accessories from us Unlike some on-line aftermarket vendors that have repair parts but can’t help',
      price: 1050,
    },
    {
      id: 11,
      // mainImage: mainSparePart,
      images: [secondarySparePart1],
      title: '11Name of the item lorem ipsum Car Parts and Accessories',
      description:
        '11You can do it all with parts and accessories from us Unlike some on-line aftermarket vendors that have repair parts but can’t help',
      price: 1150,
    },
  ];
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [partsPerPage] = useState(2);
  const indexOfLastPart = currentPage * partsPerPage;
  const indexOfFirstPart = indexOfLastPart - partsPerPage;
  const currentParts = sparePartData.slice(indexOfFirstPart, indexOfLastPart);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section className={styles['parts-wrapper']}>
      <div className={styles['search-cards-container']}>
        {currentParts.map((item) => (
          <div className={styles['cards-item']} key={item.id}>
            <div className={styles['cards-item-images']}>
              <div className={styles['main-img']}>
                <img src={item.images[0].src} alt="spare part of a car" />
              </div>
              <div className={styles.images}>
                {/* <Carousel isRTL={false} itemsToShow={1}>
                  {item.images?.slice(1).map((img) => (
                    <div key={img} className={styles['img-item']}>
                      <img src={img.src} alt="spare part of a car" />
                    </div>
                  ))}
                </Carousel> */}
              </div>
            </div>
            <div className={styles['cards-item-info']}>
              <h3>{item.title}</h3>
              <div className={styles.content}>
                <p>{item.description}</p>
              </div>
              <div className={styles.request}>
                <div className={styles.price}>${item.price}</div>
                <div>
                  <MainButton text="Send Request" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        partsPerPage={partsPerPage}
        totalParts={sparePartData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </section>
  );
};
