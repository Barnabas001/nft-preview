import nftImage from "./assets/image-equilibrium.jpg";
import iconView from "./assets/icon-view.svg";
import iconEth from "./assets/icon-ethereum.svg";
import clockIcon from "./assets/icon-clock.svg";
import imageAvatar from "./assets/image-avatar.png";

type NftCardProps = {
  image: string;
  title: string;
  description: string;
  price: number;
  daysLeft: number;
  creatorName: string;
  creatoAvatar: string;
};

export default function App() {
  return (
    <div className="bg-blue-950 flex justify-center screen h-screen items-center">
      <NftCard
        image={nftImage}
        title="Equilibrium #3429"
        description="Our Equilibrium collection promotes balance and calm."
        price={0.41}
        daysLeft={3}
        creatorName="Jules Wyvern"
        creatoAvatar={imageAvatar}
      />
    </div>
  );
}

function NftCard({
  image,
  title,
  description,
  price,
  daysLeft,
  creatorName,
  creatoAvatar,
}: NftCardProps) {
  return (
    <div className="font-outfit bg-blue-900 rounded-2xl p-6 max-w-sm w-full">
      <div className="relative group rounded-xl overflow-hidden mb-4 cursor-pointer">
        <img src={image} className="w-full rounded-xl" />
        <div className="absolute inset-0 bg-cyan-400/50 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center">
          <img src={iconView} alt="view icon" />
        </div>
      </div>
      <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>

      <div className="flex justify-between border-b border-gray-700 py-3">
        <div className="flex items-center gap-2">
          <img src={iconEth} className="h-4 w-4 inline" />
          <p className="text-cyan-400">{price} ETH</p>
        </div>

        <div className="flex items-center gap-2">
          <img src={clockIcon} />
          <p>{daysLeft} days left</p>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <img
          src={creatoAvatar}
          className="h-8 w-8 rounded-full ring-1 ring-white/20"
        />
        <p className="text-sm text-gray-400">
          <span className="text-gray-500">Creation of</span> {creatorName}
        </p>
      </div>
    </div>
  );
}
