import Image from "next/image";

export default function TeamCard({
  name,
  title,
  photo,
}: {
  name: string;
  title: string;
  photo: string;
}) {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-ink-900/10">
      <div className="relative mx-auto h-52 w-52 overflow-hidden rounded-full ring-4 ring-brand-50">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="208px"
          className="object-cover"
        />
      </div>
      <h3 className="mt-6 font-heading text-2xl font-bold text-ink-900">
        {name}
      </h3>
      <p className="mt-1 text-base text-ink-500">{title}</p>
    </div>
  );
}
