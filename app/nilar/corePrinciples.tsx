import { GiLaurelCrown } from 'react-icons/gi';

function CorePrinciples() {
  return (
    <div className="mt-10  bg-white border-l-4 border-yellow-500 p-6 rounded-xl shadow-md text-left max-w-6xl mx-auto">
    <div className="flex items-center mb-4">
      <GiLaurelCrown className="text-yellow-500 text-3xl mr-3" />
      <h4 className="text-xl font-semibold">The Nilar’s Core Principles</h4>
    </div>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      <li><strong>100% gold-backed:</strong> every unit is rooted in tangible value</li>
      <li><strong>Decentralized issuance:</strong> no central bank monopoly</li>
      <li><strong>Immune to inflation manipulation:</strong> no printing games</li>
      <li><strong>Tied to natural-moral law:</strong> value based on ethics, not fiat</li>
    </ul>
  </div>
  );
}

export default CorePrinciples;
