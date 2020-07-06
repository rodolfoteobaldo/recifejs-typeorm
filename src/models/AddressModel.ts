import { Type } from 'recife';

@Type()
class AddressModel {
  street: string;
  city: string;
  state: string;
  zipCode: string;

  constructor(street: string, city: string, state: string, zipCode: string) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
  }
}

export default AddressModel;
