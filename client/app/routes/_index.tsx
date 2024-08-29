import type { MetaFunction } from "@remix-run/node";
import AddressForm from "../components/addressForm";
import ParcelForm from "../components/parcelForm";
import OptionsForm from "../components/optionsForm";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <AddressForm addressType="sender" />
      <AddressForm addressType="return" />
      <AddressForm addressType="recipient" />
      <ParcelForm />
      <OptionsForm />
    </div>
  );
}
