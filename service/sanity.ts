import { createClient } from "next-sanity";

export const sanityClient = createClient({
  apiVersion: "1",
  dataset: "production",
  projectId: "uhq8lam1",
  useCdn: true,
  token:
    "skuPlKKEMCNkxt2R0L8aCnybj1XIVQWTzbCs3zZ0z1jJ2koOOvnc0FlHZwTmt3rsh5ZTCKSVvMy1nueSnYxOSdHHpqqK5PeAVhSos2OOijem5IoUvxhxOCrQ2eRaLt73PDtxmdJQ2q3Qd2qEv71W5sn2CQReIaijNbgdVZ8AdNwMWFIpzRAF",
});
