import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";


const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>Golf packages for 4 - 20 people</h2>
          <p className="py-4">
            askjhflksadjfglksfdjfglksdjlksdjflksdjafklasdjklajsdkljfadskljfsdkljfdlkjfdslkjdslkjdsfkljsfdlksdjlkasdj
            asl;jkfd;lajk;ldfsk a kdf;lkfsdsd
            askjhflksadjfglksfdjfglksdjlksdjflksdjafklasdjklajsdkljfadskljfsdkljfdlkjfdslkjdslkjdsfkljsfdlksdjlkasdj
            asl;jkfd;lajk;ldfsk a kdf;lkfsdsd
            askjhflksadjfglksfdjfglksdjlksdjflksdjafklasdjklajsdkljfadskljfsdkljfdlkjfdslkjdslkjdsfkljsfdlksdjlkasdj
            asl;jkfd;lajk;ldfsk a kdf;lkfsdsd
            askjhflksadjfglksfdjfglksdjlksdjflksdjafklasdjklajsdkljfadskljfsdkljfdlkjfdslkjdslkjdsfkljsfdlksdjlkasdj
            asl;jkfd;lajk;ldfsk a kdf;lkfsdsd
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div>
            <button className="text-3xl text-primary-dark">
              <RiCustomerService2Fill size={50} />
            </button>
            <h3 className="py-2">LEADING SERVICE</h3>
            <p className="py-1">Booking agents available 24/7</p>
          </div>
          <div>
            <button className="text-3xl text-primary-dark">
              <MdOutlineTravelExplore size={50} />
            </button>
            <h3 className="py-2">XYZ</h3>
            <p className="py-1">Lorem Ipsumsalkfjsldkajflkdsajlsdkjflsadk</p>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Scottsdale</option>
              <option>Florida</option>
              <option>Southern California</option>
              <option>Northern California</option>
              <option>South Carolina</option>
              <option>North Carolina</option>
              <option>Hawaii</option>
              <option>Colorado</option>
              <option>Michigan</option>
            </select>
          </div>
          <div className="flex flex-col my-3">
            {" "}
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            {" "}
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full my-4">Rates & Availbility</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
