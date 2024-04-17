/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function ListingItem({ listing }) {
  return (
    <div className=" bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[300px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0]}
          alt={listing.name}
          className="w-full h-[320px] sm:h-[220px] object-cover rounded-lg hover:scale-105 transition duration-200 ease-out"
        />
        <div className="p-3 w-full flex flex-col gap-2">
          <p className="font-semibold text-lg text-slate-700 truncate ">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className=" h-4 w-4 text-green-700" />
            <p className=" text-sm text-gray-600 truncate ">
              {listing.address}
            </p>
          </div>
          <p className=" text-sm text-gray-600 line-clamp-2 ">
            {listing.description}
          </p>
          <p className="font-semibold text-slate-600 mt-2 text-lg">
            $
            {listing.offer
              ? listing.discountedPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className=" flex gap-4 text-slate-700">
            <div>
              <p className="text-xs font-bold text-gray-600">
                {listing.bedrooms > 1 && `${listing.bedrooms} Beds`}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-600">
                {listing.bathrooms > 1 && `${listing.bathrooms} bath`}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
