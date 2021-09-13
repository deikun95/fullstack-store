import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      {
        id: 1,
        name: 'Холодильники',
      },
      {
        id: 2,
        name: 'Мобильные телефоны',
      },
    ];
    this._brands = [
      {
        id: 1,
        name: 'Samsung',
      },
      {
        id: 2,
        name: 'Apple',
      },
    ];
    this._devices = [
      {
        id: 1,
        name: 'Iphone 12 pro max',
        price: 233333,
        rating: 4,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000',
      },
      {
        id: 2,
        name: 'Iphone 12 pro max',
        price: 233333,
        rating: 4,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000',
      },
      {
        id: 3,
        name: 'Iphone 12 pro max',
        price: 233333,
        rating: 4,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000',
      },
    ];
    makeAutoObservable(this);
  }

  setTypes = (types) => {
    this._types = types;
  };

  setBrands = (brands) => {
    this._brands = brands;
  };
  setDevices = (devices) => {
    this._devices = devices;
  };

  getTypes = (types) => {
    return this._types;
  };

  getBrands = (brands) => {
    return this._brands;
  };
  getDevices = (devices) => {
    return this._devices;
  };
}
