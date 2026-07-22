import {
  User,
  Phone,
  Mail,
  Home,
  Briefcase,
  DollarSign,
  MessageCircle,
  Pencil,
} from "lucide-react";

const SummaryCard = ({
  answers,
  onEdit,
  onWhatsapp,
  onEmail,
}) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">

      <h2 className="text-2xl font-bold text-center text-[#0B3C5D]">
        🎉 Thank You!
      </h2>

      <p className="mt-2 text-center text-gray-500">
        Please review your information before continuing.
      </p>

      <div className="mt-8 space-y-4">

        <Info
          icon={<User size={18}/>}
          label="Full Name"
          value={answers.name}
        />

        <Info
          icon={<Phone size={18}/>}
          label="Phone Number"
          value={answers.phone}
        />

        <Info
          icon={<Mail size={18}/>}
          label="Email"
          value={answers.email}
        />

        <Info
          icon={<Home size={18}/>}
          label="Resident Status"
          value={answers.resident}
        />

        <Info
          icon={<Briefcase size={18}/>}
          label="Mortgage Purpose"
          value={answers.purpose}
        />

        <Info
          icon={<DollarSign size={18}/>}
          label="Monthly Income"
          value={answers.income}
        />

      </div>

      <button
        onClick={onEdit}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-blue-600 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
      >
        <Pencil size={18}/>
        Edit Information
      </button>

      <h3 className="mt-10 text-center text-lg font-semibold">
        How would you like to continue?
      </h3>

      <button
        onClick={onWhatsapp}
        className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700"
      >
        <MessageCircle size={20}/>
        Continue via WhatsApp
      </button>

      <button
        onClick={onEmail}
        className="mt-4 w-full rounded-xl bg-[#0B3C5D] py-4 font-semibold text-white transition hover:bg-[#082b44]"
      >
        Continue via Email
      </button>

    </div>
  );
};

const Info = ({ icon, label, value }) => (
  <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
    <div className="flex items-center gap-3">
      {icon}
      <span className="font-medium">{label}</span>
    </div>

    <span className="text-gray-600">
      {value || "-"}
    </span>
  </div>
);

export default SummaryCard;