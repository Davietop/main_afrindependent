import { Button } from "@/components/ui/button";

const frequencies = ["Monthly", "One Time"];

interface PropType {
  frequency: string;
  setFrequency: (frequency: string) => void;
}

const Switch = ({ frequency, setFrequency }: PropType) => {
  return (
    <div className="py-2 lg:py-[18px] px-2 lg:px-6 lg:h-[89px] rounded-[60px] bg-primary flex items-center justify-center gap-2 w-fit">
      {frequencies.map((item) => {
        return (
          <Button
            type="button"
            key={item}
            onClick={() => setFrequency(item)}
            className={`h-[52px] text-base lg:w-[171px] rounded-[60px] max-lg:px-4 ${
              frequency === item
                ? "bg-secondary hover:bg-secondary text-white"
                : "bg-transparent text-secondary hover:bg-primary"
            }`}
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
};

export default Switch;
