import { CheckCircle2, Mail, MessageCircle } from "lucide-react";

const SuccessScreen = ({
  onWhatsapp,
  onEmail,
}) => {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 text-center">

      <CheckCircle2
        size={70}
        className="text-green-500"
      />

      <h2 className="mt-6 text-2xl font-bold text-[#0B3C5D]">
        Thank You!
      </h2>

      <p className="mt-3 text-gray-600">
        Your mortgage inquiry is ready.
      </p>

      <p className="text-gray-500">
        Please choose your preferred contact method.
      </p>

      <button
        onClick={onWhatsapp}
        className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 py-4 font-semibold text-white hover:bg-green-700"
      >
        <MessageCircle size={20}/>
        Continue via WhatsApp
      </button>

      <button
        onClick={onEmail}
        className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-[#0B3C5D] py-4 font-semibold text-white hover:bg-[#082b44]"
      >
        <Mail size={20}/>
        Continue via Email
      </button>

    </div>
  );
};

export default SuccessScreen;