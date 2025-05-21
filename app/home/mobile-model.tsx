import ModelRotate from "./model-rotate";

const MobileModel = () => {
  return (
    <div className="flex lg:hidden flex-col gap-20">
      <div>
        <div>
          <ModelRotate active="enterprise" />
        </div>
        <div className="space-y-2 mt-20">
          <h3 className="font-medium text-[28px] font-nohemi">
            Free Enterprise
          </h3>
          <p className="text-lg leading-[28px] font-inter_tight">
            Afrindependent advocates for a free enterprise system because it is
            morally superior to the statist/socialist approach adopted in the
            postcolonial era, which is characterized by centralized systems of
            bureaucracy, coercion, and repression.
          </p>
          <p className="text-lg leading-[28px] font-inter_tight">
            Since the statist approach was clearly proven repressive and
            ruinous, African economies would benefit tremendously by
            transitioning to a free-enterprise system through AfCFTA to achieve
            integrated, stable, and thriving African economies.
          </p>
        </div>
      </div>
      <div>
        <div>
          <ModelRotate active="trade" />
        </div>
        <div className="space-y-2 mt-20">
          <h3 className="font-medium text-[28px] font-nohemi">Free Trade</h3>
          <p className="text-lg leading-[28px] font-inter_tight">
            The AfCFTA is a remarkable achievement and a crucial step forward in
            the right direction. Free enterprise and free trade have long been
            integral components of Africa’s economic heritage, dating back
            centuries before the colonial era. Free enterprise and free trade
            are indigenous, not foreign, to Africa.
          </p>
          <p className="text-lg leading-[28px] font-inter_tight">
            Afrindependent calls on African leaders to dismantle the numerous
            artificial barriers that suppress savings, investment, free
            enterprise, and free trade within and among African societies. This
            action is vital in paving the way to integrated, stable, and
            thriving African economies while fostering genuine peace,
            fraternity, and collaboration among African people.
          </p>
        </div>
      </div>
      <div>
        <div>
          <ModelRotate active="monetary" />
        </div>
        <div className="space-y-2 mt-20">
          <h3 className="font-medium text-[28px] font-nohemi">
            Sound Monetary System (i.e. the nilar)
          </h3>
          <p className="text-lg leading-[28px] font-inter_tight">
            The nilar, a gold currency system designed for African societies, is
            the backbone of the economic model Africonomics presents for
            achieving integrated, stable, and prosperous African economies.
          </p>
          <p className="text-lg leading-[28px] font-inter_tight">
            The monetary history of postcolonial Africa can be summed up in
            three words: chaos and ruination. The era of central bank-managed
            fiat currency systems under the fiat dollar standard has caused much
            turmoil and poverty in Africa. Instead of pinning hopes on a
            speculated BRICS currency, African economies should transition from
            unjust and ruinous fiat currency systems to the nilar, an entirely
            sound monetary system.
          </p>
          <p className="text-lg leading-[28px] font-inter_tight">
            This monetary shift is essential, as the nilar provides a
            much-needed stable and trustworthy single currency to achieve
            integrated, stable, and prosperous African economies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileModel;
