import { Button } from "@/components/ui/button";

const amounts = ["20", "50", "100", "200", "300", "Custom"];

interface PropType {
  donationAmount: string;
  setDonationAmount: (donationAmount: string) => void;
}

const Amount = ({ donationAmount, setDonationAmount }: PropType) => {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-4 lg:gap-y-8 max-w-[410px]">
      {amounts.map((item) => {
        return (
          <Button
            type="button"
            key={item}
            className={`lg:w-[118px] lg:h-[53px] rounded-[60px] font-nohemi text-lg font-medium max-lg:py-1 max-lg:px-4 ${
              item === donationAmount
                ? " bg-primary text-secondary"
                : "bg-transparent border-[2px] border-[#21213B] text-[#0E102A]"
            }`}
            onClick={() => setDonationAmount(item)}
          >
            {item === "Custom" ? item : `${item}`}
          </Button>
        );
      })}
    </div>
  );
};

export default Amount;
