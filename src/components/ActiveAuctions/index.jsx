import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { products } from "../../json/index.json";

function formatNumberWithCommas(number) {
    return number.toLocaleString();
}

function ProductList() {

    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (product) => {
        const isAlreadyFav = favorites.find((item) => item.id === product.id);
        if (isAlreadyFav) {
            setFavorites(favorites.filter((item) => item.id !== product.id));
        } else {
            setFavorites([...favorites, product]);
            toast.success(`${product.title} added to favorites ❤️`);
        }
    };

    const totalAmount = favorites.reduce(
        (acc, curr) => acc + curr.currentBidPrice,
        0
    );
    return (
        <div className="bg-[#edf1f5] min-h-screen p-10 flex gap-6">
            <div className="flex-1">
                <h1 className="text-2xl font-bold text-[#1b2d5a] mb-1">
                    Active Auctions
                </h1>
                <p className="text-[#1b2d5a] mb-4">
                    Discover and bid on extraordinary items
                </p>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="bg-white w-full md:w-4xl rounded-xl overflow-hidden shadow-sm">
                        <div className="grid grid-cols-5 px-6 py-3 font-semibold text-[#1b2d5a] border-b border-gray-300">
                            <div className="col-span-2">Items</div>
                            <div>Current Bid</div>
                            <div>Time Left</div>
                            <div>Bid Now</div>
                        </div>

                        {products.map((item) => {
                            const isFav = favorites.some((f) => f.id === item.id);
                            return (
                                <div
                                    key={item.id}
                                    className="grid grid-cols-5 items-center px-6 py-4 border-b border-gray-300 hover:bg-[#f9fafc] transition text-[13px] last:border-b-0"
                                >
                                    {/* Item */}
                                    <div className="col-span-2 flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                        <div className="text-[#1b2d5a] font-medium">
                                            {item.title}
                                        </div>
                                    </div>

                                    {/* Bid */}
                                    <div className="text-[#1b2d5a] font-semibold">
                                        ${formatNumberWithCommas(item.currentBidPrice)}
                                    </div>

                                    {/* Time Left */}
                                    <div className="text-[#1b2d5a]">{item.timeLeft}</div>

                                    {/* Heart Icon */}
                                    <button className="flex justify-start" disabled={isFav}>
                                        {isFav ? (
                                            <FaHeart
                                                className="text-red-500 text-xl cursor-not-allowed disabled"
                                                onClick={() => toggleFavorite(item)}
                                            />
                                        ) : (
                                            <FaRegHeart
                                                className="text-[#1b2d5a] text-xl cursor-pointer"
                                                onClick={() => toggleFavorite(item)}
                                            />
                                        )}
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right side - Favorite Panel */}
                    <div className="w-full md:w-[300px] bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between h-fit">
                        <div className="flex flex-col items-center">
                            <h2 className="text-xl font-semibold text-[#1b2d5a] mb-4 flex items-center gap-2">
                                <FaRegHeart /> Favorite Items
                            </h2>

                            {favorites.length === 0 ? (
                                <div className="text-center text-[#1b2d5a]">
                                    <p className="font-semibold">No favorites yet</p>
                                    <p className="text-xs mt-1  max-w-[170px]">
                                        Click the heart icon on any item to add it to your favorites
                                    </p>
                                </div>
                            ) : (
                                <ul className="space-y-4">
                                    {favorites.map((item) => (
                                        <li
                                            key={item.id}
                                            className="flex items-center gap-3 border-gray-300 border-b pb-3 last:border-b-0"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-14 h-14 object-cover rounded"
                                            />
                                            <div className="text-sm text-[#1b2d5a] w-full md:w-[163px] ">
                                                <p className="font-medium line-clamp-2">{item.title}</p>
                                                <p className="text-sm mt-1">
                                                    ${formatNumberWithCommas(item.currentBidPrice)}{" "}
                                                    <span className="ml-2">Bids: {item.bidsCount}</span>
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => toggleFavorite(item)}
                                                className="cursor-pointer text-[#1b2d5a] text-lg hover:text-red-500"
                                            >
                                                &times;
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Total amount */}
                        <div className="border-gray-300 border-t pt-4 mt-4 text-[#1b2d5a] font-semibold flex justify-between text-lg">
                            <span>Total bids Amount</span>
                            <span>${formatNumberWithCommas(totalAmount)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;